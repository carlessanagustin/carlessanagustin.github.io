---
layout: post
title: Secure networking in Azure
featured: true
categories: [azure]
tags: [azure, networking, security, cloud]
#image: '/images/posts/2020/04/2020-04-12-key-vault.png'
date: '2020-04-12 18:22:12 +0000'
---

# Secure networking in Azure

## Description

We must secure our resources with networking rules, but how to propertly secure a Storage Account or Key Vault network for Azure DevOps Pipelines integration?

When allowing access from private endpoint and selected networks in both resources we found 3 access restrictions:

1. Virtual networks
2. Firewall with IPv4 address or CIDR
3. Trusted Microsoft services

We'll explain these configurations in chapter "Networking options"


## Resources with networking options

* Data Lake
* Event Hub
* Service Bus
* Storage Account

![storage account](/images/posts/2020/04/2020-04-12-storage-account.png)

* Key Vault

![key vault](/images/posts/2020/04/2020-04-12-key-vault.png)

## Networking options

### 1. Virtual networks

* For more details please follow these [instructions](https://docs.microsoft.com/en-us/azure/key-vault/key-vault-network-security).
* Used Azure CLI command reference: [az keyvault network-rule
](https://docs.microsoft.com/en-us/cli/azure/keyvault/network-rule?view=azure-cli-latest)

### 2. Firewall with IPv4 address or CIDR

* We can manually add IPv4 address or CIDR. Or automatically with the following script:

```python
#!/usr/bin/env python3

import requests
import json
import subprocess
import os

ACTION = "add" # add | remove

URL = os.environ["AZURE_URL"]
SUBSCRIPTION_ID = os.environ["AZURE_SUBSCRIPTION_ID"]
RG_NAME = os.environ["AZURE_RG_NAME"]
VAULT_NAME = os.environ["AZURE_VAULT_NAME"]
PATTERN = os.environ["AZURE_PATTERN"]

data = json.loads(requests.get(URL).text)

for value in data["values"]:
    if value["name"] == PATTERN:
        ip_addresses = value["properties"]["addressPrefixes"]

for ip in ip_addresses:
    subprocess.run(["az", "keyvault", "network-rule", ACTION, "--name", VAULT_NAME, "--resource-group", RG_NAME, "--subscription", SUBSCRIPTION_ID, "--ip-address", ip])
```

* You can add or remove CIDRs by changing the variable `ACTION = "add" # add | remove`
* Variables needed for the script:

```shell
#!/usr/bin/env bash

export AZURE_SUBSCRIPTION_ID=  # Azure Subscription ID
export AZURE_RG_NAME=  # Azure Resource Group name
export AZURE_VAULT_NAME=  # Azure Key Vault name

# Using this template: https://www.microsoft.com/en-us/download/details.aspx?id=56519
export AZURE_PATTERN="AzureCloud.westeurope"
export AZURE_URL="https://download.microsoft.com/download/7/1/D/71D86715-5596-4529-9B13-DA13A5DE5B63/ServiceTags_Public_20200316.json"
```

* Used Azure CLI command reference: [az keyvault network-rule
](https://docs.microsoft.com/en-us/cli/azure/keyvault/network-rule?view=azure-cli-latest)
* But bear in mind that **there is a limit of 127 CIDRs**: `Too many items found at properties.networkAcls.ipRules: 128, maximum is 127.`

#### Azure IP whitelisting for firewalls

Azure publishes instructions and lists of public IPs of their services for IP whitelisting in firewalls:

* [Azure IP Ranges and Service Tags – Public Cloud](https://www.microsoft.com/en-us/download/confirmation.aspx?id=56519)
* [Solving Agent IP ranges](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/hosted?view=azure-devops#agent-ip-ranges)
* [Allowed address lists and network connections](https://docs.microsoft.com/en-us/azure/devops/organizations/security/allow-list-ip-url?view=azure-devops)


### 3. Trusted Microsoft services

* [Trusted services](https://docs.microsoft.com/en-us/azure/key-vault/key-vault-overview-vnet-service-endpoints#trusted-services) for Key Vaults.
* [Trusted services](https://docs.microsoft.com/en-gb/azure/storage/common/storage-network-security#exceptions) for Storage Accounts.

## Example: Integrating Key Vault with Azure DevOps

![devops integration](/images/posts/2020/04/2020-04-12-az-devops-kv-sa.png)

One can setup Azure DevOps to access Key Vault directly but then we loose control over KV access points. Azure Devops Variable Groups can get Key Vault values, but how can we tell KV to accept petitions from Azure DevOps in a secure way? It is impossible because Azure does not publish Azure DevOps public IPs to add in the networking option "Firewall with IPv4 address or CIDR". Anyway having the public IPs there is a maximum of 127 entries.

So the solution is to build it in the pipeline as tasks for the job. Add these four steps before running your pipeline steps in a Linux agent:

| Option          | Result | KV networking | KV access | GitOps       |
|-----------------|--------|---------------|-----------|--------------|
| Variable Groups | 1      | Not secure    | YES       | NO = Only UI |
| Inside pipeline | 3      | Secure        | YES       | YES = YAML   |

### Service Principal Requirements

* Add both SP in Azure DevOps Project Service Connections for the pipelines to use it.
* 1x Writing changes in KV permissions (contributor)
* 1x Secret Permissions Get & List only in Key Vault Access Policies

![Access Policies](/images/posts/2020/04/2020-04-12-secret_permissions.png)

### How to do it?

* Visual steps:

![Agent Job priority](/images/posts/2020/04/2020-04-12-agent-job.png)

* Get Public IP address

```yaml
- displayName: 'Get Public IP address'
  bash: |
   ip=$(curl https://checkip.amazonaws.com)
   iprange=$ip"/32"
   echo "##vso[task.setvariable variable=IPRANGE;]$iprange"
   echo $iprange
```

* Add public IP to KV whitelist

```yaml
- displayName: 'Add public IP to KV whitelist'
  task: AzureCLI@1
  inputs:
    azureSubscription: 'ARM Prod'
    scriptLocation: inlineScript
    inlineScript: |
     KVNAME=recoengineuat
     KVRG=s08-uat-recoengine-ml
     KVS=d752fb9e-91b9-4ff5-bb3c-653d2c8fec6f
     
     echo "az keyvault network-rule add --name $KVNAME --resource-group $KVRG --subscription $KVS --ip-address $(IPRANGE)"
     az keyvault network-rule add --name $KVNAME --resource-group $KVRG --subscription $KVS --ip-address $(IPRANGE)
     
```

* `ARM Prod` = Contributor SP for subscription to write changes in KV
* KVNAME, KVRG & KVS Bash variables define the required KV to change.
* Read values from KV

```yaml
- displayName: 'Read values from KV'
  task: AzureKeyVault@1
  inputs:
    azureSubscription: 'app-lidl-int-lidlplus-prd-advanced-analytics SP'
    KeyVaultName: recoengineuat
```

* `app-lidl-int-lidlplus-prd-advanced-analytics SP` = Secret Permissions Get & List only in Key Vault Access Policies
* Remove public IP to KV whitelist

```yaml
- displayName: 'Remove public IP to KV whitelist'
  task: AzureCLI@1
  condition: always()
  inputs:
    azureSubscription: 'ARM Prod'
    scriptLocation: inlineScript
    inlineScript: |
     KVNAME=recoengineuat
     KVRG=s08-uat-recoengine-ml
     KVS=d752fb9e-91b9-4ff5-bb3c-653d2c8fec6f
     
     az keyvault network-rule remove --name $KVNAME --resource-group $KVRG --subscription $KVS --ip-address $(IPRANGE)
     echo "az keyvault network-rule remove --name $KVNAME --resource-group $KVRG --subscription $KVS --ip-address $(IPRANGE)"
```

* `ARM Prod` = Contributor SP for subscription to write changes in KV
* KVNAME, KVRG & KVS Bash variables define the required KV to change.

## Extra references

* Using secrets from Azure Key Vault in a pipeline (laboratory on how you can use Azure Key Vault in a pipeline): https://www.azuredevopslabs.com/labs/vstsextend/azurekeyvault/
* Deploying Secrets from Azure Pipelines: https://social.technet.microsoft.com/wiki/contents/articles/52459.azuredevops-deploying-secrets-from-azure-pipelines.aspx
* Access Azure Key Vault behind a firewall: https://docs.microsoft.com/en-us/azure/key-vault/key-vault-access-behind-firewall
* Azure DevOps Build Pipeline- use keys and secrets from Key Vault: https://blogs.aspnet4you.com/2019/09/20/azure-devops-build-pipeline-use-keys-and-secrets-from-key-vault/
* How to create a custom VSTS agent on Azure ACI with Terraform: https://cloudblogs.microsoft.com/opensource/2018/05/22/how-to-create-vsts-agent-azure-aci-terraform/

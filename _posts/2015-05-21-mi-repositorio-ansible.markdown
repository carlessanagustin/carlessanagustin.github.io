---
layout: post
status: publish
published: true
title: "My Ansible repository"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "[:es]Mi repositorio personal de Playbooks de Ansible.[:en]My personal repository
  of Ansible Playbooks.[:]"
date: '2015-05-21 18:00:40 +0000'
categories:
- Blog
tags:
- ansible
- github
comments: []
---
I created my own personal repository of [Ansible Playbooks](https://github.com/carlessanagustin/ansible-playbooks) to help me process automatically those boring manual steps I keep doing when [provisioning](http://en.wikipedia.org/wiki/Provisioning) systems for my projects. It is a repository I will keep updating the more I get into provisioning projects.

[![https://github.com/carlessanagustin/ansible-playbooks](/images/posts/2015/05/Screen-Shot-2015-05-19-at-19.44.42.png)](https://github.com/carlessanagustin/ansible-playbooks)

The present roles are:

*   [ansible](http://docs.ansible.com/): Install full Ansible server environment.
*   base: Install basic packages into a new Ubuntu server.
*   clean: Cleans a Ubuntu previous to export.
*   [docker](https://www.docker.com/): Install full Docker environment.
*   [elasticsearch](https://www.elastic.co/): Install basic Elasticsearch.
*   [hyperv](http://en.wikipedia.org/wiki/Hyper-V): Install Hyper-V in a Windows machine and, through PowerShell commands, its possible to manage images and snapshots.
*   [kibana](https://www.elastic.co/): Install basic Kibana.
*   [logstash](https://www.elastic.co/): Install basic Logstash.
*   [nagios](https://www.nagios.org/): Install a full Nagios monitoring server and publishes the /etc/nagios3 folder into /vagrant for easy access.
*   [samba](http://en.wikipedia.org/wiki/Samba_(software)): Install Samba environment and mounts remote folder into system.

Why did I chose [Ansible](http://www.ansible.com) between the other configuration management [tools](http://en.wikipedia.org/wiki/Configuration_management)? It is agent less, so I can use it with a [SSH](http://en.wikipedia.org/wiki/Secure_Shell) or a [WinRM](https://msdn.microsoft.com/en-us/library/aa384426%28v=vs.85%29.aspx) port open. Because it is written in [Python](https://www.python.org/) and it is my prefered programming language; I can "[import ansible](http://docs.ansible.com/developing_api.html)" in my Python Scripts. There are many official modules out-of-the-box. I can use it from the prompt with ansible-doc and ansible commands. And last, because its formatting is more [SysAdmin](http://www.yuksrus.com/computers_sysadmin.html) (me) but less Developer; easy to read, work and understand.

*   Inputs: [YAML](http://yaml.org/) + [INI](http://en.wikipedia.org/wiki/INI_file) + [Jinja2](http://jinja.pocoo.org/).
*   Outputs: [JSON](http://json.org/).

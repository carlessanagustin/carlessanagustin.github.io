---
layout: post
status: publish
published: true
title: "Provisioning Docker container with Ansible"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "[:es]Cómo aprovisionar contenedores Docker utilizando Playbooks de Ansible.[:en]How
  to provision Docker containers using Ansible Playbooks.[:]"
date: '2015-06-08 12:30:01 +0000'
categories:
- Blog
tags:
- devops
- ansible
- docker
- containers
comments: []
---
Here is a brief demonstration on how to provision a [Docker](https://www.docker.com/) container using [Ansible Playbooks](http://docs.ansible.com/playbooks.html). It is a easy way of testing our containers and our playbooks too.

We need is a [Dockerfile](http://docs.docker.com/reference/builder/) and a Playbook [YAML](http://yaml.org/). Here the _Dockerfile_:

```shell
FROM ubuntu:14.04
RUN apt-get update && \
  apt-get -y install software-properties-common && \
  apt-add-repository -y ppa:ansible/ansible && \
  apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y git curl ansible && \
  mkdir /opt/myAnsible && \
  cd /opt/myAnsible
COPY doSomething.yml /opt/myAnsible/doSomething.yml
WORKDIR /opt/myAnsible
RUN ansible-playbook doSomething.yml --connection=local
CMD ["/bin/bash"]
```

Here the playbook _doSomething.yml_:

```yaml
---
- hosts: localhost
  tasks:
    - name: hello world
      command: uname -a
      register: uname
    - debug: var=uname.stdout
```
We then can then run `$ docker build -t dockans1 .`.

And voilà! Work done!

We can use a repository too. Here the new _Dockerfile_:

```shell
FROM ubuntu:14.04
RUN apt-get update && \
 apt-get -y install software-properties-common && \
 apt-add-repository -y ppa:ansible/ansible && \
 apt-get update && \
 apt-get -y upgrade && \
 apt-get install -y git curl ansible && \
 mkdir /opt/myAnsible && \
 cd /opt/myAnsible && \
 git clone https://github.com/carlessanagustin/ansible-playbooks.git . && \
 ansible-playbook provision/hello_world.yml -i 'localhost,' --connection=local
WORKDIR /opt/myAnsible
CMD ["/bin/bash"]
```

We then can then run: `$ docker build -t dockans2 .`.
Work done! We can run `$ docker images` to see the result containers.

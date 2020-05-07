---
layout: post
status: publish
published: true
title: "Nginx proxy for a Jenkins container"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "[:es]Mapeo de puertos para acceder a contenedores a través de VirtualBox,
  Vagrant, Ubuntu y Docker[:en]Mapping ports to access local containers through VirtualBox,
  Vagrant, Ubuntu and Docker[:]"
date: '2015-05-25 18:00:17 +0000'
categories:
- My Blog
tags:
- ubuntu
- devops
- vagrant
- jenkins
- virtualBox
- docker
- nginx
- containers
comments: []
---
As a Mac user, [Docker](https://www.docker.com/) comes in as [boot2docker](https://docs.docker.com/installation/mac/). I don't quite like using that interface but I prefer having a simple Ubuntu VM on my [Vagrant](https://www.vagrantup.com/) environment where I can manage my containers from a pre-installed Docker. I like this arrangement because it allows me to keep updated on Vagrant, which is more useful for various environments and [providers](https://docs.vagrantup.com/v2/providers/index.html): VirtualBox, VMware, Docker and Hyper-V. I chose Jenkins for this example:

[![vagrant2docker2jenkins](/images/posts/2015/05/vagrant2docker2jenkins.jpg)](/images/posts/2015/05/vagrant2docker2jenkins.jpg)

At the end of the line I have a default Jenkins container running and publishing at port 8080\. To be able to see it from my Mac browser I need to forward ports from Vagrantfile (8080 to 80) then Nginx (80 to 8080):

* `http://localhost:8080 >> ubuntu:80 >> jenkins:8080`
*   @ [Vagrantfile](https://github.com/carlessanagustin/vagrant-bootstrap.shell/blob/master/Vagrantfile) configuration
* `config.vm.network "forwarded_port", host: 8080, guest: 80, auto_correct: true`
*   @ Ubuntu

```shell
$ apt-get -y install docker nginx
$ docker rm jenkins1
$ docker run -d -p 8080:8080 --name=jenkins1 jenkins
$ docker inspect jenkins1 | grep IPAddress
  "IPAddress": "172.17.0.1",
```

*   @ [Nginx](https://gist.github.com/carlessanagustin/f34db6dc45e376029682) configuration in Ubuntu

```shell
$ wget https://gist.githubusercontent.com/carlessanagustin/f34db6dc45e376029682/raw/0622f8f375d4ba68e49350dc941198345c52bbe6/nginx-reverse-proxy.conf
  (Replace server IP from nginx-reverse-proxy.conf)
$ cp nginx-reverse-proxy.conf /etc/nginx/sites-enabled/jenkins
$ service nginx restart
```

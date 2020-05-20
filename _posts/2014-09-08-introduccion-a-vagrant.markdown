---
layout: post
status: publish
published: true
title: "Introducing Vagrant"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Introducción básica al uso de Vagrant para configurar nuestro
  entorno de desarrollo portable y compartible.<!--:--><!--:en-->Basic introduction
  to Vagrant and its use for reproducing portable and shareable development environments.<!--:-->"
date: '2014-09-08 18:00:45 +0000'
categories:
- Blog
tags:
- cheat sheet
- vagrant
- VM
- configuration management
- puppet
comments: []
---
I'd like to quickly introduce you to the use of Vagrant software in our local computer. But first let's start by explaining what is Vagrant. As described in its [website](https://www.vagrantup.com/ "Vagrant"): Create and configure lightweight, reproducible, and portable development environments. It is a software that allows us to create portable and shareable [virtual machines](http://en.wikipedia.org/wiki/Virtual_machine "VM") (VM) with the environment we need. Each environment is composed of various packages and configurations creating our development [stack](http://en.wikipedia.org/wiki/Solution_stack "Stack"): * Ubuntu, Apache, PHP, MySQL, ... * CentOS, NGINX, Ruby on Rails, MondoDB, ... * ...and others. Vagrant allows us to have one of this environments ([Boxes](https://docs.vagrantup.com/v2/boxes.html "Boxes")) in our local machine. This environment can be copied from the staging and production servers of our project so changes we made will be following the real ones. As it is a fully working VM in our personal computer, it can too follow our sysadmin/operations decisions, so changes made in staging or production server will be reproduced in our local VM. It can be considered a wrapper around virtualization software such as [VirtualBox](http://en.wikipedia.org/wiki/VirtualBox "Oracle VirtualBox") and [configuration management](http://en.wikipedia.org/wiki/Configuration_management "Configuration Management") software such as [Chef](http://en.wikipedia.org/wiki/Chef_(software) "Chef"), [Salt](http://en.wikipedia.org/wiki/Salt_(software) "Salt") and [Puppet](http://en.wikipedia.org/wiki/Puppet_(software) "Puppet"). For more information please consult Vagrant's website or do a Google search. There is plenty information and tutorials available. Let's continue by installing the required software in our personal computer: 1\. MacOSX, Windows or Linux 2\. [VirtualBox](https://www.virtualbox.org/) 3\. [VirtualBox Extension Pack](https://www.virtualbox.org/) 4\. [Vagrant](https://www.vagrantup.com/) I am assuming we already have a [Box](http://www.vagrantbox.es/ "Vagrant Box") ([Ubuntu](http://www.ubuntu.com/ "Ubuntu")) ready to use but we can create our own following this documentation. Working in a development team, this box could be provided by our sysadmin/operations team. For more Boxes [here](https://vagrantcloud.com/ "Vagrant Cloud"). Open your terminal or command line application and go to your desired working directory. Then create your development folder and enter it. Place in here the Box image:

`$HOME/Development/packaged.box`

Create a new folder called "Box" and enter it (cd):

`$HOME/Development/Box/`

Lets install our Box into VirtualBox:

```shell
$ vagrant box add {title} {url} ## url can be a HTTP, HTTPS, local file or from the public Box [site](https://vagrantcloud.com/).
$ vagrant init {title}
$ vagrant up
```

Example:

```shell
$ vagrant box add myFirstBox ../packaged.box
$ vagrant init myFirstBox
$ vagrant up
```

This last command starts our VM. In this working folder we should see a new file plus a hidden folder:

```shell
drwxr-xr-x  .vagrant
-rw-r--r--  Vagrantfile
```

Vagrant command uses those files for the folder/environment where it is called plus the VirtualBox image. I will later explain the importance of "Vagrantfile". I am assuming we are using a Ubuntu Box, so to enter it just type in:

`$ vagrant ssh`

Now we should we inside our VM Box ready to use. We should see something like:

```shell
Welcome to Ubuntu 13.10 (GNU/Linux 3.11.0-12-generic i686)
 * Documentation:  https://help.ubuntu.com/
vagrant@vagrant:~$
```

To leave the Box just type in "exit". From here we could install (apt-get ...) and configure (/etc ...) any Ubuntu parameters but I am going to give you a few recommendations to automate the Box flow ready for our sysadmin/operations team. We can edit our Vagrantfile and uncomment/add these lines:

```ruby
config.vm.provision :shell, :path => "vagrant-bootstrap.sh" ## provisioning file with instructions
```

Next create/edit the "vagrant-bootstrap.sh" with:

```shell
#!/usr/bin/env bash
apt-get update
apt-get -y upgrade

apt-get install -y puppet
apt-get install -y git subversion curl vim screen 
```

Once these two files are edited, we can call our Box with next command:

`$ vagrant reload --provision`

You should see the Box activating/reloading and processing the instructions from the "vagrant-bootstrap.sh". Once steps are processed you can continue using and configuring this Box. See that I added a line to install Puppet, so we can set up this Box to point to the Puppet master of our company and get changes, updates, ... from the sysadmin/operations team. Soon I will post the Vagrant [LAMP](http://en.wikipedia.org/wiki/LAMP_(software_bundle) "LAMP") configuration steps. * * * ## Cheat sheet: Simple bootstrap configuration ([Download](http://www.carlessanagustin.com/Snippets/vagrant/vagrant-bootstrap1.sh.txt "Cheat Sheet"))

<pre>## 1\. vagrant: add image
$ vagrant box add {title} {url}  ## vagrant box add myFirstBox ../packaged.box
$ vagrant init {title}  ## vagrant init myFirstBox
$ vagrant up

## 2\. vagrant: connect
$ vagrant ssh

## 3\. open Vagrantfile and add…
config.vm.provision :shell, :path => "vagrant-bootstrap.sh"

## 4\. open/create vagrant-bootstrap.sh and add…
#!/usr/bin/env bash
apt-get update
apt-get -y upgrade

apt-get install -y puppet
apt-get install -y git subversion curl vim screen 

## 5\. vagrant: provision
$ vagrant reload --provision

## 6\. vagrant: remove
$ vagrant destroy
```
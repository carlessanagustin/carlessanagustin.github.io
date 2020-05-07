---
layout: post
status: publish
published: true
title: "Tutorial: Configuration Management - Vagrant + Ansible + Jenkins"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "[:es]Video tutorial: Proceso de creación de Playbooks de Ansible para la
  instalación automática de Jenkins CI en máquinas Ubuntu Linux. Primero realizo el
  proceso en una máquina local configurando Vagrant para luego pasar a un entorno
  remoto en Amazon Web Services (AWS).[:en]Video tutorial: Ansible Playbook creation
  process for automatic installation of Jenkins CI on Ubuntu Linux machines. First
  I make the process on a local machine setting Vagrant then I move it to a remote
  environment on Amazon Web Services (AWS).[:]"
date: '2015-08-20 18:05:54 +0000'
categories:
- My Blog
tags:
- ubuntu
- git
- vagrant
- configuration management
- jenkins
- ansible
- github
- virtualBox
- aws
- sourcetree
- tutorial
comments: []
---
Main target: **Jenkins CI automatically installed in multiple environments.**

Video tutorial on managing automatic configuration on local and remote environments with Ansible.

What is [configuration management](http://www.sei.cmu.edu/productlines/frame_report/config.man.htm)?

_Configuration management (CM) refers to a discipline for evaluating, coordinating, approving or disapproving, and implementing changes in artifacts that are used to construct and maintain software systems. An artifact may be a piece of hardware or software or documentation. CM enables the management of artifacts from the initial concept through design, implementation, testing, baselining, building, release, and maintenance._

What benefits gives us configuration management?

*   Reduce manual repetitive processes.
*   Create a software version known, reliable, proven and repeatable.
*   Achieve greater confidence in the project team.
*   Increase in quality; processes, products and team.
*   Increased responsiveness and innovation

# Tutorial: Requirements

Complete list of **software** used:

*   VirtualBox - [https://www.virtualbox.org/](https://www.virtualbox.org/)
*   Ansible - [http://www.ansible.com/](http://www.ansible.com/)
*   Vagrant - [https://www.vagrantup.com/](https://www.vagrantup.com/)
*   Ubuntu Linux - [http://www.ubuntu.com/](http://www.ubuntu.com/)
*   Jenkins CI - [https://jenkins-ci.org/](https://jenkins-ci.org/)
*   Nginx - [http://nginx.org/](http://nginx.org/)
*   Amazon AWS - [https://aws.amazon.com/](https://aws.amazon.com/)
*   Git - [https://git-scm.com/](https://git-scm.com/)
*   Github - [https://github.com/](https://github.com/)
*   SourceTree - [https://www.sourcetreeapp.com/](https://www.sourcetreeapp.com/)

This is the **architecture** that I follow:

[![Configuration Management - Arquitectura](/images/posts/2015/08/Configuration-Management-diagram.png)](/images/posts/2015/08/Configuration-Management-diagram.png)

The entire **contents** of the tutorial include:

*   **Youtube - [https://goo.gl/McB8Qe](https://goo.gl/McB8Qe)**
*   **Github - [https://github.com/carlessanagustin/install-jenkins](https://github.com/carlessanagustin/install-jenkins)**
*   **Slideshare - [http://www.slideshare.net/carlessanagustin/gestin-de-la-configuracin-jenkins-ci](http://www.slideshare.net/carlessanagustin/gestin-de-la-configuracin-jenkins-ci)**

# Tutorial: Step by step

## 1. Architecture

(CM01b-intro-arquitectura)

https://www.youtube.com/watch?v=XXV8WdzRuMw&index=1&list=PLF3EgRIVV_yQzl6ZiT06MDWGvscglDt5a

## 2\. Used software

(CM01c-intro-software)

https://www.youtube.com/watch?v=wSoelOs3EOw&index=2&list=PLF3EgRIVV_yQzl6ZiT06MDWGvscglDt5a

## 3. Configuring Vagrant via the Vagrantfile

(CM02-vagrant-init)

https://www.youtube.com/watch?v=mLYXr0jVJT4&index=3&list=PLF3EgRIVV_yQzl6ZiT06MDWGvscglDt5a

## 4\. Creation of an Ansible Playbook for the Jenkins CI installation process

(CM03-ansible-playbook)

https://www.youtube.com/watch?v=1fEwOSicKXk&index=4&list=PLF3EgRIVV_yQzl6ZiT06MDWGvscglDt5a

## 5\. Refactoring the Ansible Playbook to use Roles structure

(CM04-ansible-refactor-roles)

https://www.youtube.com/watch?v=SZOdGQpjfU4&index=5&list=PLF3EgRIVV_yQzl6ZiT06MDWGvscglDt5a

## 6\. Port forwarding with Nginx

(CM05-nginx-jenkins-automatico)

https://www.youtube.com/watch?v=ZfcOO1u-6_s&index=6&list=PLF3EgRIVV_yQzl6ZiT06MDWGvscglDt5a

## 7\. Refactor the Ansible Playbook to accept Ubuntu 12

(CM06-refactoring-jdk7)

https://www.youtube.com/watch?v=M6i5m438DT0&index=7&list=PLF3EgRIVV_yQzl6ZiT06MDWGvscglDt5a

## 8\. Jenkins CI automatically installed into Amazon AWS Linux OS

(CM07-aws-jenkins-automatico)

https://www.youtube.com/watch?v=kgk_aR8XcWI&index=8&list=PLF3EgRIVV_yQzl6ZiT06MDWGvscglDt5a

## 9\. Share versioned code on Github

(CM08-git_push-github)

https://www.youtube.com/watch?v=hdrmA8VP4VM&index=9&list=PLF3EgRIVV_yQzl6ZiT06MDWGvscglDt5a
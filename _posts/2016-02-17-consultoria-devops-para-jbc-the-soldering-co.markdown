---
layout: post
status: publish
published: true
title: "DevOps consulting for JBC Soldering Co."
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "[:es]Consultoría DevOps para gestionar el ciclo de vida de su software y
  firmware[:en]DevOps consulting to manage the lifecycle of your software and firmware[:]"
date: '2016-02-17 17:05:55 +0000'
categories:
- Work
tags:
- git
- devops
- jenkins
- consulting
- ansible
- itnove
comments: []
---
Together with [Alex Ballarin](https://twitter.com/alexballarin76) and the [ITNove](http://www.itnove.com/) team I am creating an application lifecycle management strategy based on DevOps principals for the [JBC The Soldering Co.](http://www.jbctools.com/) (or JBC Tools) software and firmware.

This upgrade includes:

*   Platform strategies
*   Platform installacion and configuration
*   Training sessions
*   Version control system
*   Continuous Integration
*   Orchestration
*   Application deployment

The initial stack of technologies for the infrastructure is composed of:

*   [Jira Server](https://es.atlassian.com/software/jira)
*   [Git](http://git-scm.com/)
*   [BitBucket Server](https://es.atlassian.com/software/bitbucket)
*   [Jenkins](https://jenkins-ci.org/)

The infrastructure is build over Ubuntu instances with [Ansible](https://www.ansible.com/) following Infrastructure as Code principals.  
The main programming languages at JBC Tools are C, C++ and Visual Basic .NET. Code will be versioned in the new BitBucket Server and compilation, code reporting and arfifact deployment will be handle by Jenkins.

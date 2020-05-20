---
layout: post
status: publish
published: true
title: "Installing Builbot on Ubuntu"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Vídeo tutorial: Instalación de Buildbot, el framework Python de
  integración continua.<!--:--><!--:en-->Video tutorial: Installing Buildbot, the
  continuous integration Python framework.<!--:-->"
date: '2014-10-24 13:00:48 +0000'
categories:
- Blog
tags:
- python
- buildbot
- CI
- continuous deployment
comments:
- id: 4830
  author: Carles
  author_url: http://www.carlessanagustin.com/
  date: '2014-11-15 10:35:43 +0000'
  content: "UPDATED INFORMATION:\r\nhttps://github.com/carlessanagustin/buildbot-bootstrap"
---
**NOTE: Video only in Spanish, sorry.**

I'd like to introduce you to [Buildbot](http://buildbot.net/ "Buildbot"), the [continuous integration](http://en.wikipedia.org/wiki/Continuous_integration "Continuous Integration") [Python](http://en.wikipedia.org/wiki/Python_(programming_language) "Python") [framework](http://en.wikipedia.org/wiki/Software_framework "Framework"). Very easy to install and soon to setup as I will continue explaining with a  series of videos in my [Youtube Channel](http://youtu.be/omnqbN49Ef8?list=PLF3EgRIVV_yRY_JCjSRfNFKAzt65Mng3P "Buildbot channel").

As described in their website, Buildbot is:

*   Open-source framework for automating software build, test, and [release](http://en.wikipedia.org/wiki/Software_release_life_cycle "Release") processes.
*   Can automate all aspects of the [software development cycle](http://en.wikipedia.org/wiki/Software_development_process "Software development process").
*   As a framework you implement a system that matches your [workflow](http://en.wikipedia.org/wiki/Workflow "Workflow") and grows with your organization.

It is widely used in various important software as you can see [here](http://trac.buildbot.net/wiki/SuccessStories "Buildbot Success Stories").

Here the video I made, enjoy!

http://youtu.be/omnqbN49Ef8

**LATEST UPDATES: [https://github.com/carlessanagustin/buildbot-bootstrap](https://github.com/carlessanagustin/buildbot-bootstrap "Buildbot Bootstrap repo")**

```shell
# Instructions (.md format)

## buildbot-master installation (terminal 1)

* ~$ sudo apt-get -y install python-pip python-dev build-essential python-virtualenv sqlite3
* ~$ mkdir buildbot
* ~$ cd buildbot
* ~/buildbot$ virtualenv --no-site-packages sandbox
* ~/buildbot$ source sandbox/bin/activate
* (sandbox)~/buildbot$ pip install sqlalchemy==0.7.10
* (sandbox)~/buildbot$ pip install buildbot
* (sandbox)~/buildbot$ buildbot create-master -r master
* (sandbox)~/buildbot$ cp master/master.cfg.sample master/master.cfg
* (sandbox)~/buildbot$ vim master/master.cfg
* (sandbox)~/buildbot$ buildbot start master
* (sandbox)~/buildbot$ tail -f master/twistd.log

## buildbot-slave installation (terminal 2)

* ~$ cd buildbot
* ~/buildbot$ source sandbox/bin/activate
* ~/buildbot$ pip install buildbot-slave
* (sandbox)~/buildbot$ buildslave create-slave -r slave localhost:9989 example-slave pass
* (sandbox)~/buildbot$ buildslave start slave
* (sandbox)~/buildbot$ tail -f slave/twistd.log

## View web status: http://localhost:8010

## Template folders
* Original: ~/buildbot/sandbox/lib/python2.7/site-packages/buildbot-0.8.9-py2.7.egg/buildbot/status/web/templates
* Replicas: ~/buildbot/master/templates
* Static pages: ~/buildbot/master/public_html

***
## Locale problem (environment variable)
### View missing

~ $ env | grep LC_
### Solution

~ $ export LC_ALL=en_GB.UTF-8
~ $ sudo vim /etc/default/locale
(and add...)
LC_ALL="en_GB.UTF-8"

## Official documentation
[http://docs.buildbot.net/current/](http://docs.buildbot.net/current/ "Buildbot documentation")
```
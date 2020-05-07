---
layout: post
status: publish
published: true
title: "<!--:es-->Instalaci&oacute;n de Buildbot sobre Ubuntu<!--:--><!--:en-->Installing
  Builbot on Ubuntu<!--:-->"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Vídeo tutorial: Instalación de Buildbot, el framework Python de
  integración continua.<!--:--><!--:en-->Video tutorial: Installing Buildbot, the
  continuous integration Python framework.<!--:-->"
date: '2014-10-24 13:00:48 +0000'
categories:
- My Blog
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
<p><!--:es-->Os presento&nbsp;<a title="Buildbot" href="http://buildbot.net/" target="_blank">Buildbot</a>, el framework <a title="Python" href="http://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank">Python</a> de <a title="Continuous Integration" href="http://en.wikipedia.org/wiki/Continuous_integration" target="_blank">integraci&oacute;n continua</a>. Muy f&aacute;cil de instalar y de configurar pronto como voy a seguir explicando en esta serie de videos en mi <a title="Canal Buildbot" href="http://youtu.be/omnqbN49Ef8?list=PLF3EgRIVV_yRY_JCjSRfNFKAzt65Mng3P" target="_blank">canal Youtube</a>.</p>
<p>Como se describe en su p&aacute;gina web, Buildbot &eacute;s:</p>
<ul>
<li>Framework de c&oacute;digo abierto para la automatizaci&oacute;n de compilaci&oacute;n de software, prueba, y los procesos de <a title="Release" href="http://en.wikipedia.org/wiki/Software_release_life_cycle" target="_blank">release</a> de nuestro c&oacute;digo.</li>
<li>Automatiza todos los aspectos del <a title="Software development process" href="http://en.wikipedia.org/wiki/Software_development_process" target="_blank">ciclo de desarrollo de software</a>.</li>
<li>Como framework podemos implementar un sistema que se adapte cualquier <a title="Workflow" href="http://en.wikipedia.org/wiki/Workflow" target="_blank">flujo de trabajo</a> y crecer con la organizaci&oacute;n.</li>
</ul>
<p>Es ampliamente utilizado en variedad de proyectos software como se puede ver <a title="Buildbot Success Stories" href="http://trac.buildbot.net/wiki/SuccessStories" target="_blank">aqu&iacute;</a>.</p>
<p>Aqu&iacute; os dejo el v&iacute;deo, a disfrutar!</p>
<p>http://youtu.be/omnqbN49Ef8</p>
<p style="text-align: center;"><strong>&Uacute;LTIMA ACTUALIZACI&Oacute;N: <a title="Buildbot Bootstrap repo" href="https://github.com/carlessanagustin/buildbot-bootstrap" target="_blank">https://github.com/carlessanagustin/buildbot-bootstrap</a></strong></p>
<pre># Instructions (.md format)

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
<a title="Buildbot documentation" href="http://docs.buildbot.net/current/" target="_blank">http://docs.buildbot.net/current/</a></pre>
<p><!--:--><!--:en--><strong>NOTE: Video only in Spanish, sorry.</strong></p>
<p>I'd like to introduce you to <a title="Buildbot" href="http://buildbot.net/" target="_blank">Buildbot</a>, the <a title="Continuous Integration" href="http://en.wikipedia.org/wiki/Continuous_integration" target="_blank">continuous integration</a> <a title="Python" href="http://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank">Python</a> <a title="Framework" href="http://en.wikipedia.org/wiki/Software_framework" target="_blank">framework</a>. Very easy to install and soon to setup as I will continue explaining with a &nbsp;series of videos in my <a title="Buildbot channel" href="http://youtu.be/omnqbN49Ef8?list=PLF3EgRIVV_yRY_JCjSRfNFKAzt65Mng3P" target="_blank">Youtube Channel</a>.</p>
<p>As described in their website, Buildbot is:</p>
<ul>
<li>Open-source framework for automating software build, test, and <a title="Release" href="http://en.wikipedia.org/wiki/Software_release_life_cycle" target="_blank">release</a> processes.</li>
<li>Can automate all aspects of the <a title="Software development process" href="http://en.wikipedia.org/wiki/Software_development_process" target="_blank">software development cycle</a>.</li>
<li>As a framework you implement a system that matches your <a title="Workflow" href="http://en.wikipedia.org/wiki/Workflow" target="_blank">workflow</a> and grows with your organization.</li>
</ul>
<p>It is widely used in various important software as you can see <a title="Buildbot Success Stories" href="http://trac.buildbot.net/wiki/SuccessStories" target="_blank">here</a>.</p>
<p>Here the video I made, enjoy!</p>
<p>http://youtu.be/omnqbN49Ef8</p>
<p style="text-align: center;"><strong>LATEST UPDATES: <a title="Buildbot Bootstrap repo" href="https://github.com/carlessanagustin/buildbot-bootstrap" target="_blank">https://github.com/carlessanagustin/buildbot-bootstrap</a></strong></p>
<pre># Instructions (.md format)

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
<a title="Buildbot documentation" href="http://docs.buildbot.net/current/" target="_blank">http://docs.buildbot.net/current/
</a></pre>
<p><!--:--></p>

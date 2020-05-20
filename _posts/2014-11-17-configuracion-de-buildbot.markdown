---
layout: post
status: publish
published: true
title: "Buildbot configuration"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Vídeos formativos de la configuración básica de Buildbot: El marco
  Python de integración continua<!--:--><!--:en-->Instructional videos of basic setup
  Buildbot: The continuous integration Python framework<!--:-->"
date: '2014-11-17 18:30:11 +0000'
categories:
- Blog
tags:
- python
- buildbot
- CI
- continuous deployment
comments: []
---
After several days working with Buildbot, I posted few more videos to complete the series I started on [my YouTube channel](http://www.youtube.com/playlist?list=PLF3EgRIVV_yRY_JCjSRfNFKAzt65Mng3P "Buildbot Course: The Python framework for continuous integration"). I divided this part in the practical videos:

*   2\. Basic configuration by default (master.cfg) - (SPANISH ONLY SORRY)

In this video I explain the basic structure of the configuration file that comes with Buildbot (master.cfg.sample) that includes a practical example project: [PyFlakes](https://pypi.python.org/pypi/pyflakes "pyflakes").

*   3\. The structure of the web results (Web Status) - (SPANISH ONLY SORRY)

Here I comment on the web interface that offers Buildbot Master to interact with the states of our projects.

*   4\. Tips for a structured configuration (config /) - (SPANISH ONLY SORRY)

I believe Buildbot default configuration is impractical by relying on a single file (master.cfg) so here I modularize the configuration file into various files in a config folder. You'll find my Buildbot Bootstrap repository I talk in my GitHub account.

http://youtu.be/w8bD2IBE5no

http://youtu.be/fW9yRjTK8Eo

http://youtu.be/uKdKBhodp5A

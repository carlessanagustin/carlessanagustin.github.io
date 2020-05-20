---
layout: post
status: publish
published: true
title: "Interactive design for all"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Primer articulo sobre la creación de interfaces interactivas:
  Introducción + Servidor, red, código y ficheros.<!--:--><!--:en-->First article
  about the creation of interactive interfaces: Introduction + Server, network, code
  and files.<!--:-->"
date: '2013-08-07 00:44:51 +0000'
categories:
- Blog
tags:
- responsive
- ux
- interactivity
comments: []
---
Recently I was involved in a web project where the main key element was the user experience. Our duty was to create a web interface full of options, interactions and images. Nothing unusual except that we are in a period of expansion and change; from tiny mobile devices to high resolution projectors.

Our mission was to give user all interface possibilities, but at what cost?.

*   Who uses the interface?
*   How is going to be used?
*   How to display the information?
*   How to show the interactivity?
*   What devices will use the interface?
*   This device, how does process images in high definition?
*   Can it process large quantity of data?

After a thorough analysis and study, I will explain some basic ideas for programming interfaces; every day new mobile handsets come to the market with small-size displays and interactive devices embedded. At the same time large high resolution screens connected to super-computers. To all this we must provide a solution, we must be prepared.

But before I continue I'd like explain what I mean by interactive interface. It is the user interactive framework to enrich the user experience. In this framework we can use those devices and elements that provide the connection terminal with digital information.

I structured this set of writings following:

1.  Server, network, code and files.
2.  Device.
3.  Interface.
4.  User.
5.  Context and environment.

I think this is the best way to explain what we should keep in mind when designing an interactive interface and reach users in the best way.

Let's start now...

# 1. Server, network, code and files.

I will not go into detail on what is the best programming language for devices and the type of information to be processed. We must care is about anything that we send to the user, all that is processed at client-side. My explanations are based in interactive web interface so I consider these skills necessary:

*   Data ([HTML](http://en.wikipedia.org/wiki/Html "HTML"))
*   Style ([CSS](http://en.wikipedia.org/wiki/CSS "CSS"))
*   Interaction ([JavaScript](http://en.wikipedia.org/wiki/JavaScript "JavaScript"))
*   Files/information (Images, libraries, ...)

When a user browses our site, receives all (or some) of the above points, but we know nothing of the user; what connectivity he/she/it has? What device is used? What screen is using this device? Memory? Processor?

The best way to answer the questions is from the idea that the user has the slowest device and the worst possible conection bandwith. We can asure this by following these points;

*   Remember to minimize and/or compress [CSS](http://www.csscompressor.com/ "csscompressor") and [JavaScript](http://www.minifyjavascript.com/ "minifyjavascript") files to save bandwidth and speed the experience.
*   Use images in the correct web format; PNG, SVG, GIF or JPEG.
*   Merge images into a single two-dimensional image ([sprites](http://en.wikipedia.org/wiki/Sprite_ (computer_graphics) # Sprites_by_CSS "Sprites")) to reduce waiting time when downloading files.
*   Limiting dependencies to libraries (jquery = 93kb, 56kb emberjs = ...).
*   Prioritize the use of CSS3 over extra files like images used for curved corners.
*   Use correct HTTP headers to asure proper use of the browser [cache](http://www.mobify.com/blog/beginners-guide-to-http-cache-headers/ "Cache").
*   Use [AppCache](https://en.wikipedia.org/wiki/AppCache "AppCache") HTML5 when possible.
*   Change icons to [fonts](http://icomoon.io/ "icomoon") and reduce downloadable information sources.

Remember also that our server can send selective files to the client. This technique deserves a new entry but as an example, this technique allows us to send the customer a picture of low/medium/high resolution with a single query; what screen resolution allows client? I recommend knowing tools like [Adaptive Images](http://adaptive-images.com/ "Adaptative Images"), a server-side library for detecting screen size at client-side.

In my next post I will write about devices and their components, components that can give us a lot of information but we must know how to process it in order to help the user and don't disturb his/hers/its experience.
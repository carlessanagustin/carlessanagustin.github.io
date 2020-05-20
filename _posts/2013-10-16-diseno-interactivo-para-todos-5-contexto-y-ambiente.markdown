---
layout: post
status: publish
published: true
title: "Interactive design for all - 5. Context and environment"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: '<!--:es-->Quinto artículo de la serie "Diseño interactivo para todos": Contexto
  y ambiente.<!--:--><!--:en-->Fifth article of the series "Interactive design for
  all": Context and environment.<!--:-->'
date: '2013-10-16 18:00:46 +0000'
categories:
- Blog
tags:
- responsive
- ux
- interactivity
comments: []
---
# 5. Context and environment

This is a new chapter of the series "Interactive design for all". In these lines I will discuss the effect of the context of use and environment on an interactive interface. But what I mean by context of use and environment? The first one is the context in which the user is located in space and time while the next concept is about the environmental situation in which the user is interacting.

I believe it is important knowing tools we can use to identify location. A common technique is to geolocate via IP providing a 99% of accuracy for country detection. Other geolocation techniques are:

*   [Cell-tower triangulation](http://pursuitmag.com/locating-mobile-phones-through-pinging-and-triangulation/ "Locating Mobile Phones through Pinging and Triangulation"): Calculation between three mobile phone towers can determine the approximate location of a terminal.
*   For single cell tower: Similar to above but with a single tower.
*   For wireless networks: Similar to above but with wifi networks.
*   [GPS](http://en.wikipedia.org/wiki/Global_Positioning_System "Global Positioning System"): The more accurate, although our interface must have permission to use and enabling the GPS antenna consumes a lot of power.

Each of these methods has its own error gap. We may warn users from these error gaps and suggest more accurate solutions.

This is important when defining the best framework for our interface; a web interface is different than an Android app interface. This last one will always have more access to the terminal hardware and system resources. Another important value is the date and time of use. Think of the dependance between ambient light and background color when reading from a screen. We could offer a diferent interface color scheme at different time of the day.

It's a good time to introduce the concept of content priority. This means that we are able to deliver the appropiate content depending on the user location and time for example. Let me explain: Our task is to design a web/app interface for a weekend event that include workshops and speeches on a fixed schedule. Using the time of connection variable we can provide the user with the list of next events, hiding the old ones. With the location data we could provide maps for locating events on schedule with extra information like parking slots, traffic conditions and more.

Too much information, isn't it? You now see how complex is designing interactivity. It is not only choosing text colors, backgrounds, fonts, ... we are now designing experiences. The level we want to reach depends on us or our customers.

<span style="color: #c0c0c0;">image by http://pjrvs.com/</span>

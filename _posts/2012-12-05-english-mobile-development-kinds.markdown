---
layout: post
status: publish
published: true
title: "Mobile development kinds"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:en-->Three types of mobile development.<!--:-->"
date: '2012-12-05 22:35:17 +0000'
categories:
- Blog
tags:
- mobile
- framework
- javascript
- development
comments: []
---
There are three kinds of mobile development these days:

1.  **Native Mobile Development:** Using Objective-C (language) + X-Code for iOS and Java (language) + Android SDK for Android, etc. You can always choose something like Appcelerator if you're targeting multiple platforms, as you mentioned earlier. **Good for:** Performance, Native capabilities (using the camera, for example). **Recommended Tools:** [Titanium Appcelerator](http://www.appcelerator.com/).
2.  **Mobile Web Development:** If you have only web skills (HTML/CSS/JavaScript) you can always make your web application mobile-compatible, using tools like jQuery Mobile or Sencha Touch.**Recommended Tools:** [jQuery Mobile](http://www.jquerymobile.com/), [Sencha Touch](http://www.sencha.com/products/touch).
3.  **Hybrid Mobile Development:** Using web technologies for your application (you'll be loading a web page), but using a native application (a web wrapper) for making the application Native (and distributable) across the Play Market or AppStore. **Recommended Tools:** [PhoneGap](http://www.phonegap.com/), [Trigger.io](http://www.trigger.io/), or you can even use [Titanium Appcelerator](http://www.appcelerator.com/) and use a [Web View Component](https://wiki.appcelerator.org/display/guides/The+WebView+Component)

## How you should take a decision?

*   Do you need native capabilities (use the camera, accelerometer, etc)? If you, you need to go either native or hybrid.
*   How many platforms do you plan to support? If it's only Android and iOS, then you can use either Appcelerator or make it native. If you're planning to support more platforms PhoneGap or a Web Application sounds more reliable.
*   Do you plan to deliver your application through the AppStore/Play Market? Then you need to make it native/hybrid.

**Note/Recommendation:** By reading your question I noticed that you're really confused on mobile and programming stuff. Before going so far, you should take some time in reading more about overall development.

[SOURCE](http://stackoverflow.com/questions/11521140/best-program-for-making-app-for-mobile-android-iphone-and-others "Best program for making app for mobile")
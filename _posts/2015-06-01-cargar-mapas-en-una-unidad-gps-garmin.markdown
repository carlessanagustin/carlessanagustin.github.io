---
layout: post
status: publish
published: true
title: "Load maps on a Garmin GPS unit"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "[:es]¿Cómo cargar mapas de terreno en un GPS Garmin Dakota™ 10?[:en]How
  to load terrain maps into a GPS Garmin Dakota™ 10?[:]"
date: '2015-06-01 18:00:07 +0000'
categories:
- Blog
tags:
- gps
- maps
- garmin
- openstreetmap
comments: []
---
[GPS](http://en.wikipedia.org/wiki/Global_Positioning_System) units can be bought with or without terrain maps. Let's start from the beginning, how does a GPS work? Basically, terrain maps are placed at the bottom layer to help us see the levels, paths, ... On top of it we can see our loaded or current path and above an arrow indicating us and our direction. The rest is extra information I am not going to talk about. In reality there is no need for a terrain maps when following a path (we can just follow the arrow and indications on the screen), but it is helpful to have a map under our track. Why? in case we want to change our route and see other paths for example.

The best way to load maps into a GPS unit like mine ([Garmin Dakota™ 10](https://buy.garmin.com/es-ES/ES/fitness-y-outdoor/descatalogados/dakota-10/prod30925.html)) is by downloading the needed maps into our computer and uploading them into the GPS via USB cable. We can always buy the maps from our GPS [providers](https://buy.garmin.com/es-ES/ES/fitness-y-outdoor/descatalogados/dakota-10/mapas/mapas-para-la-montana/topo-light/topo-france-v3-light-region-e/prod136421_010-D1352-00.html) or we can load the [openstreetmap](http://garmin.openstreetmap.nl/) project maps for free. I am going to explain the second option but there's limitations; 850 MB of internal memory in my GPS model. This means I cannot load all the maps I'd like. For example; all Spain (including the islands) terrain maps from openstreetmaps are a total of 485MB. So I am forced to load maps everytime I change country but that doesn't bother me.

This is my step by step process:

*   Go to [http://garmin.openstreetmap.nl/](http://garmin.openstreetmap.nl/)
*   Select: Choose your map type > Generic Routable (new style)
*   Select your country: Choose a predefined country
*   Click on: Request your map or download it directly > Download map now!

[![openstreetmap](/images/posts/2015/05/openstreetmap.jpg)](/images/posts/2015/05/openstreetmap.jpg)

If you need special zones only, just enable the checkbox at _Perhaps you'd like to add some additional tiles? > Enable manual tile selection_ and select the zones from the map. Once finished just click on _Download map now!_.

A new window it opened...

[![download](/images/posts/2015/05/download.jpg)](/images/posts/2015/05/download.jpg)

*   Download the file named _osm_generic_new_gmapsupp.zip_.
*   Unzip it >> _gmapsupp.img_
*   Connect GPS unit to a computer via USB
*   Copy the file _gmapsupp.img_ into the Garmin folder

[![folder](/images/posts/2015/05/folder.jpg)](/images/posts/2015/05/folder.jpg)

*   We can then load a track file into Garmin/GPX folder

[![track](/images/posts/2015/06/track-1024x702.jpg)](/images/posts/2015/06/track.jpg)

NOTE: Download tracks? [Wikiloc](http://www.wikiloc.com)

*   Disconnect the GPS unit from the computer
*   Turn on the GPS
*   Select track from _Track Manager_
*   Enjoy!

The end result:

[![before-after](/images/posts/2015/05/before-after-1024x746.jpg)](/images/posts/2015/05/before-after.jpg)

> Update 2015-06-05
> To convert routes from Google Maps to GPX or other formats: [http://www.gpsvisualizer.com/convert_input](http://www.gpsvisualizer.com/convert_input)

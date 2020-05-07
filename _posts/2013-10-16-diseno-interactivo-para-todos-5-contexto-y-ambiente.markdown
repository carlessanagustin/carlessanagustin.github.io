---
layout: post
status: publish
published: true
title: "<!--:es-->Dise&ntilde;o interactivo para todos - 5. Contexto y ambiente<!--:--><!--:en-->Interactive
  design for all - 5. Context and environment<!--:-->"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: '<!--:es-->Quinto artículo de la serie "Diseño interactivo para todos": Contexto
  y ambiente.<!--:--><!--:en-->Fifth article of the series "Interactive design for
  all": Context and environment.<!--:-->'
date: '2013-10-16 18:00:46 +0000'
categories:
- My Blog
tags:
- responsive
- ux
- interactivity
comments: []
---
<p><!--:es--><br />
<h1>5. Contexto y ambiente</h1>
<p>Este es un nuevo cap&iacute;tulo de la serie "Dise&ntilde;o interactivo para todos". En estas l&iacute;neas reflexionar&eacute; sobre el efecto que tiene el contexto de uso y el ambiente sobre una interfaz interactiva. &iquest;A que me refiero con contexto de uso y ambiente? Me referir&eacute; a estos dos conceptos como la ubicaci&oacute;n del usuario respeto lugar y tiempo. Tambi&eacute;n har&eacute; referencia a la situaci&oacute;n ambiental a la que puede estar expuesto el uso del dispositivo de conexi&oacute;n para as&iacute; ser m&aacute;s correcto al dar la informaci&oacute;n.</p>
<p>Creo importante conocer las diferentes herramientas que tenemos para identificar la ubicaci&oacute;n de uso de nuestra interfaz. Para ello tenemos la geolocalizaci&oacute;n por IP, una de las m&aacute;s usadas y generales que nos permite un 99% de seguridad en reconocimiento de paises. Para terminales m&oacute;biles se amplia la lista:</p>
<ul>
<li><a title="Locating Mobile Phones through Pinging and Triangulation" href="http://pursuitmag.com/locating-mobile-phones-through-pinging-and-triangulation/" target="_blank">Triangulaci&oacute;n de torres de celular</a>: La colocaci&oacute;n de torres identificadas de telefon&iacute;a m&oacute;vil por pa&iacute;ses y ciudades facilita el c&aacute;lculo matem&aacute;tico para conocer la ubicaci&oacute;n aproximada de un terminal.</li>
<li>Por torre celular &uacute;nica: Similar a la anterior pero con una &uacute;nica torre.</li>
<li>Por redes wifi: Similar a la anterior pero con redes wifi.</li>
<li><a title="GPS" href="http://es.wikipedia.org/wiki/Sistema_de_posicionamiento_global" target="_blank">GPS</a>: La m&aacute;s correcta, aunque debemos obtener permiso para la interfaz y activar la antena GPS que consume bater&iacute;a.</li>
</ul>
<p>Cabe reconocer que cada uno de estos m&eacute;todos de ubicaci&oacute;n tiene su margen de error, as&iacute; que debemos estar prevenidos para no cometer errores rectificables. Podemos avisar al usuario de este margen de error y que m&eacute;todos serian m&aacute;s correctos. Esto es importante a la hora de seleccionar que tipo de proximidad al sistema operativo del dispositivo necesitamos; no es lo mismo una interfaz web que una interfaz app para Android. Esta &uacute;ltima opci&oacute;n tendr&iacute;a m&aacute;s acceso a los recursos hardware del dispositivo.</p>
<p>Otro valor importante es la fecha y hora de uso. Si la interfaz interactiva requiere de estos valores, mejor tenerlos en mente a la hora de dise&ntilde;ar. La mejora de la lectura depende mucho de la cantidad de luz ambiental y del color de nuestro fondo de interfaz, es por esto que podr&iacute;amos contemplar la idea de ofrecer diferentes colores de interfaz a diferentes horas del d&iacute;a.</p>
<p>Es un buen momento para introducir el concepto de prioridad de contenido. Esto significa que somos capaces de ofrecer el contenido adecuado al usuario dependiendo de su ubicaci&oacute;n y hora de conexi&oacute;n. Pondr&eacute; un sencillo ejemplo: Pretendemos dise&ntilde;ar la web/app de un evento de fin de semana que incluye talleres y discursos. Conociendo la hora de consulta podemos ofrecer al usuario la lista de eventos programados y eliminar los anteriores para no confundir. Con la informaci&oacute;n anterior m&aacute;s la ubicaci&oacute;n del terminal podemos ofrecer al usuario los mapas de como llegar a los diferentes eventos ya sea a pie o con coche, pudiendo ampliar la informaci&oacute;n a parkings de la zona y estado del tr&aacute;fico.</p>
<p>&iquest;Demasiada informaci&oacute;n? No lo negar&eacute;, pero es complejo dise&ntilde;ar interactividad. Ya no solo dise&ntilde;amos los colores de texto, el fondo, la tipograf&iacute;a, ... dise&ntilde;amos experiencias. El nivel al que queramos llegar es cosa nuestra y de nuestro cliente.</p>
<p style="text-align: right;"><span style="color: #c0c0c0;">imagen de http://pjrvs.com/</span></p>
<p><!--:--><!--:en--><br />
<h1>5. Context and environment</h1>
<p>This is a new chapter of the series "Interactive design for all". In these lines I will discuss the effect of the context of use and environment on an interactive interface. But what I mean by context of use and environment? The first one is the context in which the user is located in space and time while the next concept is about the environmental situation in which the user is interacting.</p>
<p>I believe it is important knowing tools we can use to identify location. A common technique is to geolocate via IP providing a 99% of accuracy for country detection. Other geolocation techniques are:</p>
<ul>
<li><a title="Locating Mobile Phones through Pinging and Triangulation" href="http://pursuitmag.com/locating-mobile-phones-through-pinging-and-triangulation/" target="_blank">Cell-tower triangulation</a>: Calculation between three mobile phone towers can determine the approximate location of a terminal.</li>
<li>For single cell tower: Similar to above but with a single tower.</li>
<li>For wireless networks: Similar to above but with wifi networks.</li>
<li><a title="Global Positioning System" href="http://en.wikipedia.org/wiki/Global_Positioning_System" target="_blank">GPS</a>: The more accurate, although our interface must have permission to use and enabling the GPS antenna consumes a lot of power.</li>
</ul>
<p>Each of these methods has its own error gap. We may warn users from these error gaps and suggest more accurate solutions.</p>
<p>This is important when defining the best framework for our interface; a web interface is different than an Android app interface. This last one will always have more access to the terminal hardware and system resources. Another important value is the date and time of use. Think of the dependance between ambient light and background color when reading from a screen. We could offer a diferent interface color scheme at different time of the day.</p>
<p>It's a good time to introduce the concept of content priority. This means that we are able to deliver the appropiate content depending on the user location and time for example. Let me explain: Our task is to design a web/app interface for a weekend event that include workshops and speeches on a fixed schedule. Using the time of connection variable we can provide the user with the list of next events, hiding the old ones. With the location data we could provide maps for locating events on schedule with extra information like parking slots, traffic conditions and more.</p>
<p>Too much information, isn't it? You now see how complex is designing interactivity. It is not only choosing text colors, backgrounds, fonts, ... we are now designing experiences. The level we want to reach depends on us or our customers.</p>
<p style="text-align: right;"><span style="color: #c0c0c0;">image by http://pjrvs.com/</span></p>
<p><!--:--></p>

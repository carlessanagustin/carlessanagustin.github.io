---
layout: post
status: publish
published: true
title: "<!--:es-->Dise&ntilde;o interactivo para todos<!--:--><!--:en-->Interactive
  design for all<!--:-->"
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
- My Blog
tags:
- responsive
- ux
- interactivity
comments: []
---
<p><!--:es-->Recientemente me vi envuelto en un proyecto web donde la pieza clave era la experiencia de usuaria. Deb&iacute;amos crear una interfaz web repleta de opciones, interacciones y im&aacute;genes. Nada fuera de lo normal solo que nos encontramos en un tiempo de expansi&oacute;n y cambio; de dispositivos m&oacute;viles diminutos a proyectores de alta resoluci&oacute;n.</p>
<p>Nuestra intenci&oacute;n principal era la de dar el m&aacute;ximo de posibilidades al usuario pero &iquest;a que coste?.</p>
<ul>
<li>&iquest;Quien usa la interfaz?</li>
<li>&iquest;Como la va a usar?</li>
<li>&iquest;Como mostrar la informaci&oacute;n?</li>
<li>&iquest;Como mostrar la interactividad?</li>
<li>&iquest;Que dispositivos usaran la interfaz?</li>
<li>Este dispositivo; &iquest;Como procesar&aacute; las im&aacute;genes de gran definici&oacute;n?</li>
<li>&iquest;Tiene gran capacidad de proceso de datos?</li>
</ul>
<p>Despu&eacute;s de un exhaustivo an&aacute;lisis y estudio, explicar&eacute; aqu&iacute; unas ideas b&aacute;sicas para que la programaci&oacute;n de todos sea m&aacute;s adecuada a los tiempos cambiantes en que nos encontramos; cada d&iacute;a salen nuevos terminales m&oacute;viles al mercado, con pantallas de tama&ntilde;o reducido e dispositivos interactivos incrustados. A la misma vez tambi&eacute;n aparecen pantallas m&aacute;s grandes de alta resoluci&oacute;n conectadas a super-ordenadores. A todo esto debemos dar una soluci&oacute;n, debemos estar preparados.</p>
<p>Pero antes de continuar deber&iacute;a explicar lo que entiendo por interfaz interactiva. Se trata del marco interactivo al usuario para enriquecer su experiencia de uso. En este marco podemos hacer uso de todos aquellos dispositivos y elementos que nos proporcione el terminal de conexi&oacute;n a la informaci&oacute;n digital.</p>
<p>Estructuro este conjunto de escritos de la siguiente manera:</p>
<ol>
<li>Servidor, red, c&oacute;digo y ficheros.</li>
<li>Dispositivo.</li>
<li>Interfaz.</li>
<li>Usuario.</li>
<li>Contexto y ambiente.</li>
</ol>
<p>Creo que esta es la mejor forma de explicar lo que debemos tener en cuenta a la hora de dise&ntilde;ar una interfaz interactiva y llegar de la mejor forma posible al usuario...y al m&aacute;s all&aacute;.</p>
<p>Empezar&eacute; por el primero...</p>
<h1>1. Servidor, red, c&oacute;digo y ficheros.</h1>
<p>Aqu&iacute; no entrar&eacute; en detalle en cual es el mejor lenguaje de programaci&oacute;n para dispositivos ni el tipo de informaci&oacute;n a procesar. Lo que s&iacute; debemos tener en cuenta es todo aquello que enviamos al usuario, todo aquello que procesa la parte cliente. Basar&eacute; mis explicaciones en una interfaz web interactiva por lo que considero estos los conocimientos necesarios:</p>
<ul>
<li>Datos (<a title="HTML" href="http://es.wikipedia.org/wiki/HTML" target="_blank">HTML</a>)</li>
<li>Estilo (<a title="CSS" href="http://es.wikipedia.org/wiki/Css" target="_blank">CSS</a>)</li>
<li>Interacci&oacute;n (<a title="JavaScript" href="http://es.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>)</li>
<li>Ficheros/informaci&oacute;n (im&aacute;genes, librer&iacute;as,...)</li>
</ul>
<p>Cuando un usuario navega por nuestra web, recibe todos (o algunos) de los puntos anteriormente mencionados, pero nosotros sabemos nada del usuario; &iquest;que conectividad tiene? &iquest;que dispositivo usa? &iquest;que pantalla utiliza este dispositivo? &iquest;de que memoria dispone? &iquest;que procesador usa?</p>
<p>La mejor manera de responder las dudas anteriores es a partir de la idea que el usuario tiene el dispositivo m&aacute;s lento y la peor conectividad posible. Podemos asegurar esto siguiendo estos puntos;</p>
<ul>
<li>Recordar minimizar y/o comprimir los ficheros <a title="csscompressor" href="http://www.csscompressor.com/" target="_blank">CSS</a> y <a title="minifyjavascript" href="http://www.minifyjavascript.com/" target="_blank">JavaScript</a> para ahorrar ancho de banda.</li>
<li>Usar im&aacute;genes en el formato correcto para web; PNG, SVG, GIF o JPEG.</li>
<li>Unir im&aacute;genes en una sola imagen bidimensional (<a title="Sprites" href="http://en.wikipedia.org/wiki/Sprite_(computer_graphics)#Sprites_by_CSS" target="_blank">sprites</a>) para reducir las esperas entre descarga de ficheros.</li>
<li>Limitar las dependencias a librer&iacute;as (jquery = 93kb, emberjs = 56kb, ...).</li>
<li>Priorizar el uso de CSS3 por encima de ficheros extra como im&aacute;genes de esquinas curvadas.</li>
<li>Usar correctamente las cabeceras HTTP para asegurar el debido uso del <a title="Cache" href="http://www.mobify.com/blog/beginners-guide-to-http-cache-headers/" target="_blank">cache</a> del navegador.</li>
<li>Usar <a title="AppCache" href="https://en.wikipedia.org/wiki/AppCache" target="_blank">Appcache</a> de HTML5 cuando sea posible.</li>
<li>Sustituyendo iconos por <a title="icomoon" href="http://icomoon.io/" target="_blank">fuentes</a> reducimos descarga de informaci&oacute;n.</li>
</ul>
<p>Recordar tambi&eacute;n que de servidor a cliente podemos hacer envio selectivo de ficheros. Esta t&eacute;cnica merece una entrada nueva pero como ejemplo, esta t&eacute;cnica nos permite enviar al cliente una imagen de baja/media/alta resoluci&oacute;n con una sola consulta; &iquest;que resoluci&oacute;n permite la pantalla cliente? Recomiendo el conocimiento de herramientas como <a title="Adaptative Images" href="http://adaptive-images.com/" target="_blank">Adaptative Images</a>, una librer&iacute;a para la detecci&oacute;n del tama&ntilde;o de la pantalla del cliente desde el servidor.</p>
<p>En la siguiente entrada hablar&eacute; de los dispositivos y sus componentes; componentes que nos dan mucha informaci&oacute;n pero debemos saber tratarla para ayudar al usuario y no entorpecer su proceso de uso.<!--:--><!--:en-->
<p>Recently I was involved in a web project where the main key element was the user experience. Our duty was to create a web interface full of options, interactions and images.&nbsp;Nothing unusual except that we are in a period of expansion and change; from tiny mobile devices to high resolution projectors.</p>
<p>Our mission was to give user all interface possibilities, but at what cost?.</p>
<ul>
<li>Who uses the interface?</li>
<li>How is going to be used?</li>
<li>How to display the information?</li>
<li>How to show the interactivity?</li>
<li>What devices will use the interface?</li>
<li>This device, how does process images in high definition?</li>
<li>Can it process large quantity of data?</li>
</ul>
<p>After a thorough analysis and study, I will explain some basic ideas for programming interfaces; every day new mobile handsets come to the market with small-size displays and interactive devices embedded. At the same time large high resolution screens connected to super-computers. To all this we must provide a solution, we must be prepared.</p>
<p>But before I continue I'd like explain what I mean by interactive interface. It is the user interactive framework to enrich the user experience. In this framework we can use those devices and elements that provide the connection terminal with digital information.</p>
<p>I structured this set of writings following:</p>
<ol>
<li>Server, network, code and files.</li>
<li>Device.</li>
<li>Interface.</li>
<li>User.</li>
<li>Context and environment.</li>
</ol>
<p>I think this is the best way to explain what we should keep in mind when designing an interactive interface and reach users in the best way.</p>
<p>Let's start now...</p>
<h1>1. Server, network, code and files.</h1>
<p>I will not go into detail on what is the best programming language for devices and the type of information to be processed. We must care is about anything that we send to the user, all that is processed at client-side. My explanations are based in interactive web interface so I consider these skills necessary:</p>
<ul>
<li>Data (<a title="HTML" href="http://en.wikipedia.org/wiki/Html" target="_blank">HTML</a>)</li>
<li>Style (<a title="CSS" href="http://en.wikipedia.org/wiki/CSS" target="_blank">CSS</a>)</li>
<li>Interaction (<a title="JavaScript" href="http://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>)</li>
<li>Files/information (Images, libraries, ...)</li>
</ul>
<p>When a user browses our site, receives all (or some) of the above points, but we know nothing of the user; what connectivity he/she/it has? What device is used? What screen is using this device? Memory? Processor?</p>
<p>The best way to answer the questions is from the idea that the user has the slowest device and the worst possible conection bandwith. We can asure this by following these points;</p>
<ul>
<li>Remember to minimize and/or compress <a title="csscompressor" href="http://www.csscompressor.com/" target="_blank">CSS</a> and <a title="minifyjavascript" href="http://www.minifyjavascript.com/" target="_blank">JavaScript</a> files to save bandwidth and speed the experience.</li>
<li>Use images in the correct web format; PNG, SVG, GIF or JPEG.</li>
<li>Merge images into a single two-dimensional image (<a title="Sprites" href="http://en.wikipedia.org/wiki/Sprite_ (computer_graphics) # Sprites_by_CSS" target="_blank">sprites</a>) to reduce waiting time when downloading files.</li>
<li>Limiting dependencies to libraries (jquery = 93kb, 56kb emberjs = ...).</li>
<li>Prioritize the use of CSS3 over extra files like images used for curved corners.</li>
<li>Use correct HTTP headers to asure proper use of the browser <a title="Cache" href="http://www.mobify.com/blog/beginners-guide-to-http-cache-headers/" target="_blank">cache</a>.</li>
<li>Use <a title="AppCache" href="https://en.wikipedia.org/wiki/AppCache" target="_blank">AppCache</a> HTML5 when possible.</li>
<li>Change icons to <a title="icomoon" href="http://icomoon.io/" target="_blank">fonts</a> and reduce downloadable information sources.</li>
</ul>
<p>Remember also that our server can send selective files to the client. This technique deserves a new entry but as an example, this technique allows us to send the customer a picture of low/medium/high resolution with a single query; what screen resolution allows client? I recommend knowing tools like <a title="Adaptative Images" href="http://adaptive-images.com/" target="_blank">Adaptive Images</a>, a server-side library for detecting screen size at client-side.</p>
<p>In my next post I will write about devices and their components, components that can give us a lot of information but we must know how to process it in order to help the user and don't disturb his/hers/its experience.</p>
<p><!--:--></p>

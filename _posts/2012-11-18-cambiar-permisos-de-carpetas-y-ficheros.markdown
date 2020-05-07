---
layout: post
status: publish
published: true
title: "<!--:es-->Cambiar permisos de carpetas y ficheros<!--:-->"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->instrucciones para cambiar permisos en sistemas _X de una forma
  recursiva<!--:-->"
date: '2012-11-18 12:24:40 +0000'
categories:
- My Blog
tags:
- it
- linux
- shell
comments: []
---
<p><!--:es-->Para cambiar permisos a nivel de sistema de una forma recursiva uso las siguientes dos lineas:</p>
<pre>chmod -R 0775 *
chmod 0664 $(find . ! -type d)
</pre>
<p>La primera linea cambia todos los archivos y carpetas a 775 (<a title="Notaci&oacute;n Octal" href="es.wikipedia.org/wiki/Permisos_de_acceso_a_archivos#Notaci.C3.B3n_octal" target="_blank">notaci&oacute;n octal</a>) y la segunda cambia todos los archivos a 664. De esta manera obtengo:</p>
<pre>&minus;rw&minus;rw&minus;r&minus;&minus; 1 carles apache 3177 Nov 18 08:41 wp&minus;config&minus;sample.php
drwxrwxr&minus;x 10 carles apache 4096 Nov 18 08:42 wp&minus;content
&minus;rw&minus;rw&minus;r&minus;&minus; 1 carles apache 2726 Nov 18 08:42 wp&minus;cron.php
drwxrwxr&minus;x 8 carles apache 4096 Nov 18 08:42 wp&minus;includes</pre>
<p><!--:--></p>

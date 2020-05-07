---
layout: post
status: publish
published: true
title: "<!--:es-->Cambiar los permisos de ficheros y carpetas automaticamente<!--:-->"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Script para cambiar los permisos de ficheros y carpetas automaticamente
  en una carpeta específica.<!--:-->"
date: '2013-05-17 20:19:27 +0000'
categories:
- My Blog
tags:
- it
- linux
- server
- shell
comments: []
---
<p><!--:es-->continuamente me encuentro tocando varios sistemas <a title="Unix-like" href="http://es.wikipedia.org/wiki/Unix-like" target="_blank">*niX</a> que comparten un similar sistema de ficheros. al trabajar con ficheros del <a title="Servidor Web Apache" href="http://es.wikipedia.org/wiki/Servidor_HTTP_Apache" target="_blank">servidor web</a>, los <a title="Permisos tradicionales en sistemas UNIX/LINUX" href="http://es.wikipedia.org/wiki/Permisos_de_acceso_a_archivos" target="_blank">permisos</a> para usuario, grupo y otros se corrompen. para solucionar esto he creado un peque&ntilde;o script bash que me permite automatizar el cambio de propietario y grupo as&iacute; como los permisos de ficheros y carpetas.</p>
<p>los comandos b&aacute;sicos para realizar esta operaci&oacute;n son <a title="chown man page" href="http://man7.org/linux/man-pages/man2/chown.2.html" target="_blank">chown</a> y <a title="chmod man page" href="http://man7.org/linux/man-pages/man2/chmod.2.html" target="_blank">chmod</a>.</p>
<p>el script seria el siguiente:</p>
<pre>#!/bin/bash
echo "folder: $1"
chown -Rf [usuario]:[grupo] .
chmod -R [carpetas] *
chmod [ficheros] $(find . ! -type d)</pre>
<p>mi configuraci&oacute;n correcta de <code>/var/www</code> es:</p>
<pre>[usuario]: www-data
[grupo]: www-data
[carpetas]: 0775
[ficheros]: 0664</pre>
<p>y lanzamos el script de la siguiente manera:</p>
<p><code>sudo bash nombre-del-script.sh /carpeta/corrupta/a/cambiar</code></p>
<p>en resumen...</p>
<p>nombre del script: <code>change-www.sh</code>:</p>
<pre>#!/bin/bash
echo "folder: $1"
chown -Rf www-data:www-data .
chmod -R 0775 *
chmod 0664 $(find . ! -type d)</pre>
<p>comando de ejecuci&oacute;n:</p>
<p><code>sudo bash change-www.sh /var/www</code></p>
<p>saludos.<!--:--><!--:en--><!--wp_fromhtmlpreview_devfmt-->
<p><!--wp_fromhtmlpreview_devfmt--></p>
<p><!--wp_fromhtmlpreview_devfmt--></p>
<p><!--wp_fromhtmlpreview_devfmt--></p>
<p><!--wp_fromhtmlpreview_devfmt--></p>
<p><!--wp_fromhtmlpreview_devfmt--></p>
<p><!--wp_fromhtmlpreview_devfmt--></p>
<p><!--wp_fromhtmlpreview_devfmt--></p>
<p><!--wp_fromhtmlpreview_devfmt--></p>
<p><!--wp_fromhtmlpreview_devfmt--></p></p>
<p><!--:--></p>

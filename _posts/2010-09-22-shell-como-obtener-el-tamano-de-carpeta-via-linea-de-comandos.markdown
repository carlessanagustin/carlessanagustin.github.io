---
layout: post
status: publish
published: true
title: "<!--:es-->Shell: como obtener el tama&ntilde;o de carpeta v&iacute;a linea
  de comandos<!--:-->"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
date: '2010-09-22 14:56:00 +0000'
categories:
- Blog
tags:
- it
- linux
- shell
comments: []
---
<p><!--:es-->Esta semana me&nbsp;encontr&eacute;&nbsp;con la necesidad de saber las dimensiones de cada carpeta en un sistema linux. Gracias a la ayuda de mi compa&ntilde;ero <a href="http://oriolrius.cat/">Oriol</a> pude mostrar la carpeta con m&aacute;s uso de disco del sistema. Las instrucciones son correctas para Linux, BSD y OSX. El comando muestra el tama&ntilde;o de todos los archivos y carpetas de la carpeta donde se llama <em>duf</em>. A continuaci&oacute;n detallo los comandos usados.</p>
<p>Introducimos</p>
<pre># alias duf='du -sk * | sort -n | while read size fname; do for unit in k M G T P E Z Y; do if [ $size -lt 1024 ]; then echo -e "${size}${unit}t${fname}"; break; fi; size=$((size/1024)); done; done'</pre>
<p>Nos situamos en la carpeta que queremos consultar e introducimos</p>
<pre># duf</pre>
<p>Esta &uacute;ltima operaci&oacute;n se puede repetir en cada carpeta de la que necesitemos saber su tama&ntilde;o.</p>
<p>Ejemplo:</p>
<p>Introducimos...</p>
<pre># alias duf=&rsquo;du -sk * | sort -n | while read size fname; do for unit in k M G T P E Z Y; do if [ $size -lt 1024 ]; then echo -e &ldquo;${size}${unit}t${fname}&rdquo;; break; fi; size=$((size/1024)); done; done&rsquo;
# cd /
# duf</pre>
<p>Respuesta...</p>
<pre>0kproc
0ksys
4ksrv
20klost+found
6Mbin
6Mboot
19Mtmp
20Msbin
29Mroot
86Mlib
118Metc
319Mdev
328Mvar
727Mhome
1Gmnt
2Gusr
2Gopt
</pre>
<p><!--:--></p>

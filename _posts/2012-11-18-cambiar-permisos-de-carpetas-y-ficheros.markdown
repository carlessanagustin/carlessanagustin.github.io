---
layout: post
status: publish
published: true
title: "Cambiar permisos de carpetas y ficheros"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->instrucciones para cambiar permisos en sistemas _X de una forma
  recursiva<!--:-->"
date: '2012-11-18 12:24:40 +0000'
categories:
- Blog
tags:
- linux
- shell
comments: []
---
Para cambiar permisos a nivel de sistema de una forma recursiva uso las siguientes dos lineas:

```shell
chmod -R 0775 *
chmod 0664 $(find . ! -type d)
```

La primera linea cambia todos los archivos y carpetas a 775 ([notación octal](es.wikipedia.org/wiki/Permisos_de_acceso_a_archivos#Notaci.C3.B3n_octal "Notación Octal")) y la segunda cambia todos los archivos a 664\. De esta manera obtengo:

```shell
−rw−rw−r−− 1 carles apache 3177 Nov 18 08:41 wp−config−sample.php
drwxrwxr−x 10 carles apache 4096 Nov 18 08:42 wp−content
−rw−rw−r−− 1 carles apache 2726 Nov 18 08:42 wp−cron.php
drwxrwxr−x 8 carles apache 4096 Nov 18 08:42 wp−includes
```

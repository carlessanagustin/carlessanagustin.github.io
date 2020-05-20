---
layout: post
status: publish
published: true
title: "Cambiar los permisos de ficheros y carpetas automaticamente"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Script para cambiar los permisos de ficheros y carpetas automaticamente
  en una carpeta específica.<!--:-->"
date: '2013-05-17 20:19:27 +0000'
categories:
- Blog
tags:
- linux
- server
- shell
comments: []
---
continuamente me encuentro tocando varios sistemas [*niX](http://es.wikipedia.org/wiki/Unix-like "Unix-like") que comparten un similar sistema de ficheros. al trabajar con ficheros del [servidor web](http://es.wikipedia.org/wiki/Servidor_HTTP_Apache "Servidor Web Apache"), los [permisos](http://es.wikipedia.org/wiki/Permisos_de_acceso_a_archivos "Permisos tradicionales en sistemas UNIX/LINUX") para usuario, grupo y otros se corrompen. para solucionar esto he creado un pequeño script bash que me permite automatizar el cambio de propietario y grupo así como los permisos de ficheros y carpetas.

los comandos básicos para realizar esta operación son [chown](http://man7.org/linux/man-pages/man2/chown.2.html "chown man page") y [chmod](http://man7.org/linux/man-pages/man2/chmod.2.html "chmod man page").

el script seria el siguiente:

```shell
#!/bin/bash
echo "folder: $1"
chown -Rf [usuario]:[grupo] .
chmod -R [carpetas] *
chmod [ficheros] $(find . ! -type d)
```

mi configuración correcta de `/var/www` es:

```shell
[usuario]: www-data
[grupo]: www-data
[carpetas]: 0775
[ficheros]: 0664
```

y lanzamos el script de la siguiente manera:

`sudo bash nombre-del-script.sh /carpeta/corrupta/a/cambiar`

en resumen...

nombre del script: `change-www.sh`:

```shell
#!/bin/bash
echo "folder: $1"
chown -Rf www-data:www-data .
chmod -R 0775 *
chmod 0664 $(find . ! -type d)
```

comando de ejecución:

`sudo bash change-www.sh /var/www`

saludos.
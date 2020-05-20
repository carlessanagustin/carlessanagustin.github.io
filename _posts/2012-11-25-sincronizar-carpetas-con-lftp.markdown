---
layout: post
status: publish
published: true
title: "Sincronizar carpetas con lftp"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Sincronizar carpetas usando LFTP.<!--:-->"
date: '2012-11-25 10:00:33 +0000'
categories:
- Blog
tags:
- linux
- sync
- ftp
comments:
- id: 227
  author: Gabriel
  author_url: http://Web*
  date: '2013-01-19 16:47:58 +0000'
  content: Ets un Crack moltes Gracies maco!
---
Para sincronizar carpetas entre local y remoto podemos usar las siguientes instrucciones.

Para descargar todo el contenido remoto a nuestra carpeta local (nombre de archivo: downsync.lftp)

```shell
open -u {usuario},{contraseña} {servidor}
mirror -c -e {carpeta remota} {carpeta local}
exit
```

Para subir todo el contenido de nuestra carpeta local al sistema remoto (nombre de archivo: upsync.lftp)

```shell
open -u {usuario},{contraseña} {servidor}
mirror -c -e -R {carpeta local} {carpeta remota}
exit
```

La opción -R es la encargada de subir el contenido (_reverse mirror_)

Para realizar las operaciones:

`lftp -f upsync.lftp`

Para más información sobre lftp podeis consultar su manual [aquí](http://lftp.yar.ru/lftp-man.html "LFTP man page").
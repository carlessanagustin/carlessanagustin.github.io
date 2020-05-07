---
layout: post
status: publish
published: true
title: "<!--:es-->Sincronizar carpetas con lftp<!--:-->"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Sincronizar carpetas usando LFTP.<!--:-->"
date: '2012-11-25 10:00:33 +0000'
categories:
- My Blog
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
<p><!--:es-->Para sincronizar carpetas entre local y remoto podemos usar las siguientes instrucciones.</p>
<p>Para descargar todo el contenido remoto a nuestra carpeta local (nombre de archivo: downsync.lftp)</p>
<pre>open -u {usuario},{contrase&ntilde;a} {servidor}
mirror -c -e {carpeta remota} {carpeta local}
exit</pre>
<p>Para subir todo el contenido de nuestra carpeta local al sistema remoto (nombre de archivo: upsync.lftp)</p>
<pre>open -u {usuario},{contrase&ntilde;a} {servidor}
mirror -c -e -R {carpeta local} {carpeta remota}
exit</pre>
<p>La opci&oacute;n -R es la encargada de subir el contenido (<em>reverse mirror</em>)</p>
<p>Para realizar las operaciones:</p>
<pre>lftp -f upsync.lftp</pre>
<p>Para m&aacute;s informaci&oacute;n sobre lftp podeis consultar su manual <a title="LFTP man page" href="http://lftp.yar.ru/lftp-man.html" target="_blank">aqu&iacute;</a>.<!--:--><!--:en--><!--wp_fromhtmlpreview_devfmt-->
<p><!--wp_fromhtmlpreview_devfmt--></p>
<p><!--wp_fromhtmlpreview_devfmt--></p>
<p><!--wp_fromhtmlpreview_devfmt--></p></p>
<p><!--:--></p>

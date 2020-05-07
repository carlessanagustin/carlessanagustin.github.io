---
layout: post
status: publish
published: true
title: "<!--:es-->Incrustar videos youtube<!--:-->"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Instrucciones para incrustar vídeos Youtube usando la API de Google<!--:-->"
date: '2013-05-29 18:23:35 +0000'
categories:
- My Blog
tags:
- it
- javascript
- jquery
- youtube
- google
comments: []
---
<p><!--:es-->youtube tiene una api javascript que nos permite consultar informaci&oacute;n de su contenido y enlazarlo con nuestro site entre otras cosas. recientemente me encontr&eacute; con la tarea de programar contenido din&aacute;mico de un canal youtube y para ello primero mir&eacute; su libreria <a title="YouTube JavaScript Player API Reference" href="https://developers.google.com/youtube/js_api_reference" target="_blank">api</a>.</p>
<p>aqu&iacute; podremos encontrar toda la documentaci&oacute;n necesaria para usar la api a nuestro placer. en ella encontr&eacute; como mostrar un v&iacute;deo embeded via tag <a title="ouTube Player API Reference for iframe Embeds" href="https://developers.google.com/youtube/iframe_api_reference?hl=en" target="_blank">iframe</a> de html</p>
<p>en la documentaci&oacute;n tambi&eacute;n se pueden encontrar instrucciones para obtener la informaci&oacute;n de los v&iacute;deos del canal. esta informaci&oacute;n me era &uacute;til para saber que mostrar. para esto youtube ofrece su informaci&oacute;n en json mediante consultas <a title="Developer's Guide: JSON / JavaScript" href="https://developers.google.com/youtube/2.0/developers_guide_json?hl=en" target="_blank">ajax</a>. este sistema nos ofrece informaci&oacute;n como: duraci&oacute;n del v&iacute;deo, nombre, descripci&oacute;n, ubicaci&oacute;n, ratio, ...</p>
<p>ya tenia el "como" (iframe) y el "que" (json), ahora solo me faltavan las herramientas. para esta finalidad us&eacute; el framework jquery que permite variedad de funcionalidades. para poder realizar las operaciones siguientes estudi&eacute; las instrucciones anteriores pero ant&eacute;s defin&iacute; la finalidad y funcionalidad.</p>
<p>el objetivo de esta tarea era hacer un contenedor (A) con un v&iacute;deo principal en tama&ntilde;o grande acompa&ntilde;ado de otro contenedor (B) con el listado de imagenes de los v&iacute;deos del canal youtube.</p>
<p>interactividad:</p>
<ul>
<li>player de v&iacute;deo en A</li>
<li>click encima de cada una de las im&aacute;genes de B para mostrar el v&iacute;deo adjunto en A.</li>
</ul>
<p>la interactividad del player viene ya dada por el iframe del api de youtube. el api me permiti&oacute; configurar par&aacute;metros del player como las dimensiones y el borde. pero para dar acci&oacute;n a las im&aacute;genes primero deb&iacute;a conocer la informaci&oacute;n del canal.</p>
<p>el iframe b&aacute;sico deseado requiere de la url del v&iacute;deo, los atributos del player y las dimensiones de este:</p>
<p><a href="/images/posts/01-iframe.png"><img class="size-full wp-image-1503 alignnone" alt="" src="/images/posts/01-iframe.png" width="988" height="42" /></a></p>
<p>el atributo src contiene la url del v&iacute;deo principal. la variable javascript id contiene el id del v&iacute;deo a mostrar que la obtuve de la siguiente manera:</p>
<p><a href="/images/posts/02-li.png"><img class="size-full wp-image-1510 alignnone" alt="" src="/images/posts/02-li.png" width="471" height="86" /></a></p>
<p>aqu&iacute; formamos un elemento de la lista de v&iacute;deos con su identificador, la imagen thumbnail, el t&iacute;tulo y la descripci&oacute;n. cada elemento de la lista va marcado con el id del v&iacute;deo a mostrar.</p>
<p>para obtener la informaci&oacute;n anterior hice una consulta ajax al listado del canal y trat&eacute; cada elemento seg&uacute;n sus funciones:</p>
<p><a href="/images/posts/03-getjson.png"><img class="alignnone size-full wp-image-1513" alt="" src="/images/posts/03-getjson.png" width="481" height="225" /></a></p>
<p>la variable playListURL contiene la URL del canal de youtube, la variable json es la que contiene la informaci&oacute;n de todos los v&iacute;deos y a trav&eacute;s de la funci&oacute;n each de jquery cada &iacute;tem contiene la informaci&oacute;n de un v&iacute;deo. en formato matem&aacute;tico: elemento = &iacute;tem = json.data.&iacute;tems[x].</p>
<p>una consulta ajax de jquery es as&iacute;ncrona por lo que a&ntilde;ad&iacute; la acci&oacute;n del click al terminar de procesar el listado. esta acci&oacute;n cambia el atributo src de la url pasa a tener el id clickado.</p>
<p><a href="/images/posts/04-ul.png"><img class="alignnone size-full wp-image-1514" alt="acci&oacute;n del click" src="/images/posts/04-ul.png" width="530" height="62" /></a></p>
<p>y con todo lo anterior y algunos arreglos m&aacute;s pude conseguir mi objetivo.</p>
<p><a title="Resultado final" href="http://carlessanagustin.com/Snippets/youtube/" target="_blank">aqu&iacute;</a> ten&eacute;is el resultado obtenido. adjunto el <a title="Snippet Youtube" href="http://carlessanagustin.com/Snippets/youtube/index.txt" target="_blank">c&oacute;digo</a> por si alguien quiere verlo y mejorarlo.</p>
<p>saludos.<!--:--></p>

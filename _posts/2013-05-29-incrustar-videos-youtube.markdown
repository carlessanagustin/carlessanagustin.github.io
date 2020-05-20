---
layout: post
status: publish
published: true
title: "Incrustar videos youtube"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Instrucciones para incrustar vídeos Youtube usando la API de Google<!--:-->"
date: '2013-05-29 18:23:35 +0000'
categories:
- Blog
tags:
- javascript
- jquery
- youtube
- google
comments: []
---
youtube tiene una api javascript que nos permite consultar información de su contenido y enlazarlo con nuestro site entre otras cosas. recientemente me encontré con la tarea de programar contenido dinámico de un canal youtube y para ello primero miré su libreria [api](https://developers.google.com/youtube/js_api_reference "YouTube JavaScript Player API Reference").

aquí podremos encontrar toda la documentación necesaria para usar la api a nuestro placer. en ella encontré como mostrar un vídeo embeded via tag [iframe](https://developers.google.com/youtube/iframe_api_reference?hl=en "ouTube Player API Reference for iframe Embeds") de html

en la documentación también se pueden encontrar instrucciones para obtener la información de los vídeos del canal. esta información me era útil para saber que mostrar. para esto youtube ofrece su información en json mediante consultas [ajax](https://developers.google.com/youtube/2.0/developers_guide_json?hl=en "Developer's Guide: JSON / JavaScript"). este sistema nos ofrece información como: duración del vídeo, nombre, descripción, ubicación, ratio, ...

ya tenia el "como" (iframe) y el "que" (json), ahora solo me faltavan las herramientas. para esta finalidad usé el framework jquery que permite variedad de funcionalidades. para poder realizar las operaciones siguientes estudié las instrucciones anteriores pero antés definí la finalidad y funcionalidad.

el objetivo de esta tarea era hacer un contenedor (A) con un vídeo principal en tamaño grande acompañado de otro contenedor (B) con el listado de imagenes de los vídeos del canal youtube.

interactividad:

*   player de vídeo en A
*   click encima de cada una de las imágenes de B para mostrar el vídeo adjunto en A.

la interactividad del player viene ya dada por el iframe del api de youtube. el api me permitió configurar parámetros del player como las dimensiones y el borde. pero para dar acción a las imágenes primero debía conocer la información del canal.

el iframe básico deseado requiere de la url del vídeo, los atributos del player y las dimensiones de este:

[![](/images/posts/01-iframe.png)](/images/posts/01-iframe.png)

el atributo src contiene la url del vídeo principal. la variable javascript id contiene el id del vídeo a mostrar que la obtuve de la siguiente manera:

[![](/images/posts/02-li.png)](/images/posts/02-li.png)

aquí formamos un elemento de la lista de vídeos con su identificador, la imagen thumbnail, el título y la descripción. cada elemento de la lista va marcado con el id del vídeo a mostrar.

para obtener la información anterior hice una consulta ajax al listado del canal y traté cada elemento según sus funciones:

[![](/images/posts/03-getjson.png)](/images/posts/03-getjson.png)

la variable playListURL contiene la URL del canal de youtube, la variable json es la que contiene la información de todos los vídeos y a través de la función each de jquery cada ítem contiene la información de un vídeo. en formato matemático: elemento = ítem = json.data.ítems[x].

una consulta ajax de jquery es asíncrona por lo que añadí la acción del click al terminar de procesar el listado. esta acción cambia el atributo src de la url pasa a tener el id clickado.

[![acción del click](/images/posts/04-ul.png)](/images/posts/04-ul.png)

y con todo lo anterior y algunos arreglos más pude conseguir mi objetivo.

[aquí](http://carlessanagustin.com/Snippets/youtube/ "Resultado final") tenéis el resultado obtenido. adjunto el [código](http://carlessanagustin.com/Snippets/youtube/index.txt "Snippet Youtube") por si alguien quiere verlo y mejorarlo.

saludos.
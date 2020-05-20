---
layout: post
status: publish
published: true
title: Realzar los ojos de nuestras fotografias
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
date: '2012-05-07 17:49:27 +0000'
categories:
- Blog
tags:
- photography
- photoshop
comments: []
---
Para este tutorial usaré [Photoshop](http://www.adobe.com/es/products/photoshopfamily.html "Photoshop") (actualmente CS5). Para empezar debemos conocer las partes que componen un ojo y las operaciones de retoque que en estas se pueden hacer.

A continuación, la imagen de un ojo. En ella nos falta la ceja y las pestañas también importantes para el retoque fotográfico.

[![ojo](/images/posts/ojo.png "ojo")](/images/posts/ojo.png)

Las acciones posibles a realizar son:

*   Cambiar color: Iris.
*   Iluminar.
*   Agudizar detalles.
*   Cambiar tamaño.
*   Blanquear: Esclerótica.
*   Bordes: Iris.

#### Cambiar color

1.  Image > Adjustments > Replace Color y usar la herramienta Eyedropper en combinación con Fuzziness para seleccionar la parte deseada a cambiar.
2.  Crear nueva capa de Color Solido en [blend mode](http://www.myinkblog.com/an-explanation-of-photoshop-blend-modes/ "An Explanation of Photoshop Blend Modes") Color y aplicar mascara para esconder la parte no deseada. Aplicar opacidad para finalizar.

#### Iluminar

Siguiendo una estructura de capas correcta y aplicando mascaras donde se necesite:

1.  Copiar la capa original en Screen [blend mode](http://en.wikipedia.org/wiki/Blend_modes "Blend modes@Wikipedia"). Con mascara eliminamos lo innecesario. Con opacidad buscamos el resultado deseado.
2.  Crear nueva capa de curvas y jugar con el blend mode deseado o combinación de ellos (Normal, Soft Light o Screen).

####  Agudizar detalles

Tenemos dos opciones:

1.  Usar Filter>Sharpening
2.  Copiar la capa original y aplicar Filter High Pass (entre 0.5 y 1.0) en blend mode Soft Light. Eliminar la saturación para quitar todo color y quedarnos con lo que nos interesa, el contorno.

#### Cambiar tamaño (hollywood eyes)

1.  Seleccionar los ojos y copiarlos en una nueva capa. A esta capa le aplicamos un Free Transform de ampliación del 105% tanto de Height como de Width. Con mascara eliminamos lo innecesario.
2.  Usamos Filter > Liquify.

#### Blanquear

En una nueva capa usamos al herramienta Clone en modo Color sobre las lineas rojas de los ojos. Creando una nueva capa de curvas terminamos de dar el blanco deseado.

#### Bordes

En una nueva capa en blend mode Soft Light usamos la herramienta Brush para dibujar una fina linea al contorno del Iris. Después aplicamos un Filter > Blur > Gaussian Blur a esta última operación.

Podemos usar esta misma técnica para retocar pestañas eliminando la última parte, el Gaussian Blur.

Para dar más densidad a las cejas podemos copiar la selección de estas en  una nueva capa y convertir la capa a blend mode Multiply o Soft Light.

Doy por asumido que el lector sabe usar Photoshop, es por esto que no he entrado en detalles. Recordad las posibilidades que tenemos jugando con capas, mascaras y opacidades.

Más sobre [blend modes](http://www.photoshopessentials.com/photo-editing/layer-blend-modes/ "Photoshop's Five Essential Blend Modes For Photo Editing").

Saludos!
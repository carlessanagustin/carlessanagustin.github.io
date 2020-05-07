---
layout: post
status: publish
published: true
title: "<!--:es-->Mi primera experiencia con Parallax<!--:--><!--:en-->My first experience
  with Parallax<!--:-->"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Mi primera experiencia con el efecto Parallax y la libreria Stellar.js<!--:--><!--:en-->My
  first experience with the Parallax effect and Stellar.js library.<!--:-->"
date: '2013-08-21 18:00:55 +0000'
categories:
- My Blog
tags:
- jquery
- parallax
- stellarjs
- easing
comments:
- id: 635
  author: seo marketing company
  author_url: ''
  date: '2014-04-07 05:47:43 +0000'
  content: "I really like reading through an article that will make people think.\r\nAlso,
    thanks for allowing me to comment!"
---
<p><!--:es-->He probado de programar una nueva tendencia en dise&ntilde;o web: <a href="http://en.wikipedia.org/wiki/Parallax_scrolling" target="_blank">Parallax</a>. Se basa en el <a href="http://en.wikipedia.org/wiki/Parallax" target="_blank">concepto</a> de la f&iacute;sica de un desplazamiento o una diferencia en la posici&oacute;n aparente de un objeto visto a lo largo de dos l&iacute;neas diferentes de la vista. Hoy en d&iacute;a, muchos<a href="http://www.awwwards.com/websites/parallax/" target="_blank"> sitios web</a> est&aacute;n dise&ntilde;ados siguiendo esta regla que crea el efecto de movimiento en 3D cuando se desplaza horizontal o verticalmente.</p>
<p>Para el ejemplo creado us&eacute; las librerias&nbsp;<a href="http://markdalgleish.com/projects/stellar.js/" target="_blank">Stellar.js</a>, <a title="jQuery Easing Plugin" href="http://gsgd.co.uk/sandbox/jquery/easing/" target="_blank">jQuery Easing</a> y <a href="http://yuilibrary.com/yui/docs/cssreset/" target="_blank">YUI CSS 3</a>; Stellar genera el efecto Parallax, Easing para dar opciones avanzadas de <a title="easings" href="http://easings.net/" target="_blank">movimiento flexible</a> a <a title="jQuery" href="http://jquery.com/" target="_blank">jQuery</a>&nbsp;y YUI3 resetea el CSS del navegador.</p>
<p><a title="carlessanagustin.com parallax1" href="http://carlessanagustin.com/showroom/parallax1/" target="_blank">Demo</a>.</p>
<p>[iframe src = "http://carlessanagustin.com/showroom/parallax1/" href = "700" = "700"]</p>
<p>Al desplazarse por la interfaz podemos llegar a diferentes diapositivas y experimentar el efecto Parallax. En la parte HTML encontraremos los datos estructurados en est&aacute;tico y diapositiva. Los datos est&aacute;ticos es contenido repetitivo como la lista del men&uacute; de la izquierda y el logotipo en el centro de la p&aacute;gina. Mientras que las diapositivas son un grupo de 5 divs con objetos en movimiento y otros contenidos est&aacute;ticos para cada una de las diapositivas. Los datos est&aacute;ticos est&aacute; fuera de cualquier Stellar.js div. Una diapositiva en general:</p>
<pre name="code" class="html">
<div class="slide" id="slide0" data-slide="YYY" data-stellar-background-ratio="XXX">
	<span class="parallaxbg"><p>some text here</p></span>
	<span class="slideno">title</span>
	<div class="wrapper">
		<img src="#" data-stellar-ratio="XXX" data-stellar-vertical-offset="XXX" data-stellar-horizontal-offset="XXX">
		<img src="#" data-stellar-ratio="XXX" data-stellar-vertical-offset="XXX" data-stellar-horizontal-offset="XXX">
		<a class="button" data-slide="YYY+1" title="Next"></a>
</div>
</pre>
<ol>
<li><i>div.slide:</i> Contiene el contenido general de una diapositiva.</li>
<li><i>div.slide span:</i> Contiene texto formatado.</li>
<li><i>div.slide div.wrapper:</i> Contiene elementos Parallax como im&aacute;genes y botones.</li>
</ol>
<p>Los atributos HTML son particulares de Stellar.js. Para m&aacute;s informaci&oacute;n sugiero leer su <a href="http://markdalgleish.com/projects/stellar.js/docs/" title="Stellar.js Documentation" target="_blank">documentaci&oacute;n</a>.</p>
<pre name="code" class="js">
function goToByScroll(dataslide) {
	htmlbody.animate({
	scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
	}, 2000, 'easeInOutQuint');
}
links.click(function (e) {
	e.preventDefault();
	dataslide = $(this).attr('data-slide');
	goToByScroll(dataslide);
});
</pre>
<ol>
<li><i>goToByScroll function:</i> Funci&oacute;n general del movimiento entre diapositivas.</li>
<li><i>click function:</i> Acci&oacute;n de click para los botones. Envia al usuario a la diapositiva seleccionada.</li>
</ol>
<p>He usado el CSS para dar estilo y posicionamiento de elementos.</p>
<p>Como me ha gustado la experiencia, voy a seguir estudiando el efecto Parallax y espero a publicar m&aacute;s art&iacute;culos.<br />
Saludos.<!--:--><!--:en-->I tryed a new web design development trend: <a title="Parallax scrolling" href="http://en.wikipedia.org/wiki/Parallax_scrolling" target="_blank">Parallax</a>. It is based on the physics <a title="Parallax" href="http://en.wikipedia.org/wiki/Parallax" target="_blank">concept</a> of&nbsp;a displacement or difference in the&nbsp;apparent position&nbsp;of an object viewed along two different lines of sight. Nowadays many <a title="Best Parallax websites" href="http://www.awwwards.com/websites/parallax/" target="_blank">websites</a> are designed following this rule that creates the effect of movement in 3D when scrolling horizontally or vertically.</p>
<p>For the created example I used <a title="Stellar.js" href="http://markdalgleish.com/projects/stellar.js/" target="_blank">Stellar.js</a>,&nbsp;<a title="jQuery Easing Plugin" href="http://gsgd.co.uk/sandbox/jquery/easing/" target="_blank">jQuery Easing</a>&nbsp;and&nbsp;<a title="YUI 3 CSS Reset" href="http://yuilibrary.com/yui/docs/cssreset/" target="_blank">YUI 3 CSS Reset</a> libraries; Stellar does the Parallax effect, Easing to give <a title="jQuery" href="http://jquery.com/" target="_blank">jQuery</a> advanced <a title="easings" href="http://easings.net/" target="_blank">easing</a> options&nbsp;and YUI3 does reset browser CSS.</p>
<p><a title="carlessanagustin.com parallax1" href="http://carlessanagustin.com/showroom/parallax1/" target="_blank">Demo</a>.</p>
<p>[iframe src="http://carlessanagustin.com/showroom/parallax1/" width="700" height="700"]</p>
<p>When scrolling the interface we can reach to different slides and experience the Parallax effect. In the HTML side we'll find the data structured in static and slices. The static data is repeating contents as the menu list on the left and the logo on the middle of the page. While the slides are a group of 5 divs with movement objects and other static contents for each of the slides. Static data is out of any Stellar.js div. A general slide:</p>
<pre name="code" class="html">
<div class="slide" id="slide0" data-slide="YYY" data-stellar-background-ratio="XXX">
	<span class="parallaxbg"><p>some text here</p></span>
	<span class="slideno">title</span>
	<div class="wrapper">
		<img src="#" data-stellar-ratio="XXX" data-stellar-vertical-offset="XXX" data-stellar-horizontal-offset="XXX">
		<img src="#" data-stellar-ratio="XXX" data-stellar-vertical-offset="XXX" data-stellar-horizontal-offset="XXX">
		<a class="button" data-slide="YYY+1" title="Next"></a>
</div>
</pre>
<ol>
<li><i>div.slide:</i> Contains the main contents of a slide.</li>
<li><i>div.slide span:</i> Contains formated text.</li>
<li><i>div.slide div.wrapper:</i> Contains Parallax elements like images and buttons.</li>
</ol>
<p>HTML attributes are particular to Stellar.js. I suggest reading its <a href="http://markdalgleish.com/projects/stellar.js/docs/" title="Stellar.js Documentation" target="_blank">documentation</a>.</p>
<pre name="code" class="js">
function goToByScroll(dataslide) {
	htmlbody.animate({
	scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
	}, 2000, 'easeInOutQuint');
}
links.click(function (e) {
	e.preventDefault();
	dataslide = $(this).attr('data-slide');
	goToByScroll(dataslide);
});
</pre>
<ol>
<li><i>goToByScroll function:</i> Easing animation effect general function.</li>
<li><i>click function:</i> Click action for each of the cases. It sends the interface to the requested slide.</li>
</ol>
<p>I used CSS for stying and positioning the elements.</p>
<p>As I liked the experience, I will continue studing the Parallax effect and hopefully will publish more posts.<br />
Regards.<!--:--></p>

---
layout: post
status: publish
published: true
title: "My first experience with Parallax"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Mi primera experiencia con el efecto Parallax y la libreria Stellar.js<!--:--><!--:en-->My
  first experience with the Parallax effect and Stellar.js library.<!--:-->"
date: '2013-08-21 18:00:55 +0000'
categories:
- Blog
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
I tryed a new web design development trend: [Parallax](http://en.wikipedia.org/wiki/Parallax_scrolling "Parallax scrolling"). It is based on the physics [concept](http://en.wikipedia.org/wiki/Parallax "Parallax") of a displacement or difference in the apparent position of an object viewed along two different lines of sight. Nowadays many [websites](http://www.awwwards.com/websites/parallax/ "Best Parallax websites") are designed following this rule that creates the effect of movement in 3D when scrolling horizontally or vertically.

For the created example I used [Stellar.js](http://markdalgleish.com/projects/stellar.js/ "Stellar.js"), [jQuery Easing](http://gsgd.co.uk/sandbox/jquery/easing/ "jQuery Easing Plugin") and [YUI 3 CSS Reset](http://yuilibrary.com/yui/docs/cssreset/ "YUI 3 CSS Reset") libraries; Stellar does the Parallax effect, Easing to give [jQuery](http://jquery.com/ "jQuery") advanced [easing](http://easings.net/ "easings") options and YUI3 does reset browser CSS.

[Demo](http://carlessanagustin.com/showroom/parallax1/ "carlessanagustin.com parallax1").

TODO
[iframe src="http://carlessanagustin.com/showroom/parallax1/" width="700" height="700"]

When scrolling the interface we can reach to different slides and experience the Parallax effect. In the HTML side we'll find the data structured in static and slices. The static data is repeating contents as the menu list on the left and the logo on the middle of the page. While the slides are a group of 5 divs with movement objects and other static contents for each of the slides. Static data is out of any Stellar.js div. A general slide:

```html
<div class="slide" id="slide0" data-slide="YYY" data-stellar-background-ratio="XXX">
	<span class="parallaxbg">

some text here

</span>
	<span class="slideno">title</span>

<div class="wrapper">
		![](#)
		![](#)
		<a class="button" data-slide="YYY+1" title="Next"></a>
</div>

</div>
```

1.  _div.slide:_ Contains the main contents of a slide.
2.  _div.slide span:_ Contains formated text.
3.  _div.slide div.wrapper:_ Contains Parallax elements like images and buttons.

HTML attributes are particular to Stellar.js. I suggest reading its [documentation](http://markdalgleish.com/projects/stellar.js/docs/ "Stellar.js Documentation").

```javascript
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
```

1.  _goToByScroll function:_ Easing animation effect general function.
2.  _click function:_ Click action for each of the cases. It sends the interface to the requested slide.

I used CSS for stying and positioning the elements.

As I liked the experience, I will continue studing the Parallax effect and hopefully will publish more posts.  
Regards.

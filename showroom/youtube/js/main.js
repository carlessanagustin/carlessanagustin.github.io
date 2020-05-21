/**
 * @author Carles San Agustin
 */
AqualogyClass._playListURL = 'https://gdata.youtube.com/feeds/api/users/GoogleDevelopers/uploads?v=2&alt=jsonc&max-results=5';
AqualogyClass._moreVideos = 'http://www.youtube.com';
AqualogyClass._aqualogy = 'http://www.aqualogy.net';
AqualogyClass._twitter = 'https://twitter.com/infoaqualogy';
AqualogyClass._linkedin = 'http://www.linkedin.com/pub/aqualogy-net-linked-in/46/59b/880';
AqualogyClass._googlemaps = 'https://maps.google.es/maps?f=q&source=s_q&hl=es&geocode=&q=Aqualogy+Sa,+Avenida+Diagonal,+Barcelona&aq=0&oq=AQUALOGY+&sll=41.405158,2.194384&sspn=0.050601,0.089521&vpsrc=6&ie=UTF8&hq=Aqualogy+Sa,&hnear=Avinguda+Diagonal,+Barcelona&ll=41.404513,2.194605&spn=0.01265,0.02238&t=m&z=16&iwloc=A&cid=7082563841956327511';

AqualogyClass._empresaLink1 = "#";
AqualogyClass._empresaText1 = 'Enlace 1';
AqualogyClass._empresaLink2 = "#";
AqualogyClass._empresaText2 = 'Enlace 2';
AqualogyClass._empresaLink3 = "#";
AqualogyClass._empresaText3 = 'Enlace 3';

AqualogyClass._moreNews = 'Más noticias';
AqualogyClass._moreNewsLink = 'http://www.aqualogy.net/web/guest/noticias1';

function AqualogyClass() {
	var self = this;

	self._init();
};

AqualogyClass.prototype._init = function() {
	var self = this;

	self._initArea();
	self._goYouTube();
	self._goNoticias();

	self._menu();

	self._scroll();
	self._tweet();
}
AqualogyClass.prototype._scroll = function() {
	var self = this;

	// height: '311px' // 291+10+10
	$('div#section-twitter section div.tweet').slimScroll({
		height : '291px',
		color : '#f00',
		size : '6px',
		alwaysVisible : true,
		railVisible : true,
		railColor : '#4d4d4d',
		railOpacity : 0.7,
	});
}
AqualogyClass.prototype._tweet = function() {
	var self = this;

	$(".tweet").tweet({
		username : "infoaqualogy",
		join_text : "auto",
		avatar_size : 32,
		count : 10,
		auto_join_text_default : "dijimos,",
		auto_join_text_ed : "nosotros",
		auto_join_text_ing : "estabamos",
		auto_join_text_reply : "respondimos",
		auto_join_text_url : "mirando",
		loading_text : "cargando tweets..."
	});
}
AqualogyClass.prototype._menu = function() {
	var self = this;

	$("#videos").bind("click", function(aEvent) {
		$("div#header-container nav ul li.active").removeClass("active");
		$(this).addClass("active");

		self._initArea();
		self._goYouTube();
	});
	$("#fotos").bind("click", function(aEvent) {
		$("div#header-container nav ul li.active").removeClass("active");
		$(this).addClass("active");
		self._goFotos();
	});
	$("#empresa").bind("click", function(aEvent) {
		$("div#header-container nav ul li.active").removeClass("active");
		$(this).addClass("active");
		self._goEmpresa();
	});
}
/*
 * sección
 * videos---------------------------------------------------------------------
 */
AqualogyClass.prototype._goYouTube = function() {
	var self = this;

	// http://gdata.youtube.com/feeds/api/users/GoogleDevelopers/uploads?start-index=1&max-results=5
	// http://www.youtube.com/user/GoogleDevelopers/feed?start-index=1&max-results=5
	// http://gdata.youtube.com/feeds/api/videos/VBKWQ7bILds?v=2&alt=jsonc&callback=parseresults
	// http://www.youtube.com/v/VIDEO_ID?version=3&enablejsapi=1

	// https://github.com/jaubourg/jquery-jsonp/blob/master/doc/TipsAndTricks.md

	// https://developers.google.com/youtube/2.0/developers_guide_json
	// https://developers.google.com/youtube/2.0/developers_guide_jsonc
	// https://developers.google.com/youtube/articles/view_youtube_jsonc_responses
	// http://procatinator.com/js/application.js

	// self._getYouTubeInfo();

	self._youTubeList();

}

AqualogyClass.prototype._youTubeListElement = function(item) {
	var self = this;
	var videoTitle = item.title;
	var videoId = item.id;
	var videoDescription = item.description;
	var videoThumb = item.thumbnail.sqDefault;

	var li = $("<li/>").attr("id",videoId)
			.append(
					$("<a/>").attr("href", "#").append(
							$("<img/>").attr("src", videoThumb).css("width","100px")).append(
							$("<h2/>").html(videoTitle.substring(0, 25) + "..."))
							.append(
									$("<p/>").html(videoDescription.substring(0, 70)+ "...")));	

	return (li);
}
// div#section-principal-side section ul.video-list li#L3ugr9BJqIs a
AqualogyClass.prototype._youTubeListClick = function() {
	var self = this;
	$("ul.video-list li").bind("click", function(aEvent) {
		self._youTubeMainVideo('section-principal-main', $(this).attr("id"));
	});
}

AqualogyClass.prototype._youTubeList = function(user) {
	var self = this;
	// playlist:
	// https://gdata.youtube.com/feeds/api/playlists/aaaaaaaaaaaaa?v=2&alt=jsonc&max-results=5&orderby=published
	// user favorites/uploads:
	// https://gdata.youtube.com/feeds/api/users/GoogleDevelopers/uploads?v=2&alt=jsonc&max-results=5
	// playlists feed:
	// https://gdata.youtube.com/feeds/api/playlists/snippets?q=GoogleDevelopers&max-results=5&v=2&alt=jsonc
	/*
	 * $.jsonp({ url:
	 * "https://gdata.youtube.com/feeds/api/users/GoogleDevelopers/uploads?v=2&alt=jsonc&max-results=5",
	 * });
	 */

	$.getJSON(AqualogyClass._playListURL, function(json) {
		var ul = $("<ul/>").addClass("video-list");
		var i = 0;
		$.each(json.data.items, function(i, item) {
			if (i === 0) {
				self._youTubeMainVideo('section-principal-main', item.id);
				i++;
			} else {
				ul.append(self._youTubeListElement(item));
			};
		});
		$("div#section-principal-side section").append(ul);
		self._youTubeListFoot();
		self._youTubeListClick();
	});

}

AqualogyClass.prototype._youTubeListFoot = function() {
	var self = this;

	var div = $("<div/>").addClass("clear_both");
	var p = $("<p/>").attr("id", "mas_videos");
	var a = $("<a/>").attr("href",AqualogyClass._moreVideos).attr("target", "_blank").html("Más videos de Aqualogy en YouTube").appendTo(p);

	$("div#section-principal-side section").append(div);
	$("div#section-principal-side section").append(p);
}
AqualogyClass.prototype._youTubeMainVideo = function(where, id) {
	var self = this;

	$("#"+where).empty();
	var iframeVideo = '<iframe id="ytplayer" type="text/html" width="550" height="350" src="https://www.youtube.com/embed/'+id+'" frameborder="0" allowfullscreen>';
	$("#"+where).append(iframeVideo);
}
/*
 * sección
 * videos---------------------------------------------------------------------
 */
AqualogyClass.prototype._initArea = function() {
	var self = this;

	$("#section-principal").empty();
	$("#section-principal")
			.append('<div id="section-principal-main"><section>');
	// imagen
	$("#section-principal")
			.append('<div id="section-principal-side"><section>');
	// thumbs
}
AqualogyClass.prototype._goEmpresa = function() {
	var self = this;

	self._initArea();
	self._readEmpresa();
}
AqualogyClass.prototype._goFotos = function() {
	var self = this;

	self._initArea();
	self._ajaxReadFotos();
}
AqualogyClass.prototype._goNoticias = function() {
	var self = this;

	$("div#section-noticias section div#section-listado-noticias section")
			.empty();
	self._ajaxReadNoticias();
}
/*
 * imagen principal: div#section-principal div#section-principal-main section
 * 
 * thumbnails: div#section-principal div#section-principal-side section
 */

/*
 * sección
 * fotos---------------------------------------------------------------------
 */
AqualogyClass.prototype._ajaxReadFotos = function() {
	var self = this;
	var i = 0, j = 0, html = '', ul;
	var seccion = "div#section-principal div#section-principal-side section";
	var principal = "div#section-principal-main section";

	$.ajax({
		type : "GET",
		url : "xml/aqualogy_fotos.xml",
		dataType : "xml",
		success : function(xml) {

			$(xml).find('RECORD').each(
					function() {/* START each ------ */
						var id = $(this).find('i_id').text();
						var imagen = $(this).find('s_imagen').text();
						var thumb = $(this).find('s_thumb').text();

						if (i % 6 == 0) {
							if (i == 0) {
								$("<img />").attr("src", imagen).appendTo(
										$(principal));
							}
							;
							ul = $("<ul/>").addClass("fotos-list").attr("id",
									"fPage_" + j).appendTo($(seccion));
							$("<li/>").addClass(id).append(
									$("<a/>").attr("rel", imagen).attr("href",
											"#").addClass("image").append(
											$("<img/>").attr("src", thumb)
													.addClass("image")))
									.appendTo($(ul));
							j++;
						} else {
							$("<li/>").addClass(id).append(
									$("<a/>").attr("rel", imagen).attr("href",
											"#").addClass("image").append(
											$("<img/>").attr("src", thumb)
													.addClass("image")))
									.appendTo($(ul));
						}
						;
						i++;
					});
			/* END each ------ */

			$(seccion).append($("<div/>").addClass("clear_both"));

			var side = "div#section-principal div#section-principal-side";
			$(side).append($("<div/>").addClass("clear_both"));

			$(side).append('<div id="paginacion">');
			$(side + " div#paginacion").append(self._paginacionFotos(j));
			self._pageNumbers(side);
			self._arrowsEdges(side);
			self._arrowsStep(side);
			self._thumbs2Image(seccion, principal);
		}
	});
}
AqualogyClass.prototype._thumbs2Image = function(seccion, principal) {
	var self = this;

	$(seccion + " a.image").bind("click", function(aEvent) {
		var image = $(this).attr("rel");
		$(principal + " img").fadeOut(500, function() {
			$('#preloadArea').html('<img src="' + image + '" />');
			$('#preloadArea img').imgpreload(function() {

				$(principal + " img").attr("src", image);
				$(principal + " img").fadeIn();
			});
		});
	});
}
AqualogyClass.prototype._paginacionFotos = function(j) {
	var self = this;

	j--;

	var hallo = '';
	if (j == 0) {
	} else if (j >= 2) {
		hallo += '<a href="#"><span title="inicio" class="arrow-leftd"></span></a><a href="#"><span title="anterior" class="arrow-left"></span></a>';
		hallo += '<span class="pages">';
		for ( var h = 0; h <= j; h++) {
			if (h == 0) {
				hallo += '<a href="#" class="vermell" rel="' + h + '">'
						+ (h + 1) + '</a>';
			} else {
				hallo += '<a href="#" class="gris" rel="' + h + '">' + (h + 1)
						+ '</a>';
			}
		}
		;
		hallo += '</span>';
		hallo += '<a href="#"><span title="siguiente" class="arrow-right"></span></a><a href="#"><span title="último" class="arrow-rightd"></span></a>';
	} else {
		hallo += '<a href="#"><span class="arrow-left"></span></a>';
		hallo += '<span class="pages">';
		for ( var h = 0; h <= j; h++) {
			hallo += '<a href="#" rel="' + h + '">' + (h + 1) + '</a>';
		}
		;
		hallo += '</span>';
		hallo += '<a href="#"><span title="siguiente" class="arrow-right"></span></a>';

	}
	;
	return hallo;
}
AqualogyClass.prototype._pageNumbers = function(seccion) {
	var self = this;

	$(seccion + " div#paginacion span.pages a").bind(
			"click",
			function(aEvent) {
				$(seccion + " div#paginacion span.pages a").addClass("gris");
				$(this).removeClass("gris").addClass("vermell");

				$(seccion + " ul").css("display", "none");
				$(seccion + " ul#fPage_" + $(this).attr("rel")).css("display",
						"block");
			});
}
AqualogyClass.prototype._arrowsEdges = function(seccion) {
	var self = this;

	$(seccion + " div#paginacion a span.arrow-rightd").bind(
			"click",
			function(aEvent) {
				var last = $(
						seccion + " div#paginacion span.pages a:last-child")
						.attr("rel");
				var selected = last;

				self._arrowsChange(seccion, selected);
			});

	$(seccion + " div#paginacion a span.arrow-leftd").bind("click",
			function(aEvent) {
				var selected = 0;

				self._arrowsChange(seccion, selected);
			});
}
AqualogyClass.prototype._arrowsStep = function(seccion) {
	var self = this;

	$(seccion + " div#paginacion a span.arrow-right").bind(
			"click",
			function(aEvent) {
				var selected = $(
						seccion + " div#paginacion span.pages a.vermell").attr(
						"rel");
				var last = $(
						seccion + " div#paginacion span.pages a:last-child")
						.attr("rel");

				selected++;
				if (selected > last) {
					selected = 0;
				}
				;
				self._arrowsChange(seccion, selected);
			});

	$(seccion + " div#paginacion a span.arrow-left").bind(
			"click",
			function(aEvent) {
				var selected = $(
						seccion + " div#paginacion span.pages a.vermell").attr(
						"rel");
				// 0
				var last = $(
						seccion + " div#paginacion span.pages a:last-child")
						.attr("rel");
				// 2

				selected--;
				if (selected < 0) {
					selected = last;
				}
				;
				self._arrowsChange(seccion, selected);
			});
}
AqualogyClass.prototype._arrowsChange = function(seccion, selected) {
	var self = this;

	$(seccion + " ul").css("display", "none");
	// hide all
	$(seccion + " ul#fPage_" + selected).css("display", "block");
	// display selected
	$(seccion + " div#paginacion span.pages a.vermell").removeClass("vermell")
	$(seccion + " div#paginacion span.pages a").addClass("gris");
	$(seccion + " div#paginacion span.pages a[rel=" + selected + "]")
			.removeClass("gris").addClass("vermell");

}
/*---------------------------------------------------------------------*/
AqualogyClass.prototype._ajaxReadNoticias = function() {
	var self = this;
	var i = 0, j = 0, html = '';

	/* articulo: donde aparece la noticia principal */
	var articulo = "div#section-noticion section article";
	/* listado: listado de noticias */
	var listado = "div#section-noticias section div#section-listado-noticias";

	$
			.ajax({
				type : "GET",
				url : "xml/aqualogy_noticias.xml",
				dataType : "xml",
				success : function(xml) {
					var ul = $("<ul />").addClass("noticias-list");
					$(xml).find('RECORD').each(
							function() {
								var id = $(this).find('i_id').text();
								var enlace = $(this).find('s_enlace').text();
								var titular = $(this).find('s_titular_es')
										.text();
								var desc = $(this).find('txt_desc_es').text();
								var imagen = $(this).find('s_imagen').text();
								var fecha = $(this).find('d_fecha').text();

								if (i == 0) {
									// noticia principal
									$(articulo + " img").attr("src", imagen);
									$(articulo + " h2").empty().html(
											titular.substring(0, 60));
									$(articulo + " div.date").empty().html(
											fecha);
									$(articulo + " p").empty().html(
											desc.substring(0, 200));
									$(articulo + " a").attr("href", enlace);
								} else {
									var desc_short = desc.substring(0, 70);
									if (i > 4) {
										return false;
									} else {
										// listado de noticias
										var li = $("<li/>").attr("id",
												"noticia_" + id).appendTo(ul);
										var a = $("<a/>").attr("href", enlace)
												.appendTo(li);
										$("<h2/>").html(
												titular.substring(0, 30)
														+ "...").appendTo(a);
										$("<p/>").html(desc_short + "...")
												.appendTo(a);
									}
									;
								}
								;
								i++;
							});
					// --- fin .each ---
					ul.append($('<a href="'+AqualogyClass._moreNewsLink+'"><span class="mas_noticias">'+AqualogyClass._moreNews+'</span></a>'));
					$(listado + " section").append(ul);
				}
			});

}
AqualogyClass.prototype._readEmpresa = function() {
	var self = this;

	var main = "<div id='empresa-texto'>";
	main += '<h1>sobre aqualogy</h1>';
	main += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a hendrerit lacus. In molestie, ante id tempus fermentum, neque justo tincidunt dui, quis volutpat urna mauris et erat. Proin et pharetra est. In quis ante eget leo posuere condimentum quis et sem. Sed sed sem dui. Vestibulum bibendum iaculis odio, et faucibus lectus scelerisque at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi fringilla viverra felis ut sollicitudin. Quisque in mauris nunc, in porttitor turpis.</p>';
	main += '<p>Duis congue sapien vitae arcu volutpat at venenatis velit dapibus. Fusce condimentum tincidunt justo, et eleifend est elementum quis. Nulla et diam purus, a facilisis risus. Praesent tempor dictum ipsum, vitae sodales urna posuere nec. Nulla facilisi. Suspendisse ornare rutrum suscipit.</p>';
	main += '<p>Duis neque mi, molestie in imperdiet quis, placerat et nisl. Integer tincidunt nunc et quam lacinia in dapibus ante eleifend. Fusce placerat nisi id neque iaculis ornare. Nunc ultrices tempus suscipit. Fusce vitae enim mi, nec imperdiet justo. Phasellus ultrices venenatis viverra. Proin sit amet nunc dui.</p>';
	main += '</div>';

	var side = '<h1>Enlaces de interés</h1>';
	side += '<ul id="empresa_links">';
	side += '<li><a href="'+AqualogyClass._twitter+'" target="_blank" class="empresa_link" id="twitter">Twitter</a></li>';
	side += '<li><a href="'+AqualogyClass._linkedin+'" target="_blank" class="empresa_link" id="linkedin">Linkedin</li>';
	side += '<li><a href="'+AqualogyClass._googlemaps+'" target="_blank" class="empresa_link" id="gmaps">Google maps</li>';
	side += '<li><a href="'+AqualogyClass._empresaLink1+'" target="_blank" class="empresa_link">'+AqualogyClass._empresaText1+'</li>';
	side += '<li><a href="'+AqualogyClass._empresaLink2+'" target="_blank" class="empresa_link">'+AqualogyClass._empresaText2+'</li>';
	side += '<li><a href="'+AqualogyClass._empresaLink3+'" target="_blank" class="empresa_link">'+AqualogyClass._empresaText3+'</li>';
	side += '</ul>';

	var boto = '<p id="mas_info"><a href="'+AqualogyClass._aqualogy+'" target="_blank">Más información en nuestra web</a></p>';

	$("div#section-principal-main section").append(main);
	$("div#section-principal-main section").append(boto);
	$("div#section-principal-side section").append(side);
}
/*
 * REFERENCE LIBRARY ==================================
 * 
 * http://www.designchemical.com/blog/index.php/jquery/jquery-image-swap-gallery/
 * http://forums.modx.com/thread/?thread=76665&page=1
 * http://papermashup.com/simple-jquery-gallery/
 * http://jonraasch.com/blog/a-simple-jquery-slideshow
 * http://stackoverflow.com/questions/3358700/how-to-cut-the-string-in-javascript-so-that-it-fits-exactly-two-lines-add
 */

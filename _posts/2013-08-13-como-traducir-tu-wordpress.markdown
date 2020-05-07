---
layout: post
status: publish
published: true
title: "<!--:es-->Como traducir tu Wordpress<!--:--><!--:en-->How to translate your
  Wordpress<!--:-->"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Las diferentes técnicas para tener un website multi idioma.<!--:--><!--:en-->The
  different techniques to have a multi language website.<!--:-->"
date: '2013-08-13 18:00:30 +0000'
categories:
- My Blog
tags:
- wordpress
- translation
comments:
- id: 475
  author: Carles
  author_url: http://www.carlessanagustin.com/
  date: '2013-09-19 09:24:36 +0000'
  content: "A&ntilde;ado / Plus:\r\nhttp://vandelaydesign.com/blog/design/how-to-internationalize-wordpress-themes/"
---
<p><!--:es-->Hay varias maneras de traducir un Wordpress:</p>
<ol>
<li><a title="qtranslate" href="http://wordpress.org/plugins/qtranslate/" target="_blank">Qtranslate</a>: A&ntilde;ade la gesti&oacute;n de contenidos f&aacute;cil de usar y de apoyo a la traducci&oacute;n multiling&uuml;e. Cambia las entradas de base de datos para aceptar los idiomas seleccionados a nivel de configuraci&oacute;n.</li>
<li><a title="Google language translator plugin" href="http://wordpress.org/plugins/google-language-translator/" target="_blank">Google Language Translator</a>: Este plugin permite insertar la herramienta <a href="http://translate.google.es/?hl=es" target="_blank">Google Traductor Language</a> en cualquier lugar de tu sitio web utilizando un shortcode. Agrega botones para idiomas de Google Translator que pueden traducir todos los textos del sitio web en tiempo real.</li>
<li><a title="Gettext" href="http://en.wikipedia.org/wiki/Gettext" target="_blank">Gettext</a>: Internacionalizaci&oacute;n y sistema de localizaci&oacute;n que se utiliza para escribir archivos multiling&uuml;es. Estos archivos son procesados ​​por los programas de software para visualizar su contenido. Normalmente se utiliza para frases comunes/generales repetidas entre las traducciones.</li>
</ol>
<p>Me gustar&iacute;a ampliar mi explicaci&oacute;n de este &uacute;ltimo.</p>
<p>Los archivos traducidos se encuentran en la carpeta<em> /wp-content/languages​​</em>. Estos archivos se terminan en extensiones PO y MO. PO son archivos editables, que contienen referencias de la palabra original inglesa a la traducida.</p>
<p style="text-align: center;"><img class="size-medium wp-image-1700 aligncenter" title="po-file-demo" alt="" src="/images/posts/2013/08/po-file-demo-300x48.png" width="300" height="48" /></p>
<p>Podemos a&ntilde;adir nuevas l&iacute;neas o cambiar su contenido, pero previamente debemos procesarlo para que el software pueda entender y utilizar su contenido traducido. Esta es la misi&oacute;n de los archivos MO: archivo PO >> poedit >> archivo MO >> subimos ficheros al servidor.&nbsp;Poedit es una buena herramienta para revisar, validar y procesar los archivos PO en archivos MO listos para ser usados​​.</p>
<p>[caption id="attachment_1701" align="aligncenter" width="300"]<a href="http://www.carlessanagustin.com/2013/08/13/como-traducir-tu-wordpress/poedit-demo/" rel="attachment wp-att-1701"><img class="size-medium wp-image-1701 " title="poedit-demo" alt="poedit-demo" src="/images/posts/2013/08/poedit-demo-300x257.png" width="300" height="257" /></a> poedit[/caption]</p>
<p>Para obtener m&aacute;s informaci&oacute;n, leed <a title="Translating WordPress" href="http://codex.wordpress.org/Translating_WordPress" target="_blank">Translating WordPress</a>.<!--:--><!--:en-->There are several ways to translate a Wordpress:</p>
<ol>
<li><a title="qtranslate" href="http://wordpress.org/plugins/qtranslate/" target="_blank">Qtranslate</a>: Adds userfriendly multilingual content management and translation support. It changes database entries to accept the languages selected at configuration level.</li>
<li><a title="Google Language Translator" href="http://wordpress.org/plugins/google-language-translator/" target="_blank">Google Language Translator</a>: This plugin allows you to insert the <a title="Google Translator" href="http://translate.google.es/?hl=es" target="_blank">Google Language Translator</a> tool anywhere on your website using a shortcode. It adds buttons to Google Translator languages that can translate all website text on real time.</li>
<li><a title="Gettext" href="http://en.wikipedia.org/wiki/Gettext" target="_blank">Gettext</a>: Internationalization and localization system used for writing multilingual files. These files are processed by software programs to display its needed content. Normally used for common/general sentences repeated between languages.</li>
</ol>
<p>I'd like to expand my explanation on this last one.</p>
<p>Translated files can be found at <em>/wp-content/languages</em> folder. These files are terminated in PO and MO extension. PO are editable files, containing references from the original english word to the translated one.</p>
<p style="text-align: center;"><img class="size-medium wp-image-1700 aligncenter" title="po-file-demo" alt="" src="/images/posts/2013/08/po-file-demo-300x48.png" width="300" height="48" /></p>
<p>We can add new lines or change its contents but we must process it before so software can understand and use its translations. This is the mission of MO files: &nbsp;PO file >> <a title="poedit" href="http://www.poedit.net/" target="_blank">poedit</a> >> MO file >> upload to server. <a title="poedit" href="http://www.poedit.net/" target="_blank">Poedit</a> is a great tool for reviewing, validating and processing PO files into MO files ready to be used.</p>
<p>[caption id="attachment_1701" align="aligncenter" width="300"]<a href="http://www.carlessanagustin.com/2013/08/13/como-traducir-tu-wordpress/poedit-demo/" rel="attachment wp-att-1701"><img class="size-medium wp-image-1701 " title="poedit-demo" alt="poedit-demo" src="/images/posts/2013/08/poedit-demo-300x257.png" width="300" height="257" /></a> poedit[/caption]</p>
<p>For more information please read <a title="Translating WordPress" href="http://codex.wordpress.org/Translating_WordPress" target="_blank">Translating WordPress</a>.<!--:--></p>

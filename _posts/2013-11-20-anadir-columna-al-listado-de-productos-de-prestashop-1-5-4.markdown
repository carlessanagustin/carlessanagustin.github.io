---
layout: post
status: publish
published: true
title: "<!--:es-->A&ntilde;adir columna al listado de productos de Prestashop 1.5.4<!--:--><!--:en-->Add
  column to the Prestashop 1.5.4 Product List<!--:-->"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Ampliar la funcionalidad del listado de productos de Prestashop
  para mostrar una nueva columna con una característica predeterminada.<!--:--><!--:en-->Expand
  the functionality of Prestashop product list to display a new column with a default
  feature.<!--:-->"
date: '2013-11-20 11:00:38 +0000'
categories:
- My Blog
tags:
- mysql
- prestashop
- extend
comments:
- id: 639
  author: Quentin
  author_url: http://bongo.fr
  date: '2014-05-05 13:56:58 +0000'
  content: "Hi,\r\n\r\nThanks for this guide.\r\nDo you know how to show all the features,
    not just one (with the ID we provide). Separated with \"-\" for exemple.\r\nBest
    regards,\r\nuentin"
- id: 711
  author: varan
  author_url: ''
  date: '2014-06-28 19:30:31 +0000'
  content: Como comentan arriba, alguna formade mostrar m&aacute;s de una o todas?
- id: 1991
  author: Carles San Agustin
  author_url: http://www.carlessanagustin.com
  date: '2014-08-19 19:37:22 +0000'
  content: "<ul>\r\n\t<li>ES: Siguiendo mis instrucciones se muestra 1 columna. De
    la misma forma se pueden mostrar otras columnas; solo hay que buscar los campos
    necesarios de las tablas de la base de datos. Solo recordar que cuantas m&aacute;s
    columnas a&ntilde;adamos, mas scroll horizontal tendremos (algunas veces molesto).</li>\r\n\t<li>EN:
    Following my instructions 1 column is shown. Likewise other columns can be displayed;
    you just have to find the necessary fields of the tables in the database. Just
    remember that the more columns you add, the more horizontal scroll you have (sometimes
    annoying).</li>\r\n</ul>"
- id: 12550
  author: Atiqah
  author_url: http://synacorp.com.my/testps16
  date: '2015-07-30 03:49:08 +0000'
  content: "Hi,\r\nI am trying to add a new column to my product catalog for wholesale
    price. So, I am following your way. The column is added, but when I'm trying to
    save edited product details, the screen go blank. It seems that my AdminProductsController.php
    cannot be edited. Is there any other way to add a new column? Thanks for help."
- id: 13464
  author: Carles San Agustin
  author_url: http://www.carlessanagustin.com
  date: '2015-10-24 07:51:41 +0000'
  content: |-
    Hi,

    Sorry for my late reply. I only know this way of displaying a column.

    I made it again for a new project and it still works in v1.6:
    https://goo.gl/BeP5kB

    You can see my changes indicated by: "START: carlessanagustin.com" and "END: carlessanagustin.com"
    Can I see your code? I may be able to help you.

    Regards,
    c.
- id: 17730
  author: Name *Calvin
  author_url: http://mechcalvinshop.com
  date: '2016-11-03 06:17:38 +0000'
  content: "thank you for the tutorial, it still works in 1.6.1.8, however i would
    like to add more than one features column, yet when i add one more line\r\n\r\nLEFT
    JOIN `psxs_feature_product` fp ON (fp.`id_product` = a.`id_product` AND fp.`id_feature`
    = 6)\r\nLEFT JOIN `psxs_feature_product` fp ON (fp.`id_product` = a.`id_product`
    AND fp.`id_feature` = 6)\r\n\r\nit will return error not unique table/alias: 'fp'\r\n\r\ncan
    you help me please?"
- id: 18102
  author: Carles
  author_url: http://www.carlessanagustin.com/
  date: '2016-12-01 17:40:38 +0000'
  content: I am sorry but I do not work anymore with Prestashop or any other ecommerce
    platform. I will advice you to contact Prestashop Community and Forum websites.
- id: 27661
  author: DvoetvLam
  author_url: http://Web*
  date: '2019-08-30 09:03:38 +0000'
  content: Знакомства в Воронеже для отношений серьезных, в стиле давай поженимся
    и двое тв
- id: 29006
  author: TavzBlaree
  author_url: http://Web*
  date: '2019-09-21 13:24:14 +0000'
  content: Test. Please ignore.
- id: 31661
  author: ZnakomstvLam
  author_url: http://Web*
  date: '2019-10-22 18:01:10 +0000'
  content: "&Dagger;накомства юга ру"
- id: 34717
  author: Lexyslani
  author_url: http://Web*
  date: '2019-11-21 14:46:01 +0000'
  content: http://xn-----6kccvoecdviq5chhi5d.xn--p1ai/katalog-lestnits/ulichnye-lestnitsy
    - лестница из нержавеющей стали купить
- id: 34968
  author: 'ГОТОВЫЙ ЗАРАБОТОК В ИНТЕРНЕТЕ от 9857 руб. в день: http://conpuncconta.ga/oplm'
  author_url: ''
  date: '2019-11-24 17:09:24 +0000'
  content: 'Заработок в интернете от 6081 rub. в день: http://gondhelretac.tk/6iho'
- id: 36047
  author: Jasoninsaf
  author_url: http://Web*
  date: '2019-12-04 18:09:41 +0000'
  content: "Сервера майнкрафт [b]Гамай.Ру[/b] \r\nАктивируй бесплатный промокод \"/kit
    Gamai2020\" \r\n \r\nЯ добываю ресурсы, я строю, Я развиваюсь до нанотехнологий.
    \r\nЭто всё не по-настоящему... Это просто игра. \r\nНо люди здесь реальны! \r\nЭто
    мои друзья. Моя семья. Моя любовь. \r\nЭтот мир реален для нас."
---
<p><!--:es-->La idea principal es ampliar la funcionalidad del listado de productos para mostrar una nueva columna con una caracter&iacute;stica predeterminada. Mostraremos un campo de texto que almacenamos como caracter&iacute;stica del producto. Los pasos a seguir ser&aacute;n los siguientes:</p>
<ul>
<li>Determinar el elemento a mostrar: prestashop > ps_feature_lang > id_feature. En el ejemplo aqu&iacute; mostrado id_feature = 7 = shopname.</li>
</ul>
<p style="text-align: center;"><a href="/images/posts/2013/11/phpMyAdmin.png" target="_blank"><img class="size-medium wp-image-1954 aligncenter" title="phpMyAdmin" alt="phpMyAdmin" src="/images/posts/2013/11/phpMyAdmin-300x238.png" width="300" height="238" /></a></p>
<ul>
<li>Hacer la consulta ampliada a la base de datos: La query MySQL de la versi&oacute;n 1.5.4.1 de <a title="Prestashop" href="http://www.prestashop.com/" target="_blank">Prestashop</a> sobre la que trabajamos es:</li>
</ul>
<pre>SELECT SQL_CALC_FOUND_ROWS
a.`id_product`,b.name as name,`reference`,a.price as price,a.active as active
, MAX(i.id_image) id_image,cl.name `name_category` , a.`price`, 0 AS price_final, sav.`quantity` as sav_quantity, a.`active`
FROM `ps_product` a
LEFT JOIN `ps_product_lang` b ON (b.`id_product` = a.`id_product` AND b.`id_lang` = 1 AND b.`id_shop` = 1)
LEFT JOIN `ps_image` i ON (i.`id_product` = a.`id_product` AND i.cover=1)
LEFT JOIN `ps_category_lang` cl ON (a.`id_category_default` = cl.`id_category` AND b.`id_lang` = cl.`id_lang` AND cl.id_shop = 1)
LEFT JOIN `ps_stock_available` sav ON (sav.`id_product` = a.`id_product` AND sav.`id_product_attribute` = 0 AND sav.id_shop = 1 )
WHERE 1
GROUP BY a.id_product
ORDER BY a.id_product ASC LIMIT 0,50</pre>
<p>Usando <a title="MySQL Workbench" href="http://www.mysql.com/products/workbench/" target="_blank">MySQL Workbech</a> podemos ver los resultados siguientes:</p>
<p style="text-align: center;"><a href="/images/posts/2013/11/Query-por-defecto.png" target="_blank"><img class="size-large wp-image-1961 aligncenter" title="default query" alt="default query" src="/images/posts/2013/11/Query-por-defecto-770x370.png" width="710" height="341" /></a></p>
<p>Lo siguiente que debemos hacer es introducir tres nuevas lineas (fp.`id_feature` = 7):</p>
<pre>SELECT SQL_CALC_FOUND_ROWS
a.`id_product`,b.name as name,`reference`,a.price as price,a.active as active
/* new */
, fl.value `feature`
, MAX(i.id_image) id_image,cl.name `name_category` , a.`price`, 0 AS price_final, sav.`quantity` as sav_quantity, a.`active`
FROM `ps_product` a
LEFT JOIN `ps_product_lang` b ON (b.`id_product` = a.`id_product` AND b.`id_lang` = 1 AND b.`id_shop` = 1)
LEFT JOIN `ps_image` i ON (i.`id_product` = a.`id_product` AND i.cover=1)
/* new */
LEFT JOIN `ps_feature_product` fp ON (fp.`id_product` = a.`id_product` AND fp.`id_feature` = 7)
LEFT JOIN `ps_feature_value_lang` fl ON (fp.`id_feature_value` = fl.`id_feature_value` AND b.`id_lang` = fl.`id_lang`)
LEFT JOIN `ps_category_lang` cl ON (a.`id_category_default` = cl.`id_category` AND b.`id_lang` = cl.`id_lang` AND cl.id_shop = 1)
LEFT JOIN `ps_stock_available` sav ON (sav.`id_product` = a.`id_product` AND sav.`id_product_attribute` = 0 AND sav.id_shop = 1 )
WHERE 1
GROUP BY a.id_product
ORDER BY a.id_product ASC LIMIT 0,50</pre>
<p style="text-align: center;"><a href="/images/posts/2013/11/Query-retocada.png" target="_blank"><img class="size-large wp-image-1961 aligncenter" title="extended query" alt="extended query" src="/images/posts/2013/11/Query-retocada-1024x461.png" width="710" height="319" /></a></p>
<ol>
<li>1.Definici&oacute;n de columna donde se mostraran los resultados.</li>
<li>2.Seleccionamos los identificadores de la categor&iacute;a 7 y exportamos sus valores en el idioma seleccionado por el usuario.</li>
<li>3.Resultado mostrado.</li>
</ol>
<ul>
<li>Introducir la query en el PHP de Prestashop: El fichero que controla como se muestra el listado de productos (Catalog > Products) se encuentra en</li>
</ul>
<p style="text-align: center;">/prestashop/controllers/admin/AdminProductsController.php</p>
<p>Editamos el fichero para a&ntilde;adir las l&iacute;neas 164-172 y 233-239 en las que vemos:</p>
<pre>/* START: add column to product list: new feature */
/* configuration parameters */
define('_ID_FEATURE', 7);
define('_ID_FEATURE_WIDTH', 'auto');
define('_ID_FEATURE_TITLE', 'Features:');
/* database query */
$this->_join .= ' LEFT JOIN `'._DB_PREFIX_.'feature_product` fp ON (fp.`id_product` = a.`id_product` AND fp.`id_feature` = '._ID_FEATURE.') ';
$this->_join .= ' LEFT JOIN `'._DB_PREFIX_.'feature_value_lang` fl ON (fp.`id_feature_value` = fl.`id_feature_value` AND b.`id_lang` = fl.`id_lang`) ';
/* END: add column to product list: new feature */</pre>
<p>En el primer bloque (configuration parameters) introducimos las variables de la caracter&iacute;stica que queremos mostrar; ID, tama&ntilde;o de columna y t&iacute;tulo de la misma. A continuaci&oacute;n colocamos las dos queries LEFT JOIN mostradas anteriormente.</p>
<pre>/* START: add column to product list: new feature */
$this->fields_list['feature'] = array(
'title' => $this->l(_ID_FEATURE_TITLE),
'width' => _ID_FEATURE_WIDTH,
'filter_key' => 'fl!value',
);
/* END: add column to product list: new feature */</pre>
<p>El array fields_list incluye los elementos a mostrar. A&ntilde;adimos al array las l&iacute;neas anteriores para que se incluya la informaci&oacute;n nueva.</p>
<p>Ya podemos ir al back-office de Prestashop y ver el resultado deseado: Catalog > Products</p>
<p style="text-align: center;"><a href="/images/posts/2013/11/Back-office-product-list.png" target="_blank"><img class=" wp-image-1963 aligncenter" title="Back-office product list" alt="Back-office product list" src="/images/posts/2013/11/Back-office-product-list.png" width="710" /></a></p>
<p>Podemos ver una nueva columna con el valor que cada producto tiene para la caracter&iacute;stica seleccionada. Hemos cambiado el c&oacute;digo principal de Prestashop as&iacute; que debemos estar atentos al actualizar el e-commerce ya que estas actualizaciones pueden sobrescribir el fichero y perder estos cambios.</p>
<p>Ficheros:&nbsp;<a href="/images/posts/2013/11/snippets.zip">snippets.zip</a></p>
<p>Saludos.<!--:--><!--:en-->The main idea is to extend the functionality of the product list to display a new column with a selected feature. We'll show a text field stored as product feature. These are the steps to follow:</p>
<ul>
<li>Selecting the item to show: prestashop > ps_feature_lang > id_feature. In the example shown here id_feature = 7 = shopname.</li>
</ul>
<p style="text-align: center;"><a href="/images/posts/2013/11/phpMyAdmin.png" target="_blank"><img class="size-medium wp-image-1954 aligncenter" title="phpMyAdmin" alt="phpMyAdmin" src="/images/posts/2013/11/phpMyAdmin-300x238.png" width="300" height="238" /></a></p>
<ul>
<li>Making the expanded query to the database: The MySQL query on the current <a title="Prestashop" href="http://www.prestashop.com/" target="_blank">Prestashop</a> 1.5.4.1 version is:</li>
</ul>
<pre>SELECT SQL_CALC_FOUND_ROWS
a.`id_product`,b.name as name,`reference`,a.price as price,a.active as active
, MAX(i.id_image) id_image,cl.name `name_category` , a.`price`, 0 AS price_final, sav.`quantity` as sav_quantity, a.`active`
FROM `ps_product` a
LEFT JOIN `ps_product_lang` b ON (b.`id_product` = a.`id_product` AND b.`id_lang` = 1 AND b.`id_shop` = 1)
LEFT JOIN `ps_image` i ON (i.`id_product` = a.`id_product` AND i.cover=1)
LEFT JOIN `ps_category_lang` cl ON (a.`id_category_default` = cl.`id_category` AND b.`id_lang` = cl.`id_lang` AND cl.id_shop = 1)
LEFT JOIN `ps_stock_available` sav ON (sav.`id_product` = a.`id_product` AND sav.`id_product_attribute` = 0 AND sav.id_shop = 1 )
WHERE 1
GROUP BY a.id_product
ORDER BY a.id_product ASC LIMIT 0,50</pre>
<p>Using <a title="MySQL Workbench" href="http://www.mysql.com/products/workbench/" target="_blank">MySQL Workbech</a> we see the following results:</p>
<p style="text-align: center;"><a href="/images/posts/2013/11/Query-por-defecto.png" target="_blank"><img class="size-large wp-image-1961 aligncenter" title="default query" alt="default query" src="/images/posts/2013/11/Query-por-defecto-770x370.png" width="710" height="341" /></a></p>
<p>The next thing to do is to introduce three new lines (fp.`id_feature` = 7):</p>
<pre>SELECT SQL_CALC_FOUND_ROWS
a.`id_product`,b.name as name,`reference`,a.price as price,a.active as active
/* new */
, fl.value `feature`
, MAX(i.id_image) id_image,cl.name `name_category` , a.`price`, 0 AS price_final, sav.`quantity` as sav_quantity, a.`active`
FROM `ps_product` a
LEFT JOIN `ps_product_lang` b ON (b.`id_product` = a.`id_product` AND b.`id_lang` = 1 AND b.`id_shop` = 1)
LEFT JOIN `ps_image` i ON (i.`id_product` = a.`id_product` AND i.cover=1)
/* new */
LEFT JOIN `ps_feature_product` fp ON (fp.`id_product` = a.`id_product` AND fp.`id_feature` = 7)
LEFT JOIN `ps_feature_value_lang` fl ON (fp.`id_feature_value` = fl.`id_feature_value` AND b.`id_lang` = fl.`id_lang`)
LEFT JOIN `ps_category_lang` cl ON (a.`id_category_default` = cl.`id_category` AND b.`id_lang` = cl.`id_lang` AND cl.id_shop = 1)
LEFT JOIN `ps_stock_available` sav ON (sav.`id_product` = a.`id_product` AND sav.`id_product_attribute` = 0 AND sav.id_shop = 1 )
WHERE 1
GROUP BY a.id_product
ORDER BY a.id_product ASC LIMIT 0,50</pre>
<p style="text-align: center;"><a href="/images/posts/2013/11/Query-retocada.png" target="_blank"><img class="size-large wp-image-1961 aligncenter" title="extended query" alt="extended query" src="/images/posts/2013/11/Query-retocada-1024x461.png" width="710" height="319" /></a></p>
<ol>
<li>1.Defining column where you will see results.</li>
<li>2.We select the category IDs 7 and export their values ​​in the language selected by the user.</li>
<li>3.Result shown.</li>
</ol>
<ul>
<li>Enter the query in Prestashop PHP: The file that controls how is displayed the product list (Catalog> Products) is in:</li>
</ul>
<p style="text-align: center;">prestashop/controllers/admin/AdminProductsController.php</p>
<p>Edit the file to add lines 164-172 and 233-239 in which we see:</p>
<pre>/* START: add column to product list: new feature */
/* configuration parameters */
define('_ID_FEATURE', 7);
define('_ID_FEATURE_WIDTH', 'auto');
define('_ID_FEATURE_TITLE', 'Features:');
/* database query */
$this->_join .= ' LEFT JOIN `'._DB_PREFIX_.'feature_product` fp ON (fp.`id_product` = a.`id_product` AND fp.`id_feature` = '._ID_FEATURE.') ';
$this->_join .= ' LEFT JOIN `'._DB_PREFIX_.'feature_value_lang` fl ON (fp.`id_feature_value` = fl.`id_feature_value` AND b.`id_lang` = fl.`id_lang`) ';
/* END: add column to product list: new feature */</pre>
<p>In the first block (configuration parameters) we introduce the characteristic variables we want to show, ID, column size and title of it. Then put the two displayed LEFT JOIN queries shown before.</p>
<pre>/* START: add column to product list: new feature */
$this->fields_list['feature'] = array(
'title' => $this->l(_ID_FEATURE_TITLE),
'width' => _ID_FEATURE_WIDTH,
'filter_key' => 'fl!value',
);
/* END: add column to product list: new feature */</pre>
<p>The array fields_list includes items to show. We add to the array the above lines to include the new information.</p>
<p>We can go now to the Prestashop back-office and see the end result: Catalog> Products</p>
<p style="text-align: center;"><a href="/images/posts/2013/11/Back-office-product-list.png" target="_blank"><img class=" wp-image-1963 aligncenter" title="Back-office product list" alt="Back-office product list" src="/images/posts/2013/11/Back-office-product-list.png" width="710" /></a></p>
<p>We can see a new column with the feature value that each product has. We changed Prestashop core code so take care when updating its code as these updates may overwrite the file and changes will be lost.</p>
<p>Files:&nbsp;<a href="/images/posts/2013/11/snippets.zip">snippets.zip</a></p>
<p>Regards.<!--:--></p>

---
layout: post
status: publish
published: true
title: "Add column to the Prestashop 1.5.4 Product List"
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
- Blog
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
---
The main idea is to extend the functionality of the product list to display a new column with a selected feature. We'll show a text field stored as product feature. These are the steps to follow:

*   Selecting the item to show: prestashop > ps_feature_lang > id_feature. In the example shown here id_feature = 7 = shopname.

[![phpMyAdmin](/images/posts/2013/11/phpMyAdmin-300x238.png "phpMyAdmin")](/images/posts/2013/11/phpMyAdmin.png)

*   Making the expanded query to the database: The MySQL query on the current [Prestashop](http://www.prestashop.com/ "Prestashop") 1.5.4.1 version is:

```sql
SELECT SQL_CALC_FOUND_ROWS
a.`id_product`,b.name as name,`reference`,a.price as price,a.active as active
, MAX(i.id_image) id_image,cl.name `name_category` , a.`price`, 0 AS price_final, sav.`quantity` as sav_quantity, a.`active`
FROM `ps_product` a
LEFT JOIN `ps_product_lang` b ON (b.`id_product` = a.`id_product` AND b.`id_lang` = 1 AND b.`id_shop` = 1)
LEFT JOIN `ps_image` i ON (i.`id_product` = a.`id_product` AND i.cover=1)
LEFT JOIN `ps_category_lang` cl ON (a.`id_category_default` = cl.`id_category` AND b.`id_lang` = cl.`id_lang` AND cl.id_shop = 1)
LEFT JOIN `ps_stock_available` sav ON (sav.`id_product` = a.`id_product` AND sav.`id_product_attribute` = 0 AND sav.id_shop = 1 )
WHERE 1
GROUP BY a.id_product
ORDER BY a.id_product ASC LIMIT 0,50
```

Using [MySQL Workbech](http://www.mysql.com/products/workbench/ "MySQL Workbench") we see the following results:

[![default query](/images/posts/2013/11/Query-por-defecto-770x370.png "default query")](/images/posts/2013/11/Query-por-defecto.png)

The next thing to do is to introduce three new lines (fp.`id_feature` = 7):

```sql
SELECT SQL_CALC_FOUND_ROWS
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
ORDER BY a.id_product ASC LIMIT 0,50
```

[![extended query](/images/posts/2013/11/Query-retocada-1024x461.png "extended query")](/images/posts/2013/11/Query-retocada.png)

1.  1.Defining column where you will see results.
2.  2.We select the category IDs 7 and export their values ​​in the language selected by the user.
3.  3.Result shown.

*   Enter the query in Prestashop PHP: The file that controls how is displayed the product list (Catalog> Products) is in:

prestashop/controllers/admin/AdminProductsController.php

Edit the file to add lines 164-172 and 233-239 in which we see:

```php
/* START: add column to product list: new feature */
/* configuration parameters */
define('_ID_FEATURE', 7);
define('_ID_FEATURE_WIDTH', 'auto');
define('_ID_FEATURE_TITLE', 'Features:');
/* database query */
$this->_join .= ' LEFT JOIN `'._DB_PREFIX_.'feature_product` fp ON (fp.`id_product` = a.`id_product` AND fp.`id_feature` = '._ID_FEATURE.') ';
$this->_join .= ' LEFT JOIN `'._DB_PREFIX_.'feature_value_lang` fl ON (fp.`id_feature_value` = fl.`id_feature_value` AND b.`id_lang` = fl.`id_lang`) ';
/* END: add column to product list: new feature */
```

In the first block (configuration parameters) we introduce the characteristic variables we want to show, ID, column size and title of it. Then put the two displayed LEFT JOIN queries shown before.

```php
/* START: add column to product list: new feature */
$this->fields_list['feature'] = array(
'title' => $this->l(_ID_FEATURE_TITLE),
'width' => _ID_FEATURE_WIDTH,
'filter_key' => 'fl!value',
);
/* END: add column to product list: new feature */
```

The array fields_list includes items to show. We add to the array the above lines to include the new information.

We can go now to the Prestashop back-office and see the end result: Catalog> Products

[![Back-office product list](/images/posts/2013/11/Back-office-product-list.png "Back-office product list")](/images/posts/2013/11/Back-office-product-list.png)

We can see a new column with the feature value that each product has. We changed Prestashop core code so take care when updating its code as these updates may overwrite the file and changes will be lost.

Files: [snippets.zip](/images/posts/2013/11/snippets.zip)

Regards.
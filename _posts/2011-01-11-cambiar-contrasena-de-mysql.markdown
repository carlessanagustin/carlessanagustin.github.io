---
layout: post
status: publish
published: true
title: Cambiar contrase&ntilde;a de MySQL
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
date: '2011-01-11 18:38:00 +0000'
categories:
- My Blog
tags:
- it
- mysql
comments:
- id: 492
  author: Carles
  author_url: http://www.carlessanagustin.com/
  date: '2013-10-03 08:31:52 +0000'
  content: "new set of commands:\r\n1. sudo /etc/init.d/mysql stop\r\n2. sudo mysqld
    --skip-grant-tables &\r\n3. mysql -u root mysql\r\n4. UPDATE user SET Password=PASSWORD('YOURNEWPASSWORD')
    WHERE User='root'; FLUSH PRIVILEGES; exit;\r\n5. sudo /etc/init.d/mysql restart"
---
<p>Siempre pierdo el tiempo buscando este simple proceso as&iacute; que he decidido hacer un post como referencia r&aacute;pida para ocasiones futuras:</p>
<p>1. Reiniciamos el servicio con la opci&oacute;n --skip-grant-tables:<br />
<strong># sudo /etc/init.d/mysqld restart --skip-grant-tables</strong></p>
<p>2. Entramos en la linea de comandos de MySQL:<br />
<strong># mysql</strong></p>
<p>3. A&ntilde;adimos las siguientes lineas donde <em>MyNewPass</em> debe ser substituido por la contrase&ntilde;a que deseamos:<br />
<strong>mysql> UPDATE mysql.user SET Password=PASSWORD('MyNewPass') WHERE User='root';</strong><br />
<strong>mysql> FLUSH PRIVILEGES;</strong><br />
<strong>mysql> exit;</strong></p>
<p><a href="http://dev.mysql.com/doc/refman/5.0/en/resetting-permissions.html">Fuente</a></p>
<p>Saludos!</p>

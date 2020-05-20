---
layout: post
status: publish
published: true
title: "<!--:es-->Python script: backup comprimido de MySQL a una carpeta local<!--:--><!--:en-->Python
  script: MySQL backup to local folder<!--:-->"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Pequeño script de Python diseñado para volcar bases de datos MySQL
  en archivos comprimidos a una carpeta local.<!--:--><!--:en-->Small Python script
  designed to dump MySQL databases in separate compressed files to a local folder.
  <!--:-->"
date: '2011-01-13 20:18:00 +0000'
categories:
- Blog
tags:
- it
- mysql
- python
- cron
- script
comments:
- id: 446
  author: Carles
  author_url: http://www.carlessanagustin.com/
  date: '2013-09-03 18:43:10 +0000'
  content: "he creado un github para el script e instrucciones: https://github.com/carlessanagustin/mysql2folder\r\nsaludos!"
- id: 447
  author: Carles
  author_url: http://www.carlessanagustin.com/
  date: '2013-09-03 18:47:14 +0000'
  content: "tambi&eacute;n encontr&eacute; un script m&aacute;s avanzado que permite
    subir los ficheros a un ftp:\r\nhttps://github.com/s7anley/MySQL-backup\r\ncontiene
    las instrucciones de configuraci&oacute;n y uso."
- id: 11799
  author: victor
  author_url: ''
  date: '2015-06-05 00:01:17 +0000'
  content: Gracias por la ayuda, solo una cosina, &iquest;si solo quieres hacer el
    backup de una &uacute;nica base de datos, como la eliges?
- id: 11802
  author: Carles
  author_url: http://www.carlessanagustin.com/
  date: '2015-06-05 01:28:03 +0000'
  content: 'Mi script es muy b&aacute;sico (2011) y no lo permite. Para lo que me
    preguntas mejor usa este: https://github.com/s7anley/MySQL-backup'
---
<p><!--:es-->El siguiente script permite hacer un backup comprimido de las bases de datos en MySQL a una carpeta local. En la parte variables debemos cambiar los campos con "___&amp;___". El <em>username</em> m&aacute;s com&uacute;n es "root" y el <em>hostname</em> "localhost" pero hay otras opciones. La salida se encontrar&aacute; en <em>dest_folder</em> con el nombre a&ntilde;omesdia-basedatos.sql.gz.</p>
<pre class="python">#!/usr/bin/env python
import os
import time

# START: configuration
username = '___&___'
password = '___&___'
hostname = '___&___'
dest_folder = '___&___'
# END: configuration

# timestamp
filestamp = time.strftime('%Y%m%d')
# database list
database_list_command="mysql -u%s -p%s -h %s --silent -N -e 'show databases'" % (username, password, hostname)
# iterate database list
for database in os.popen(database_list_command).readlines():
        database = database.strip()
        # databases not to backup
        if database == 'information_schema' or database == 'test' or database == 'mysql' or database == 'performance_schema':
                continue
        # destination and filename
        filename = "%s/%s-%s.sql" % (dest_folder, filestamp, database)
        # dump + gzip command
        os.popen("mysqldump -u%s -p%s -h %s -e --opt -c %s | gzip -c > %s.gz" % (username, password, hostname, database, filename))</pre>
<p>Debemos a&ntilde;adir la siguiente linea al fichero /etc/crontab para que el backup se efectue cada dia a las 0:00:</p>
<pre>0 0 * * * -username- python /-folder-/mysql2folder.py</pre>
<p>Saludos!<!--:--><!--:en-->The following script allows a compressing MySQL databases to a local folder. In the field variables must change with "___ &amp; ___". The most common username is "root" and the hostname "localhost" but you can use any other option. The output will be in dest_folder/YEARMONTHDAY-databasename.sql.gz</p>
<pre class="python">#!/usr/bin/env python
import os
import time

# START: configuration
username = '___&___'
password = '___&___'
hostname = '___&___'
dest_folder = '___&___'
# END: configuration

# timestamp
filestamp = time.strftime('%Y%m%d')
# database list
database_list_command="mysql -u%s -p%s -h %s --silent -N -e 'show databases'" % (username, password, hostname)
# iterate database list
for database in os.popen(database_list_command).readlines():
        database = database.strip()
        # databases not to backup
        if database == 'information_schema' or database == 'test' or database == 'mysql' or database == 'performance_schema':
                continue
        # destination and filename
        filename = "%s/%s-%s.sql" % (dest_folder, filestamp, database)
        # dump + gzip command
        os.popen("mysqldump -u%s -p%s -h %s -e --opt -c %s | gzip -c > %s.gz" % (username, password, hostname, database, filename))</pre>
<p>We can add the following line to /etc/crontab for the backup to take effect every day at 0:00:</p>
<pre>0 0 * * * -username- python /-folder-/mysql2folder.py</pre>
<p>Regards!<!--:--></p>

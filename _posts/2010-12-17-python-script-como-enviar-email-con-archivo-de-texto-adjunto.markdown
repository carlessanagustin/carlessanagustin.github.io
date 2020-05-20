---
layout: post
status: publish
published: true
title: 'Python script: como enviar email con archivo de texto adjunto'
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
date: '2010-12-17 14:05:00 +0000'
categories:
- Blog
tags:
- it
- python
- email
comments:
- id: 13740
  author: juan carlos
  author_url: http://Web*
  date: '2015-11-11 01:20:55 +0000'
  content: "Me da un error en esta linea,\r\nfor filename0 in filenames:"
- id: 13745
  author: Carles
  author_url: http://www.carlessanagustin.com/
  date: '2015-11-11 14:12:34 +0000'
  content: |-
    Hola Juan Carlos,

    Esta entrada es del 2010 y en esa &eacute;poca no tenia los recursos que tengo ahora. He actualizado la entrada para solucionar este problema.

    Puedes encontrar el c&oacute;digo encima de estas lineas y en mi Gist:
    <a href="https://gist.github.com/carlessanagustin/db228927296d401ae4a5" target="_blank" rel="nofollow">Gist</a>

    Saludos,
    c.
---
<p>[:es]Esta semana he creado un <a href="http://es.wikipedia.org/wiki/Script_(inform%C3%A1tica)">script</a> en <a href="http://es.wikipedia.org/wiki/Python">Python</a> para:</p>
<ol>
<li>Leer contenido de carpeta (<em>path</em>) en busca de un patr&oacute;n de nombre de fichero.</li>
<li>Enviar por email los ficheros con el mismo patr&oacute;n.</li>
<li>Eliminar los ficheros enviados.</li>
</ol>
<p>Para cumplir este objetivo he creado el programa en el fichero <em>send-attachment.py</em> y las variables de configuraci&oacute;n en <em>conf.py</em>. Con cambiar los valores en <em>conf.py</em> podemos enviar el fichero que contenga el patr&oacute;n (<em>pattern</em>) deseado a las direcciones de email (<em>to_addr</em>) que necesitemos. En caso de no encontrar ning&uacute;n fichero con el patr&oacute;n introducido, el programa env&iacute;a un email a la direcci&oacute;n (<em>alert</em>) indicada para alertar del problema.<br />
El env&iacute;o de email se hace a trav&eacute;s de una cuenta autenticada (<em>from_addr</em>) en el mismo servidor <a href="http://es.wikipedia.org/wiki/SMTP">SMTP</a> (<em>email_server</em>). Es por esto que recomiendo ejecutar el script con el fichero de configuraci&oacute;n seguro, con permisos de lectura SOLO para el usuario que lo ejecuta: <em><a href="http://es.wikipedia.org/wiki/Chmod">chmod 600 conf.py</a>.</em></p>
<p>A continuaci&oacute;n los ficheros comentados:</p>
<p><script src="https://gist.github.com/carlessanagustin/db228927296d401ae4a5.js"></script></p>
<p>Saludos![:en]This week I created a <a href="http://es.wikipedia.org/wiki/Python">Python</a> <a href="http://es.wikipedia.org/wiki/Script_(inform%C3%A1tica)">script</a> to:</p>
<ol>
<li>Read the content folder (<em>path</em>) looking for a file name pattern.</li>
<li>Send by email files with the same pattern.</li>
<li>Delete the files sent if required</li>
</ol>
<p>To meet this objective I have created the program in the file <em>send-attachment.py</em> and the configuration variables in <em>conf.py</em>. By changing the values ​​in <em>conf.py </em> We can send the file containing the desired email addresses (<em>to_addr</em>) pattern (<em>pattern</em>) that We need. Failure to find any file with the pattern entered, the program sends an email to the address (<em>alert</em>) indicated to warn of the problem.<br />
Sending email is done through an authenticated account (<em>from_addr</em>) on the same server <a href="http://es.wikipedia.org/wiki/SMTP">SMTP</a> (<em>EMAIL_SERVER</em>). That is why I recommend running the script with secure configuration file with read-only permissions for the user running: <em><a href="http://es.wikipedia.org/wiki/Chmod"> chmod 600 conf.py</a></em>.</p>
<p>Next the files:</p>
<p><script src="https://gist.github.com/carlessanagustin/db228927296d401ae4a5.js"></script></p>
<p>Greetings![:]</p>

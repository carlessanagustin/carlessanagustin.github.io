---
layout: post
status: publish
published: true
title: "<!--:es-->Configuraci&oacute;n de un entorno Django sobre Vagrant<!--:--><!--:en-->Setting
  up a Django environment over Vagrant<!--:-->"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Primeros pasos en la creación de una pila de desarrollo: Django,
  Python, MySQL y Apache.<!--:--><!--:en-->First steps on setting up a development
  stack: Django, Python, MySQL and Apache.<!--:-->"
date: '2014-11-04 18:00:07 +0000'
categories:
- My Blog
tags:
- python
- shell
- cheat sheet
- vagrant
- VM
- configuration management
- django
comments:
- id: 10769
  author: John
  author_url: http://-----.com
  date: '2015-03-31 01:42:37 +0000'
  content: This is an awesome tutorial. Although, it isn't production ready of course.
    I am wondering if you could possible create a tutorial with a Vagrant, Apache,
    and Django stack with HTTPS redirects. That would be awesome!
- id: 10886
  author: Carles San Agustin
  author_url: http://www.carlessanagustin.com
  date: '2015-04-15 10:47:25 +0000'
  content: At present I am busy with Ansible and Docker projects but maybe in the
    future I will continue improving this post. Thank you.
---
<p><!--:es-->Esta entrada pretende ser una guia paso a paso de c&oacute;mo configurar un entorno de desarrollo de Django. Pod&eacute;is leer <a title="Introducci&oacute;n a Vagrant" href="http://www.carlessanagustin.com/2014/09/08/introduccion-a-vagrant/" target="_blank">esta</a>&nbsp;entrada anterior para conocer Vagrant. Elementos instalados en esta gu&iacute;a:</p>
<ul>
<li><a title="Vagrant" href="https://www.vagrantup.com/" target="_blank">Vagrant</a></li>
<li><a title="Apache" href="http://httpd.apache.org/" target="_blank">Apache</a></li>
<li><a title="mysql" href="http://www.mysql.com/" target="_blank">MySQL</a></li>
<li><a title="php" href="http://php.net/" target="_blank">PHP</a></li>
<li><a title="phpmyadmin" href="http://www.phpmyadmin.net/" target="_blank">PHPMyAdmin</a></li>
<li><a title="python" href="https://www.python.org/" target="_blank">Python</a></li>
<li><a title="virtualenv" href="https://pypi.python.org/pypi/virtualenv" target="_blank">Virtualenv</a></li>
<li><a title="django" href="https://www.djangoproject.com/" target="_blank">Django</a></li>
</ul>
<p>Vamos a editar <em>Vagrantfile</em> y crear un nuevo archivo script para automatizar el aprovisionamiento de nuestra m&aacute;quina Vagrant. A&ntilde;adimos al <em>Vagrantfile</em>:</p>
<pre>config.vm.provision :shell, :path => "vagrant-bootstrap.sh"
config.vm.network "forwarded_port", guest: 80, host: 8080
config.vm.network "forwarded_port", guest: 8000, host: 8081</pre>
<p>Como vamos a estar corriendo PHP sobre Apache tenemos que remitir el puerto 80 hacia el puerto 8080. El reenv&iacute;o de puerto 8000 es para el proyecto de Django como demostrar&eacute; m&aacute;s adelante.</p>
<p>A continuaci&oacute;n, creamos el archivo <em>vagrant-bootstrap.sh</em> en la misma carpeta que <em>Vagrantfile</em>:</p>
<pre>#!/usr/bin/env bash

apt-get update
apt-get -y upgrade

apt-get install -y git subversion curl vim screen ssh
apt-get install -y lynx links links2

######################### apache2 #########################
apt-get install -y apache2
rm -rf /var/www
ln -fs /vagrant /var/www

apt-get install -y libapache2-mod-wsgi

######################### PHP #########################
apt-get install -y php5-cli php5-curl php5-mcrypt php5-gd
mv -i /etc/php5/conf.d/mcrypt.ini /etc/php5/mods-available/
php5enmod mcrypt

######################### Python #########################
apt-get -y install python-pip python-dev build-essential python-virtualenv

######################### MySQL #########################
MYSQL_PASSWORD="django"

echo "mysql-server-5.5 mysql-server/root_password password $MYSQL_PASSWORD" | debconf-set-selections
echo "mysql-server-5.5 mysql-server/root_password_again password $MYSQL_PASSWORD" | debconf-set-selections

apt-get -y install mysql-client mysql-server sqlite3 
apt-get -y install python-mysqldb libmysqlclient-dev python-mysql.connector python3-mysql.connector

######################### phpmyadmin #########################
SYS_PASSWORD="vagrant"

echo "phpmyadmin phpmyadmin/dbconfig-install boolean false" | debconf-set-selections
echo "phpmyadmin phpmyadmin/reconfigure-webserver multiselect apache2" | debconf-set-selections

echo "phpmyadmin phpmyadmin/app-password-confirm password $SYS_PASSWORD" | debconf-set-selections
echo "phpmyadmin phpmyadmin/mysql/admin-pass password $MYSQL_PASSWORD" | debconf-set-selections
echo "phpmyadmin phpmyadmin/password-confirm password $SYS_PASSWORD" | debconf-set-selections
echo "phpmyadmin phpmyadmin/setup-password password $SYS_PASSWORD" | debconf-set-selections
echo "phpmyadmin phpmyadmin/database-type select mysql" | debconf-set-selections
echo "phpmyadmin phpmyadmin/mysql/app-pass password $SYS_PASSWORD" | debconf-set-selections

echo "dbconfig-common dbconfig-common/mysql/app-pass password $SYS_PASSWORD" | debconf-set-selections
echo "dbconfig-common dbconfig-common/mysql/app-pass password" | debconf-set-selections
echo "dbconfig-common dbconfig-common/password-confirm password $SYS_PASSWORD" | debconf-set-selections
echo "dbconfig-common dbconfig-common/app-password-confirm password $SYS_PASSWORD" | debconf-set-selections
echo "dbconfig-common dbconfig-common/app-password-confirm password $SYS_PASSWORD" | debconf-set-selections
echo "dbconfig-common dbconfig-common/password-confirm password $SYS_PASSWORD" | debconf-set-selections

apt-get -y install phpmyadmin

######################### Restart services #########################

service apache2 restart
service mysql restart

######################### Django environment #########################

cd /vagrant
mkdir apps
cd apps
virtualenv venv
source venv/bin/activate
pip install django
pip install MySQL-python
deactivate</pre>
<p>Once provisioned we can enter our Vagrant machine and create our fist app:</p>
<pre>cd /vagrant/apps
source venv/bin/activate
django-admin.py startproject app1
deactivate
</pre>
<p>Hago este &uacute;ltimo paso de forma totalmente independiente, porque me gusta crear proyectos Django manualmente.</p>
<p>Configuramos la base de datos tal como se indica en la <a title="Database setup" href="https://docs.djangoproject.com/en/1.7/intro/tutorial01/#database-setup" target="_blank">documentaci&oacute;n oficial</a> utilizando el nombre de usuario/contrase&ntilde;a proporcionada en el <em>vagrant-bootstrap.sh</em>.</p>
<p>A continuaci&oacute;n, podemos crear el archivo <em>start.sh</em> con permisos 760:</p>
<pre>#!/usr/bin/env bash
cd app/
source venv/bin/activate
python app1/manage.py runserver 0.0.0.0:8000
</pre>
<p>Ejecutamos este archivo para iniciar el proyecto de Django en el puerto 8000 y como mostr&eacute; anteriormente ya lo tenemos apuntando al puerto 8081. Abrimos un navegador y escribimos <a href="http://localhost:8081">http://localhost: 8081</a>. Ya tenemos un proyecto Django corriendo y deber&iacute;amos ver esto:<br />
<a href="/images/posts/2014/11/running-django.png"><img class="aligncenter size-full wp-image-2287" src="/images/posts/2014/11/running-django.png" alt="Running Django project" width="640" height="399" /></a><br />
Podemos continuar con la personalizaci&oacute;n de la instalaci&oacute;n, leyendo este sitio web: <a href="http://www.fullstackpython.com/">fullstackpython</a><!--:--><!--:en-->
<p>This is just an introduction step by step guide on how to setup a Django development environment. You can read <a title="Introducci&oacute;n a Vagrant" href="http://www.carlessanagustin.com/2014/09/08/introduccion-a-vagrant/" target="_blank">this</a> post for previous Vagrant knowledge. Elements installed in this guide:</p>
<ul>
<li><a title="Vagrant" href="https://www.vagrantup.com/" target="_blank">Vagrant</a></li>
<li><a title="Apache" href="http://httpd.apache.org/" target="_blank">Apache</a></li>
<li><a title="mysql" href="http://www.mysql.com/" target="_blank">MySQL</a></li>
<li><a title="php" href="http://php.net/" target="_blank">PHP</a></li>
<li><a title="phpmyadmin" href="http://www.phpmyadmin.net/" target="_blank">PHPMyAdmin</a></li>
<li><a title="python" href="https://www.python.org/" target="_blank">Python</a></li>
<li><a title="virtualenv" href="https://pypi.python.org/pypi/virtualenv" target="_blank">Virtualenv</a></li>
<li><a title="django" href="https://www.djangoproject.com/" target="_blank">Django</a></li>
</ul>
<p>We'll need to edit Vagrantfile and create a new shell script file to automaticly provision our Vagrant VM. Add in <em>Vagrantfile</em>:</p>
<pre>  config.vm.provision :shell, :path => "vagrant-bootstrap.sh"
  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.network "forwarded_port", guest: 8000, host: 8081
</pre>
<p>As we'll be running PHP over Apache we need to forward port 80 to 8080. The 8000 port forwarding is for the Django project as I will demonstrate later on sthis post.</p>
<p>Then create the file <em>vagrant-bootstrap.sh</em> in the same folder as Vagrantfile:</p>
<pre>#!/usr/bin/env bash

apt-get update
apt-get -y upgrade

apt-get install -y git subversion curl vim screen ssh
apt-get install -y lynx links links2

######################### apache2 #########################
apt-get install -y apache2
rm -rf /var/www
ln -fs /vagrant /var/www

apt-get install -y libapache2-mod-wsgi

######################### PHP #########################
apt-get install -y php5-cli php5-curl php5-mcrypt php5-gd
mv -i /etc/php5/conf.d/mcrypt.ini /etc/php5/mods-available/
php5enmod mcrypt

######################### Python #########################
apt-get -y install python-pip python-dev build-essential python-virtualenv

######################### MySQL #########################
MYSQL_PASSWORD="django"

echo "mysql-server-5.5 mysql-server/root_password password $MYSQL_PASSWORD" | debconf-set-selections
echo "mysql-server-5.5 mysql-server/root_password_again password $MYSQL_PASSWORD" | debconf-set-selections

apt-get -y install mysql-client mysql-server sqlite3 
apt-get -y install python-mysqldb libmysqlclient-dev python-mysql.connector python3-mysql.connector

######################### phpmyadmin #########################
SYS_PASSWORD="vagrant"

echo "phpmyadmin phpmyadmin/dbconfig-install boolean false" | debconf-set-selections
echo "phpmyadmin phpmyadmin/reconfigure-webserver multiselect apache2" | debconf-set-selections

echo "phpmyadmin phpmyadmin/app-password-confirm password $SYS_PASSWORD" | debconf-set-selections
echo "phpmyadmin phpmyadmin/mysql/admin-pass password $MYSQL_PASSWORD" | debconf-set-selections
echo "phpmyadmin phpmyadmin/password-confirm password $SYS_PASSWORD" | debconf-set-selections
echo "phpmyadmin phpmyadmin/setup-password password $SYS_PASSWORD" | debconf-set-selections
echo "phpmyadmin phpmyadmin/database-type select mysql" | debconf-set-selections
echo "phpmyadmin phpmyadmin/mysql/app-pass password $SYS_PASSWORD" | debconf-set-selections

echo "dbconfig-common dbconfig-common/mysql/app-pass password $SYS_PASSWORD" | debconf-set-selections
echo "dbconfig-common dbconfig-common/mysql/app-pass password" | debconf-set-selections
echo "dbconfig-common dbconfig-common/password-confirm password $SYS_PASSWORD" | debconf-set-selections
echo "dbconfig-common dbconfig-common/app-password-confirm password $SYS_PASSWORD" | debconf-set-selections
echo "dbconfig-common dbconfig-common/app-password-confirm password $SYS_PASSWORD" | debconf-set-selections
echo "dbconfig-common dbconfig-common/password-confirm password $SYS_PASSWORD" | debconf-set-selections

apt-get -y install phpmyadmin

######################### Restart services #########################

service apache2 restart
service mysql restart

######################### Django environment #########################

cd /vagrant
mkdir apps
cd apps
virtualenv venv
source venv/bin/activate
pip install django
pip install MySQL-python
deactivate</pre>
<p>Once provisioned we can enter our Vagrant machine and create our fist app:</p>
<pre>cd /vagrant/apps
source venv/bin/activate
django-admin.py startproject app1
deactivate</pre>
<p>I do this step separatelly because I like to create Django projects manually.</p>
<p>Setup the database as indicated on the <a href="https://docs.djangoproject.com/en/1.7/intro/tutorial01/#database-setup">official documentation</a> using the username/password supplied in the <em>vagrant-bootstrap.sh</em>.</p>
<p>We can then create a <em>start.sh</em> file with permission 760:</p>
<pre>#!/usr/bin/env bash
cd app/
source venv/bin/activate
python app1/manage.py runserver 0.0.0.0:8000</pre>
<p>Run file to start the Django project at port 8000 and as shown before we already forwarded that port to 8081. Open a browser and type in <a href="http://localhost:8081">http://localhost:8081</a>. You have a Django project now and should see this:</p>
<p>&nbsp;</p>
<p><a href="/images/posts/2014/11/running-django.png"><img class="aligncenter size-full wp-image-2287" src="/images/posts/2014/11/running-django.png" alt="Running Django project" width="640" height="399" /></a></p>
<p>&nbsp;</p>
<p>Now we can continue customising the installation by reading this website: <a title="fullstackpython" href="http://www.fullstackpython.com/" target="_blank">fullstackpython</a></p></p>
<p><!--:--></p>

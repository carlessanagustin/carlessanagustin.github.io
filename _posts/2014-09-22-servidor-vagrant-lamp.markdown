---
layout: post
status: publish
published: true
title: "<!--:es-->Servidor Vagrant LAMP<!--:--><!--:en-->Vagrant LAMP server<!--:-->"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Configurar un servidor LAMP en nuestra Box Vagrant usando BASH<!--:--><!--:en-->Setting
  up a LAMP server using BASH in our Vagrant Box<!--:-->"
date: '2014-09-22 18:00:52 +0000'
categories:
- My Blog
tags:
- shell
- php
- cheat sheet
- vagrant
- VM
- configuration management
- LAMP
comments: []
---
<p><!--:es-->En un post anterior expliqu&eacute; c&oacute;mo empezar iniciarnos en Vagrant. En este post me gustar&iacute;a ampliar esa explicaci&oacute;n por configurar&nbsp;un servidor LAMP.</p>
<p>Nos colocamos en el directorio de trabajo Vagrant. Siguiendo mi &uacute;ltima explicaci&oacute;n, este debe ser:</p>
<pre>$HOME/Development/Box/</pre>
<p><span style="color: #000000;">Editamos el fichero Vagrantfile y descomentamos o a&ntilde;adimos las l&iacute;neas:</span></p>
<pre>config.vm.provision :shell, :path => "vagrant-bootstrap.sh" ## provisioning file with instructions
config.vm.network :forwarded_port, host: 8002, guest: 80, auto_correct: true ## port forwarding 80 >> 8002</pre>
<p>A continuaci&oacute;n creamos/actualizamos el fichero "vagrant-bootstrap.sh" con&nbsp;"vagrant" como contrase&ntilde;a principal para nuestra configuraci&oacute;n:</p>
<pre>#!/usr/bin/env bash

apt-get update
apt-get -y upgrade

apt-get install -y apache2
rm -rf /var/www
ln -fs /vagrant /var/www

apt-get install -y git subversion curl vim screen puppet
apt-get install -y lynx links links2

apt-get install -y php5-cli php5-curl php5-mcrypt php5-gd
mv -i /etc/php5/conf.d/mcrypt.ini /etc/php5/mods-available/
php5enmod mcrypt

MYSQL_PASSWORD="vagrant"
PHPMYADMIN_PASSWORD="vagrant"

echo "mysql-server-5.5 mysql-server/root_password password $MYSQL_PASSWORD" | debconf-set-selections
echo "mysql-server-5.5 mysql-server/root_password_again password $MYSQL_PASSWORD" | debconf-set-selections

apt-get -y install mysql-client mysql-server

echo 'phpmyadmin phpmyadmin/dbconfig-install boolean false' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/reconfigure-webserver multiselect apache2' | debconf-set-selections

echo 'phpmyadmin phpmyadmin/app-password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/mysql/admin-pass password $MYSQL_PASSWORD' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/setup-password password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/database-type select mysql' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/mysql/app-pass password $PHPMYADMIN_PASSWORD' | debconf-set-selections

echo 'dbconfig-common dbconfig-common/mysql/app-pass password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'dbconfig-common dbconfig-common/mysql/app-pass password' | debconf-set-selections
echo 'dbconfig-common dbconfig-common/password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'dbconfig-common dbconfig-common/app-password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'dbconfig-common dbconfig-common/app-password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'dbconfig-common dbconfig-common/password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections

apt-get -y install phpmyadmin
</pre>
<p>Cuando tengamos estos dos ficheros editados, podemos llamar a nuestra Box Vagrant usando el comando:</p>
<pre>$ vagrant reload --provision</pre>
<p>Veremos activar nuestra Box procesando las instrucciones de "vagrant-bootstrap.sh". Una vez finalizada la operaci&oacute;n podemos ver nuestro servidor web corriendo abriendo un navegador y escribiendo <a href="http://localhost:8002" target="_blank">http://localhost:8002</a>. Aqu&iacute; veremos los archivos de nuestra carpeta de trabajo asignada en el fichero "Vagrantfile". De esta manera podemos colocar nuestro fichero index.php en la carpeta y empezar nuestro proyecto PHP.</p>
<pre>http://localhost:8002 >>>> $HOME/Development/Box/</pre>
<p>Recordar que podemos trabajar a nivel local con esa carpeta; se puede "<a title="Git" href="http://git-scm.com/" target="_blank">gitear</a>" y editar&nbsp;con nuestra <a title="Entorno de desarrollo integrado" href="http://en.wikipedia.org/wiki/Integrated_development_environment" target="_blank">herramienta IDE</a> preferida. Feliz desarrollo!</p>
<p>Podemos a&ntilde;adir estas l&iacute;neas para crear autom&aacute;ticamente una base de datos (llamada "ado" con la contrase&ntilde;a "ado"):</p>
<pre>echo "CREATE DATABASE ado;" | mysql -u root -p$MYSQL_PASSWORD
echo "CREATE USER 'ado'@'localhost' IDENTIFIED BY 'ado';" | mysql -u root -p$MYSQL_PASSWORD
echo "GRANT ALL ON ado.* TO 'ado'@'localhost';" | mysql -u root -p$MYSQL_PASSWORD
echo "GRANT CREATE ON ado.* TO 'ado'@'localhost';" | mysql -u root -p$MYSQL_PASSWORD
echo "FLUSH PRIVILEGES;" | mysql -u root -p$MYSQL_PASSWORD</pre>
<hr />
<h2>Chuleta: Configuraci&oacute;n Vagrant para aprovisionar un servidor LAMP (<a title="Cheat Sheet" href="http://www.carlessanagustin.com/Snippets/vagrant/vagrant-bootstrap2.sh.txt" target="_blank">Descargar</a>)</h2>
<pre>#!/usr/bin/env bash

apt-get update
apt-get -y upgrade

apt-get install -y apache2
rm -rf /var/www
ln -fs /vagrant /var/www

apt-get install -y git subversion curl vim screen puppet
apt-get install -y lynx links links2

apt-get install -y php5-cli php5-curl php5-mcrypt php5-gd
mv -i /etc/php5/conf.d/mcrypt.ini /etc/php5/mods-available/
php5enmod mcrypt

MYSQL_PASSWORD="vagrant"
PHPMYADMIN_PASSWORD="vagrant"

echo "mysql-server-5.5 mysql-server/root_password password $MYSQL_PASSWORD" | debconf-set-selections
echo "mysql-server-5.5 mysql-server/root_password_again password $MYSQL_PASSWORD" | debconf-set-selections

apt-get -y install mysql-client mysql-server

echo 'phpmyadmin phpmyadmin/dbconfig-install boolean false' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/reconfigure-webserver multiselect apache2' | debconf-set-selections

echo 'phpmyadmin phpmyadmin/app-password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/mysql/admin-pass password $MYSQL_PASSWORD' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/setup-password password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/database-type select mysql' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/mysql/app-pass password $PHPMYADMIN_PASSWORD' | debconf-set-selections

echo 'dbconfig-common dbconfig-common/mysql/app-pass password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'dbconfig-common dbconfig-common/mysql/app-pass password' | debconf-set-selections
echo 'dbconfig-common dbconfig-common/password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'dbconfig-common dbconfig-common/app-password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'dbconfig-common dbconfig-common/app-password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'dbconfig-common dbconfig-common/password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections

apt-get -y install phpmyadmin


## creating database ado with password ado
echo "CREATE DATABASE ado;" | mysql -u root -p$MYSQL_PASSWORD
echo "CREATE USER 'ado'@'localhost' IDENTIFIED BY 'ado';" | mysql -u root -p$MYSQL_PASSWORD
echo "GRANT ALL ON ado.* TO 'ado'@'localhost';" | mysql -u root -p$MYSQL_PASSWORD
echo "GRANT CREATE ON ado.* TO 'ado'@'localhost';" | mysql -u root -p$MYSQL_PASSWORD
echo "FLUSH PRIVILEGES;" | mysql -u root -p$MYSQL_PASSWORD
</pre>
<p><!--:--><!--:en-->
<p>On a previous post I explained how to start using a Vagrant Box. In this post I'd like to expand that explanation by setting&nbsp;up a <a title="LAMP" href="http://en.wikipedia.org/wiki/LAMP_(software_bundle)" target="_blank">LAMP</a> server.</p>
<p>Place yourself in the Vagrant working directory. Following my last explanation it should be:</p>
<pre>$HOME/Development/Box/</pre>
<p>Edit the Vagrantfile and uncomment/add these lines:</p>
<pre>config.vm.provision :shell, :path => "vagrant-bootstrap.sh" ## provisioning file with instructions
config.vm.network :forwarded_port, host: 8002, guest: 80, auto_correct: true ## port forwarding 80 >> 8002
</pre>
<p>Next create/edit the "vagrant-bootstrap.sh" with "vagrant" as main password for the configuration:</p>
<pre>#!/usr/bin/env bash

apt-get update
apt-get -y upgrade

apt-get install -y apache2
rm -rf /var/www
ln -fs /vagrant /var/www

apt-get install -y git subversion curl vim screen puppet
apt-get install -y lynx links links2

apt-get install -y php5-cli php5-curl php5-mcrypt php5-gd
mv -i /etc/php5/conf.d/mcrypt.ini /etc/php5/mods-available/
php5enmod mcrypt

MYSQL_PASSWORD="vagrant"
PHPMYADMIN_PASSWORD="vagrant"

echo "mysql-server-5.5 mysql-server/root_password password $MYSQL_PASSWORD" | debconf-set-selections
echo "mysql-server-5.5 mysql-server/root_password_again password $MYSQL_PASSWORD" | debconf-set-selections

apt-get -y install mysql-client mysql-server

echo 'phpmyadmin phpmyadmin/dbconfig-install boolean false' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/reconfigure-webserver multiselect apache2' | debconf-set-selections

echo 'phpmyadmin phpmyadmin/app-password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/mysql/admin-pass password $MYSQL_PASSWORD' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/setup-password password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/database-type select mysql' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/mysql/app-pass password $PHPMYADMIN_PASSWORD' | debconf-set-selections

echo 'dbconfig-common dbconfig-common/mysql/app-pass password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'dbconfig-common dbconfig-common/mysql/app-pass password' | debconf-set-selections
echo 'dbconfig-common dbconfig-common/password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'dbconfig-common dbconfig-common/app-password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'dbconfig-common dbconfig-common/app-password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'dbconfig-common dbconfig-common/password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections

apt-get -y install phpmyadmin
</pre>
<p>Once these two files are edited, we can call our Box with next command:</p>
<pre>$ vagrant reload --provision</pre>
<p>You should see the Box activating and processing the instructions from the "vagrant-bootstrap.sh". Once the operation is finished we can see our web server running by opening a browser and typing <a href="http://localhost:8002" target="_blank">http://localhost:8002</a>. You will see any files in our working folder as it is mapped. This way we can place our index.php file in the folder and start our PHP project</p>
<pre>http://localhost:8002 >>>> $HOME/Development/Box/</pre>
<p>Just remember that we can work locally with that folder; it can be "<a title="Git" href="http://git-scm.com/" target="_blank">gitted</a>" and edited with our prefered <a title="Integrated Development Environment" href="http://en.wikipedia.org/wiki/Integrated_development_environment" target="_blank">IDE tool</a>. Code happily!</p>
<p>For more advanced instructions you can add these lines to automatically&nbsp;create a database (called "ado" with password "ado") for us:</p>
<pre>echo "CREATE DATABASE ado;" | mysql -u root -p$MYSQL_PASSWORD
echo "CREATE USER 'ado'@'localhost' IDENTIFIED BY 'ado';" | mysql -u root -p$MYSQL_PASSWORD
echo "GRANT ALL ON ado.* TO 'ado'@'localhost';" | mysql -u root -p$MYSQL_PASSWORD
echo "GRANT CREATE ON ado.* TO 'ado'@'localhost';" | mysql -u root -p$MYSQL_PASSWORD
echo "FLUSH PRIVILEGES;" | mysql -u root -p$MYSQL_PASSWORD
</pre>
<hr />
<h2>Cheat sheet: Advanced bootstrap configuration commands for provisioning a LAMP server (<a title="Cheat Sheet" href="http://www.carlessanagustin.com/Snippets/vagrant/vagrant-bootstrap2.sh.txt" target="_blank">Download</a>)</h2>
<pre>#!/usr/bin/env bash

apt-get update
apt-get -y upgrade

apt-get install -y apache2
rm -rf /var/www
ln -fs /vagrant /var/www

apt-get install -y git subversion curl vim screen puppet
apt-get install -y lynx links links2

apt-get install -y php5-cli php5-curl php5-mcrypt php5-gd
mv -i /etc/php5/conf.d/mcrypt.ini /etc/php5/mods-available/
php5enmod mcrypt

MYSQL_PASSWORD="vagrant"
PHPMYADMIN_PASSWORD="vagrant"

echo "mysql-server-5.5 mysql-server/root_password password $MYSQL_PASSWORD" | debconf-set-selections
echo "mysql-server-5.5 mysql-server/root_password_again password $MYSQL_PASSWORD" | debconf-set-selections

apt-get -y install mysql-client mysql-server

echo 'phpmyadmin phpmyadmin/dbconfig-install boolean false' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/reconfigure-webserver multiselect apache2' | debconf-set-selections

echo 'phpmyadmin phpmyadmin/app-password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/mysql/admin-pass password $MYSQL_PASSWORD' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/setup-password password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/database-type select mysql' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/mysql/app-pass password $PHPMYADMIN_PASSWORD' | debconf-set-selections

echo 'dbconfig-common dbconfig-common/mysql/app-pass password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'dbconfig-common dbconfig-common/mysql/app-pass password' | debconf-set-selections
echo 'dbconfig-common dbconfig-common/password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'dbconfig-common dbconfig-common/app-password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'dbconfig-common dbconfig-common/app-password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections
echo 'dbconfig-common dbconfig-common/password-confirm password $PHPMYADMIN_PASSWORD' | debconf-set-selections

apt-get -y install phpmyadmin


## creating database ado with password ado
echo "CREATE DATABASE ado;" | mysql -u root -p$MYSQL_PASSWORD
echo "CREATE USER 'ado'@'localhost' IDENTIFIED BY 'ado';" | mysql -u root -p$MYSQL_PASSWORD
echo "GRANT ALL ON ado.* TO 'ado'@'localhost';" | mysql -u root -p$MYSQL_PASSWORD
echo "GRANT CREATE ON ado.* TO 'ado'@'localhost';" | mysql -u root -p$MYSQL_PASSWORD
echo "FLUSH PRIVILEGES;" | mysql -u root -p$MYSQL_PASSWORD
</pre></p>
<p><!--:--></p>

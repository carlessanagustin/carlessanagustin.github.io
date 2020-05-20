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
- Blog
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
This is just an introduction step by step guide on how to setup a Django development environment. You can read [this](http://www.carlessanagustin.com/2014/09/08/introduccion-a-vagrant/ "Introducción a Vagrant") post for previous Vagrant knowledge. Elements installed in this guide:

*   [Vagrant](https://www.vagrantup.com/ "Vagrant")
*   [Apache](http://httpd.apache.org/ "Apache")
*   [MySQL](http://www.mysql.com/ "mysql")
*   [PHP](http://php.net/ "php")
*   [PHPMyAdmin](http://www.phpmyadmin.net/ "phpmyadmin")
*   [Python](https://www.python.org/ "python")
*   [Virtualenv](https://pypi.python.org/pypi/virtualenv "virtualenv")
*   [Django](https://www.djangoproject.com/ "django")

We'll need to edit Vagrantfile and create a new shell script file to automaticly provision our Vagrant VM. Add in _Vagrantfile_:

```ruby
  config.vm.provision :shell, :path => "vagrant-bootstrap.sh"
  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.network "forwarded_port", guest: 8000, host: 8081
```

As we'll be running PHP over Apache we need to forward port 80 to 8080\. The 8000 port forwarding is for the Django project as I will demonstrate later on sthis post.

Then create the file _vagrant-bootstrap.sh_ in the same folder as Vagrantfile:

```shell
#!/usr/bin/env bash

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
deactivate
``` 

Once provisioned we can enter our Vagrant machine and create our fist app:

```shell
cd /vagrant/apps
source venv/bin/activate
django-admin.py startproject app1
deactivate
```

I do this step separatelly because I like to create Django projects manually.

Setup the database as indicated on the [official documentation](https://docs.djangoproject.com/en/1.7/intro/tutorial01/#database-setup) using the username/password supplied in the _vagrant-bootstrap.sh_.

We can then create a _start.sh_ file with permission 760:

```shell
#!/usr/bin/env bash
cd app/
source venv/bin/activate
python app1/manage.py runserver 0.0.0.0:8000
```

Run file to start the Django project at port 8000 and as shown before we already forwarded that port to 8081\. Open a browser and type in [http://localhost:8081](http://localhost:8081). You have a Django project now and should see this:

[![Running Django project](/images/posts/2014/11/running-django.png)](/images/posts/2014/11/running-django.png)

Now we can continue customising the installation by reading this website: [fullstackpython](http://www.fullstackpython.com/ "fullstackpython")
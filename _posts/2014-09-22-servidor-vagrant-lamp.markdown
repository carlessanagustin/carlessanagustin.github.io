---
layout: post
status: publish
published: true
title: "Vagrant LAMP server"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Configurar un servidor LAMP en nuestra Box Vagrant usando BASH<!--:--><!--:en-->Setting
  up a LAMP server using BASH in our Vagrant Box<!--:-->"
date: '2014-09-22 18:00:52 +0000'
categories:
- Blog
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
On a previous post I explained how to start using a Vagrant Box. In this post I'd like to expand that explanation by setting up a [LAMP](http://en.wikipedia.org/wiki/LAMP_(software_bundle) "LAMP") server.

Place yourself in the Vagrant working directory. Following my last explanation it should be:

`$HOME/Development/Box/`

Edit the Vagrantfile and uncomment/add these lines:

```ruby
config.vm.provision :shell, :path => "vagrant-bootstrap.sh" ## provisioning file with instructions
config.vm.network :forwarded_port, host: 8002, guest: 80, auto_correct: true ## port forwarding 80 >> 8002
```

Next create/edit the "vagrant-bootstrap.sh" with "vagrant" as main password for the configuration:

```shell
#!/usr/bin/env bash

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
```

Once these two files are edited, we can call our Box with next command:

`$ vagrant reload --provision`

You should see the Box activating and processing the instructions from the "vagrant-bootstrap.sh". Once the operation is finished we can see our web server running by opening a browser and typing [http://localhost:8002](http://localhost:8002). You will see any files in our working folder as it is mapped. This way we can place our index.php file in the folder and start our PHP project

`http://localhost:8002 >>>> $HOME/Development/Box/`

Just remember that we can work locally with that folder; it can be "[gitted](http://git-scm.com/ "Git")" and edited with our prefered [IDE tool](http://en.wikipedia.org/wiki/Integrated_development_environment "Integrated Development Environment"). Code happily!

For more advanced instructions you can add these lines to automatically create a database (called "ado" with password "ado") for us:

```shell
echo "CREATE DATABASE ado;" | mysql -u root -p$MYSQL_PASSWORD
echo "CREATE USER 'ado'@'localhost' IDENTIFIED BY 'ado';" | mysql -u root -p$MYSQL_PASSWORD
echo "GRANT ALL ON ado.* TO 'ado'@'localhost';" | mysql -u root -p$MYSQL_PASSWORD
echo "GRANT CREATE ON ado.* TO 'ado'@'localhost';" | mysql -u root -p$MYSQL_PASSWORD
echo "FLUSH PRIVILEGES;" | mysql -u root -p$MYSQL_PASSWORD
````

* * *

## Cheat sheet: Advanced bootstrap configuration commands for provisioning a LAMP server ([Download](http://www.carlessanagustin.com/Snippets/vagrant/vagrant-bootstrap2.sh.txt "Cheat Sheet"))

```shell
#!/usr/bin/env bash

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
```
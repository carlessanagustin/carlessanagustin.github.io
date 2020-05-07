---
layout: post
status: publish
published: true
title: "<!--:es-->Introducci&oacute;n a Vagrant<!--:--><!--:en-->Introducing Vagrant<!--:-->"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Introducción básica al uso de Vagrant para configurar nuestro
  entorno de desarrollo portable y compartible.<!--:--><!--:en-->Basic introduction
  to Vagrant and its use for reproducing portable and shareable development environments.<!--:-->"
date: '2014-09-08 18:00:45 +0000'
categories:
- My Blog
tags:
- cheat sheet
- vagrant
- VM
- configuration management
- puppet
comments: []
---
<p><!--:es-->Me gustar&iacute;a presentar r&aacute;pidamente el uso de Vagrant en nuestro sistema local. Primero empezar&eacute; explicando que es Vagrant. Como se describe en su p&aacute;gina <a title="Vagrant" href="https://www.vagrantup.com/" target="_blank">web</a>: Crear y configurar entornos de desarrollo de peso ligero, reproducibles y port&aacute;tiles. Es un software que nos permite crear <a title="VM" href="http://en.wikipedia.org/wiki/Virtual_machine" target="_blank">m&aacute;quinas virtuales</a> (VM) port&aacute;tiles y compartibles con el entorno necesario. Cada entorno se compone de varios paquetes y configuraciones creando nuestra <a title="Pila (Stack)" href="http://en.wikipedia.org/wiki/Solution_stack" target="_blank">pila</a> de desarrollo:</p>
<ul>
<li>Ubuntu, Apache, PHP, MySQL, ...</li>
<li>CentOS, NGINX, Ruby on Rails, MondoDB, ...</li>
<li>...y otros.</li>
</ul>
<p>Vagrant nos permite disponer de uno de estos entornos (<a title="Boxes" href="https://docs.vagrantup.com/v2/boxes.html" target="_blank">Boxes</a>) en nuestra m&aacute;quina local. Este entorno se puede copiar de los servidores de pre-producci&oacute;n y producci&oacute;n de nuestro proyecto de manera que los cambios que hemos hecho seguir&aacute;n los reales. Como se trata de una m&aacute;quina virtual totalmente funcional en nuestro ordenador personal, tambi&eacute;n lo podemos configurar para que siga las instrucciones de nuestro equipo de administradores de sistemas o operaciones, por lo que los cambios realizados en pre-producci&oacute;n y producci&oacute;n seran reproducidos en nuestra Box Vagrant. Se considera Vagrant una envoltura alrededor del software de virtualizaci&oacute;n como <a title="Oracle VirtualBox" href="http://en.wikipedia.org/wiki/VirtualBox" target="_blank">VirtualBox</a> y software de <a title="Configuration Management" href="http://en.wikipedia.org/wiki/Configuration_management" target="_blank">gesti&oacute;n de la configuraci&oacute;n</a>, como <a title="Chef" href="http://en.wikipedia.org/wiki/Chef_(software)" target="_blank">Chef</a>, <a title="Salt" href="http://en.wikipedia.org/wiki/Salt_(software)" target="_blank">Salt</a> and <a title="Puppet" href="http://en.wikipedia.org/wiki/Puppet_(software)" target="_blank">Puppet</a>. Para obtener m&aacute;s informaci&oacute;n, consulta el sitio web de Vagrant o busca en Google. Hay un mont&oacute;n de informaci&oacute;n y tutoriales disponibles.</p>
<p>Vamos a continuar con la instalaci&oacute;n del software necesario en nuestro ordenador personal:</p>
<ol>
<li>MacOSX, Windows or Linux</li>
<li><a title="Oracle VirtualBox" href="https://www.virtualbox.org/" target="_blank">VirtualBox</a></li>
<li><a title="Oracle VirtualBox" href="https://www.virtualbox.org/" target="_blank">VirtualBox Extension Pack</a></li>
<li><a title="Vagrant" href="https://www.vagrantup.com/" target="_blank">Vagrant</a></li>
</ol>
<p>Estoy asumiendo que ya tenemos una <a title="Vagrant Box" href="http://www.vagrantbox.es/" target="_blank">Box</a> (<a title="Ubuntu" href="http://www.ubuntu.com/" target="_blank">Ubuntu</a>) lista para usar, pero podemos crear nuestra propia siguiendo esta documentaci&oacute;n. Trabajando en un equipo de desarrollo, esta Box podr&iacute;a ser proporcionada por nuestro administrador de sistemas o equipo de operaciones. <a title="Vagrant Cloud" href="https://vagrantcloud.com/" target="_blank">Aqu&iacute;</a> para m&aacute;s Boxes.</p>
<p>Abrimos la aplicaci&oacute;n de terminal o de l&iacute;nea de comandos y vamos al directorio de trabajo deseado. A continuaci&oacute;n, creamos una carpeta de desarrollo y entramos en ella. Colocamos aqu&iacute; la imagen Box:</p>
<pre>$HOME/Development/packaged.box</pre>
<p>Creamos una nueva carpeta "Box" y entramos en ella (cd):</p>
<pre>$HOME/Development/Box/</pre>
<p>Instalamos la Box en VirtualBox:</p>
<pre>$ vagrant box add {title} {url} ## url can be a HTTP, HTTPS, local file or from the public Box <a title="Vagrant Cloud" href="https://vagrantcloud.com/" target="_blank">site</a>.
$ vagrant init {title}
$ vagrant up</pre>
<p>Ejemplo:</p>
<pre>$ vagrant box add myFirstBox ../packaged.box
$ vagrant init myFirstBox
$ vagrant up</pre>
<p>Este &uacute;ltimo comando inicia nuestra VM. En esta carpeta de trabajo que deber&iacute;amos ver un nuevo archivo, m&aacute;s una carpeta oculta:</p>
<pre>drwxr-xr-x .vagrant
 -rw-r--r-- Vagrantfile</pre>
<p>El comando Vagrant utiliza los archivos de la carpeta/entorno m&aacute;s la imagen de VirtualBox. M&aacute;s adelante voy a explicar la importancia de "Vagrantfile".</p>
<p>Estoy asumiendo que estamos utilizando una caja de Ubuntu. Para entrar el ella solo debemos hacer:</p>
<pre>$ vagrant ssh</pre>
<p>Ahora deber&iacute;amos estar dentro la VM lista para usar.&nbsp;Deber&iacute;amos ver algo como:</p>
<pre>Welcome to Ubuntu 13.10 (GNU/Linux 3.11.0-12-generic i686)
* Documentation: https://help.ubuntu.com/
vagrant@vagrant:~$</pre>
<p>Para salir de la Box&nbsp;s&oacute;lo debemos ejecutar "exit".</p>
<p>A partir de aqu&iacute; podr&iacute;amos instalar (apt-get ...) y configurar (/ etc ...) nuestra Ubuntu, pero voy a dar algunas recomendaciones para automatizar&nbsp;el flujo de la Box listo para nuestros administradores de sistemas o equipo de operaciones.</p>
<p>Editamos nuestro Vagrantfile y descomentar/a&ntilde;adir estas l&iacute;neas:</p>
<pre style="color: #000000;">config.vm.provision :shell, :path => "vagrant-bootstrap.sh" ## provisioning file with instructions</pre>
<p>A continuaci&oacute;n creamos/actualizamos el fichero "vagrant-bootstrap.sh":</p>
<pre>#!/usr/bin/env bash
apt-get update
apt-get -y upgrade</pre>
<pre>apt-get install -y puppet
apt-get install -y git subversion curl vim screen</pre>
<p>Una vez estos dos archivos son editados, podemos llamar a nuestra Box&nbsp;con el siguiente comando:</p>
<pre>$ vagrant reload --provision</pre>
<p>Deber&iacute;amos ver la Box activada y actualizandose siguiendo las instrucciones del fichero"vagrant-bootstrap.sh".</p>
<p>Una vez se procesan los pasos, podemos seguir usando y configurando esta&nbsp;Box. He a&ntilde;adido una l&iacute;nea para instalar Puppet;&nbsp;para que podamos configurar nuestra Box con el Puppet Master y obtener cambios, actualizaciones, ... de nuestro equipo de operaciones.</p>
<p>Pronto publicar&eacute; los pasos a seguir para configurar una Box Vagrant <a title="LAMP" href="http://en.wikipedia.org/wiki/LAMP_(software_bundle)" target="_blank">LAMP</a>.</p>
<hr />
<h2>Chuleta: Configuraci&oacute;n de arranque simple (<a title="chuleta" href="http://www.carlessanagustin.com/Snippets/vagrant/vagrant-bootstrap1.sh.txt" target="_blank">Descargar</a>)</h2>
<pre>## 1. vagrant: add image
$ vagrant box add {title} {url}  ## vagrant box add myFirstBox ../packaged.box
$ vagrant init {title}  ## vagrant init myFirstBox
$ vagrant up

## 2. vagrant: connect
$ vagrant ssh

## 3. open Vagrantfile and add&hellip;
config.vm.provision :shell, :path => "vagrant-bootstrap.sh"

## 4. open/create vagrant-bootstrap.sh and add&hellip;
#!/usr/bin/env bash
apt-get update
apt-get -y upgrade

apt-get install -y puppet
apt-get install -y git subversion curl vim screen 

## 5. vagrant: provision
$ vagrant reload --provision

## 6. vagrant: remove
$ vagrant destroy
</pre>
<p><!--:--><!--:en-->
<p>I'd like to quickly introduce you to the use of Vagrant software in our local computer. But first let's start by explaining what is Vagrant. As described in its <a title="Vagrant" href="https://www.vagrantup.com/" target="_blank">website</a>: Create and configure lightweight, reproducible, and portable development environments. It is a software that allows us to create portable and shareable&nbsp;<a title="VM" href="http://en.wikipedia.org/wiki/Virtual_machine" target="_blank">virtual machines</a> (VM) with the environment we need. Each environment is composed of various packages and configurations creating our development <a title="Stack" href="http://en.wikipedia.org/wiki/Solution_stack" target="_blank">stack</a>:</p>
<ul>
<li>Ubuntu, Apache, PHP, MySQL, ...</li>
<li>CentOS, NGINX, Ruby on Rails, MondoDB, ...</li>
<li>...and others.</li>
</ul>
<p>Vagrant allows us to have one of this environments (<a title="Boxes" href="https://docs.vagrantup.com/v2/boxes.html" target="_blank">Boxes</a>) in our local machine. This environment can be copied from the staging and production servers of our project so changes we made will be following the real ones. As it is a fully working VM in our personal computer, it can too follow our sysadmin/operations decisions, so changes made in staging or production server will be reproduced in our local VM. It can be considered a wrapper around virtualization software such as <a title="Oracle VirtualBox" href="http://en.wikipedia.org/wiki/VirtualBox" target="_blank">VirtualBox</a> and <a title="Configuration Management" href="http://en.wikipedia.org/wiki/Configuration_management" target="_blank">configuration management</a> software such as <a title="Chef" href="http://en.wikipedia.org/wiki/Chef_(software)" target="_blank">Chef</a>, <a title="Salt" href="http://en.wikipedia.org/wiki/Salt_(software)" target="_blank">Salt</a> and <a title="Puppet" href="http://en.wikipedia.org/wiki/Puppet_(software)" target="_blank">Puppet</a>. For more information please consult Vagrant's website or do a Google search. There is plenty information and tutorials available.</p>
<p>Let's continue by installing the required software in our personal computer:</p>
<ol>
<li>MacOSX, Windows or Linux</li>
<li><a href="https://www.virtualbox.org/" target="_blank">VirtualBox</a></li>
<li><a href="https://www.virtualbox.org/" target="_blank">VirtualBox Extension Pack</a></li>
<li><a href="https://www.vagrantup.com/" target="_blank">Vagrant</a></li>
</ol>
<p>I am assuming we already have a <a title="Vagrant Box" href="http://www.vagrantbox.es/" target="_blank">Box</a> (<a title="Ubuntu" href="http://www.ubuntu.com/" target="_blank">Ubuntu</a>) ready to use but we can create our own following this documentation. Working in a development team, this box could be provided by our sysadmin/operations team. For more Boxes <a title="Vagrant Cloud" href="https://vagrantcloud.com/" target="_blank">here</a>.</p>
<p>Open your terminal or command line application and go to your desired working directory. Then create your development folder and enter it. Place in here the Box image:</p>
<pre>$HOME/Development/packaged.box</pre>
<p>Create a new folder called "Box" and enter it (cd):</p>
<pre>$HOME/Development/Box/</pre>
<p>Lets install our Box into VirtualBox:</p>
<pre>$ vagrant box add {title} {url} ## url can be a HTTP, HTTPS, local file or from the public Box <a href="https://vagrantcloud.com/">site</a>.
$ vagrant init {title}
$ vagrant up
</pre>
<p>Example:</p>
<pre>$ vagrant box add myFirstBox ../packaged.box
$ vagrant init myFirstBox
$ vagrant up
</pre>
<p>This last command starts our VM. In this working folder we should see a new file plus a hidden folder:</p>
<pre>drwxr-xr-x  .vagrant
-rw-r--r--  Vagrantfile
</pre>
<p>Vagrant command uses those files for the folder/environment where it is called plus the VirtualBox image. I will later explain the importance of "Vagrantfile".</p>
<p>I am assuming we are using a Ubuntu Box, so to enter it just type in:</p>
<pre>$ vagrant ssh</pre>
<p>Now we should&nbsp;we inside our VM Box ready to use. We should see something like:</p>
<pre>Welcome to Ubuntu 13.10 (GNU/Linux 3.11.0-12-generic i686)
 * Documentation:  https://help.ubuntu.com/
vagrant@vagrant:~$</pre>
<p>To leave the Box just type in "exit".</p>
<p>From here we could install (apt-get ...) and configure (/etc ...) any Ubuntu parameters but I am going to give you a few recommendations to automate&nbsp;the Box flow ready for our sysadmin/operations team.</p>
<p>We can edit our Vagrantfile and uncomment/add these lines:</p>
<pre>config.vm.provision :shell, :path => "vagrant-bootstrap.sh" ## provisioning file with instructions
</pre>
<p>Next create/edit the "vagrant-bootstrap.sh" with:</p>
<pre>#!/usr/bin/env bash
apt-get update
apt-get -y upgrade

apt-get install -y puppet
apt-get install -y git subversion curl vim screen 
</pre>
<p>Once these two files are edited, we can call our Box with next command:</p>
<pre>$ vagrant reload --provision</pre>
<p>You should see the Box activating/reloading and processing the instructions from the "vagrant-bootstrap.sh".</p>
<p>Once steps are processed you can continue using and configuring this Box. See that I added a line to install Puppet, so we can set up this Box to point to the Puppet master of our company and get changes, updates, ... from the sysadmin/operations team.</p>
<p>Soon I will post the Vagrant <a title="LAMP" href="http://en.wikipedia.org/wiki/LAMP_(software_bundle)" target="_blank">LAMP</a> configuration steps.</p>
<hr />
<h2>Cheat sheet: Simple bootstrap configuration (<a title="Cheat Sheet" href="http://www.carlessanagustin.com/Snippets/vagrant/vagrant-bootstrap1.sh.txt" target="_blank">Download</a>)</h2>
<pre>## 1. vagrant: add image
$ vagrant box add {title} {url}  ## vagrant box add myFirstBox ../packaged.box
$ vagrant init {title}  ## vagrant init myFirstBox
$ vagrant up

## 2. vagrant: connect
$ vagrant ssh

## 3. open Vagrantfile and add&hellip;
config.vm.provision :shell, :path => "vagrant-bootstrap.sh"

## 4. open/create vagrant-bootstrap.sh and add&hellip;
#!/usr/bin/env bash
apt-get update
apt-get -y upgrade

apt-get install -y puppet
apt-get install -y git subversion curl vim screen 

## 5. vagrant: provision
$ vagrant reload --provision

## 6. vagrant: remove
$ vagrant destroy
</pre></p>
<p><!--:--></p>

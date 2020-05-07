---
layout: post
status: publish
published: true
title: Instalacion paquetes extra para Fedora 14
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
date: '2011-01-06 23:47:00 +0000'
categories:
- My Blog
tags:
- it
- linux
- shell
- fedora
comments:
- id: 175
  author: Anonymous
  author_url: http://Anonymousnoreply@blogger.com
  date: '2011-02-13 12:24:30 +0000'
  content: ">/root/.dropbox-dist/_ctypes.so: cannot enable executable stack as shared
    object requires: Permission deniedcan you help me with this problem??? i&#039;m
    installing dropbox in fedora 14.Thanks in avance.   Bstrgds"
- id: 176
  author: SantO
  author_url: http://www.blogger.com/profile/05213799869034404940
  date: '2011-02-14 11:58:08 +0000'
  content: ">Looks like a security issue due to file permissions or SELinux. I recommend
    you to check its permitions and owner:# ls -la /root/.dropbox-dist/_ctypes.soIf
    the problem still persist then check SELinux configuration.Googled it: http://forums.dropbox.com/topic.php?id=27090I
    hope this information helps you.c."
---
<p>Justo acabo de terminar de instalar una <a href="http://fedoraproject.org/">Fedora</a> 14 en mi vieja <a href="http://es.wikipedia.org/wiki/Estaci%C3%B3n_de_trabajo">torre</a>. La instalacion no viene completa debido a los derechos/patentes de algunos programas como:</p>
<ul>
<li><a href="http://www.videolan.org/">VLC</a></li>
<li><a href="http://www.skype.com/">Skype</a></li>
<li><a href="http://picasa.google.com/">Google Picasa</a></li>
<li><a href="http://www.adobe.com/">Adobe Flash</a></li>
<li><a href="http://www.virtualbox.org/">VirtualBox </a></li>
<li><a href="http://www.dropbox.com/">Dropbox </a></li>
</ul>
<p>Para instalar programas en Fedora podemos usar <a href="http://es.wikipedia.org/wiki/RPM_Package_Manager">rpm</a> o <a href="http://es.wikipedia.org/wiki/Estaci%C3%B3n_de_trabajo">yum</a> principalmente. Prefiero usar yum ya que me permite instalar/actualizar programas con un simple "<em>yum install </em>" o "<em>yum update</em>" y el ya se encarga de todo lo demas. A continuacion explicare los pasos a seguir para la instalacion de cada uno de los programes antes mencionados via <a href="http://es.wikipedia.org/wiki/L%C3%ADnea_de_comandos">linea de comandos</a>:</p>
<p><a href="http://www.videolan.org/vlc/download-fedora.html"><span style="font-size:large;">VLC</span></a><br />
<strong># sudo rpm -ivh http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-stable.noarch.rpm</strong><br />
<strong> # yum install vlc mozilla-vlc</strong></p>
<p><a href="http://www.lffl.org/2011/01/installiamo-skype-su-fedora-14-via.html"><span style="font-size:large;">Skype</span></a><br />
<strong># sudo vim /etc/yum.repos.d/skype.repo</strong></p>
<p><strong><span style="color:blue;">[skype]</span></strong><br />
<strong> <span style="color:blue;"> name=Skype Repository</span></strong><br />
<strong> <span style="color:blue;"> baseurl=http://download.skype.com/linux/repos/fedora/updates/i586</span></strong><br />
<strong> <span style="color:blue;"> enable=1</span></strong><br />
<strong> <span style="color:blue;"> gpgcheck=0</span></strong><br />
<strong> <span style="color:blue;"> gpgkey=http://www.skype.com/products/skype/linux/rpm-public-key.asc</span></strong><br />
<strong> # sudo yum install skype</strong></p>
<p><a href="http://www.google.com/linuxrepositories/yum.html"><span style="font-size:large;">Google Picasa</span></a><br />
<strong># sudo vim /etc/yum.repos.d/picasa.repo</strong></p>
<div style="color:blue;"><strong>[google]</strong></div>
<div style="color:blue;"><strong>name=Google - i386</strong></div>
<div style="color:blue;"><strong>baseurl=http://dl.google.com/linux/rpm/stable/i386</strong></div>
<div style="color:blue;"><strong>enabled=1</strong></div>
<div style="color:blue;"><strong>gpgcheck=1</strong></div>
<div style="color:blue;"><strong>gpgkey=https://dl-ssl.google.com/linux/linux_signing_key.pub</strong></div>
<p><strong># sudo yum install picasa wine-common</strong></p>
<p><span style="font-size:large;">Adobe Flash</span></p>
<p>Descargar la version "YUM for Linux" de <a href="http://get.adobe.com/flashplayer/">aqu&iacute;</a>.<br />
<strong># sudo rpm -ivh adobe-release-i386-1.0-1.noarch.rpm</strong><br />
<strong> # sudo yum install flash-plugin</strong></p>
<p><a href="http://www.virtualbox.org/wiki/Linux_Downloads"><span style="font-size:large;">VirtualBox</span></a><br />
<strong># sudo rpm --import http://download.virtualbox.org/virtualbox/debian/oracle_vbox.asc</strong></p>
<p><strong># sudo vim /etc/yum.repos.d/virtualbox.repo</strong></p>
<div style="color:blue;"><strong>[virtualbox]</strong></div>
<div style="color:blue;"><strong>name=Fedora $releasever - $basearch - VirtualBox</strong></div>
<div style="color:blue;"><strong>baseurl=http://download.virtualbox.org/virtualbox/rpm/fedora/$releasever/$basearch</strong></div>
<div style="color:blue;"><strong>enabled=1</strong></div>
<div style="color:blue;"><strong>gpgcheck=1</strong></div>
<div style="color:blue;"><strong>gpgkey=http://download.virtualbox.org/virtualbox/debian/oracle_vbox.asc</strong></div>
<p><strong># sudo yum install VirtualBox-4.0</strong></p>
<p><a href="http://www.dropbox.com/downloading?os=lnx"><span style="font-size:large;">Dropbox</span></a><br />
<strong># sudo vim /etc/yum.repos.d/dropbox.repo</strong><br />
<strong> <span style="color:blue;">[Dropbox]</span></strong><br style="color:blue;" /><strong><span style="color:blue;">name=Dropbox Repository</span></strong><br style="color:blue;" /><strong><span style="color:blue;">baseurl=http://linux.dropbox.com/fedora/$releasever/</span></strong><br style="color:blue;" /><strong><span style="color:blue;">gpgkey=http://linux.dropbox.com/fedora/rpm-public-key.asc</span></strong></p>
<p><strong># sudo yum install nautilus-dropbox</strong></p>
<p>Por ahora no recuerdo mas programas interesantes pero seguro que ampliare este post con otros programas que no encuentre directamente en el repositorio por defecto de yum.<br />
Saludos!</p>

---
layout: post
status: publish
published: true
title: Curso de audio en Linux
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
date: '2007-11-13 21:15:00 +0000'
categories:
- Blog
tags:
- audio
comments:
- id: 103
  author: SantO
  author_url: http://SantOnoreply@blogger.com
  date: '2007-11-13 20:26:00 +0000'
  content: '>Donde escuchar free/open music en Barcelona?<a href="http://hangar.org/"
    rel="nofollow">Hangar</a><a href="http://pitchvolley.com/nvisible.taz/" rel="nofollow">daax!
    ::::: nvisible.taz :::::</a><a href="http://delcorp.org/distorsionfest/" rel="nofollow">DiSToRsiOn
    FeSTiVaL</a><a href="http://musaik.net/" rel="nofollow">CSOA La Fibra</a>Saludos!'
- id: 104
  author: youmin
  author_url: http://www.blogger.com/profile/18402769198216009880
  date: '2007-11-18 21:50:00 +0000'
  content: ">Buen art&iacute;culo. S&oacute;lo recordarte que si alg&uacute;n dia
    encuentras por ah&iacute; alg&uacute;n mixer digital que me permita conectar varios
    ordenadores como entrada de sonido y una o varias salidas todo ello controlable
    por puerto USB/Serie me ir&iacute;a genial."
- id: 105
  author: Anonymous
  author_url: http://Anonymousnoreply@blogger.com
  date: '2009-10-24 20:07:23 +0000'
  content: '>more:<a href="http://westcoastsuccess.wordpress.com/2008/03/23/m-audio-firewire-solo-ubuntu/"
    rel="nofollow">Setting up an M-Audio FireWire Solo with Ubuntu</a>'
---
<p>Esta pasada semana asist&iacute; a un interesante <a href="http://www.telenoika.net//index.php?option=com_content&amp;task=view&amp;id=502&amp;Itemid=57&amp;lang=ca">curso</a> de audio profesional sobre sistemas <a href="http://es.wikipedia.org/wiki/Linux">Linux</a>. El curso se baso en la distribuci&oacute;n <a href="http://ubuntustudio.org/">UbuntuStudio</a> aunque tambi&eacute;n sirve para otras distribuciones. El curso se imparti&oacute; en <a href="http://riereta.net/">riereta.net</a> de <a href="http://maps.google.es/maps?q=barcelona&amp;ie=UTF8&amp;z=12&amp;iwloc=addr&amp;om=1">Barcelona</a> a trav&eacute;s del grupo <a href="http://www.telenoika.net/">telenoika</a>. Su profesor, <a href="http://costellam.net/">Lluis Carbonell</a>, gran conocedor del entorno audio en Linux y loco por <a href="http://ardour.org/">Ardour</a> ;)<br />
Tratare de explicar aqu&iacute; los puntos mas interesantes que all&iacute; se ensenaron y a partir de esto...a jugar con Linux!</p>
<p>Lo primero es entender lo que es latencia y como reducirla para poder trabajar correctamente con nuestros sonidos. La latencia es el retraso temporal que sufre nuestra m&uacute;sica al pasar por dispositivos anal&oacute;gicos/digitales de audio. Creo que no me he explicado muy bien as&iacute; que para mas <a href="http://en.wikipedia.org/wiki/Latency_%28audio%29">informaci&oacute;n</a>buscad por Internet que yo ya lo entiendo :P Lo que hay que tener claro es que cuando menos latencia tenga nuestro sistema, mucho mejor funcionara la reproducci&oacute;n de m&uacute;sica as&iacute; como trabajo en tiempo real. Para esto existen algunas distribuciones Linux que consideran esta latencia baja para el sistema:</p>
<ul>
<li><a href="http://ubuntustudio.org/">Ubuntu Studio</a></li>
<li><a href="http://jacklab.org/">JackLab</a></li>
<li><a href="http://64studio.com/">64 Studio</a></li>
</ul>
<p>Leer, probar y la que os guste mas instalad-la! En caso de tener una <a href="http://www.ubuntu.com/">Ubuntu</a> a secas, podemos instalar, via <a href="http://es.wikipedia.org/wiki/Advanced_Packaging_Tool">apt-get,</a> todos los paquetes de UbuntuStudio y los m&oacute;dulos de kernel-lowlatency tambi&eacute;n, como hice yo. Este curso se basa en UbuntuStudio.<br />
A continuaci&oacute;n hacemos unos cambios en la configuraci&oacute;n de seguridad del sistema para que se priorice el grupo audio sobre memoria y dispositivos de entrada/salida. Editamos <span style="font-style:italic;">/etc/security/limits.conf</span> y agregamos al final del fichero:<br />
<span style="font-style:italic;">@audio - rtprio 95</span><br />
<span style="font-style:italic;">@audio - memlock 512000 </span>(memoria total de nuestro ordenador en KB)<br />
<span style="font-style:italic;">@audio - nice -19</span></p>
<p>Para trabajo profesional con audio normalmente se recurre a tarjetas externas. Estas estar&aacute;n conectadas al ordenador a trav&eacute;s de <a href="http://es.wikipedia.org/wiki/PCMCIA">PCMCIA</a>, <a href="http://es.wikipedia.org/wiki/Usb">USB</a> o <a href="http://es.wikipedia.org/wiki/Firewire">FireWire</a> normalmente aunque existen otras opciones. En nuestro caso tratamos de configurar una <a href="http://www.m-audio.com/products/en_us/FireWireSolo-main.html">M-Audio FireWire Solo</a> y para eso tenemos de dar permisos de escritura y lectura sobre la interficie FireWire o IEEE1394, desactivados por defecto en las ultimas distribuciones Linux.</p>
<p>Editamos el fichero<span style="font-style:italic;">/etc/init.d/rc.local</span> y agregamos al final del fichero:<br />
<span style="font-style:italic;">/sbin/modprobe ieee1394</span><br />
<span style="font-style:italic;">/sbin/modprobe raw1394</span><br />
<span style="font-style:italic;">/bin/chmod 777 /dev/raw1394</span><br />
<span style="font-style:italic;">/bin/chmod 777 /dev/dv1394/0<br />
</span><br />
De esta forma aplicamos este conjunto de comandos al arranque del sistema.</p>
<p>En Linux tenemos diferentes interficie para capturar y reproducir audio. Algunos de estos sistemas por orden de antig&uuml;edad:</p>
<ul>
<li><a href="http://www.opensound.com/">OSS</a></li>
<li><a href="http://www.alsa-project.org/">ALSA</a></li>
<li><a href="http://freebob.sourceforge.net/">FREEBOB o FFADO</a></li>
</ul>
<p>Estos m&oacute;dulos podr&iacute;an compararse con lo que llamamos <a href="http://www.asio4all.com/">ASIO</a> en sistemas <a href="http://www.geocities.com/juanbs0812/blogspot/love_windows.JPG">Windows</a>. Nos hacen de puente entre los dispositivos audio y el servidor de audio. OSS fue creado para sistemas UNIX y nos permite controlar un grupo reducido de dispositivos ya que no fue creado para fines multimediales. ALSA permite usar gran numero de <a href="http://www.alsa-project.org/main/index.php/Matrix:Main">dispositivos</a> USB, <a href="http://es.wikipedia.org/wiki/Bus_ISA">ISA</a>, PCMCIA y <a href="http://es.wikipedia.org/wiki/Peripheral_Component_Interconnect">PCI</a> entre otros. Con FREEBOB se abri&oacute; la puerta a los <a href="http://freebob.sourceforge.net/index.php/List_of_Supported_Devices">dispositivos</a> FireWire.</p>
<p>Una de las targetas de sonido mas adaptadas a sistemas Linux es la <a href="http://www.rme-audio.com/english/hdsp/multifa.htm">RME Hamerfall MULTIFACE II</a> mas el <a href="http://www.rme-audio.com/english/hdsp/cardpci.htm">PCI/BusCard</a> para conectarla al ordenador. <a href="http://esaracco.free.fr/documentations/linuxaudio/linuxaudio/images/hdspmixer-main.png">HDSPMixer</a> es el software de control para estas mismas y ya viene instalado en muchas distribuciones.</p>
<p>As&iacute; que ya tenemos nuestra tarjeta de sonido conectada, una interficie como FREEBOB o ALSA para entender los comandos de esta y ahora nos falta una interficie que comunique nuestros programas audio con FREEBOB: <a href="http://jackaudio.org/">JACK</a>, servidor de audio.</p>
<p><a href="http://blogs.adobe.com/penguin.swf/linuxaudio.png"><img src="http://blogs.adobe.com/penguin.swf/linuxaudio.png" alt="" border="1" /></a></p>
<p>En este diagrama podemos observar las uniones entre las diferentes interficies de las que se ha hablado hasta el momento.<br />
Para usar <a href="http://ccrma.stanford.edu/planetccrma/man/man1/jackd.1.html"><span style="font-style:italic;">jackd</span></a>, el <a href="http://en.wikipedia.org/wiki/Daemon_%28computer_software%29">demonio</a> de JACK, podemos usar <a href="http://qjackctl.sourceforge.net/">qjackctl</a> como <a href="http://qjackctl.sourceforge.net/image/qjackctlMainForm1.png">GUI</a>. A trav&eacute;s de esta interficie gr&aacute;fica podemos cambiar las <a href="http://rosegarden.sourceforge.net/tutorial/pixmaps/qjackctl-silvan.png">opciones</a> de <span style="font-style:italic;">jackd</span> a nuestras necesidades y tambi&eacute;n sus <a href="http://qjackctl.sourceforge.net/image/qjackctlConnectionsForm1.png">conexiones</a> abiertas entre dispositivos y programas. Las conexiones son controladas muy f&aacute;cilmente a trav&eacute;s de este sistema lo que nos permite el control total de nuestro sistema audio. Recordad que para usar <span style="font-style:italic;">jackd</span> como servidor no solo hay que abrir <span style="font-style:italic;">qjackctl</span> sino tambi&eacute;n dar al bot&oacute;n de play de este para que el demonio <span style="font-style:italic;">jackd</span> sea activado.</p>
<p>Ahora ya tendr&iacute;amos el nuestro sistema audio funcionando listo para crear, escuchar, grabar, ...m&uacute;sica. Para todo esto disponemos de varios programas.</p>
<ol>
<ol>
<li><a href="http://es.wikipedia.org/wiki/Sintetizador">Sintetizadores</a>:</li>
</ol>
</ol>
<ul>
<li><a href="http://zynaddsubfx.sourceforge.net/#t02">Zynaddsubfx</a></li>
<li><a href="http://amsynthe.sourceforge.net/amSynth/">AmSynth</a> (<a href="http://www.soundonsound.com/sos/sep03/images/kentonspinheader.l.jpg">knobs midi</a> configurables facilmente)</li>
<li><a href="http://hem.passagen.se/ja_linux/">MX44</a></li>
<li><a href="http://alsamodular.sourceforge.net/">AlsaModularSynth</a></li>
<li><a href="http://www.linuxjournal.com/files/linuxjournal.com/linuxjournal/articles/063/6320/6320f6.inline.png">Bristol</a></li>
<li><a href="http://qsynth.sourceforge.net/qsynth-index.html">QSynth</a></li>
</ul>
<p><a style="font-style:italic;" href="http://www.linuxjournal.com/article/6320">leer mas</a><span style="font-style:italic;"> (ingles)</span></p>
<p>&nbsp;</p>
<ul>
<li><a href="http://es.wikipedia.org/wiki/Caja_de_ritmos">Cajas de ritmos</a>/<a href="http://es.wikipedia.org/wiki/Samplers">Samplers</a>:</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><a href="http://www.hydrogen-music.org/">Hydrogen</a></li>
<li><a href="http://specimen.softonic.com/linux/imagenes">Specimen</a></li>
</ul>
<p>&nbsp;</p>
<ul>
<li><a href="http://es.wikipedia.org/wiki/Secuenciador">Secuenciadores</a>:</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><a href="http://www.rosegardenmusic.com/">Rosegarden</a></li>
<li><a href="http://www.filter24.org/seq24/shots.html">Seq24</a></li>
</ul>
<p>&nbsp;</p>
<ul>
<li><a href="http://es.wikipedia.org/wiki/Disc_jockey">DJ</a>:</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><a href="http://mixxx.sourceforge.net/">Mixxx</a> (compatible con <a href="http://www.frequenzbereich.com/music-shop/images/hercules/DJ_Console.jpg%20">Hercules DJ Console Mk2</a>)</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><a href="http://en.wikipedia.org/wiki/Digital_audio_editor">Editores audio</a>:</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><a href="http://rezound.sourceforge.net/ss.shtml">ReZound</a></li>
<li><a href="http://audacity.sourceforge.net/">Audacity</a></li>
</ul>
<p>&nbsp;</p>
<ul>
<li><a href="http://en.wikipedia.org/wiki/Digital_audio_workstation">Procesador audio</a>:</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><a href="http://ardour.org/">Ardour</a> (normalmente no acepta <a href="http://es.wikipedia.org/wiki/Midi">MIDI</a> por defecto, para esto debemos <a href="http://es.wikipedia.org/wiki/Compilar">recompilar</a> el c&oacute;digo)</li>
</ul>
<p>Pero hay muchos mas listos para ser descubiertos y usados!</p>
<p>En Linux tambi&eacute;n tenemos <a href="http://es.wikipedia.org/wiki/Plugin">plugins</a> como los <a href="http://es.wikipedia.org/wiki/Virtual_Studio_Technology">VST</a> que encontramos en Windows. Estos se llaman <a href="http://www.ladspa.org/">LADSPA</a>. Algunos plugins recomendados son: <a href="http://tap-plugins.sourceforge.net/">TAP</a>, <a href="http://quitte.de/dsp/caps.html">CAPS</a>, delayorama, dj flanger, hard limiter y SC4 entre otros.</p>
<p>Para mas informacion...<br />
<a href="http://www.out-of-order.ca/tutorials/ardour/">Ardour 2.0 Tutorial</a><br />
<a href="http://thorwil.wordpress.com/2007/05/27/ardour-midi-editing/">Ardour MIDI Editing</a><br />
<a href="http://www-oss.fnal.gov/projects/fermilinux/common/class/advanced-admin/Linux-Sound.html">Linux Sound System</a><br />
<a href="http://blogs.adobe.com/penguin.swf/2007/05/welcome_to_the_jungle.html">Welcome To The Jungle</a><br />
<a href="http://esaracco.free.fr/documentations/linuxaudio/linuxaudio/">How to create music with GNU/Linux</a><br />
<a href="http://pd.klingt.org/files/hdsp-howto.html">Installing and using a RME Hammerfall DSP with Linux</a></p>
<p>Si alguien tiene mas informaci&oacute;n no dud&eacute;is en publicarla! La comunidad te lo agradecer&aacute;.<br />
Saludos!<br />
<span style="color:#006600;font-weight:bold;">musica: kid loco</span></p>

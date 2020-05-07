---
layout: post
status: publish
published: true
title: "[:es]Mi repositorio Ansible[:en]My Ansible repository[:]"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "[:es]Mi repositorio personal de Playbooks de Ansible.[:en]My personal repository
  of Ansible Playbooks.[:]"
date: '2015-05-21 18:00:40 +0000'
categories:
- My Blog
tags:
- ansible
- github
comments: []
---
<p>[:es]He creado mi propio repositorio personal de <a href="https://github.com/carlessanagustin/ansible-playbooks">Playbooks de Ansible</a> que encuentro &uacute;tiles para procesar autom&aacute;ticamente los aburridos pasos manuales que sigo haciendo cuando <a href="http://en.wikipedia.org/wiki/Provisioning">aprovisiono</a> mis proyectos de sistemas. Voy a ir actualizando el repositorio en la medida que vaya haciendo proyectos que requieran Ansible.</p>
<p><a href="https://github.com/carlessanagustin/ansible-playbooks" target="_blank"><img class="aligncenter wp-image-2490 size-full" src="/images/posts/2015/05/Screen-Shot-2015-05-19-at-19.44.42.png" alt="https://github.com/carlessanagustin/ansible-playbooks" width="638" height="480" /></a></p>
<p>Los presentes Roles son:</p>
<ul>
<li><a href="http://docs.ansible.com/">ansible</a>: Instalaci&oacute;n del entorno de servidor Ansible.</li>
<li>base: Instalaci&oacute;n de los paquetes b&aacute;sicos para un nuevo servidor Ubuntu.</li>
<li>clean: Limpia un Ubuntu antes de exportarla para que ocupe menos espacio.</li>
<li><a href="https://www.docker.com/">docker</a>: Instalar el entorno Docker.</li>
<li><a href="https://www.elastic.co/">elasticsearch</a>: Instalaci&oacute;n b&aacute;sica de Elasticsearch.</li>
<li><a href="http://en.wikipedia.org/wiki/Hyper-V">hyperv</a>: Instalar Hyper-V en una m&aacute;quina Windows y, a trav&eacute;s de comandos PowerShell, me es posible gestionar im&aacute;genes y snapshots.</li>
<li><a href="https://www.elastic.co/">kibana</a>: Instalaci&oacute;n b&aacute;sica de Kibana.</li>
<li><a href="https://www.elastic.co/">logstash</a>: Instalaci&oacute;n b&aacute;sica de Logstash.</li>
<li><a href="https://www.nagios.org/">nagios</a>: Instala un servidor de monitoreo Nagios y publica la carpeta /etc/nagios3 en /vagrant para su f&aacute;cil acceso y uso (preparado para mis cursos).</li>
<li><a href="http://en.wikipedia.org/wiki/Samba_(software)">samba</a>: Instalaci&oacute;n del entorno Samba y monta una carpeta remota en el sistema.</li>
</ul>
<p>&iquest;Por qu&eacute; eleg&iacute; Ansible entre las otras <a href="http://en.wikipedia.org/wiki/Configuration_management">herramientas</a> de gesti&oacute;n de la configuraci&oacute;n? No necesita de agente, por lo que puede utilizarlo con un puerto <a href="http://en.wikipedia.org/wiki/Secure_Shell">SSH</a> o <a href="https://msdn.microsoft.com/en-us/library/aa384426%28v=vs.85%29.aspx">WinRM</a> abierto. Porque est&aacute; escrito en Python y es mi lenguaje de programaci&oacute;n preferido; Puedo hacer "<a href="http://docs.ansible.com/developing_api.html">import ansible</a>" en mis scripts de Python. Viene ya con muchos m&oacute;dulos oficiales. Puedo usarlo f&aacute;cilmente desde la l&iacute;nea de comandos con la ayuda de ansible y ansible-doc. Y por &uacute;ltimo, porque su formato es m&aacute;s <a href="http://www.yuksrus.com/computers_sysadmin.html">administrador de sistemas</a> (yo) pero menos desarrollador; f&aacute;cil de leer, trabajar y entender.</p>
<ul>
<li>Entradas: <a href="http://yaml.org/">YAML</a> + <a href="http://en.wikipedia.org/wiki/INI_file">INI</a> + <a href="http://jinja.pocoo.org/">Jinja2</a>.</li>
<li>Salidas: <a href="http://json.org/">JSON</a>.[:en]I created my own personal repository of <a href="https://github.com/carlessanagustin/ansible-playbooks">Ansible Playbooks</a> to help me process automatically those boring manual steps I keep doing when <a href="http://en.wikipedia.org/wiki/Provisioning">provisioning</a> systems for my projects. It is a repository I will keep updating the more I get into provisioning projects.</li>
</ul>
<p><a href="https://github.com/carlessanagustin/ansible-playbooks" target="_blank"><img class="aligncenter wp-image-2490 size-full" src="/images/posts/2015/05/Screen-Shot-2015-05-19-at-19.44.42.png" alt="https://github.com/carlessanagustin/ansible-playbooks" width="638" height="480" /></a></p>
<p>The present roles are:</p>
<ul>
<li><a href="http://docs.ansible.com/">ansible</a>: Install full Ansible server environment.</li>
<li>base: Install basic packages into a new Ubuntu server.</li>
<li>clean: Cleans a Ubuntu previous to export.</li>
<li><a href="https://www.docker.com/">docker</a>: Install full Docker environment.</li>
<li><a href="https://www.elastic.co/">elasticsearch</a>: Install basic Elasticsearch.</li>
<li><a href="http://en.wikipedia.org/wiki/Hyper-V">hyperv</a>: Install Hyper-V in a Windows machine and, through PowerShell commands, its possible to manage images and snapshots.</li>
<li><a href="https://www.elastic.co/">kibana</a>: Install basic Kibana.</li>
<li><a href="https://www.elastic.co/">logstash</a>: Install basic Logstash.</li>
<li><a href="https://www.nagios.org/">nagios</a>: Install a full Nagios monitoring server and publishes the /etc/nagios3 folder into /vagrant for easy access.</li>
<li><a href="http://en.wikipedia.org/wiki/Samba_(software)">samba</a>: Install Samba environment and mounts remote folder into system.</li>
</ul>
<p>Why did I chose <a href="http://www.ansible.com">Ansible</a> between the other configuration management <a href="http://en.wikipedia.org/wiki/Configuration_management">tools</a>? It is agent less, so I can use it with a <a href="http://en.wikipedia.org/wiki/Secure_Shell">SSH</a> or a <a href="https://msdn.microsoft.com/en-us/library/aa384426%28v=vs.85%29.aspx">WinRM</a> port open. Because it is written in <a href="https://www.python.org/">Python</a> and it is my prefered programming language; I can "<a href="http://docs.ansible.com/developing_api.html">import ansible</a>" in my Python Scripts. There are many official modules out-of-the-box. I can use it from the prompt with ansible-doc and ansible commands. And last, because its formatting is more <a href="http://www.yuksrus.com/computers_sysadmin.html">SysAdmin</a> (me) but less Developer; easy to read, work and understand.</p>
<ul>
<li>Inputs: <a href="http://yaml.org/">YAML</a> + <a href="http://en.wikipedia.org/wiki/INI_file">INI</a> + <a href="http://jinja.pocoo.org/">Jinja2</a>.</li>
<li>Outputs: <a href="http://json.org/">JSON</a>.[:]</li>
</ul>

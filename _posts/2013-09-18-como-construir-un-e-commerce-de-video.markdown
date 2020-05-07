---
layout: post
status: publish
published: true
title: "<!--:es-->Como construir un e-commerce de video<!--:--><!--:en-->How to build
  a video e-commerce<!--:-->"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Como construí una plataforma de venda de video online con Prestashop
  y los servicios de Amazon AWS.<!--:--><!--:en-->How I built an online platform to
  sell video contents with Prestashop and Amazon AWS services.<!--:-->"
date: '2013-09-18 18:00:23 +0000'
categories:
- My Blog
tags:
- prestashop
- prestavod
- amazon aws
- ec2
- s3
- cloudfront
comments: []
---
<p><!--:es-->Recientemente he gestiondo un proyecto para la venta de v&iacute;deo online. Para ello necesitaba una plataforma de comercio electr&oacute;nico capaz de vender grandes archivos digitales en base al tiempo de uso y a un bajo costo pero sin olvidar la seguridad. Escog&iacute; <a href="http://www.prestashop.com/">Prestashop</a> como la plataforma de comercio electr&oacute;nico, e instal&eacute; el m&oacute;dulo <a href="http://www.prestavod.com/en/">PrestaVOD</a>. Este m&oacute;dulo nos proporciona una interfaz capaz de vender contenidos multimedia restringidos por per&iacute;odos de tiempo. PrestaVOD se puede conectar a diversos servicios de almacenamiento: <a href="http://en.wikipedia.org/wiki/Localhost">Localhost</a>, <a href="http://www.dailymotion.com/">DailyMotion</a>, <a href="http://aws.amazon.com/">Amazon AWS</a> y <a href="https://vimeo.com/">Vimeo</a>.</p>
<p>Ya que los v&iacute;deos son grandes archivos digitales eleg&iacute; Amazon AWS (S3/CloudFront) para almacenar estos archivos. <a href="http://aws.amazon.com/s3/">S3</a> es un servicio de almacenamiento a trav&eacute;s de interfaces de servicios web a coste de uso. Por otro lado <a href="http://aws.amazon.com/cloudfront/">CloudFront</a> es una red de entrega de contenido (<a href="http://en.wikipedia.org/wiki/Content_delivery_network">CDN</a>). Se S3 mantenemos nuestros archivos multimedia y CloudFront se ocupa de distribuirlos por Internet. Mont&eacute; la plataforma de desarrollo con el servicio de Amazon EC2. EC2 permite alquilar ordenadores virtuales en los que ejecutar nuestras propias aplicaciones inform&aacute;ticas como apache y mysql que necesita Prestashop.</p>
<p style="text-align: center;"><a href="/images/posts/2013/08/amazon-aws.jpg" target="_blank"><img class="size-large wp-image-1801 aligncenter" title="amazon aws video on demand prestashop" alt="amazon aws video on demand prestashop" src="/images/posts/2013/08/amazon-aws-1024x724.jpg" width="710" height="501" /></a></p>
<p>Estos son los pasos que tom&eacute;:</p>
<ul>
<li>Crear una cuenta de Amazon AWS.</li>
<li>Crear una instancia de servidor de Ubuntu en EC2.</li>
<li>Actualizar Ubuntu</li>
<li>Instalar los paquetes requeridos por Prestashop.</li>
<li>Instalar y configurar Prestashop.</li>
<li>Insfalar el m&oacute;dulo PrestaVOD.</li>
<li>Crear un bucket S3.</li>
<li>Configurar el bucket.</li>
<li>Subir contenido al&nbsp;bucket.</li>
<li>Configurar CloudFront.</li>
<li>Configurar la seguridad de AWS.</li>
<li>Configurar PrestaVOD.</li>
<li>PrestaVOD se conectar&aacute; a CloudFront y nos mostrar&aacute; el contenido en S3.</li>
<li>Relacionar productos Prestashop con v&iacute;deos de PrestaVOD.</li>
</ul>
<p>Saludos.<!--:--><!--:en-->Recently I planned a project for selling video online. For this purpose I needed an e-commerce platform capable of selling big digital files in a time base at low cost but secure. I selected <a href="http://www.prestashop.com/">Prestashop</a> as the e-commerce platform with <a href="http://www.prestavod.com/en/">PrestaVOD</a> module installed. This module provides us with an interface to sell multimedia contents restricted by time periods. PrestaVOD can be connected to various storage services: <a href="http://en.wikipedia.org/wiki/Localhost">Localhost</a>, <a href="http://www.dailymotion.com/">DailyMotion</a>, <a href="http://aws.amazon.com/">Amazon AWS</a> and <a href="https://vimeo.com/">Vimeo</a>.<br />
As videos are big digital files I choosed Amazon AWS (S3/CloudFront) for storing these files. <a href="http://aws.amazon.com/s3/">S3</a> is a service that provides storage through web services interfaces at a usage cost. While <a href="http://aws.amazon.com/cloudfront/">CloudFront</a> is a content delivery network (<a href="http://en.wikipedia.org/wiki/Content_delivery_network">CDN</a>). So we keep our multimedia files in S3 and spread them over the Internet with CloudFront.&nbsp;My development platform was an Amazon <a href="http://aws.amazon.com/ec2/">EC2</a> service. EC2 allows us to rent virtual computers on which to run our own computer applications like <a href="http://httpd.apache.org/">apache</a> and <a href="http://www.mysql.com/">mysql</a> needed by Prestashop.</p>
<p style="text-align: center;"><a href="/images/posts/2013/08/amazon-aws.jpg" target="_blank"><img class="size-large wp-image-1801 aligncenter" title="amazon aws video on demand prestashop" alt="amazon aws video on demand prestashop" src="/images/posts/2013/08/amazon-aws-1024x724.jpg" width="710" height="501" /></a></p>
<p>These are the steps I took:</p>
<ul>
<li>Create an Amazon AWS account.</li>
<li>Create an <a href="http://www.ubuntu.com/">Ubuntu</a> server instance in EC2.</li>
<li>Update Ubuntu</li>
<li>Install <a href="http://doc.prestashop.com/display/PS15/What+you+need+to+get+started">required</a> packages by Prestashop.</li>
<li>Setup Prestashop.</li>
<li><a href="http://www.prestavod.com/en/11_documentation.html">Install</a> PrestaVOD module.</li>
<li>Create a S3 <a href="http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html">bucket</a>.</li>
<li>Setup bucket.</li>
<li>Upload contents to the bucket.</li>
<li>Setup <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html">CloudFront</a>.</li>
<li>Setup&nbsp;<a href="https://aws.amazon.com/security/">AWS security</a>.</li>
<li>Setup PrestaVOD.</li>
<li>PrestaVOD will connect to CloudFront and display S3 contents.</li>
<li>Finish setup of videos from PrestaVOD related to Prestashop products.</li>
</ul>
<p>Regards.<!--:--></p>

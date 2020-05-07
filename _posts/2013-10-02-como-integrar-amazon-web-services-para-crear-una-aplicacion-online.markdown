---
layout: post
status: publish
published: true
title: "<!--:es-->&iquest;C&oacute;mo integrar Amazon Web Services para crear una
  aplicaci&oacute;n online?<!--:--><!--:en-->How to integrate Amazon Web Services
  to build an online application?<!--:-->"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Integrar 10 servicios cloud de Amazon para crear un repositorio
  de videos online.<!--:--><!--:en-->Integrating 10 Amazon cloud services to create
  an online repository of videos.<!--:-->"
date: '2013-10-02 11:00:54 +0000'
categories:
- My Blog
tags:
- amazon aws
- ec2
- s3
- cloudfront
- ebs
- route 53
- rds
- sqs
- sns
- cloudwatch
comments:
- id: 529
  author: Juan Siesquen
  author_url: http://www.safetnnypay.com
  date: '2013-11-21 22:50:10 +0000'
  content: Muy interesante como describes el uso y combinaci&oacute;n de estos servicios....
    pero quisiera saber si SNS es como tener un SMTP pero externo para gestionar el
    envio de correos sin perdidas?
- id: 530
  author: Carles
  author_url: http://www.carlessanagustin.com/
  date: '2013-11-26 18:22:17 +0000'
  content: <a href="http://aws.amazon.com/sns/" title="Amazon Simple Notification
    Service (SNS) " target="_blank" rel="nofollow">SNS</a> es un servicio gestionable
    de <a href="http://es.wikipedia.org/wiki/Tecnolog%C3%ADa_Push" title="Tecnologia
    Push" target="_blank" rel="nofollow">tecnologia push</a>. Este servicio tambi&eacute;n
    puede enviar notificaciones por mensaje de texto SMS o correo electr&oacute;nico
    al servicio <a href="http://aws.amazon.com/sqs/" title="Amazon Simple Queue Service
    (Amazon SQS)" target="_blank" rel="nofollow">SQS</a> tambi&eacute;n de Amazon,
    o cualquier otro extremo HTTP.
- id: 646
  author: code used
  author_url: ''
  date: '2014-06-07 15:54:03 +0000'
  content: "Quality articles or reviews is the main to interest the viewers to visit
    the site, \r\nthat's what this web site is providing."
- id: 14750
  author: Andres vasquez
  author_url: http://Web*
  date: '2015-12-29 03:06:43 +0000'
  content: "Hola tengo uan pregunta,\r\n\r\nsi quiero desplegar una app en php pero
    utilizando EC2, EBL, RDS y VPC, como podria hacerlo."
- id: 14857
  author: Carles
  author_url: http://www.carlessanagustin.com/
  date: '2016-01-04 15:08:35 +0000'
  content: "Hola Andr&eacute;s,\r\n\r\nPara lo que quieres conseguir hay varias opciones:\r\n*
    Manual: M&oacute;ntalo tu mismo usando las tecnolog&iacute;as que mencionas.\r\n*
    Usando el servicio AWS Elastic Beanstalk: https://aws.amazon.com/elasticbeanstalk/\r\n*
    Usando los templates de AWS CloudFormation: https://aws.amazon.com/cloudformation\r\n\r\nEspero
    haber sido de ayuda. Saludos,\r\nc."
- id: 18756
  author: Eduardo Antelo
  author_url: http://xperian.net
  date: '2017-02-15 20:37:48 +0000'
  content: "Hola, gracias por el interesante art&iacute;culo, podr&iacute;as indicar
    cuanto gastabas mensualmente con esta infraestructura? o dar un aproximado para
    tener una idea, muchas gracias por la atenci&oacute;n.\r\n\r\nSaludos..."
- id: 18760
  author: Carles
  author_url: http://www.carlessanagustin.com/
  date: '2017-02-16 13:28:03 +0000'
  content: |-
    Hola,

    Disculpa pero este proyecto lo hice para un cliente en el 2013 y he perdido los datos.

    De todas maneras, &iquest;conoces la calculadora de AWS?
    <a href="https://calculator.s3.amazonaws.com/index.html" target="_blank" rel="nofollow">https://calculator.s3.amazonaws.com/index.html</a>

    Es muy &uacute;til para preparar presupuestos y tener una idea del gasto que puede ocasionar. Espero que te sea de ayuda.

    Saludos,
    Carles.
---
<p><!--:es-->La idea es crear un repositorio de videos online. Esta aplicaci&oacute;n debe ser capaz de subir archivos a un servidor de almacenamiento y visualizarlos una vez que se ha completado el proceso de subida. Para este proyecto eleg&iacute; <a title="Amazon Web Services" href="http://aws.amazon.com/es/" target="_blank">Amazon Web Services</a>. Con estos soy capaz de suministrar una aplicaci&oacute;n totalmente funcional y escalable. Que quede claro, esta entrada est&aacute; orientada a la integraci&oacute;n de sistemas. No voy a explicar la programaci&oacute;n de la aplicaci&oacute;n, esto podr&iacute;a ser otra entrada. Mi principal objetivo aqu&iacute; es explicar c&oacute;mo integr&eacute; AWS para este prop&oacute;sito: <a title="Route 53" href="http://aws.amazon.com/route53/" target="_blank">Route 53</a>, <a title="EC2" href="http://aws.amazon.com/ec2/" target="_blank">EC2</a>, <a title="Tools" href="http://aws.amazon.com/tools/" target="_blank">SDK</a>, <a title="EBS" href="http://aws.amazon.com/ebs/" target="_blank">EBS</a>, <a title="CloudFront" href="http://aws.amazon.com/cloudfront/" target="_blank">CloudFront</a>, <a title="S3" href="http://aws.amazon.com/s3/" target="_blank">S3</a>, <a title="RDS" href="http://aws.amazon.com/rds/" target="_blank">RDS</a>, <a title="SQS" href="http://aws.amazon.com/sqs/" target="_blank">SQS</a>, <a title="SNS" href="http://aws.amazon.com/sns/" target="_blank">SNS</a> y <a title="CloudWatch" href="http://aws.amazon.com/cloudwatch/" target="_blank">CloudWatch</a>.</p>
<p style="text-align: center;"><a href="/images/posts/2013/08/amazon-aws-1_small.jpg"><img class="aligncenter" title="amazon aws application" alt="amazon aws application" src="/images/posts/2013/08/amazon-aws-1_small.jpg" width="600" /></a></p>
<p>Esta pila muestra la infraestructura AWS. Hay muchos servicios disponibles, pero s&oacute;lo us&eacute; 10.</p>
<p>Para empezar hay que crear una cuenta de Amazon AWS. A continuaci&oacute;n, podemos gestionar nuestros servicios a trav&eacute;s de la <a title="Console" href="http://aws.amazon.com/console/" target="_blank">consola de gesti&oacute;n</a>.</p>
<p style="text-align: center;"><a href="/images/posts/2013/08/amazon-aws-stack.jpg"><img class="aligncenter" title="amazon aws stack" alt="amazon aws stack" src="/images/posts/2013/08/amazon-aws-stack.jpg" width="600" /></a></p>
<p>Este diagrama representa c&oacute;mo utilic&eacute; los servicios de Amazon. Me explico:</p>
<ul>
<li>R53: Route 53 es un sistema de nombres de dominio (DNS) altamente disponible y escalable. Us&eacute; ​​R53 para apuntar mi nombre de dominio al servidor web donde se encuentra alojado el codigo -apuntando al servidor EC2.</li>
<li>EC2: Elastic Computer Cloud nos permite alquilar ordenadores virtuales en los que ejecutar nuestras propias aplicaciones inform&aacute;ticas. He creado <a title="Virtual private server" href="http://en.wikipedia.org/wiki/Virtual_private_server" target="_blank">VPS</a> de Ubuntu. Para integrar el c&oacute;digo PHP <a title="Installing the SDK" href="http://docs.aws.amazon.com/awssdkdocsphp2/latest/gettingstartedguide/sdk-php2-installing-the-sdk.html" target="_blank">instal&eacute;</a> los m&oacute;dulos SDK. Mi c&oacute;digo termin&oacute; en el EBS.</li>
<li>SDK: Software Development Kit es un conjunto de herramientas y funciones que ampl&iacute;an nuestras posibilidades de programaci&oacute;n para integrar los servicios Amazon. En la actualidad existen kits para Android, iOS, Java,. NET, Python, Node.js, PHP y Ruby. Podemos llamar a estas librer&iacute;as PHP desde nuestro c&oacute;digo. Lo utilic&eacute; para comunicar mi c&oacute;digo con SQS y SNS.</li>
<li>EBS: Elastic Block Store ofrece vol&uacute;menes de almacenamiento a nivel de bloque para su uso con las instancias de EC2. Una vez creado apunt&eacute; all&iacute; la carpeta /var/www de la instancia EC2.</li>
<li>CloudFront: Es un servicio web para la entrega de contenido (<a title="CDN" href="http://en.wikipedia.org/wiki/Content_delivery_network" target="_blank">CDN</a>). Ofrece nuestros contenidos din&aacute;micos, est&aacute;ticos y streaming contenidos en S3. Las solicitudes de nuestros contenidos se dirigen autom&aacute;ticamente a la ubicaci&oacute;n de borde m&aacute;s cercana, por lo que el contenido se entrega con el mejor rendimiento posible.</li>
<li>S3: Simple Storage Service proporciona una interfaz de servicios web simple que se puede utilizar para almacenar y recuperar cualquier cantidad de datos, en cualquier momento, desde cualquier lugar en la web. Aqu&iacute; almacen&eacute; los archivos multimedia. Este servicio funciona bien junto con CloudFront que ayuda a distribuir los contenidos a ubicaciones borde de red.</li>
<li>RDS: Relational Database Service es un servicio web que hace que sea f&aacute;cil de instalar, operar y ampliar una base de datos relacional en la nube. Esto da acceso a las capacidades de un MySQL, Oracle o el motor de base de datos Microsoft SQL Server. Puse aqu&iacute; mi base de datos MySQL.</li>
<li>SQS: Simple Queue Service es un servicio de cola totalmente gestionado escalable, r&aacute;pido y confiable. Podemos utilizar SQS para transmitir cualquier volumen de datos, en cualquier nivel de rendimiento, sin perder mensajes o requerir que los otros servicios. En mi caso, he usado SQS para enviar mensajes a mi aplicaci&oacute;n PHP al finalizar el proceso de carga. Si queremos cambiar nuestros v&iacute;deos de color o a&ntilde;adir una marca de agua durante el proceso de carga, se deber&iacute;a utilizar este servicio, ya que es una buena manera de advertir a los servicios Amazon entre ellos. Tenemos que utilizar el SDK para este prop&oacute;sito.</li>
<li>SNS: Simple Notification Service es un servicio de mensajer&iacute;a de empuje totalmente gestionado. Adem&aacute;s de presionar directamente a los dispositivos m&oacute;viles, SNS tambi&eacute;n puede enviar notificaciones por mensaje de texto SMS o correo electr&oacute;nico. En el c&oacute;digo PHP llamamos al SDK para enviar un email al finalizar el proceso de carga a modo de aviso.</li>
<li>CloudWatch: Proporciona control de recursos AWS y de las aplicaciones de los clientes que se ejecutan en AWS. Lo us&eacute; para supervisar la utilizaci&oacute;n de recursos, rendimiento de la aplicaci&oacute;n, m&eacute;tricas y los costes del servicio.</li>
</ul>
<p style="text-align: center;"><a href="/images/posts/2013/08/amazon-aws-2_small.jpg"><img class="aligncenter" title="amazon aws application" alt="amazon aws application" src="/images/posts/2013/08/amazon-aws-2_small.jpg" width="600" /></a></p>
<p>As&iacute; es como integr&eacute; los recursos de software.</p>
<p>As&iacute; que al final consegu&iacute; una aplicaci&oacute;n PHP que carga los archivos de v&iacute;deo en un repositorio. Cuando los archivos est&aacute;n completamente cargadas, el sistema env&iacute;a un mensaje al c&oacute;digo con el fin de publicar la &uacute;ltima subida y me env&iacute;a un correo a modo de registro. La informaci&oacute;n del archivo se guarda en una base de datos.</p>
<p>Aqu&iacute; termino mi explicaci&oacute;n. Si alguien tiene dudas puede dejarme un comentario.</p>
<p>Saludos.<!--:--><!--:en-->The idea is to create an online video repository. This application should be capable of uploading files to a storage server and displaying them once the process is completed. For this project I selected <a title="AWS" href="http://aws.amazon.com/" target="_blank">Amazon Web Services</a>. I am able of supplying a fully functional and scalable application when integrating those services. Let me be clear, this post is systems integration oriented. I am not going to explain the coding of the application, this could be another post. My main goal here is to explain how I integrated AWS for this purpose: <a title="Route 53" href="http://aws.amazon.com/route53/" target="_blank">Route 53</a>, <a title="EC2" href="http://aws.amazon.com/ec2/" target="_blank">EC2</a>, <a title="Tools" href="http://aws.amazon.com/tools/" target="_blank">SDK</a>, <a title="EBS" href="http://aws.amazon.com/ebs/" target="_blank">EBS</a>, <a title="CloudFront" href="http://aws.amazon.com/cloudfront/" target="_blank">CloudFront</a>, <a title="S3" href="http://aws.amazon.com/s3/" target="_blank">S3</a>, <a title="RDS" href="http://aws.amazon.com/rds/" target="_blank">RDS</a>, <a title="SQS" href="http://aws.amazon.com/sqs/" target="_blank">SQS</a>, <a title="SNS" href="http://aws.amazon.com/sns/" target="_blank">SNS</a> and <a title="CloudWatch" href="http://aws.amazon.com/cloudwatch/" target="_blank">CloudWatch</a>.</p>
<p style="text-align: center;"><a href="/images/posts/2013/08/amazon-aws-1_small.jpg"><img class="aligncenter" title="amazon aws application" alt="amazon aws application" src="/images/posts/2013/08/amazon-aws-1_small.jpg" width="600" /></a></p>
<p>This stack shows AWS infrastructure. There are many services available but I only used 10.</p>
<p>To start one must create an Amazon AWS account. We can then manage our services through the <a title="console" href="http://aws.amazon.com/console/" target="_blank">management console</a>.</p>
<p style="text-align: center;"><a href="/images/posts/2013/08/amazon-aws-stack.jpg"><img class="aligncenter" title="amazon aws stack" alt="amazon aws stack" src="/images/posts/2013/08/amazon-aws-stack.jpg" width="600" /></a></p>
<p>This diagram represents how I used Amazon services. Let me explain:</p>
<ul>
<li>R53: Route 53 is a highly available and scalable Domain Name System (DNS) web service. I used R53 to point my domain name to the web server where my application was hosted; in my case an EC2 virtual server.</li>
<li>EC2: Elastic Computer Cloud allows us to rent virtual computers on which to run our own computer applications. I created an Ubuntu <a title="Virtual private server" href="http://en.wikipedia.org/wiki/Virtual_private_server" target="_blank">VPS</a>. To integrate my PHP code I <a title="Installing the SDK" href="http://docs.aws.amazon.com/awssdkdocsphp2/latest/gettingstartedguide/sdk-php2-installing-the-sdk.html" target="_blank">installed</a> the SDK modules. I stored my code into the EBS volume.</li>
<li>SDK: Software Development Kit is a group of tools and features that expand our programming possibilities integrating Amazon AWS. At present there are kits for Android, iOS, Java, .NET, Python, Node.js, PHP and Ruby. We can call those PHP libraries from our code. I used it to communicate my code with SQS and SNS.</li>
<li>EBS: Elastic Block Store provides block level storage volumes for use with Amazon EC2 instances. Once created I pointed the EC2 instance folder /var/www to the EBS.</li>
<li>CloudFront: It is a web service for content delivery (<a title="CDN" href="http://en.wikipedia.org/wiki/Content_delivery_network" target="_blank">CDN</a>). It delivers our contents dynamic, static and streaming content in S3. Requests for our content are automatically routed to the nearest edge location, so content is delivered with the best possible performance.</li>
<li>S3: Simple Storage Service provides a simple web services interface that can be used to store and retrieve any amount of data, at any time, from anywhere on the web. We keep all our multimedia files here. This service works well together with CloudFront distributing the contents to edge locations.</li>
<li>RDS: Relational Database Service is a web service that makes it easy to set up, operate, and scale a relational database in the cloud. It gives you access to the capabilities of a familiar MySQL, Oracle or Microsoft SQL Server database engine. I placed here my MySQL database.</li>
<li>SQS: Simple Queue Service is a fast, reliable, scalable, fully managed queue service. We can use SQS to transmit any volume of data, at any level of throughput, without losing messages or requiring other services to be always available. In my case, I used it to send complete messages between file upload process and my PHP application. If we'd like to change our videos color or watermark them on upload process, we should be using this service as well, as it is a good way of warning Amazon services between them. We need to use the SDK for this purpose.</li>
<li>SNS: Simple Notification Service is a fully managed push messaging service. Besides pushing directly to mobile devices, SNS can also deliver notifications by SMS text message or email. From the PHP code I called SDK to send SNS emails when upload processes were finished.</li>
<li>CloudWatch: It provides monitoring for AWS cloud resources and the applications customers run on AWS. I used it to monitor resource utilization, application performance, metrics and costs message.</li>
</ul>
<p style="text-align: center;"><a href="/images/posts/2013/08/amazon-aws-2_small.jpg"><img class="aligncenter" title="amazon aws application" alt="amazon aws application" src="/images/posts/2013/08/amazon-aws-2_small.jpg" width="600" /></a></p>
<p>This is how I integrated the software resources.</p>
<p>So at the end I got a PHP application that uploads video files into a repository. When files are fully uploaded, the systems sends a message to the code in order to publish the latest upload and an email is sent to me as log. File information is saved in a database.</p>
<p>Here I finish my explanation. If anyone doubts can leave a comment.</p>
<p>Regards.<!--:--></p>

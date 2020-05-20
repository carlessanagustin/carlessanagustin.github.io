---
layout: post
status: publish
published: true
title: "How to integrate Amazon Web Services to build an online application?"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Integrar 10 servicios cloud de Amazon para crear un repositorio
  de videos online.<!--:--><!--:en-->Integrating 10 Amazon cloud services to create
  an online repository of videos.<!--:-->"
date: '2013-10-02 11:00:54 +0000'
categories:
- Blog
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
The idea is to create an online video repository. This application should be capable of uploading files to a storage server and displaying them once the process is completed. For this project I selected [Amazon Web Services](http://aws.amazon.com/ "AWS"). I am able of supplying a fully functional and scalable application when integrating those services. Let me be clear, this post is systems integration oriented. I am not going to explain the coding of the application, this could be another post. My main goal here is to explain how I integrated AWS for this purpose: [Route 53](http://aws.amazon.com/route53/ "Route 53"), [EC2](http://aws.amazon.com/ec2/ "EC2"), [SDK](http://aws.amazon.com/tools/ "Tools"), [EBS](http://aws.amazon.com/ebs/ "EBS"), [CloudFront](http://aws.amazon.com/cloudfront/ "CloudFront"), [S3](http://aws.amazon.com/s3/ "S3"), [RDS](http://aws.amazon.com/rds/ "RDS"), [SQS](http://aws.amazon.com/sqs/ "SQS"), [SNS](http://aws.amazon.com/sns/ "SNS") and [CloudWatch](http://aws.amazon.com/cloudwatch/ "CloudWatch").

[![amazon aws application](/images/posts/2013/08/amazon-aws-1_small.jpg "amazon aws application")](/images/posts/2013/08/amazon-aws-1_small.jpg)

This stack shows AWS infrastructure. There are many services available but I only used 10.

To start one must create an Amazon AWS account. We can then manage our services through the [management console](http://aws.amazon.com/console/ "console").

[![amazon aws stack](/images/posts/2013/08/amazon-aws-stack.jpg "amazon aws stack")](/images/posts/2013/08/amazon-aws-stack.jpg)

This diagram represents how I used Amazon services. Let me explain:

*   R53: Route 53 is a highly available and scalable Domain Name System (DNS) web service. I used R53 to point my domain name to the web server where my application was hosted; in my case an EC2 virtual server.
*   EC2: Elastic Computer Cloud allows us to rent virtual computers on which to run our own computer applications. I created an Ubuntu [VPS](http://en.wikipedia.org/wiki/Virtual_private_server "Virtual private server"). To integrate my PHP code I [installed](http://docs.aws.amazon.com/awssdkdocsphp2/latest/gettingstartedguide/sdk-php2-installing-the-sdk.html "Installing the SDK") the SDK modules. I stored my code into the EBS volume.
*   SDK: Software Development Kit is a group of tools and features that expand our programming possibilities integrating Amazon AWS. At present there are kits for Android, iOS, Java, .NET, Python, Node.js, PHP and Ruby. We can call those PHP libraries from our code. I used it to communicate my code with SQS and SNS.
*   EBS: Elastic Block Store provides block level storage volumes for use with Amazon EC2 instances. Once created I pointed the EC2 instance folder /var/www to the EBS.
*   CloudFront: It is a web service for content delivery ([CDN](http://en.wikipedia.org/wiki/Content_delivery_network "CDN")). It delivers our contents dynamic, static and streaming content in S3\. Requests for our content are automatically routed to the nearest edge location, so content is delivered with the best possible performance.
*   S3: Simple Storage Service provides a simple web services interface that can be used to store and retrieve any amount of data, at any time, from anywhere on the web. We keep all our multimedia files here. This service works well together with CloudFront distributing the contents to edge locations.
*   RDS: Relational Database Service is a web service that makes it easy to set up, operate, and scale a relational database in the cloud. It gives you access to the capabilities of a familiar MySQL, Oracle or Microsoft SQL Server database engine. I placed here my MySQL database.
*   SQS: Simple Queue Service is a fast, reliable, scalable, fully managed queue service. We can use SQS to transmit any volume of data, at any level of throughput, without losing messages or requiring other services to be always available. In my case, I used it to send complete messages between file upload process and my PHP application. If we'd like to change our videos color or watermark them on upload process, we should be using this service as well, as it is a good way of warning Amazon services between them. We need to use the SDK for this purpose.
*   SNS: Simple Notification Service is a fully managed push messaging service. Besides pushing directly to mobile devices, SNS can also deliver notifications by SMS text message or email. From the PHP code I called SDK to send SNS emails when upload processes were finished.
*   CloudWatch: It provides monitoring for AWS cloud resources and the applications customers run on AWS. I used it to monitor resource utilization, application performance, metrics and costs message.

[![amazon aws application](/images/posts/2013/08/amazon-aws-2_small.jpg "amazon aws application")](/images/posts/2013/08/amazon-aws-2_small.jpg)

This is how I integrated the software resources.

So at the end I got a PHP application that uploads video files into a repository. When files are fully uploaded, the systems sends a message to the code in order to publish the latest upload and an email is sent to me as log. File information is saved in a database.

Here I finish my explanation. If anyone doubts can leave a comment.

Regards.
---
layout: post
status: publish
published: true
title: "How to build a video e-commerce"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:es-->Como construí una plataforma de venda de video online con Prestashop
  y los servicios de Amazon AWS.<!--:--><!--:en-->How I built an online platform to
  sell video contents with Prestashop and Amazon AWS services.<!--:-->"
date: '2013-09-18 18:00:23 +0000'
categories:
- Blog
tags:
- prestashop
- prestavod
- amazon aws
- ec2
- s3
- cloudfront
comments: []
---
Recently I planned a project for selling video online. For this purpose I needed an e-commerce platform capable of selling big digital files in a time base at low cost but secure. I selected [Prestashop](http://www.prestashop.com/) as the e-commerce platform with [PrestaVOD](http://www.prestavod.com/en/) module installed. This module provides us with an interface to sell multimedia contents restricted by time periods. PrestaVOD can be connected to various storage services: [Localhost](http://en.wikipedia.org/wiki/Localhost), [DailyMotion](http://www.dailymotion.com/), [Amazon AWS](http://aws.amazon.com/) and [Vimeo](https://vimeo.com/).  
As videos are big digital files I choosed Amazon AWS (S3/CloudFront) for storing these files. [S3](http://aws.amazon.com/s3/) is a service that provides storage through web services interfaces at a usage cost. While [CloudFront](http://aws.amazon.com/cloudfront/) is a content delivery network ([CDN](http://en.wikipedia.org/wiki/Content_delivery_network)). So we keep our multimedia files in S3 and spread them over the Internet with CloudFront. My development platform was an Amazon [EC2](http://aws.amazon.com/ec2/) service. EC2 allows us to rent virtual computers on which to run our own computer applications like [apache](http://httpd.apache.org/) and [mysql](http://www.mysql.com/) needed by Prestashop.

[![amazon aws video on demand prestashop](/images/posts/2013/08/amazon-aws-1024x724.jpg "amazon aws video on demand prestashop")](/images/posts/2013/08/amazon-aws.jpg)

These are the steps I took:

*   Create an Amazon AWS account.
*   Create an [Ubuntu](http://www.ubuntu.com/) server instance in EC2.
*   Update Ubuntu
*   Install [required](http://doc.prestashop.com/display/PS15/What+you+need+to+get+started) packages by Prestashop.
*   Setup Prestashop.
*   [Install](http://www.prestavod.com/en/11_documentation.html) PrestaVOD module.
*   Create a S3 [bucket](http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html).
*   Setup bucket.
*   Upload contents to the bucket.
*   Setup [CloudFront](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html).
*   Setup [AWS security](https://aws.amazon.com/security/).
*   Setup PrestaVOD.
*   PrestaVOD will connect to CloudFront and display S3 contents.
*   Finish setup of videos from PrestaVOD related to Prestashop products.

Regards.
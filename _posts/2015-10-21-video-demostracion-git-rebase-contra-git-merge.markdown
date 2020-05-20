---
layout: post
status: publish
published: true
title: 'Video demo: "git merge" versus "git rebase"'
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: '[:es]He creado este vídeo para demostrar lo que pasa entre ramas al hacer
  un "git rebase" y un "git merge".[:en]I created this video to show what happens
  between branches when making "git rebase" and "git merge".[:]'
date: '2015-10-21 17:45:25 +0000'
categories:
- Blog
tags:
- git
comments: []
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/RiAXlo-z7NI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

* Command history

```shell
cd git-course/
pwd
ls -la
git init
ls -la
ls -la
rm -Rf .git/
clear
git status
clear
ls
clear
ls -la
git status
git init
git status
git add .
git commit -m "master 1"
git branch
git status
git add . 
git commit -m "master 2"
git status
git add . 
git commit -m "master 3"
git branch
git checkout -b devel
git branch
git status
git add . 
git commit -m "devel 1"
git add . 
git commit -m "devel 2"
git add . 
git commit -m "devel 3"
git log
git checkout master
git branch
ls -la
git add . 
git commit -m "master 4"
git add . 
git commit -m "master 5"
git checkout devel
git rebase master
git checkout master
git branch
git checkout devel
git branch
git checkout master
git merge devel
git checkout devel
git add . 
git commit -m "devel 4"
git add . 
git commit -m "devel 5"
git add . 
git commit -m "devel 6"
git checkout master
git add . 
git commit -m "master 6"
git add . 
git commit -m "master 7"
git checkout devel
git branch
git checkout master
git merge devel
git branch
git add . 
git commit -m "master 8"
```

Next time I promise to save lines using: `git add . && git commit -m "message"`

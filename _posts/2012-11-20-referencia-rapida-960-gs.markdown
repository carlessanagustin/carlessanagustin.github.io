---
layout: post
status: publish
published: true
title: "960.gs quick reference"
author:
  display_name: Carles
  url: http://www.carlessanagustin.com/
author_url: http://www.carlessanagustin.com/
excerpt: "<!--:en-->906 grid system cheat sheet.<!--:-->"
date: '2012-11-20 22:25:00 +0000'
categories:
- Blog
tags:
- css
- responsive
comments: []
---
## Classes

**.container_12/16**

Defines main container (margin: 0px auto;)

**.grid_1...12/16**

Defines part container size (margin: 0px 10px;)

**.prefix_1...11/15**

Defines empty size to the left (padding-left like)

**.sufix_1...11/15**

Defines empty size to the right (padding-right like)

**.alpha**

Removes left margin (margin-left: 0px;)

**.omega**

Removes right margin (margin-right: 0px;)

## We can combine 12/16 columns system

| 12 Columns | 3 | 6 | 9  | 12 |
|------------|---|---|----|----|
| 16 Columns | 4 | 8 | 12 | 16 |

## CSS file order is important

```html
<link<!--dvfmtsc--> rel="stylesheet" href="css/reset.css" />  
<link<!--dvfmtsc--> rel="stylesheet" href="css/text.css" />  
<link<!--dvfmtsc--> rel="stylesheet" href="css/960.css" />  
<link<!--dvfmtsc--> rel="stylesheet" href="css/demo.css" />
```

For more quick information please check this [cheat sheet](/images/posts/960GridSystem-12column.pdf).

For full information please visit: [http://960.gs/](http://960.gs/ "960 Grid System")
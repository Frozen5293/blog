---
title: Bom
date: 2023-08-16 13:14:01
permalink: /pages/c24788/
sidebar: auto
categories:
  - 前端
  - web
tags:
  - js
  - ts
  - api
  - web
author: 
  name: frozen5293
  link: https://github.com/frozen5293
---




## BOM


### 窗口
```js
Window.prompt()  
```


### 浏览器导航
```js
localtion.href

    跳转

localtion.search

    ?xxxxx

localtion.hash

    #xxxxx

// 导航

history.goback()

history.forward()


```

### 存储
``` js
localstore.setitem()

sessiStore.setItem()
```





### js 标准库
```js
Math.cell()
Math.floor()
Math.rount()
parseInt()
random(0..1) 
pow()
min()
max()
sqrt()
getRamdom(a,b)
let p =[];
p.splice()
```


## DOM

```js
document.querySelector("css 选择器")
document.getElementById()
document.getElementByTag()
document.getElementByClass()
document.getElementsByTagName("title")[0].getAttributeNode("lang");

x.parentNode
x.childNodes
x.firstChild
x.lastChild
x.nextSibling
x.previousSibling

document.createElement('div')
document.body.appendChild(clild)

obj.getAttribute("")
obj.setAttribute("")

obj.innerText
obj.innerHTML
obj.className=""
obj.classList.add("")
obj.classList.toggle("")// 添加或删除
obj.nodeName  // x 的名称
obj.nodeValue //x 的值
obj.parentNode // x 的父节点
obj.childNodes // x 的子节点
obj.attributes // x 的属性节点


```
### 监听
```js
obj.addEventListenr("eventname",fn(){
    // click

    // hover

    // touchstart

    // touchmove

    // touchend

    // change // inputbox
})
```

### 外部加载
```js
let p = document.DOMParser();
p.parseFromString(text,"text/xml");
```


---
title: ajax
date: 2023-08-16 13:52:21
permalink: /pages/4f85fb/
sidebar: auto
categories:
  - 前端
  - web
tags:
  - ajax
  - web
  - api
  - js
  - ts
author: 
  name: frozen5293
  link: https://github.com/frozen5293
---

## XMLHttpRequest 
ajax网络的js库？浏览器自带

创建发送
```js
var xmlhttp=new XMLHttpRequest();
// variable=new ActiveXObject("Microsoft.XMLHTTP");

// methed url async
xmlhttp.open("GET","ajax_info.txt",true);
xmlhttp.send();
```

解析
``` js 
document.getElementById("myDiv").innerHTML=xmlhttp.responseText;

xmlDoc=xmlhttp.responseXML;
txt="";
x=xmlDoc.getElementsByTagName("ARTIST");
for (i=0;i<x.length;i++)
{
    txt=txt + x[i].childNodes[0].nodeValue + "<br>";
}
document.getElementById("myDiv").innerHTML=txt;

```


状态

|属性 | 描述|
|-|-|
|onreadystatechange |	存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。
|readyState |	存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。</br></br></br>0: 请求未初始化</br>1: 服务器连接已建立</br> 2: 请求已接收</br>3: 请求处理中</br>4: 请求已完成，且响应已就绪|
|status| 	200: "OK"</br>404: 未找到页面|

回调检测
```js
xmlhttp.onreadystatechange=function()
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
}
```

回调
```js
function myFunction()
{
    loadXMLDoc("/try/ajax/ajax_info.txt",function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        }
    });
}
```



API
```js
```


## fetch()


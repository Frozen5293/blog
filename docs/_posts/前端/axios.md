---
title: axios
date: 2023-08-16 16:10:48
permalink: /pages/74a0fc/
sidebar: auto
categories:
  - 前端
  - web
tags:
  - axios
  - js
  - ts
author: 
  name: frozen5293
  link: https://github.com/frozen5293
---



### 请求

```js
axios({
  methed:"post",
  url:"http://localhost",
  header:{
    'content-type':"applicationsaddfasdfaew"
  },
  data:{
    "json":"jsondata"
  }
}).then(res=>{
  console.log("dsadas");
})

axios({
  methed:"get",
  url:"http://localhost",
  header:{
    'content-type':"applicationsaddfasdfaew"
  },
  parms:{
    json:"jsondata"
  }
}).then(res=>{
  console.log("dsadas");
})

axios.post().then().finally()
axios.get().then().finally()
```

配置
```js
let p = axios.create(
  baseURL:"dsadasd"
  timeout:"2000"
)
p.post().then().finally()
```

中断
```js
p.interceptors().request.use((config)=>{ /*config 里大概是一些header*/})
p.interceptors().respond.use((config)=>{})
```
---
title: promise
date: 2023-08-16 15:41:46
permalink: /pages/507a74/
sidebar: auto
categories:
  - 前端
  - web
tags:
  - promise
  - js
  - ts
author: 
  name: frozen5293
  link: https://github.com/frozen5293
---


promise
```js
new Promise((resolve,reject)=>{
  console.log("==Level One")
  resolve("one level return")
})
.then(
  (res)=>{
    console.log("==Level Two")
    setTimeout(()=>{
      new Promise((r,j)=>{
        console.log("Timeout Promise");
        setTimeout(()=>{r("Timeout Promise 1s Return")},1000);
        return "ss";
      }).then((res)=>{
        console.log("Timeout Promise then");
        console.log(res)});
    },1000);
    console.log(res)
  },
  err=>{
    console.log("==Level Two");
    console.log(err)}
)
.catch(()=>{})

```
结果
```
==Level One debugger eval code:3:11
==Level Two debugger eval code:8:13
one level return debugger eval code:18:13
Promise { <state>: "fulfilled", <value>: undefined }

Timeout Promise debugger eval code:11:17
Timeout Promise then debugger eval code:15:17
Timeout Promise 1s Return
```

```js
new Primise.reslove("test")
  .then((mail) => {
    console.log(mail);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log('Experiment completed');
  });
```


提示
```
promise 是链式调用的，并且存在层级
如果使用一个变量then,注意保存的层级，同层级的then会同时调用
finally 当此promise 被敲定是 会被调用
```

api
```
Promise.all()
    在所有传入的 Promise 都被兑现时兑现；在任意一个 Promise 被拒绝时拒绝。
Promise.allSettled()

    在所有的 Promise 都被敲定时兑现。
Promise.any()

    在任意一个 Promise 被兑现时兑现；仅在所有的 Promise 都被拒绝时才会拒绝。
Promise.race()

    在任意一个 Promise 被敲定时敲定。换句话说，在任意一个 Promise 被兑现时兑现；在任意一个的 Promise 被拒绝时拒绝。
```
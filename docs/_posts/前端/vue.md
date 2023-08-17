---
title: Vue
date: 2023-08-16 13:04:08
permalink: /pages/896b39/
sidebar: auto
categories:
  - 前端
tags:
  - vue
  - js
  - ts
author: 
  name: frozen5293
  link: https://github.com/frozen5293
---

swipper.com.cn


## vue数据绑定

x.vue
```js
let app= vue.createapp()
app.compoent(xxx.vue)
app.run()
```

## 数据绑定
```vue
<p>{{a}}</p>
```

## 数据指针
```vue
const  p = ref(0);
//ref(obj)等价于reactive({value: obj})
//reactive(obj) 必须是obj
//ref(v/obj)    可以是变量或者obj 
const w = p.value
assert!(p.value===w===0)
```

## 暴露
```vue
<scrip setup>
let out=0;
</scrip>
<scrip>
export default{
    setup(){
        return {
            out;
        }
    }
}
</scrip>
```


## 计算属性
```vue
<scrip setup>
let out=0;
function p = compute(()=>{out*3})
</scrip>
<temple>
    <p>{{p}}</p>
</temple>
```
## 变量监听
```vue
const a = ref(0);
watch(a, async (newQuestion, oldQuestion) =>{
    console.log("");
})
```
## 类绑定&Style绑定
```vue
<div v-bind:class="{ classname: bool }"></div>
<div v-bind:class="[classname1,clssname2]"></div>
<div v-bind:style="{ background-color: "red" }"></div>
```
## 事件绑定
```vue
a: <button v-on:click="count++">Add 1</button>
b: <button @click="count++">Add 1</button>
assert!(a===b);
```

## 自定义事件与事件传递
子组件
```vue
<template>
    <p @click="delt"></p>
</template>
<script setup>
    funciton delt(){
        this.$emit("eventname",nums)
    }
</script>
```
父组件
```vue
<template>
    <p @eventname="thisdeak">{{v}}</p>
</template>
<script setup>
    const v=ref(0);
    funciton thisdeak(data){
        v+=data;
    }
</script>
```


## 按键检测
```vue
// 同时按下
<input @keyup.alt.enter=="onPageDown" />
```
## 表单绑定
```vue
<textarea v-model="text">ss</textarea>
<input v-model="text">ss</textarea>
// error : <input >{{text}}</textarea>
// 单选框
<input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>

// 复选框
// checkedNames =[]
<div>Checked names: {{ checkedNames }}</div>

<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>

<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>

<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
// 单选框
<div>Selected: {{ selected }}</div>

<select v-model.number.trim="selected">
  <option disabled value="">Please select one</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
</select>

```

## 逻辑渲染
```vue
<h1 v-if="true">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>

<p v-for="item in items">
  {{ item.message }}
</p>
```


## 标签内容继承

```vue
<FancyButton>
  Click me! <!-- 插槽内容 -->
</FancyButton>

<button class="fancy-btn">
  <slot></slot>
</button>

// 此时 会渲染成

<button class="fancy-btn">
  Click me!
</button>

```



## 标签内容继承

```vue
<button>click me</button>

<MyButton class="large" />

// 此时 会渲染成

<button class="large">click me</button>
```

## 序列化的异步组件

```vue
<script setup>
import { defineAsyncComponent } from 'vue'
const AsyncComp = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    // ...从服务器获取组件
    resolve(/* 获取到的组件 */)
  })
})
// ... 像使用其他一般组件一样使用 `AsyncComp`
</script>
```

```vue
// wrap AsyncComponent
<script setup>
import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
)
</script>
```

挂载
```vue
<script setup>
app.component('MyComponent', defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
))
</script>
```

使用

```vue
<script setup>
import { defineAsyncComponent } from 'vue'
const AdminPage = defineAsyncComponent(() =>
  import('./components/AdminPageComponent.vue')
)
</script>
<template>
  <AdminPage />
</template>
```

## 布局
```vue
<button @click="open = true">Open Modal</button>
<!--提升至 body 层级-->
<Teleport to="body">
  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</Teleport>
```
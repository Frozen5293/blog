---
title: css
date: 2023-08-16 15:43:43
permalink: /pages/f5e257/
sidebar: auto
categories:
  - 前端
  - web
tags:
  - css
author: 
  name: frozen5293
  link: https://github.com/frozen5293
---



# css排列


```html
<style>
	.main{
    	display:flex;
        /* 侧轴操作 */
        align-items:flex-end;
        /* 主轴操作 */
        justify-content: space-around;
        text-align: center;
        
    }

    .ss{
    	background-color: red;
        height: 100px;
        
        width: 20px;
        display: flex;
        /* 主轴朝向 */
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    
    .ss p{
    	margin-top: -20px;
    }
    
    .ss h3{
    	height:20px;
    	margin-bottom:-20px;
    }
 
</style>

<h2>css排列</h2>

<div>
	<div class="main">
        <div class="ss">
        	<p>a</p>
            <h3>223</h3>
        </div>
        <div class="ss">
        	<p>a</p>
            <h3>223</h3>
        </div>
        <div class="ss">
        	<p>a</p>
            <h3>223</h3>
        </div>
    </div>
</div>

```


<style>
	.main{
    	display:flex;
        /* 侧轴操作 */
        align-items:flex-end;
        /* 主轴操作 */
        justify-content: space-around;
        text-align: center;
        
    }

    .ss{
    	background-color: red;
        height: 100px;
        
        width: 20px;
        display: flex;
        /* 主轴朝向 */
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    
    .ss p{
    	margin-top: -20px;
    }
    
    .ss h3{
    	height:20px;
    	margin-bottom:-20px;
    }
 
</style>

<h2>css排列</h2>

<div>
	<div class="main">
        <div class="ss">
        	<p>a</p>
            <h3>223</h3>
        </div>
        <div class="ss">
        	<p>a</p>
            <h3>223</h3>
        </div>
        <div class="ss">
        	<p>a</p>
            <h3>223</h3>
        </div>
    </div>
</div>




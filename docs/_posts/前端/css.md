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


### 一种浮动的实现与解决方案
#### 方案1
使用伪元素配置float下一个的元素不受float影响
正常在文档流里存在
```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}

.wrapper::after {
  content: "";
  clear: both;
  display: block;
}
```
#### 方案2
在父元素上使用,
```css
overflow: auto;
```
#### 方案3

```css
    display: flow-root
```
```html
<h1>Simple float example</h1>
<div class="wrapper">
  <div class="box">Float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>

```

### 多列
```css
.container {
  column-width: 200px;
  column-count: 200px;
  column-gap: 10px;
  column-rule:4px dotted rgb(79, 185, 227);
   
}
// 解决不连续出现空格的问题
.box{
    break-inside: avoid;
    page-break-inside: avoid;
}

```


### 单位

```css
vw : 1vw等同于视口宽度的百分之一
vh : 1vw等同于视口高度的百分之一
vmin :视口较小尺寸的 1%。
vmax : 大尺寸的 1%。
em : 当前字体大小
ex : 字符x的高度
ch : 字符0的宽度
lh : 行高
rem: 根元素的字体大小



<meta name="viewport" content="width=device-width,initial-scale=1" />
```




### grid
```css
.container {
  display: grid;
  /*  maui  1* 2* 3* */
  grid-template-columns: 1fr 1fr 1fr; 
  /* 上下等价 */
  grid-template-columns: repeat(3, 1fr);
 /* 也不知道多少列  但是指定大小*/
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  /* 间隔长度 */
  grid-gap: 20px;
  grid-auto-rows: 100px;
  /* 高度 */
  grid-auto-rows: minmax(100px, auto);
}

```


### flex
```css
.wrap{
    display:flex;

    // 设置主轴方向
    flex-direction: row;


    flex-wrap: wrap;



    // 主轴
    justify-content: space-around;
    
    align-item: center;
    flex: 200px;
    flex-wrap: wrap;
}
.wrap div{
    align-self:end;
    order:1;
}

```



flex布局sample1

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



### css li设置
```css
p{
    list-style-type : upper-roman,
    list-style-position：inside,
    list-style-image: url(star.svg);
}
事实上这个可以调节的很少,msn上推荐使用background ,进行深度的控制,并将此项属性关闭.
ul {
  padding-left: 2rem;
  list-style-type: none;
}

ul li {
  padding-left: 2rem;
  background-image: url(star.svg);
  background-position: 0 0;
  background-size: 1.6rem 1.6rem;
  background-repeat: no-repeat;
}
```
### 字体

```css
p{
    /* 选择第一个可用的 */
     font-family: "Trebuchet MS", Verdana, sans-serif;
font-family: arial;
color: red;
font-size: 10px;
font-style: italic;
font-weight:bold;
text-transform:uppercase,full-width;
text-decoration:overline,underline;
// 上下 左右 模糊大小 底色
text-shadow: 4px 4px 5px red;

}
a {
}

a:link {
}

a:visited {
}

a:focus {
}

a:hover {
}

a:active {
}

```


### 完全居中

```css
.container {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}

```

### 定位
```css
p{
    display:fixed;
    // 相对于原来的位置

    position:relative;
    // 脱离文档流,相对于父元素

    position:absolute;
    // 脱离文档流,相对于窗口

    position:stickyed;
    // 类似与relative,但是会在相对元素超出屏幕时,相对与窗口
    
  top: 30px;
  left: 30px;
}
```

### 多平台适配
```css
@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}

它由以下部分组成：

    一个媒体类型，告诉浏览器这段代码是用在什么类型的媒体上的（例如印刷品或者屏幕）；
    一个媒体表达式，是一个被包含的 CSS 生效所需的规则或者测试；
    一组 CSS 规则，会在测试通过且媒体类型正确的时候应用。

例如

@media screen and (width: 600px) {
  body {
    color: red;
  }
}
// 横竖拜访

@media (orientation: landscape) {
  body {
    color: rebeccapurple;
  }
}
// 能否悬浮
@media (hover: hover) {
  body {
    color: rebeccapurple;
  }
}


```
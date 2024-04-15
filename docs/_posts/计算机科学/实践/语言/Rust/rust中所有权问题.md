---
title: rust中隐藏的所有权问题
date: 2023-08-19 03:01:07
permalink: /pages/5d465c/
sidebar: auto
categories:
  - Rust
tags:
  - Rust
  - 所有权
author: 
  name: frozen5293
  link: https://github.com/frozen5293
---

## rust规范

### 数据传递到另一作用域中应当使用引用

### 
```rust


```

### borrow_mut ERROR

出现这个问题的是同时出现两次 &mut T;

复现方式

1. 使用 && 链接，作用域不发生变化，会error
2. 使用 if let some(t)=s.clone()
```rust

    let p = Rc::new(RefCell::new(32));
    if let v=p.clone().borrow(){
       *p.clone().borrow_mut()=2;
    }
    // if let 实现方式像是闭包，生命周期检查类似
  // 匹配某东西的借用的时候
  // 在其中不可获取可变引用
```
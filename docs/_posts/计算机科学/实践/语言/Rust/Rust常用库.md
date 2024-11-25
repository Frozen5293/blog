---
title: Rust常用库
date: 2024-08-14 22:18:37
permalink: /pages/0f07b2/
sidebar: auto
categories:
  - Rust
  - 开发
tags:
  - Rust
  - 开噶
author: 
  name: frozen5293
  link: https://github.com/frozen5293
---

### 获取当前时间
```rust
use std::time::Instant;

let x=Instant::now;
println!("{}",Instant::now.duration_since(x));
```
---
title: Rust错误处理
date: 2024-04-29 01:00:33
permalink: /pages/rust/error/
sidebar: auto
categories:
  - Rust
tags:
  - Rust
  - 错误处理
author: 
  name: frozen5293
  link: https://github.com/frozen5293
---

# Rust错误处理

### Rust中如何处理返回

#### 1. 使用if let Ok(t)=ret {}
```rust
if let Ok(t)=url.get() {
    // t:result
}else{
    // 未获取到
}
```
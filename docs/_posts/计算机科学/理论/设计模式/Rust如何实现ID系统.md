---
title: Rust如何实现ID系统
date: 2024-09-02 22:51:55
permalink: /pages/86c403/
sidebar: auto
categories:
  - 随笔
tags:
  - 
author: 
  name: frozen5293
  link: https://github.com/frozen5293
---



```rust
// 需要nightly
use std::{ thread, time};
use std::sync::{Arc, LazyLock, RwLock};


struct IDSystem{
    id:u32
}
impl IDSystem{
    fn get(&mut self)->u32{
        self.id+=1;
        return  self.id.clone();
    }
}


static F:LazyLock<Arc<RwLock<IDSystem>>>=LazyLock::new(||{Arc::new(RwLock::new(IDSystem{id:0}))});



fn main() {
    thread::spawn(||{
        // 因为lazylock 实现deref,arc 实现deref,rwlock实现write,unwrap实现解锁
        println!("1：{}",(F.clone().write().unwrap()).get());
    });
    thread::spawn(||{
        println!("2：{}",(F.clone().write().unwrap()).get());
    });
    thread::spawn(||{
        // 因为lazylock 实现deref,arc 实现deref,rwlock实现write,unwrap实现引用
        println!("3：{}",(F.clone().write().unwrap()).get());
    });
    thread::spawn(||{
        thread::sleep(time::Duration::from_secs(1));
        println!("4：{}",(F.clone().write().unwrap()).get());
    });
    thread::sleep(time::Duration::from_secs(2));
    println!("5：{}",(F.clone().write().unwrap()).get());
    
}



```
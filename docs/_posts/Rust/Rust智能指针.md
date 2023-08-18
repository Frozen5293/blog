---
title: Rust智能指针
date: 2023-08-19 03:12:49
permalink: /pages/c8903a/
sidebar: auto
categories:
  - 智能指针
tags:
  - Rust
author: 
  name: frozen5293
  link: https://github.com/frozen5293
---


## 智能指针

### Mutex
```rust
#![feature(mutex_unlock)]
use std::sync::{RwLock, Mutex};
fn main(){
  let p = Mutex::new(0);
  let mut guard = p.lock().unwrap();
  *guard += 20;
  Mutex::unlock(guard);
}
```
### RwLock

  读写锁分开，离开作用域就结束

```rust
use std::sync::RwLock;

let lock = RwLock::new(5);

// 可以一次持有许多 reader 锁
{
    let r1 = lock.read().unwrap();
    let r2 = lock.read().unwrap();
    assert_eq!(*r1, 5);
    assert_eq!(*r2, 5);
} // 此时将丢弃读锁

// 只能持有一个写锁，但是
{
    let mut w = lock.write().unwrap();
    *w += 1;
    assert_eq!(*w, 6);
} // 写锁在这里被丢弃
```


### Box
  很简单就是将数据存储到栈中,可以解引用拿到数据
```rust
fn main(){
    let mut e = Box::new(0);
    *e=3;
    println!("{}",e);
}
```

### Arc
  线程安全的Rc
```rust
fn main(){
    let e = Arc::new(Cell::new(0));
    let w = e.clone();
    (*e).set(320);
    println!("{}",(*e).get());
    assert!((*e).get()==320);
    (*w).set(60);
    println!("{}",(*e).get());
    assert!((*e).get()==60);
}
```


### Rc
  提供多所有权，多个身份可以共同拥有此数据,拥有了这个cell
```rust
fn main(){
    let e = Rc::new(Cell::new(0));
    let w = e.clone();
    (*e).set(320);
    println!("{}",(*e).get());
    assert!((*e).get()==320);
    (*w).set(60);
    println!("{}",(*e).get());
    assert!((*e).get()==60);
}
```

### Cell
  实现替换值的内部可变性，传入的数据必须实现Copy tirte，修改是直接替换
```rust
  let p   =Cell::new(0);
  p.set(3);
  let s = p.get();
  assert!(s==3);
```
### RefCell
  实现可变引用方式的内部可变性，修改是自己判断
```rust
  fn main(){
    let p  = RefCell::new(0);
    *(p.borrow_mut())=1;
    println!("{}",*(p.borrow()));
}
```
### Weak
  防止循环引用

### UnsafeCell
  
```rust

use std::{cell::{RefCell}, sync::{Arc, Mutex}, panic::Location};

fn test(t:&Arc<Mutex<Vec<String>>>)->Result<(),Box<dyn std::error::Error>>{
    let s=Arc::clone(t);
    let lock;
    if let  Ok(g)= s.lock() {
        lock =g;
        let c= lock.clone();
        let mut res = vec![];
        for i in c.iter(){
            res.push(i.clone());
        }
        return Ok(());
    };
    Ok(())
}

fn main(){
    let s=  {
        let u = Arc::new(vec!["ss".to_string()]);
        let _s = (&u).clone();
        // 这里会报错因为可变性没有变化
        // u.push("ssssww".to_string());
        
        // 这里可以获取Vec的可变引用
        let u = Arc::new(RefCell::new(vec!["aa".to_string()]));
        let s = (&u).clone();
        u.borrow_mut().push("22222".to_string());
        s
        // 这里可以使用Cell进行替代，但是使用起来很麻烦而且开销要大，因为是直接的复制,还要这里的Vec实现CopyTrit
        // let e=Arc::new(Cell::new(Vec::<String>::new()));
        // let  tmp =(*e).get()

    };
    println!("{:?}",(*s).borrow());

    
}
```
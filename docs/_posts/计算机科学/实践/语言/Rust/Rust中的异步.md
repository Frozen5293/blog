---
title: Rust中的异步
date: 2023-08-19 01:59:15
permalink: /pages/e2fa0a/
sidebar: auto
categories:
  - Rust  
tags:
  - Rust
  - 异步
author: 
  name: frozen5293
  link: https://github.com/frozen5293
---


### 对于Rust中异步的设计哲学（理念）？

    Rust中提供了两个标记 ，分别是 async（异步) await(等待)

### 明确异步与多线程的区别

    Rust中异步函数并不会导致，两个函数同时发生，因为并不会产生一个线程
    两个函数同时发生只能是多线程，或者多进程两种实现方式，这是由操作系统实现的
    具体使用几个CPU,这也是操作系统决定的

    同步函数本身不会产生一个线程，只会返回一个 特殊的 feature

    当阻塞时会分配给其他的计算，但是实际上还是同步执行的，只是一部分在等待IO

### 多线程的并发执行

```rust
// multi-example/src/main.rs
...
// multi-example/src/main.rs

use std::io;
use std::sync::RwLock;
use std::thread;

use lazy_static::lazy_static;

mod file;

// A sync primitive that allows to read/write from variables between threads.
// we declare the variables here, this requires the lazy_static crate
lazy_static! {
    static ref FILE1: RwLock<String> = RwLock::new(String::from(""));
    static ref FILE2: RwLock<String> = RwLock::new(String::from(""));
}

fn main() -> io::Result<()> {
    println!("program started");

    let thread_1 = thread::spawn(|| {
        let mut w1 = FILE1.write().unwrap();
        *w1 = file::read_file("src/file1.txt").unwrap();
        println!("read file 1");
    });

    println!("Launched Thread 1");

    let thread_2 = thread::spawn(|| {
        let mut w2 = FILE2.write().unwrap();
        *w2 = file::read_file("src/file2.txt").unwrap();
        println!("read file 2");
    });

    println!("Launched Thread 2");

    let mut rf1: bool = false;
    let mut rf2: bool = false;

    loop {
    	// read()
        let r1 = FILE1.read().unwrap();
        let r2 = FILE2.read().unwrap();

        if *r1 != String::from("") && rf1 == false {
            println!("completed file 1");
            rf1 = true;
        }

        if *r2 != String::from("") && rf2 == false {
            println!("completed file 2");
            rf2 = true;
        }
    }

    Ok(())
}


// 多线程loop
    loop {
    	// try_read()
        let r1 = FILE1.try_read();
        let r2 = FILE2.try_read();

        match r1 {
            Ok(v) => {
                if *v != String::from("") && rf1 == false {
                    println!("completed file 1");
                    rf1 = true;
                }
            }
            // If rwlock can't be acquired, ignore the error
            Err(_) => {}
        }

        match r2 {
            Ok(v) => {
                if *v != String::from("") && rf2 == false {
                    println!("completed file 2");
                    rf2 = true;
                }
            }
            // If rwlock can't be acquired, ignore the error
            Err(_) => {}
        }
    }
...
```
现在执行方式有所不同。如果file1.txt比file2.txt大得多，则应首先处理第二个文件。

```text
    program started
    Launched Thread 1
    Launched Thread 2
    read file 2
    completed file 2
    read file 1
    completed file 1
```

### main不能指定为async?如何解决

    因为最后的结果需要等待异步函数，所以要使用async标记调用异步函数的函数，
    但是最后main不能指定为async

如何解决

    因为异步函数需要一个轮询器来指定该函数是否执行完毕，就像上文中的锁一样，
    
    rust中默认不会实现这一特性，所以需要一个库来实现这个功能，使这个函数能够回归到同步的工作流

### tokio

    它会失败

```rust
    // async-example/src/main.rs

use futures::executor::block_on;
use futures::join;
use std::io;

mod file;

fn main() -> io::Result<()> {

    println!("Program started");

    // Block on the final future
    block_on(load_files());

    Ok(())
}

async fn load_files() {
    // Join the two futures together
    join!(load_file_1(), load_file_2());
}

async fn load_file_1() {
    let r1 = file::read_file("src/file1.txt").await;
    println!("file 1 size: {}", r1.unwrap().len());
}

async fn load_file_2() {
    let r2 = file::read_file("src/file2.txt").await;
    println!("file 2 size: {}", r2.unwrap().len());
}
```

    因为read_file()会阻塞当前进程，停止运行，直到获取数据

### 解决方案

    使用异步的std库来读取文件std-async
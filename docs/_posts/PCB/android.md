---
title: android
date: 2023-08-18 00:24:34
permalink: /pages/15ba69/
sidebar: auto
categories:
  - 随笔
tags:
  - 
author: 
  name: frozen5293
  link: https://github.com/frozen5293
---


### 9008 
> 就是烧录,因为Arm没有Bios,

### Verified Boot
> 安卓系统里面存在的一个组件
> 启动Android之前判断System分区中是否被更改过,

###  Securty Boot
> 安全启动，Arm强制执行,检测Bootloader是否被更改过
> 就是有一个地方存储者密钥，来解密，提供的Bootloader。
> 这个密钥是烧录在Rom上,可以拆?

### Bootloader
> 执行在Linux之前,fastboot,扮演者BIOS的角色，实际上没有BIOS,
> 就是系统的引导程序，同时也承担着Bios的任务

### Boot分区
> Android内核，在linux之后

### Recovery
> 与Android内核平行，在linux之后

### System分区
> Linux

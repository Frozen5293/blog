---
title: 按键Buffer
date: 2023-10-25 20:58:49
permalink: /pages/e60ee4/
sidebar: auto
categories:
  - System
  - GameDesign
tags:
  - System
  - GameDesign
author: 
  name: frozen5293
  link: https://github.com/frozen5293
---

1. 按键层
    
    按键->虚拟按键 :直接发送出去,按照映射表
    
2. 指令层
      
    指令map{up:f,down:f,left:f,right:f, a:f,b:f,x:f,y:f,arl:t,brl:t}
    优先级高的放前面技能,优先级中的的放后面abxy,空指令idol

    tmp 指令 产传递给状态机

    虚拟按键buffer[] 30frame

3. 状态机

    获取指令
    直接变更状态,同时启用/禁用指令,
    根据状态和帧数 启用/禁用指令,
    结束后:启用所有指令



    

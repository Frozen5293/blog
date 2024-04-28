---
title: dotabuff系统
date: 2023-09-26 21:05:33
permalink: /pages/e68409/
sidebar: auto
categories:
  - System
  - GameDesign
tags:
  - GameDesign
  - buff
  - damage
  - boardcast
  - 游戏
author: 
  name: frozen5293
  link: https://github.com/frozen5293
---

### 伤害
#### 伤害数值
> 正整数
#### 伤害类型
> 灵魂伤害
> 真实伤害
> 魔法伤害
> 物理伤害
#### 伤害来源
> player,monster
#### 伤害标记
> 普通攻击,技能攻击,不可被减伤,穿刺,爆炸
#### 属性标记
> 水火艹木

### 伤害公式
等级倍数= lv×0.4+2
x技能威力
×对应攻击力
÷(玩家防御力*50)
×修正
本系倍数×克制倍数×随机系数
## BUFF
### buff层级
#### 未减伤层,原始层
    处理
- 被施加伤害逻辑
- 被施加buff逻辑
- 传播其他逻辑
    权限
- 下层传播伤害
- 下层修改伤害
- 下层添加伤害
- 下层传播buff
- 下层创建buff
#### 减伤层
    处理
- 下层减伤
- 下层伤害的传播
- 下层buff的生成与失效
- 传播其他逻辑
    权限
- 下层传播伤害
- 下层修改伤害
- 下层添加伤害
+ 下层删除伤害 
- 下层传播buff
- 下层创建buff
+ 下层删除buff
#### 状态层
    处理
- 人物Buff状态标记
- 人物Debuff状态标记
- 人物伤害结算
- 人物buff结算
    权限
+ 不允许修改buff,只允许运行buff




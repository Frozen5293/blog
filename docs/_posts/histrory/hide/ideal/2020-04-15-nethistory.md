---
title: NetHistory

tags: event
categories: 
  - Arthide
date: 2019-12-23 16:34:00
permalink: /pages/defb66/
sidebar: auto
author: 
  name: frozen5293
  link: https://github.com/frozen5293
---

# 番茄花园XP
> 其实我记得还有雨沐林风（好像写错了），小问题
音乐 おやすみ　
来自


# 塞班
<http://licensing.symbian.org/>
<https://tieba.baidu.com/p/5600532541> 
楼主：蓝岸粒粒
https://garage.maemo.org/frs/?group_id=854
```
pys60联网接入点


接入点控制
对接入点的操作很多时候可以不用设计。软件在联网的时候会自动发起系统询问，请求选择一个接入点来继续操作。但有些时候希望软件能使用固定的某个接入点而不用每次选择，于是就要对接入点进行必要的编程操作,罗列接入点，保存接入点选择等。
在socket模块下有几个与接入点有关的函数可以通过dir(socket)查看。

access_points()
返回系统中的接入点列表，每一个接入点用一个字典数字表示它的信息如：
{‘iapid’:10,’name’:u’wap’}这是一个名为wap的接入点（这个名字可以自己在手机设置里改的，跟接入类型无关），它的引用ID是10.而access_points()返回的是包含若干个这样的字典的列表(list).注意名称值为u码字符。
可以这样测试：
#运行手机上的python命令行模式
>>>import socket
>>>socket.access_points()
将输出手机上所有接入点

access_point(iapid)
返回一个接入点对象，传入参数是一个整形数值，通过上面的函数得到接入点的iapid，并在这个函数中传入，即可返回一个接入点对象（ap对象）如：
ap=socket.access_point(10)
该对象有个方法：
ap.ip()取得自己的IP地址,必须是已经连接之后才能使用这个来获取IP.
ap.start()打开该接入点连接,这时候手机的有关指示位置会显示出网络连接标志,如E.如果接入点早已经打开，则该函数无效果。
ap.stop()关闭该接入点。手机连接标志也将消失，此时手机与网络断开。但这并无强制断开能力，只有当前接入点无其他程序使用的情况下，才会断开。否则该函数无效。
假设手机中已经启动了UC并使用了这个名叫wap，这时创建这个接入点对象只是取得了引用。start()和stop()方法都无效果。但可以通过ip()方法取得已经连接的IP。
也就是说：
start()方法保证打开接入点。不管是自己打开还是已经被其他程序打开了。
stop()方法则保证这个接入点没有程序使用的话就关闭该接入点。

select_access_point()
该函数会弹出系统的一个选择接入点的选单，选择之后会返回一个iapid。总觉得系统的这个选单样子比较简陋，不及用弹出菜单做的那种好看。

set_default_access_point(ap)
该函数传入一个ap对象，并设置其为默认使用的接入点。大概就是设置完默认之后，软件在非联网状态下，启用socket，httplib，urllib等发起连接的时候，会知道使用什么接入点，而不需要在问。

```
## 塞班游戏《七夜》
只有这点资料
<https://tieba.baidu.com/p/5660919374>


# 功能机java开发（资料空白）

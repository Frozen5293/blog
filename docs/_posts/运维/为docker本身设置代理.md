---
title: 为docker本身设置代理
date: 2023-08-16 17:03:16
permalink: /pages/f70ae0/
sidebar: auto
categories:
  - 运维
tags:
  - linux
  - docker
author: 
  name: frozen5293
  link: https://github.com/frozen5293
---
mkdir -p /etc/systemd/system/docker.service.d/
vim /etc/systemd/system/docker.service.d/http-proxy.conf

```text
[Service]
Environment="HTTP_PROXY=http://127.0.0.1:7890/"        
Environment="HTTPS_PROXY=http://127.0.0.1:7890/"        
Environment="NO_PROXY=localhost,127.0.0.1" 
```

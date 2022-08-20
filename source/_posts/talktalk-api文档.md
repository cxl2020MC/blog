---
title: talktalk api文档
date: 2022-08-20 19:47:49
updated:
cover:
tags:
categories:
keywords:
description:
sticky:
top_img:
comments:
toc:
toc_number:
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
swiper_index:
password:
abstract:
message:
wrong_pass_message:
wrong_hash_message:
---

> 随便的简介
> talktalk是博主自己开发的一个说说系统

# api文档

> 所有api需要`POST`请求到`/api/v1/talktalk`
> 并传递`json`数据:`{"type": "选择的api"}`
> 测试api地址`https://talktalk-six.vercel.app`

|参数名|数据类型|默认值|说明|
|:---:|:------:|:---:|----|
|`type`|`str`|无|选择的api|

## 获取说说

|参数名|数据类型|默认值|说明|
|:---:|:------:|:---:|----|
|`type`|`str`|无|选择的api，这个是`load`|
|`num`|`int`|`15`|指定单次查询数量|
|`skip`|`int`|`0`|指定单次跳过数量|

### 列子

`{"type": "load"}`

## 点赞说说

|参数名|数据类型|默认值|说明|
|:---:|:------:|:---:|----|
|`type`|`str`|无|选择的api，这个是`good`|
|`id`|`str`|无|说说id(读取说说的返回数据里有)|

### 列子

`{"type": "good", "id": "ewfgyegfyegfreferfuergfygevf"}`

## 登录api

> 以下api需要登录
> 
> 登录传入json数据`{"type": "login", "pwd": "你的密码"}`
> 
> 返回会话(`session`)数据

### 发送说说

|参数名|数据类型|默认值|说明|
|:---:|:------:|:---:|----|
|`type`|`str`|无|选择的api，这个是`send`|
|`data.text`|`str`|无|说说的内容|
|`data.device`|`str`|无|发送说说的设备|
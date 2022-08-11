---
title: twikoo-vercel评论数据导出工具
date: 2022-08-10 20:22:26
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

# 前言

twikoo-vercel版评论导出较为复杂，然后作者(博主)写了个脚本，可以一键导出评论数据

# 快速开始

> 打包的文件只支持windows运行，其他系统请使用源码并安装自行安装依赖（建议py大佬尝试）

[wimdows版下载](https://file.cxl2020mc.top/api/raw/?path=/app/twikoo-vercel%E8%AF%84%E8%AE%BA%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%87%BA%E5%B7%A5%E5%85%B7.zip)

下载完成后解压

# 使用方法

打开twikoo的vercel项目
点击`Settings` - `Environment Variables`

下滑到页面最下面点击`MONGODB_URI`环境变量边上的小眼睛，复制出现的内容。

启动刚刚下载的工具里面的`.exe`文件
并且按照提示操作(tips: CMD的复制是右键，不是Ctrl+V)

运行完成后当前目录会出现`data.json`文件
这就是导出的数据
---
title: AGbot帮助文档1——命令
date: 2022-05-12 13:42:20
cover:
tags: 
  - python
  - AGbot
updated:
categories:
  - python
  - AGbot
keywords:
description:
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
---

> AGbot正在开发中（有一点点bug）
>
> 此文档正在赶稿中。。。。。。

# AGbot命令帮助

> 机器人支持中文命令,比如`help`命令可以用`帮助`代替
>
> 机器人的{% label 私聊命令没有开头 %}(以后会考虑加),{% label 群聊的命令都已`/`开头 %}
>
> 机器人的参数都在==命令之后加空格==,参数和参数之间也由空格分格

## help

help命令是用来显示机器人帮助的命令

你可以在私聊中对机器人发送`help`或者在群聊里对机器人发送`/help`来显示机器人的帮助

也可以在帮助命令后面添加“空格”然后添加参数命令名称获取该命令的更多帮助

> tips:由于作者很懒，所以机器人的帮助不会经常更新

### 示例

`/help`显示机器人的帮助

`/help bing`显示bing命令的帮助



## bing

bing命令用于获取当天必应搜索的主页壁纸

你可以在私聊中对机器人发送`bing`或者在群聊中对机器人发送`\bing`获取当天必应搜索的1920*1080首页壁纸

或者在后面加上“空格”然后添加参数`4k`获取原图

如果您想获取以前的壁纸，你可以通过在后面加参数天数来获取以前的壁纸,可以和获取原图的方法连用

> tips:最大只能获取7天前的壁纸

### 示例

`/bing`获取必应当天的1920*1080的壁纸

`/bing 4k`获取必应当天的壁纸原图

`/bing 1`获取昨天的必应壁纸

`/bing 1 4k`获取昨天的必应壁纸原图


---
abbrlink: ''
abstract: null
aplayer: null
aside: null
categories:
- - Hexo
comments: null
copyright: null
copyright_author: null
copyright_author_href: null
copyright_info: null
copyright_url: null
cover: null
date: '2022-09-07 08:55:25'
description: null
highlight_shrink: null
katex: null
keywords: null
mathjax: null
message: null
password: null
sticky: null
swiper_index: null
tags:
- Hexo
- Butterfly
title: Hexo butterfly主题更新
toc: null
toc_number: null
toc_style_simple: null
top_img: null
updated: '2022-09-14 16:20:38'
wrong_hash_message: null
wrong_pass_message: null
---
# 前言

很久没去主题官网看了。

昨天发现主题又更新了新版本

因为我没有魔改主题，更新还算方便

魔改的更新就很麻烦

> 本篇教程不教如何更新魔改主题，但可以利用git记录你的修改再更新主题

# Git直接更新主题

> 再说一遍，本篇教程不教如何更新魔改主题

直接在主题目录下执行（`.git`文件夹要复制回去）

```powershell
git pull
```

如果你忘记你的`.git`文件夹去哪了

就直接删除主题，回到主题根目录重新拉取最新主题就行

```powershell
git clone -b master https://gitee.com/immyw/hexo-theme-butterfly.git themes/butterfly
```

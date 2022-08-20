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

## 获取说说


type: `load`

### 列子

`{"type": "load"}`
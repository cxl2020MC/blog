---
abbrlink: ''
abstract: null
aplayer: null
aside: null
categories: []
comments: null
copyright: null
copyright_author: null
copyright_author_href: null
copyright_info: null
copyright_url: null
cover: null
date: '2022-08-02 21:27:41'
description: null
highlight_shrink: null
katex: null
keywords: null
mathjax: null
message: null
password: null
sticky: null
swiper_index: null
tags: []
title: 用cw(ClientWorker)给你的网站提速
toc: null
toc_number: null
toc_style_simple: null
top_img: null
updated: '2022-08-04 12:49:10'
wrong_hash_message: null
wrong_pass_message: null
---
# 前言

ClientWorker简称cw

cw是cyf大佬开发的一个简单且配置方便的一个sw

官方是这么介绍的:

> ClientWorker
> 一个基于规则驱动的前端路由拦截器
> 用规则定义黑科技

[官方文档](https://clientworker.js.org/)

# 快速开始

> 建议参考[官方文档 - 快速开始](https://clientworker.js.org/start.html#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)

## CDN接入

> 官方~墙裂~建议用此方式安装。

在你的网站**根目录**下新建一个名为 `cw.js`的文件，里面写上：

```
importScripts('https://lib.baomitu.com/clientworker/latest/dist/cw.js')
```

你也可以采用jsdelivr镜像进行接入

```
importScripts('https://cdn.jsdelivr.net/npm/clientworker@latest') //最好指定版本
```

官方文档拥有更多引入镜像

> 官方非常强烈建议在引入脚本时要指定clientworker的版本(而不是默认latest(最新版本))，最新版本可以到[官方GitHub Release](https://github.com/ChenYFan/ClientWorker/releases)查看。

## 写入配置

> 这个也是cw最容易出问题的点(最简单也是最难的一步)

在**根目录**(hexo 请放在 `博客根目录\scores`)下新建一个 `config.yaml`，填入配置。

```
name: ClientWorker
catch_rules:

- rule: _
  transform_rules:
  - search: \#.+
    searchin: url
    replace: ''
  - search: _
    action: fetch
    fetch:
    engine: fetch
  - search: (^4|^5)
    searchin: status
    action: return
    return:
    body: The GateWay is down!This Page is provided by ClientWorker!
    status: 503

```

```


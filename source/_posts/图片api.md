---
abstract: null
aplayer: null
aside: null
categories:
- api
comments: null
copyright: null
copyright_author: null
copyright_author_href: null
copyright_info: null
copyright_url: null
cover: null
date: '2022-07-27 15:03:40'
description: null
highlight_shrink: null
katex: null
keywords: null
mathjax: null
message: null
password: null
swiper_index: null
tags:
- api
- python
title: 自己写的一个图片api
toc: null
toc_number: null
toc_style_simple: null
top_img: null
updated: '2022-07-27 15:03:41'
wrong_hash_message: null
wrong_pass_message: null
---
> 公共api极易挂，建议使用vercel部署私人api(建议Fork，方便更新)

[GitHub](https://github.com/cxl2020MC/bing-imgapi)

公共api地址:[https://api.cxl2020mc.top](https://api.cxl2020mc.top)

仅支持get请求

后加`?api=[请求的api]`表示请求的api

# api

## bing

获取bing壁纸

url:`/?api=bing`

| 参数 | 描述 | 值 |
| ------ | ------ | ------ |
|idx|获取历史图片(仅支持过去7天)|`(1/2/3/4/5/6/7)`任意选一|
|uhd|获取原图(大部分都为4k)|任意值|

### 列子

#### 获取今天的bing壁纸

请求url:`https://api.cxl2020mc.top?api=bing`
![](https://api.cxl2020mc.top?api=bing)

#### 获取今天的原图bing壁纸

请求url:`https://api.cxl2020mc.top?api=bing&uhd=blblblblbl`
![](https://api.cxl2020mc.top?api=bing&uhd=0)

#### 获取昨天的bing壁纸

请求url:`https://api.cxl2020mc.top?api=bing&idx=1`
![](https://api.cxl2020mc.top?api=bing&idx=1)

#### 获取昨天的原图bing壁纸

请求url:`https://api.cxl2020mc.top?api=bing&idx=1&uhd=blblbl`
![](https://api.cxl2020mc.top?api=bing&idx=1&uhd=blblbl)

## info

获取api和bing api 的连接信息

url:`/?api=bing`



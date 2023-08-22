---
abbrlink: ''
abstract: null
aplayer: null
aside: null
categories:
- - Hexo
- - Butterfly
comments: null
copyright: null
copyright_author: null
copyright_author_href: null
copyright_info: null
copyright_url: null
cover: null
date: '2022-09-02 08:08:07'
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
title: Butterfly主题添加51la统计和灵雀应用监控
toc: null
toc_number: null
toc_style_simple: null
top_img: null
updated: '2022-09-14 16:19:14'
wrong_hash_message: null
wrong_pass_message: null
---
# 前言

因为最近百度统计时常抽风，所以作者切换到了51la统计

# 51la统计

## 快速开始

首先注册[51la统计](https://invite.51.la/1OtUuw1AA?target=V6)

> (这是一个邀请链接，我会获得10元，新用户会获得8元。(不使用邀请链接均无奖励))

并添加网站，获取网站安装代码(开启了Pjax的可以打开单页应用上报功能)

![51la统计](https://cxl2020mc-1304820025.file.myqcloud.com/file/202209020832226.png)

会得到如下代码

```html
<script charset="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js"></script>
<script>LA.init({id: "xxxx",ck: "xxxx",hashMode:true})</script>
```

### 安装代码

{% tabs test1, 2 %}

<!-- tab 同步安装 -->

加入butterfly主题配置文件

```diff
inject:
  head:
    ......
+   - <script charset="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js"></script>
+   - <script>LA.init({id: "xxxx",ck: "xxxx",hashMode:true});</script>
```

<!-- endtab -->

<!-- tab 异步安装 -->

在博客根目录内的`source`文件夹内建立`js`文件夹((其实可以随便放)已经建立的不用重复建立)

在刚刚建立的`js`文件夹内新建一个`51la.js`内部写上

```js
LA.init("这里填上安装代码的配置json");
```

> 配置json指的是刚刚复制的代码内的`{id: "xxxx",ck: "xxxx",hashMode:true}`

填好后大概长这个样子

```js
LA.init({id: "xxxx",ck: "xxxx",hashMode:true});
```

然后在主题配置文件内加上

```diff
inject:
  head:
    ......
+   - <script defer charset="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js"></script>
+   - <script defer src="/js/51la.js"></script>
```

利用defer标签实现按顺序异步加载

> 不要变动顺序，会导致不生效
> 注意: 等会异步安装灵雀应用监控的时候添加的js脚本一定要放在51la.js前面

<!-- endtab -->

{% endtabs %}

# 灵雀应用监控

## 快速开始

使用刚刚注册的51la账号登录[灵雀应用监控](https://perf.51.la/)

并且创建应用，获取安装代码

> 开启了pjax的可以打开单页应用上报

![灵雀应用监控](https://cxl2020mc-1304820025.file.myqcloud.com/file/202209020851621.png)

然后会得到以下内容

```html
<script src="https://sdk.51.la/perf/js-sdk-perf.min.js" crossorigin="anonymous"></script>
<script>
  new LingQue.Monitor().init({id:"xxxxxx",sendSpaPv:true});
</script>
```

### 安装代码

{% tabs test1, 2 %}

<!-- tab 同步安装 -->

加入butterfly主题配置文件

```diff
inject:
  head:
    ......
+   - <script src="https://sdk.51.la/perf/js-sdk-perf.min.js" crossorigin="anonymous"></script>
+   - <script>new LingQue.Monitor().init({id:"xxxxxxxxx",sendSpaPv:true});</script>
```

<!-- endtab -->

<!-- tab 异步安装 -->

在刚刚为异步51la新建的`51la.js`内部加上(注意是加上)

```js
new LingQue.Monitor().init("这里填上安装代码的配置json");
```

> 配置json指的是刚刚复制的代码内的`{id:"xxxxxxxxx",sendSpaPv:true}`

填好后大概长这个样子

```js
new LingQue.Monitor().init({id:"xxxxxxxxx",sendSpaPv:true});
```

然后在主题配置文件内加上

```diff
inject:
  head:
    ......
    - <script defer charset="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js"></script>
+   - <script defer src="https://sdk.51.la/perf/js-sdk-perf.min.js" crossorigin="anonymous"></script>
    - <script defer src="/js/51la.js"></script>
```

利用defer标签实现按顺序异步加载

> 不要变动顺序，会导致不生效

<!-- endtab -->

{% endtabs %}

{% link 51LA, https://www.51.la %}

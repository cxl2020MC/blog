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
cover: https://cxl2020mc-1304820025.file.myqcloud.com/file/202208072111228.png
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
title: 用cw(ClientWorker)给你的Hexo网站提速
toc: null
toc_number: null
toc_style_simple: null
top_img: null
updated: '2022-09-05 10:07:14'
wrong_hash_message: null
wrong_pass_message: null
---
# 前言

![cw官网](https://cxl2020mc-1304820025.file.myqcloud.com/file/202208072111228.png)

ClientWorker简称cw

cw是cyf大佬开发的一个简单且配置方便的一个sw

官方是这么介绍的:

> ClientWorker
> 一个基于规则驱动的前端路由拦截器
> 用规则定义黑科技

![cw官网快速开始](https://cxl2020mc-1304820025.file.myqcloud.com/file/202208072113936.png)

<!-- [官方文档](https://clientworker.js.org/) -->

{% link clientworker官方文档,https://clientworker.js.org %}

# 快速开始

> ~墙裂~建议参考[官方文档 - 快速开始](https://clientworker.js.org/start.html#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)
> 这里只写 Hexo Butterfly 主题的方法

## CDN接入

> 官方~墙裂~建议用此方式安装。

在你的网站**根目录(就是博客根目录\scores)**下新建一个名为 `cw.js`的文件，里面写上：

```js
importScripts('https://lib.baomitu.com/clientworker/latest/dist/cw.js')
```

你也可以采用jsdelivr镜像进行接入

```js
importScripts('https://cdn.jsdelivr.net/npm/clientworker@latest') //最好指定版本
```

官方文档拥有更多引入镜像

> 官方非常强烈建议在引入脚本时要指定clientworker的版本(而不是默认latest(最新版本))，最新版本可以到[官方GitHub Release](https://github.com/ChenYFan/ClientWorker/releases)查看。

## 写入配置

> 这个也是cw最容易出问题的点(最简单也是最难的一步)

在**根目录**(hexo 请放在 `博客根目录\scores`)下新建一个 `config.yaml`，填入配置。

```yaml
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

也可以填入我这个什么用也没有的配置

```yaml
name: ClientWorker
catch_rules:
  - rule: _
    transform_rules:
      - search: _
        action: skip
```

## Step 3 配置安装代码

官方有三种方式接入： `三文件全域安装` 、 `自定义无刷新安装` 、 `自定义刷新安装`

但我这只讲：`自定义无刷新安装`、`自定义刷新安装`

> 其中，`全域安装`最简单，对SEO支持也最恶劣（Google会提示额外的计算开销，而百度完全没办法爬取）。比较适用于自用的、只追求速度的。`自定义无刷新安装`则对你的HTML和JS水平有所要求，对于部分不遵守标准的浏览器兼容性较差，但是这种方法对SEO没有影响，比较适合于对seo注重的网站。`自定义刷新安装`对seo略有影响，会在载入后阻断未经CW的请求并刷新一次，以便于CW及时托管，比较适合于网站提速

通用步骤：
在`博客根目录\scores`新建一个js(放在scores文件夹里就行),名称随意比如`cw_install.js`

> 本文以`source/js/cw_install.js`为列子
> 下面有2种方法，可以通过点击tab切换

{% tabs test1 %}

<!-- tab 自定义无刷新安装 -->

在刚刚新建的js文件里写上下面这些内容

```js
if (!!navigator.serviceWorker) {
    navigator.serviceWorker.register('/cw.js?t=' + new Date().getTime()).then(async (registration) => {
        if (localStorage.getItem('cw_installed') !== 'true') {
            const conf = () => {
                console.log('[CW] Installing Success,Configuring...');
                fetch('/cw-cgi/api?type=config')
                    .then(res => res.text())
                    .then(text => {
                        if (text === 'ok') {
                            console.log('[CW] Installing Success,Configuring Success,Starting...');
                            localStorage.setItem('cw_installed', 'true');
                            //如果你不希望重载页面，请移除下面七行
                            //重载标识 - 开始
                            fetch(window.location.href).then(res => res.text()).then(text => {
                                document.open()
                                document.write(text);
                                document.close();
                            });
                            //重载标识 - 结束
                        } else {
                            console.warn('[CW] Installing Success,Configuring Failed,Sleeping 200ms...');
                            setTimeout(() => {
                                conf()
                            }, 200);
                        }
                    }).catch(err => {
                        console.log('[CW] Installing Success,Configuring Error,Exiting...');
                    });
            }
            setTimeout(() => {
                conf()
            }, 50);
        }
    }).catch(err => {
        console.error('[CW] Installing Failed,Error: ' + err.message);
    });
} else { console.error('[CW] Installing Failed,Error: Browser not support service worker'); }
```

<!-- endtab -->

<!-- tab 自定义刷新安装 -->

```js
if (!!navigator.serviceWorker) {
    if (localStorage.getItem('cw_installed') !== 'true') {window.stop();}
    navigator.serviceWorker.register('/cw.js?t=' + new Date().getTime()).then(async (registration) => {
        if (localStorage.getItem('cw_installed') !== 'true') {
                setInterval(() => {
                    fetch('/cw-cgi/api?type=config').then(res => res.text()).then(res => {
                        if(res === 'ok') {
                            localStorage.setItem('cw_installed', 'true');
                            console.log('[CW] Installation is completed.Reloading...');
                            location.reload()
                        }
                    }).catch(err => {
                        console.warn('[CW] Installation may not be complete, try again later.')
                    })
                }, 100);
        }
    }).catch(err => {
        console.error('[CW] Installing Failed,Error: ' + err.message);
    })
} else { console.error('[CW] Installing Failed,Error: Browser not support service worker'); }
```

<!-- endtab -->

{% endtabs %}

## 将cw配置文件跳过渲染，并加入头部

1. 打开根目录的hexo配置文件`_config.yml`

```diff
skip_render: 
+      - config.yaml
```

2. 打开主题配置文件

```yml
inject: 
   head:
+       -<scriptsrc="/js/cw_install2.js"></script>
       ......
```


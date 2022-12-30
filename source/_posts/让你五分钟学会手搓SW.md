---
title: 让你五分钟学会手搓SW
date: 2022-12-30 18:21:30
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

# 关于Service Worker

`Service Worker` 是浏览器的一个高级特性，本质是一个 `Web Worker` ，是独立于网页运行的脚本。 `Web Worker` 这个api被造出来时，就是为了解放主线程。因为，浏览器中的 `JavaScript` 都是运行在单一个线程上，随着web业务变得越来越复杂，js中耗时间、耗资源的运算过程则会导致各种程度的性能问题。 而Web Worker由于独立于主线程，则可以将一些复杂的逻辑交由它来去做，完成后再通过 `postMessage` 的方法告诉主线程。 `Service Worker` 则是 `Web Worker` 的升级版本，相较于后者，前者拥有了持久离线缓存的能力。

`Service Workers` 本质上充当 `Web` 应用程序、浏览器与网络（可用时）之间的代理服务器。这个 `API` 旨在创建有效的离线体验，它会拦截网络请求并根据网络是否可用来采取适当的动作、更新来自服务器的的资源。它还提供入口以推送通知和访问后台同步 `API` 。

`Service Worker` 运行在 `Worker` 上下文，因此它不能访问 DOM。相对于驱动应用的主 `JavaScript` 线程，它运行在其他线程中，所以不会造成阻塞。它设计为完全异步，同步 `API`（如`XHR`和`localStorage`）不能在 `Service Worker` 中使用。

> `Service Worker`下文简称`SW`
>
> 上文是较为科学的解释，对我来说他的用处只有一个加速博客

# 前言

因为作者看到好多人的博客都用上了SW。 

而且作者~~万年没更新了~~（~~其实是因为没时间~~）

所以准备~~水~~一篇文章。

本文应该只需要懂js基础的小白即可看懂

但建议配合MDN食用

{% link MDN,https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API %}

本人不保证本文没有任何错误，
本文旨在教学/科普那想搞sw的人

本文是根据个人理解所写，不保证完全正确

# 正文

## SW的组成(状态)

> 出于安全考量，Service workers 只能由 HTTPS 承载，毕竟修改网络请求的能力暴露给中间人攻击会非常危险。
> 
> 但在本地的 `localhost` 和 `127.0.0.1` 是可以使用的（为了方便本地调试）

SW一共有很多种状态，但我们只需要知道其中4个（其他的基本上用不到）

1. install 安装

2. waiting 等待（等待上一个SW停止工作）（我们可以直接使用 `self.skipWaiting()` 来跳过）

3. activate 激活（首次安装还需要执行 `self.clients.claim()` 来立即管理当前页面（或者你安装的时候直接刷新也能达到此目的））

4. fetch (额，这玩意我也不知道叫啥，大概可以算是请求)

### 监听SW状态

我们将会在我们手搓的sw中使用 `addEventListener()` （事件监听器）方法来监听SW的状态

> 注意:
> 在SW中可以用 `this` 来表示这个SW
>
> 在SW中食用的事件监听器是属于异步的，建议直接使用`async function`

然后就可以有如下操作

```js
// 注：async () => {} 等同于 async function () {}
self.addEventListener('install', async () => {
    console.log('[SW] 注册成功!');
    console.log('[SW] 跳过等待!');
    // 跳过等待
    // skipWaiting 停止当前的service work 运行最新的serviceworker
    // waitUntil skipWaiting返回的是promise 等primise执行完后 在进行下一个生命周期函数
    // 这里要注意 self.skipWaiting() 算是个异步函数
    // 如果这是个同步函数你可能需要用 event.waitUntil() 把他包裹
    // 就像这样 event.waitUntil(self.skipWaiting())
    await self.skipWaiting();
});

self.addEventListener('activate', async () => {
    // console.log('[SW] 跳过等待!')
    // await self.skipWaiting();
    console.log('[SW] 激活成功!')
    // 立即管理页面
    await self.clients.claim();
    console.log('[SW] 立即管理请求!')
});
```

> 下面的捕获请求也需要用到上面的知识

## 捕获请求

在学会捕获请求之前

你还需要知道一个新的东西

`fetch()` 方法

这玩意的功能就类似于 `XHR` ( `XmlHTTPRequest` )

> 值得一提的是使用 `Fetch` API 发送请求是会存在跨域问题的，一旦被跨域拦截，那么就上面都没有返回，会导致页面显示不了请求的内容(例如图片被跨域拦截了)，而 img、script 标签它们是不会发生跨域请求问题的。

这玩意的MDN如下（虽然没必要看，因为搞sw不用管它的参数，基本上）

{% link fetchMDN,https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API %}

随便的学习了一波Fetch之后，我们就可以开始最激动人心的捕获请求环节

根据上上面的文章我们可以知道 `SW` 还有个 `Fetch` 状态

然后就可以有如下操作

> 注: 
> 
> `event.respondWith()`: 给浏览器一个响应，因为我们已经使用`Fetch` API替浏览器发送了请求，并且得到了结果并且返回，那么自然是要返回给浏览器啦
>
> 当捕获的请求没有通过这个方法返回数据，浏览器就会假装sw不存在，使用默认的获取方法
> 而且当返回的数据不正确(比如发生跨域)的时候浏览器也默认跳过

```js
// 捕获请求
self.addEventListener('fetch', async (event) => {
    const request = handleRequest(event.request);
    // 如果有返回，就返回请求
    // 如果没有返回就什么也不做
    if (request) {
        event.respondWith(request);
    };
});
```

## 篡改请求

上面我们都可以使用`Fetch` API替浏览器发送请求了，那是不是可以篡改呢？

```js
// 处理请求
function handleRequest(req) {
  // 仅仅只是举个例子，更多奇妙的用法等待你去探索
  const str = 'https://cdn.jsdelivr.net/npm/xhr-ajax/dist/'
  const url = req.url.replace(str + 'ajax.js', str + 'ajax.min.js')
  return fetch(url)
}
```

如上代码，我们就可以将 ajax 请求的第三方库 js 文件请求变为压缩后的请求，并返回给浏览器(篡改成功)

这边还有个前端资源并发的列子
也就是最重要的jsd并发竞速

```js
// 发送所有请求
function fetchAny(urls) {
    // 中断一个或多个请求
    // 其实是获取当前方法发起的fetch请求
    // 然后在下文打断
    const controller = new AbortController()
    const signal = controller.signal

    // 遍历将所有的请求地址转换为promise
    const PromiseAll = urls.map((url) => {
        // Promise的构造函数接收两个参数：resolve和reject（可以省略）。
        // 其中resolve是用来标记代码执行成功的，用法为resolve(args)，
        // 传进去的参数我们后面再说。相反，reject就是用来标记代码执行错误，用法为reject(args)。
        return new Promise((resolve, reject) => {
            fetch(url, { signal })
                // 返回响应
                .then(progress)
                // 检查请求是否成功
                .then((res) => {
                    // 克隆请求
                    const r = res.clone()
                    if (r.status !== 200) reject(null)
                    controller.abort() // 中断
                    // 返回请求
                    resolve(r)
                })
                .catch(() => reject(null));
        })
    })

    // 判断浏览器是否支持 Promise.any
    // 如果不支持就执行上面的方法
    // 虽然给我砍掉了
    // if (!Promise.any) createPromiseAny()

    // 谁先返回"成功状态"则返回谁的内容，如果都返回"失败状态"则返回null
    return Promise.any(PromiseAll)
        .then((res) => res)
        .catch(() => null);
};
```

然后在手搓一点点的匹配代码
然后你就成功的搞出sw了

以下代码不能直接复制运行
因为没配置
大概能实现cw的功能
但没缓存功能

```js
// 处理请求
function handleRequest(req) {
    // 请求url的数组
    const urls = [];
    const urlStr = req.url;
    // let urlObj = new URL(urlStr)

    // 劫持请求
    if (configs['redirect']) {
        for (let redirect of configs['redirect']) {
            if (redirect['rule'].test(urlStr)) {
                const replaceurl = urlStr.replace(redirect['rule'], redirect['repalce'])
                console.debug(`[SW] 请求 ${urlStr} 匹配到劫持规则！ URL被替换成 ${replaceurl}`)
                return fetchOne(replaceurl)
            }
        };
    };

    // 匹配请求
    if (configs['cdn']) {
        for (let cdn of configs['cdn']) {
            // 正则匹配url
            if (cdn['rule'].test(urlStr)) {
                let rule_search = cdn['search'] || cdn['rule']; // 当search字段不存在时设置默认值
                if (rule_search == '_') {
                    // 当为语法糖时重新赋值为rule
                    rule_search = cdn['rule'];
                };
                // 遍历替换
                for (let search_replace of cdn['replace']) {
                    let push_url_str
                    if (search_replace == '_') {
                        // 当为语法糖时重新赋值
                        push_url_str = urlStr;
                    } else {
                        push_url_str = urlStr.replace(rule_search, search_replace)
                    };
                    urls.push(push_url_str);
                };
            };
        };
    } else {
        console.warn('[SW] 警告: 配置未包含cdn配置项!');
    };

    // 如果上方 cdn 遍历 匹配到 cdn 则直接统一发送请求(不会往下执行了)
    if (urls.length) return fetchAny(urls)

    console.debug(`[SW] 请求 ${urlStr} 没有匹配到任何规则，跳过此次请求。`);

    // 让sw不拦截请求, 有没有无所谓。我习惯性加上
    return null;
};
```

然后大概就可以手搓出个大概这样的sw

注意: 本代码不可以直接运行
需要搭配配置

```js
//安装进程
// 在sw中可以使用this或是self表示自身
self.addEventListener('install', async () => {
    console.log('[SW] 注册成功!');
    console.log('[SW] 跳过等待!');
    // 跳过等待
    // skipWaiting 停止当前的service work 运行最新的serviceworker
    // waitUntil skipWaiting返回的是promise 等primise执行完后 在进行下一个生命周期函数
    await self.skipWaiting();
});

self.addEventListener('activate', async () => {
    // console.log('[SW] 跳过等待!')
    // await self.skipWaiting();
    console.log('[SW] 激活成功!')
    // 立即管理页面
    await self.clients.claim();
    console.log('[SW] 立即管理请求!')
});


// 捕获请求
self.addEventListener('fetch', async (event) => {
    const request = handleRequest(event.request);
    // 如果有返回，就返回请求
    // 如果没有返回就什么也不做
    if (request) {
        event.respondWith(request);
    };
});

// 返回响应
async function progress(res) {
    return new Response(await res.arrayBuffer(), {
        status: res.status,
        headers: res.headers
    })
}

// 处理请求
function handleRequest(req) {
    // 请求url的数组
    const urls = [];
    const urlStr = req.url;
    // let urlObj = new URL(urlStr)

    // 劫持请求
    if (configs['redirect']) {
        for (let redirect of configs['redirect']) {
            if (redirect['rule'].test(urlStr)) {
                const replaceurl = urlStr.replace(redirect['rule'], redirect['repalce'])
                console.debug(`[SW] 请求 ${urlStr} 匹配到劫持规则！ URL被替换成 ${replaceurl}`)
                return fetchOne(replaceurl)
            }
        };
    };

    // 匹配请求
    if (configs['cdn']) {
        for (let cdn of configs['cdn']) {
            // 正则匹配url
            if (cdn['rule'].test(urlStr)) {
                let rule_search = cdn['search'] || cdn['rule']; // 当search字段不存在时设置默认值
                if (rule_search == '_') {
                    // 当为语法糖时重新赋值为rule
                    rule_search = cdn['rule'];
                };
                // 遍历替换
                for (let search_replace of cdn['replace']) {
                    let push_url_str
                    if (search_replace == '_') {
                        // 当为语法糖时重新赋值
                        push_url_str = urlStr;
                    } else {
                        push_url_str = urlStr.replace(rule_search, search_replace)
                    };
                    urls.push(push_url_str);
                };
            };
        };
    } else {
        console.warn('[SW] 警告: 配置未包含cdn配置项!');
    };

    // 如果上方 cdn 遍历 匹配到 cdn 则直接统一发送请求(不会往下执行了)
    if (urls.length) return fetchAny(urls)

    console.debug(`[SW] 请求 ${urlStr} 没有匹配到任何规则，跳过此次请求。`);

    // 让sw不拦截请求, 有没有无所谓。
    return null;
};


// 发送所有请求
function fetchAny(urls) {
    // 中断一个或多个请求
    // 其实是获取当前方法发起的fetch请求
    // 然后在下文打断
    const controller = new AbortController()
    const signal = controller.signal

    // 遍历将所有的请求地址转换为promise
    const PromiseAll = urls.map((url) => {
        // Promise的构造函数接收两个参数：resolve和reject（可以省略）。
        // 其中resolve是用来标记代码执行成功的，用法为resolve(args)，
        // 传进去的参数我们后面再说。相反，reject就是用来标记代码执行错误，用法为reject(args)。
        return new Promise((resolve, reject) => {
            fetch(url, { signal })
                // 返回响应
                .then(progress)
                // 检查请求是否成功
                .then((res) => {
                    // 克隆请求
                    const r = res.clone()
                    if (r.status !== 200) reject(null)
                    controller.abort() // 中断
                    // 返回请求
                    resolve(r)
                })
                .catch(() => reject(null));
        })
    })

    // 判断浏览器是否支持 Promise.any
    // 如果不支持就执行上面的方法
    // if (!Promise.any) createPromiseAny()

    // 谁先返回"成功状态"则返回谁的内容，如果都返回"失败状态"则返回null
    return Promise.any(PromiseAll)
        .then((res) => res)
        .catch(() => null);
};

function fetchOne(url){
    return fetch(url)
        .then(progress)
        .then((res) => {
            // 克隆请求
            const r = res.clone()
            // 检查请求是否成功
            if (r.status !== 200) return null
            // 返回请求
            return r
        })
}
```

## 缓存请求

派蒙: 前面的区域以后再来探索把~~

正在施工中......
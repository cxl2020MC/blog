//安装
// 在sw中可以使用this或是self表示自身
self.addEventListener('install', async () => {
    console.log('[SW] 开始安装!');
    // 跳过等待
    await self.skipWaiting();
    console.log('[SW] 安装成功!');
});

self.addEventListener('activate', async () => {
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

    // 匹配请求
    // 遍历配置
    全局配置.map((config) => {
        // 正则匹配url
        if (config['rule'].test(urlStr)) {
            config['transform_rules'].map((transform_rule) => {
                if (transform_rule['search'] == '_') {
                    transform_rule['search'] = config['rule'];
                };
                transform_rule['replace'].map((replace) => {
                // 替换url
                    if (replace == '_') {
                        replace = urlStr;
                    };
                    // 把替换成的url加入进数组
                    urls.push(urlStr.replace(transform_rule['search'], replace));
                });
            });
        };
    });

    // 如果上方 cdn 遍历 匹配到 cdn 则直接统一发送请求(不会往下执行了)
    if (urls.length) return fetchAny(urls)

    console.debug(`[SW] 请求 ${urlStr} 没有匹配到任何规则，跳过此次请求。`);

    // 让sw不拦截请求, 有没有无所谓。
    return null;
};


// 发送所有请求
function fetchAny(urls) {
    // 中断一个或多个请求
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
                    const r = res.clone()
                    if (r.status !== 200) reject(null)
                    controller.abort() // 中断
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

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
date: '2022-09-01 14:03:39'
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
- 插件
title: Hexo Dplayer播放器自定义标签外挂
toc: null
toc_number: null
toc_style_simple: null
top_img: null
updated: '2022-09-14 16:19:48'
wrong_hash_message: null
wrong_pass_message: null
---
# 前言

作者今天看到了糖果屋的一篇文章 [DIY外挂标签的简单写法与应用](https://akilar.top/posts/e2bf861f/) 就突发奇想的想给Dplayer写个标签外挂(~~其实是想以后的时候偷懒~~)

# 教程

在博客根目录下新建`scripts`文件夹(已建立的不用重复建立)

新建一个随意名称的文件（后缀要是`.js`）比如`diytag.js`

填入

```js
//参数处理函数
function dplayer (args, content) {
    // args = args.join(' ').split(',')
    // const div_id = args[0]
    // const div_id = args[1]?args[1]:p0
    const div_id = args
    html = `<div id="${div_id}">播放器加载中......</div>
<script>
//立即执行函数
(
    function () {
        import('https://jsd.cxl2020mc.top/npm/dplayer/+esm')
            .then((module) => {
                // Do something with the module.
                // const ${div_id} = new DPlayer({
                const Dplayer = module.default
                const ${div_id} = new Dplayer({
                    container: document.getElementById('${div_id}'),
                    ${content}
                });
            });
    }
)();
</script>`
    return html
}
//标签注册函数
hexo.extend.tag.register('dplayer', dplayer, { ends: true });
```

然后你就可以在文章里用标签外挂的方法使用deplayer了
（记得先在head引入Dplayer）

```md
{% dplayer dplayer %}
video: {
    url: 'https://file.cxl2020mc.top/api/raw/?path=/mc1.mp4',
}
{% enddplayer %}
```

# 参数

参数`dp`表示播放器对象名称
参数`dplayer`表示播放器的容器id
所有参数在一个文章中不能出现2个相同的

# 演示

```md
{% dplayer dplayer %}
video: {
    url: 'https://lc-gluttony.s3.amazonaws.com/eABALL5rKFsL/n66RHPuNklJeNRlEgYOPdkCoO2MEJ7HR/fd431739ff26ceeb3010ac561d68446b_345688670889091949.mp4',
}
{% enddplayer %}
```

{% dplayer dplayer %}
video: {
    url: 'https://lc-gluttony.s3.amazonaws.com/eABALL5rKFsL/n66RHPuNklJeNRlEgYOPdkCoO2MEJ7HR/fd431739ff26ceeb3010ac561d68446b_345688670889091949.mp4',
}
{% enddplayer %}

# 高级演示

> 支持切换清晰度（不过给我用成切换视频节点了），默认第1个

```md
{% dplayer dplayer2 %}
video: {
    quality: [
        {
            name: 'od',
            url: 'https://file.cxl2020mc.top/api/raw/?path=/video/%E5%8E%9F%E7%A5%9E%E5%AE%98%E6%96%B9%E5%AE%A3%E4%BC%A0%E7%89%87.mp4',
        },
        {
            name: 's3',
            url: 'https://lc-gluttony.s3.amazonaws.com/eABALL5rKFsL/n66RHPuNklJeNRlEgYOPdkCoO2MEJ7HR/fd431739ff26ceeb3010ac561d68446b_345688670889091949.mp4',
        },
    ],
    defaultQuality: 0,
}
{% enddplayer %}
```

{% dplayer dplayer2 %}
video: {
    quality: [
        {
            name: 'od',
            url: 'https://file.cxl2020mc.top/api/raw/?path=/video/%E5%8E%9F%E7%A5%9E%E5%AE%98%E6%96%B9%E5%AE%A3%E4%BC%A0%E7%89%87.mp4',
        },
        {
            name: 's3',
            url: 'https://lc-gluttony.s3.amazonaws.com/eABALL5rKFsL/n66RHPuNklJeNRlEgYOPdkCoO2MEJ7HR/fd431739ff26ceeb3010ac561d68446b_345688670889091949.mp4',
        },
    ],
    defaultQuality: 0,
}
{% enddplayer %}
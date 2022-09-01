---
title: Hexo Dplayer播放器自定义标签外挂
date: 2022-09-01 14:03:39
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

# 前言
作者今天看到了糖果屋的一篇文章 [DIY外挂标签的简单写法与应用](https://akilar.top/posts/e2bf861f/) 就突发奇想的想给Dplayer写个标签外挂(~~其实是想以后的时候偷懒~~)

# 教程

在博客根目录下新建`scripts`文件夹(已建立的不用重复建立)

新建一个随意名称的文件（后缀要是`.js`）比如`diytag.js`

填入
```js
//参数处理函数
function dplayer (args, content) {
    args = args.join(' ').split(',')
    let p0 = args[0]
    let p1 = args[1]?args[1]:p0
    html = `<div id="${p1}"></div>
<script>
    const ${p0} = new DPlayer({
        container: document.getElementById('${p1}'),
${content}
    });
</script>`
    return html
}
//标签注册函数
hexo.extend.tag.register('dplayer', dplayer, { ends: true });
```

然后你就可以在文章里用标签外挂的方法使用deplayer了
（记得先在head引入Dplayer）
```md
{% dplayer dp,dplayer %}
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
{% dplayer dp,dplayer %}
video: {
    url: 'https://lc-gluttony.s3.amazonaws.com/eABALL5rKFsL/n66RHPuNklJeNRlEgYOPdkCoO2MEJ7HR/fd431739ff26ceeb3010ac561d68446b_345688670889091949.mp4',
}
{% enddplayer %}
```

{% dplayer dp,dplayer %}
video: {
    url: 'https://lc-gluttony.s3.amazonaws.com/eABALL5rKFsL/n66RHPuNklJeNRlEgYOPdkCoO2MEJ7HR/fd431739ff26ceeb3010ac561d68446b_345688670889091949.mp4',
}
{% enddplayer %}

# 高级演示

```md
{% dplayer dp2,dplayer2 %}
video: {
    quality: [
        {
            name: 'cos',
            url: 'https://cxl2020mc-1304820025.file.myqcloud.com/video/fd431739ff26ceeb3010ac561d68446b_345688670889091949.mp4',
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

{% dplayer dp2,dplayer2 %}
video: {
    quality: [
        {
            name: 'cos',
            url: 'https://cxl2020mc-1304820025.file.myqcloud.com/video/fd431739ff26ceeb3010ac561d68446b_345688670889091949.mp4',
        },
        {
            name: 's3',
            url: 'https://lc-gluttony.s3.amazonaws.com/eABALL5rKFsL/n66RHPuNklJeNRlEgYOPdkCoO2MEJ7HR/fd431739ff26ceeb3010ac561d68446b_345688670889091949.mp4',
        },
    ],
    defaultQuality: 0,
}
{% enddplayer %}
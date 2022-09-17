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
date: '2022-09-13 17:40:10'
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
- Twikoo
title: Hexo-Butterfly Twikoo评论区美化
toc: null
toc_number: null
toc_style_simple: null
top_img: null
updated: '2022-09-14 16:21:15'
wrong_hash_message: null
wrong_pass_message: null
---
# 前言

前几天，在给`AG bot`（作者的机器人）写原神功能的截图网页，因为作者不会css，所以开着教程网页，一边请教别人一边写网页。

直到昨天，我终于写完了，虽然不是特别好看。但好歹是自己写的，写完之后，感觉我这个小白也要变成小黑了。

今天刚好看见twikoo丑丑的，就想给他来个Butterfly风格的魔改（美化）

没想到不仅成功了还挺好看

> 部分配色和代码，抄自heo的博客
> 样式只支持Hexo-Butterfly主题

# CSS代码

只需要添加到外挂css里

魔改玩家都清楚咋添加外挂css的

```css
/* 声名部分变量 */
:root {
  --cxl2020mc-radius: 7px;
  --cxl2020mc-card-border-width: 1px;
}

/* 浅色模式颜色 */
[data-theme=light] {
  --cxl2020mc-border-color: #e3e8f7;
  --cxl2020mc-card-bg: #fff;
  --cxl2020mc-card-border: #e3e8f7;
  --style-border-always: 1px solid var(--cxl2020mc-card-border);
}

/* 深色模式颜色 */
[data-theme=dark] {
  --cxl2020mc-border-color: #42444a;
  --cxl2020mc-card-bg: #1d1b26;
  --cxl2020mc-card-border: #42444a;
  --style-border-always: 1px solid var(--cxl2020mc-card-border);
}

/* 评论区评论大框（包括回复） */
.twikoo .tk-comments-container>.tk-comment {
  /* 内边距 */
  padding: 1rem;
  /* 圆角 */
  border-radius: var(--cxl2020mc-radius);
  /* 背景颜色 */
  background: var(--cxl2020mc-card-bg);
  /* 变动动画时长 */
  transition: .3s;
}

/* 浅色模式评论区评论大框（包括回复） */
[data-theme=light] .twikoo .tk-comments-container>.tk-comment {
  /* 阴影（浅色模式突出层次感） */
  box-shadow: var(--card-box-shadow);
}

/* 浅色模式评论区评论大框阴影悬浮加深 */
[data-theme=light] .twikoo .tk-comments-container>.tk-comment:hover {
  /* 阴影（浅色模式突出层次感） */
  box-shadow: var(--card-hover-box-shadow);
}

/* 黑暗模式评论区评论大框 */
[data-theme=dark] .twikoo .tk-comments-container>.tk-comment {
  /* 边框样式 */
  border-style: solid;
  /* 边框宽度 */
  border-width: var(--cxl2020mc-card-border-width);
  /* 边框颜色 */
  border-color: var(--cxl2020mc-card-border);
}

/* 设备信息 */
.twikoo .tk-extra {
  /* 圆角 */
  border-radius: var(--cxl2020mc-radius);
  /* 背景颜色 */
  background: var(--cxl2020mc-card-bg);
  /* 内边距 */
  padding: 0.4rem;
  /* 底边距 */
  margin-bottom: 1rem;
  /* 变动动画时长 */
  transition: .3s;
}

/* 浅色模式设备信息 */
[data-theme=light] .twikoo .tk-extra {
  /* 阴影（浅色模式突出层次感） */
  box-shadow: var(--card-box-shadow);
}

/* 浅色模式设备信息阴影悬浮加深 */
[data-theme=light] .twikoo .tk-extra:hover {
  /* 阴影（浅色模式突出层次感） */
  box-shadow: var(--card-hover-box-shadow);
}

/* 黑暗模式设备信息 */
[data-theme=dark] .twikoo .tk-extra {
  /* 边框样式 */
  border-style: solid;
  /* 边框宽度 */
  border-width: var(--cxl2020mc-card-border-width);
  /* 边框颜色 */
  border-color: var(--cxl2020mc-card-border);
}

/* 加载更多按钮 */
.twikoo .tk-expand {
  /* 圆角 */
  border-radius: var(--cxl2020mc-radius);
}

/* 浅色模式加载更多按钮 */
[data-theme=light] .twikoo .tk-expand {
  /* 阴影 */
  box-shadow: var(--card-hover-box-shadow);
}

/* 加载更多按钮（鼠标悬浮时） */
.twikoo .tk-expand:hover {

}
```

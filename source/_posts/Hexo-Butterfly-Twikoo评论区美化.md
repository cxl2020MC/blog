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
title: Hexo-Butterfly Twikoo评论区美化
toc: null
toc_number: null
toc_style_simple: null
top_img: null
updated: '2022-09-13 17:42:03'
wrong_hash_message: null
wrong_pass_message: null
---
# 前言

前几天，在给`AG bot`（作者的机器人）写原神功能的截图网页，因为作者不会css，所以开着教程网页，一边请教别人一边写网页。

直到昨天，我终于写完了，虽然不是特别好看。但好歹是自己写的，写完之后，感觉我这个小白也要变成小黑了。

今天刚好看见twikoo丑丑的，就想给他来个Butterfly风格的魔改（美化）

没想到不仅成功了还挺好看

> 部分配色和代码，抄自heo的博客

# CSS代码

只需要添加到外挂css里

魔改玩家都清楚咋添加外挂css的

```css
/* 声名部分变量 */
:root {
  --cxl2020mc-radius: 7px;
}

/* 浅色模式颜色 */
[data-theme=light] {
  --cxl2020mc-border-color: #e3e8f7;
  --cxl2020mc-card-bg: #fff;
}

/* 深色模式颜色 */
[data-theme=dark] {
  --cxl2020mc-border-color: #42444a;
  --cxl2020mc-card-bg: #1d1b26;
}

/* 评论区评论大框（包括回复） */
.twikoo .tk-comments-container>.tk-comment {
  /* 内边距 */
  padding: 1rem;
  /* 圆角 */
  border-radius: var(--cxl2020mc-radius);
  /* 阴影（浅色模式突出层次感） */
  box-shadow: var(--card-hover-box-shadow);
  /* 背景颜色 */
  background: var(--cxl2020mc-card-bg);
  /* 变动动画时长 */
  transition: .3s;
}

/* 加载更多按钮 */
.twikoo .tk-expand {
  /* 圆角 */
  border-radius: var(--cxl2020mc-radius);
}

/* 加载更多按钮（鼠标悬浮时） */
.twikoo .tk-expand:hover {
  /* 背景颜色 */
  background: var(--btn-hover-color) !important;
  /* 文字颜色 */
  color: var(--btn-color) !important;
}
```

---
title: python一次性更新所有库
date: 2022-05-23 19:39:21
cover: https://cxl2020mc-1304820025.file.myqcloud.com/file/20210619144236.jpeg
tags: python
updated:
categories:
keywords:
description:
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
---

![](https://cxl2020mc-1304820025.file.myqcloud.com/file/20210619144249.jpeg)

# 当python用久了，就会有一大堆有更新的库

## 检查更新命令

```
pip list --outdated
```

像我这样
![](https://cxl2020mc-1304820025.file.myqcloud.com/file/20210619142223.png)
![](https://cxl2020mc-1304820025.file.myqcloud.com/file/20210619142316.png)
![](https://cxl2020mc-1304820025.file.myqcloud.com/file/20210619142345.png)

pip的功能只能一个一个更新

```
pip install -U 模块名
```

## 开始

先使用清华源（使用管理员身份运行）
[![](https://cxl2020mc-1304820025.file.myqcloud.com/file/20210619144441.png)](https://mirrors.tuna.tsinghua.edu.cn/help/pypi/)

```
:: 更新pip
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pip -U
:: 设为默认
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

### 然后安装我们的主角：pip-review

安装pip-review。

```
pip install pip-review
```

#### 更新命令：(因为要获取所有更新内容，启动要一点时间)


{% tabs test2 %}

<!-- tab 第一个Tab -->

**tab名字为第一个Tab**

<!-- endtab -->

<!-- tab @fab fa-apple-pay -->

**只有图标 没有Tab名字**

<!-- endtab -->

{% endtabs %}



pip-review --local --interactive

#### 或者使用一键命令(就不用继续往下看了)

```
pip-review --auto
```

#### 使用第1种方法的要看

运行（建议使用管理员身份运行）
![](https://cxl2020mc-1304820025.file.myqcloud.com/file/20210619143505.png)
输入：A更新所有库
![](https://cxl2020mc-1304820025.file.myqcloud.com/file/20210619143610.png)
![](https://cxl2020mc-1304820025.file.myqcloud.com/file/20210619143729.png)
剩下的只有耐心等待
![](https://cxl2020mc-1304820025.file.myqcloud.com/file/gq.gif)


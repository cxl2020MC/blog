---
abbrlink: ''
abstract: null
aplayer: null
aside: null
categories:
- - Hexo
comments: null
copyright: null
copyright_author: null
copyright_author_href: null
copyright_info: null
copyright_url: null
cover: null
date: '2022-09-07 08:05:13'
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
- 插件
title: 更新Hexo及插件版本
toc: null
toc_number: null
toc_style_simple: null
top_img: null
updated: '2022-09-09 17:18:58'
wrong_hash_message: null
wrong_pass_message: null
---
# 前言

因为作者看不惯Hexo生成时的警告，然后听人说，更新到最新版本的Hexo能够解决此报错

# 准备

## 备份

进行重大改动的时候要备份的道理，应该都懂

我就不多说了。

## 安装升级所需要的NPM包

### 清理NPM缓存

```powershell
npm cache clean -f
```

### 安装版本检测和升级工具（全局安装）

```powershell
npm install -g npm-check
npm install -g npm-upgrade
```

# 更新全局软件包（比如Hexo）

## 检查全局软件包更新

> 更新有2种方法，方法一比较靠谱， 方法二比较简单
>
> 使用方法2就不用继续更新全局软件包了，但需要懂一点点英文

### 方法一

```powershell
npm-check -g
```

#### 全局更新软件包

```
npm update -g
```

#### 重新安装Hexo（更新）

```
npm install --global hexo
```

### 方法二

使用交互式界面进行更新

需要懂一点点英文。

通过上下键可以移动光标，使用空格键可以选择需要处理的包，回车直接进行处理。

```powershell
npm-check -g -u
```

# 更新Hexo插件

进入博客根目录

刚刚的更新操作也可以在博客根目录进行

更新插件同样有2种方法

方法的不同点和刚刚一样

## 方法一

### 检查更新

```
npm-check
```

### 更新package.json，一直回车即可

```powershell
npm-upgrade
```

### 更新Hexo插件

```
npm update --save
```

### 修复依赖问题(没出现依赖冲突的话不执行也可以)

```powershell
npm audix
```

## 方法二

### 更新插件

通过上下键可以移动光标，使用空格键可以选择需要处理的包，回车直接进行处理。

```powershell
npm-check -u
```

### 更新package.json，一直回车即可

```
npm-upgrade
```

### 修复依赖冲突（如果没有的话可以不执行）

```powershell
npm audix
```

然后`npm i`一下就好了

---
title: markdown语法
date: 
cover: https://cxl2020mc-1304820025.file.myqcloud.com/file/markdown.jpg
tags:
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
copyright_author _href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
---


## 关于Markdown（来自百度百科）

Markdown是一种轻量级标记语言，创始人为约翰·格鲁伯（英语：John Gruber）。 它允许人们使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML（或者HTML）文档。这种语言吸收了很多在电子邮件中已有的纯文本标记的特性。
由于Markdown的轻量化、易读易写特性，并且对于图片，图表、数学式都有支持，目前许多网站都广泛使用Markdown来撰写帮助文档或是用于论坛上发表消息。 如GitHub、Reddit、Diaspora、Stack Exchange、OpenStreetMap 、SourceForge、简书等，甚至还能被使用来撰写电子书。

## 编辑器推荐

[Typora](https://www.typora.io/)
[Typora中国站](https://typoraio.cn/)
![](https://cxl2020mc-1304820025.file.myqcloud.com/file/typora_icon.png)
[下载地址](https://www.typora.io/#download)
[中国站下载地址](https://typoraio.cn/)
![](https://cxl2020mc-1304820025.file.myqcloud.com/file/typora.png)
![](https://cxl2020mc-1304820025.file.myqcloud.com/file/202205081120116.gif)

## 语法

### 标题（最多6级）

注意：#和标题要间隔一空格

```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

### 文字样式

```
*斜体*
**加粗**
***斜体加粗***
~~删除线~~
==高亮==
```

*斜体*
**加粗**
***斜体加粗***
~~删除线~~
==高亮==

### 引用

```
>这是引用
>>这是引用
>>>>>>>>>>这还是引用
```

效果

> 这是引用
> 
> > 这是引用
> > 
> > > > > > > > > > 这还是引用

### 分割线

三个或者三个以上的 - 或者 * 都可以。

```
---
----
***
*****
```

---

---

---

---

### 插入图片和链接

#### 图片

```
![图片alt](图片网址URL ''图片title'')

图片alt就是显示在图片下面的文字，相当于对图片内容的解释。但是本博客没有，可加可不加
图片title是图片的标题，当鼠标移到图片上时显示的内容。title可加可不加
```

示例:

```
![xxx](https://cxl2020mc-1304820025.file.myqcloud.com/file/202205081115370.jpeg "一张图片")
注意图片链接后面有空格
```

![xxx](https://cxl2020mc-1304820025.file.myqcloud.com/file/202205081115370.jpeg "一张图片")

#### 链接

```
[链接上的文字](网址URL)
```

示例：

```
[欢迎来到陈鑫磊的博客━(*｀∀´*)ノ亻!](https://cxl2020mc.github.io)
```

[欢迎来到陈鑫磊的博客━(*｀∀´*)ノ亻!](https://cxl2020mc.github.io)
但是Markdown有个缺点就是Markdown原始跳转链接不会新建标签页
所以我们要使用Html解决。
示例：

```
<a href="https://cxl2020mc.github.io" target="_blank">欢迎来到陈鑫磊的博客━(*｀∀´*)ノ亻!</a>
```

效果：<a href="https://cxl2020mc.github.io" target="_blank">欢迎来到陈鑫磊的博客━(*｀∀´*)ノ亻!</a>

### 列表

列表分无序列表,有序列表和待办列表

#### 无序列表

无序列表用 - + * 任何一种都可以

```
- 列表1
+ 列表2
* 列表3

注意：- + * 跟内容之间都要有一个空格
```

效果如下

- 列表1

+ 列表2

* 列表3
  如果你多用了几个空格

```
-     列表1
+     列表2
*     列表3
```

效果如下

- 列表1
  
  + 列表2
    
    * 列表3
    
    #### 有序列表
    
    数字加点
    
    ```
    1. 列表内容
    2. 列表内容
    3. 列表内容
    
    注意：序号跟内容之间要有空格
    ```
    
    1. 列表内容
    2. 列表内容
    3. 列表内容
       数字是可以打乱的，生成会自动排序
    
    #### 代办列表
    
    ```
    - [ ] 内容
    - [x] 内容
    ```
    
    - [ ] 内容
    - [x] 内容
    
    #### 列表嵌套
    
    上一级和下一级之间敲三个空格即可
    
    ## 表格
    
    ```
    表头|表头|表头
    |---|:--:|---:|
    |内容|内容|内容|
    |内容|内容|内容|
    
    第二行分割表头和内容。
    - 有一个就行，为了看着舒服，多加了几个。
    文字默认居左。
    -两边加：表示文字居中
    -右边加：表示文字居右
    ```
    
    示例：
    
    ```
    博客网站
    |名称|网址|xxx|
    |--|:--:|--:|
    |陈鑫磊的博客|https://cxl2020mc.github.io|xxx|
    |高浩轩|https://hkjyh5.coding-pages.com/|xxx|
    ```
    
    博客网站
    
|名称|网址|xxx|
|:---|:---:|---:|
|陈鑫磊的博客|https://cxl2020mc.github.io|xxx|
| 高浩轩|https://hkjyh5.coding-pages.com|xxx|
    
    ## 代码
    
    ### 单行代码：代码用一个反引号包起来
    
    ```
    `代码内容`
    ```
    
    代码块：代码用三个反引号包起来，且两边的反引号单独占一行
    
    ```
    (```)  注：这里可以在加编程语言如：java
      代码...
      代码...
      代码...
    (```)
    ```
    
    注：为了防止转译，前后三个反引号处加了小括号。
    
    ## 缩略
    
    缩略有2种一种可以使用Markdown，HTML，一种不可以但是支持HTML
    
    ### 可以使用Markdown，HTML
    
    ```
    <details>
    <summary>文字</summary>
    
    内容
    
    </details>
    ```
    
    效果
    
    <details>
    <summary>文字</summary>
    
    内容
    
    </details>
    
    内容
    
    </details>
    
    ### 不可以使用Markdown，支持HTML
    
    ```
    <details>
    <summary>文字</summary>
    <pre>
    <ul>
    
    内容
    
    </ul>
    </pre>
    </details>
    ```
    
    效果
    
    <details>
    <summary>文字</summary>
    <pre>
    <ul>
    
    内容
    
    </ul>
    </pre>
    </details>
  
## 网页编辑器
### Editor.md
[Editor.md](http://editor.md.ipandao.com/)
![](https://cxl2020mc-1304820025.file.myqcloud.com/file/Editor.md.png)

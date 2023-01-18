---
title: Hexo 博客优化——字体分子集加载
date: 2023-01-18 21:25:25
updated:
cover:
tags:
    - ["优化"]
    - ["Butterfly"]
    - ["Python"]
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

## 前言

最近看到越来越多的网站使用字体分段加载（貌似都白嫖的B站）
不过博主找了半天，也是没有找到字体切片的相关文章
所以就手搓了一个......

> 博主也去了解了下字体切片原理，看起来就是把一个字体内的文字打散，分成很多个文件，浏览器需要的时候加载对应文件
> （谷歌字体有篇文章: 貌似写着这样可以减少大约30%的加载大小）

tips: 手搓完成后，我受到了巨大的打击，因为别人告诉我Github上有（不过我去看了下，貌似不全）

## 开始

> 准备材料: `一台PC`， `Python 3.7` 及以上环境(博主是`Python 3.9`)


### 安装依赖

```powershow
pip install fonttools Brotli
```


### 准备运行时环境

然后新建一个文件夹(程序运行时会生成缓存文件)
比如 `font`

然后把要转换的 `TTF` 格式字体复制粘贴进去

新建一个 `.py` 文件，把以下代码丢进去

```python main.py
import os, json
from fontTools.ttLib import TTFont

字体文件名称 = "HarmonyOS_Sans_SC_Regular.ttf"
保存的字体文件名称 = "HarmonyOS_Sans_SC_Regular_" # 会在名称后加上第几个切片并以.woff2结尾
字体切片字数 = 2500 # 多少个字打包成一个文件
css_font_family = "HarmonyOS Sans SC Regular" # css的字体家族
css_font_family_first = 'local("HarmonyOS Sans SC Regular"), local("HarmonyOS Sans SC"), ' # 如果你不知道这是干什么的，请设置为""

print("正在加载字体文件......")
# 打开字体文件
with TTFont(字体文件名称 ) as font:
    # 获取字体文件的数据
    font_data = font.getGlyphOrder()
print("加载字体文件成功")

# 写入字体数据，方便调试
with open("data.json", "w", encoding="utf-8") as f:
    writer_json = json.dumps(font_data, ensure_ascii=False, indent=2)
    f.write(writer_json)

print("正在生成数据......")
# 字体所有文字
font_unicodes = []

# 遍历字体数据
for i in font_data:
    # 判断数据开头是不是uni
    if i.startswith("uni"):
        # 插入数据
        font_unicodes.append(i)

# 写入字体数据，方便调试
with open("data1.json", "w", encoding="utf-8") as f:
    writer_json = json.dumps(font_unicodes, ensure_ascii=False, indent=2)
    f.write(writer_json)
    writer_json = []

# 切割列表
font_unicodes = [font_unicodes[i:i + 字体切片字数] for i in range(0, len(font_unicodes), 字体切片字数)]

# 写入字体数据，方便调试
with open("data2.json", "w", encoding="utf-8") as f:
    writer_json = json.dumps(font_unicodes, ensure_ascii=False, indent=2)
    f.write(writer_json)
    writer_json = []

# 取刚刚生成的数据，列表中的列表的范围
unicodes = []
for i in font_unicodes:
    start_key = i[0].replace("uni", "")
    end_key = i[-1].replace("uni", "")
    unicodes.append(f"U+{start_key}-{end_key}")

with open("data3.json", "w", encoding="utf-8") as f:
    writer_json = json.dumps(unicodes, ensure_ascii=False, indent=2)
    f.write(writer_json)
    writer_json = []

print("数据生成成功，开始转换！")

列表长度 = len(unicodes)

print(f"列表长度: {列表长度}")

raw_css = ""

for i in range(列表长度):
    当前字符集 = unicodes[i]
    print(f"正在处理字符集 {当前字符集}")

    # if isinstance(当前字符集, list):
    #     print("正在合并当前子集......")
    #     当前字符集 = ','.join(map(str, 当前字符集))
    #     print(f"合并结果： {当前字符集}")

    字体保存目录 = f"./fonts/{保存的字体文件名称}{i}.woff2"
    命令 = f'pyftsubset {字体文件名称} --unicodes="{当前字符集}" --output-file="{字体保存目录}" --flavor="woff2'
    print(f"执行命令: {命令}")
    # U+........
    os.system(命令)

    raw_css = raw_css + f'''
@font-face {{
    font-family: "{css_font_family}";
    font-style: normal;
    /* font-weight: 400; */
    font-display: swap;
    src: {css_font_family_first}url("{字体保存目录}") format("woff2");
    unicode-range: {当前字符集}
}}
''' # css生成模板

raw_css = raw_css + f'''
body {{
    /* 设置字体 */
    font-family: "{css_font_family}", sans-serif !important;
}}
'''

with open("font.css", "w", encoding="utf-8") as f:
    f.write(raw_css)
```

然后在文件开头修改配置，配置干嘛的都注释好了

看到这里想必各位是不是马上准备双击运行了，
但我想说一句还要在文件夹内新建个 `fonts` 文件夹，存放生成的字体文件。

然后就可以愉快的双击运行了，

> （tips: 建议运行时看着，因为程序逻辑问题有时候报错不会退出）

结束后你就会在这个文件夹内找到个 `font.css` 和有一堆字体切片文件的 `fonts` 文件夹

这些东西想必大家都知道是干嘛用的
把 `font.css` 和 `font`文件夹 放在你的cdn里的同一个目录里，
然后主题引入下css
就可以开始游玩了

> tips:
> 字体css建议使用用异步加载

```html
<link rel="stylesheet" href="你的cssURL" media="defer" onload="this.media='all'">
```
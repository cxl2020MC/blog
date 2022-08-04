---
abbrlink: ''
abstract: null
aplayer: null
aside: null
categories:
- hexo
comments: null
copyright: null
copyright_author: null
copyright_author_href: null
copyright_info: null
copyright_url: null
cover: null
date: '2022-08-04 15:32:03'
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
- hexo
- butterfly
title: hexo笔记本
toc: null
toc_number: null
toc_style_simple: null
top_img: null
updated: '2022-08-04 15:32:05'
wrong_hash_message: null
wrong_pass_message: null
---
## 標籤外掛（Tag Plugins）

{% note info %}

標籤外掛是Hexo獨有的功能，並不是標準的Markdown格式。

以下的寫法，只適用於Butterfly主題，用在其它主題上不會有效果，甚至可能會報錯。使用前請留意

{% endnote %}

{% note warning %}

標籤外掛雖然能為主題帶來一些額外的功能和UI方面的強化，但是，標籤外掛也有明顯的限制，使用時請留意。

{% endnote %}

### Note (Bootstrap Callout)

{% tabs note %}

<!-- tab 通用設置 -->

移植於next主題，並進行修改。

修改 `主題配置文件`

```yaml
note:
  # Note tag style values:
  #  - simple    bs-callout old alert style. Default.
  #  - modern    bs-callout new (v2-v3) alert style.
  #  - flat      flat callout style with background, like on Mozilla or StackOverflow.
  #  - disabled  disable all CSS styles import of note tag.
  style: simple
  icons: false
  border_radius: 3
  # Offset lighter of background in % for modern and flat styles (modern: -12 | 12; flat: -18 | 6).
  # Offset also applied to label tag variables. This option can work with disabled note tag.
  light_bg_offset: 0
```

`icons`和`light_bg_offset`只對*方法一*生效

Note 標籤外掛有兩種用法

<!-- endtab -->

<!-- tab 用法 1 -->

```markdown
{% note [class] [no-icon] [style] %}
Any content (support inline tags too.io).
{% endnote %}
```


| 名稱    | 用法                                                                                                |
| --------- | ----------------------------------------------------------------------------------------------------- |
| class   | 【可選】標識，不同的標識有不同的配色<br>（ default / primary / success / info / warning / danger ） |
| no-icon | 【可選】不顯示 icon                                                                                 |
| style   | 【可選】可以覆蓋配置中的 style<br>（simple/modern/flat/disabled）                                   |

> simple

```markdown
{% note simple %}
默認 提示塊標籤
{% endnote %}

{% note default simple %}
default 提示塊標籤
{% endnote %}

{% note primary simple %}
primary 提示塊標籤
{% endnote %}

{% note success simple %}
success 提示塊標籤
{% endnote %}

{% note info simple %}
info 提示塊標籤
{% endnote %}

{% note warning simple %}
warning 提示塊標籤
{% endnote %}

{% note danger simple %}
danger 提示塊標籤
{% endnote %}
```

{% note simple %}
默認 提示塊標籤
{% endnote %}

{% note default simple %}
default 提示塊標籤
{% endnote %}

{% note primary simple %}
primary 提示塊標籤
{% endnote %}

{% note success simple %}
success 提示塊標籤
{% endnote %}

{% note info simple %}
info 提示塊標籤
{% endnote %}

{% note warning simple %}
warning 提示塊標籤
{% endnote %}

{% note danger simple %}
danger 提示塊標籤
{% endnote %}

> modern

```markdown
{% note modern %}
默認 提示塊標籤
{% endnote %}

{% note default modern %}
default 提示塊標籤
{% endnote %}

{% note primary modern %}
primary 提示塊標籤
{% endnote %}

{% note success modern %}
success 提示塊標籤
{% endnote %}

{% note info modern %}
info 提示塊標籤
{% endnote %}

{% note warning modern %}
warning 提示塊標籤
{% endnote %}

{% note danger modern %}
danger 提示塊標籤
{% endnote %}
```

{% note modern %}
默認 提示塊標籤
{% endnote %}

{% note default modern %}
default 提示塊標籤
{% endnote %}

{% note primary modern %}
primary 提示塊標籤
{% endnote %}

{% note success modern %}
success 提示塊標籤
{% endnote %}

{% note info modern %}
info 提示塊標籤
{% endnote %}

{% note warning modern %}
warning 提示塊標籤
{% endnote %}

{% note danger modern %}
danger 提示塊標籤
{% endnote %}

> flat

```markdown
{% note flat %}
默認 提示塊標籤
{% endnote %}

{% note default flat %}
default 提示塊標籤
{% endnote %}

{% note primary flat %}
primary 提示塊標籤
{% endnote %}

{% note success flat %}
success 提示塊標籤
{% endnote %}

{% note info flat %}
info 提示塊標籤
{% endnote %}

{% note warning flat %}
warning 提示塊標籤
{% endnote %}

{% note danger flat %}
danger 提示塊標籤
{% endnote %}
```

{% note flat %}
默認 提示塊標籤
{% endnote %}

{% note default flat %}
default 提示塊標籤
{% endnote %}

{% note primary flat %}
primary 提示塊標籤
{% endnote %}

{% note success flat %}
success 提示塊標籤
{% endnote %}

{% note info flat %}
info 提示塊標籤
{% endnote %}

{% note warning flat %}
warning 提示塊標籤
{% endnote %}

{% note danger flat %}
danger 提示塊標籤
{% endnote %}

> disabled

```markdown
{% note disabled %}
默認 提示塊標籤
{% endnote %}

{% note default disabled %}
default 提示塊標籤
{% endnote %}

{% note primary disabled %}
primary 提示塊標籤
{% endnote %}

{% note success disabled %}
success 提示塊標籤
{% endnote %}

{% note info disabled %}
info 提示塊標籤
{% endnote %}

{% note warning disabled %}
warning 提示塊標籤
{% endnote %}

{% note danger disabled %}
danger 提示塊標籤
{% endnote %}
```

{% note disabled %}
默認 提示塊標籤
{% endnote %}

{% note default disabled %}
default 提示塊標籤
{% endnote %}

{% note primary disabled %}
primary 提示塊標籤
{% endnote %}

{% note success disabled %}
success 提示塊標籤
{% endnote %}

{% note info disabled %}
info 提示塊標籤
{% endnote %}

{% note warning disabled %}
warning 提示塊標籤
{% endnote %}

{% note danger disabled %}
danger 提示塊標籤
{% endnote %}

> no-icon

```markdown
{% note no-icon %}
默認 提示塊標籤
{% endnote %}

{% note default no-icon %}
default 提示塊標籤
{% endnote %}

{% note primary no-icon %}
primary 提示塊標籤
{% endnote %}

{% note success no-icon %}
success 提示塊標籤
{% endnote %}

{% note info no-icon %}
info 提示塊標籤
{% endnote %}

{% note warning no-icon %}
warning 提示塊標籤
{% endnote %}

{% note danger no-icon %}
danger 提示塊標籤
{% endnote %}
```

{% note no-icon %}
默認 提示塊標籤
{% endnote %}

{% note default no-icon %}
default 提示塊標籤
{% endnote %}

{% note primary no-icon %}
primary 提示塊標籤
{% endnote %}

{% note success no-icon %}
success 提示塊標籤
{% endnote %}

{% note info no-icon %}
info 提示塊標籤
{% endnote %}

{% note warning no-icon %}
warning 提示塊標籤
{% endnote %}

{% note danger no-icon %}
danger 提示塊標籤
{% endnote %}

<!-- endtab -->

<!-- tab 用法 2（自定義 icon）-->

> 3.2.0 以上版本支

```markdown
{% note [color] [icon] [style] %}
Any content (support inline tags too.io).
{% endnote %}
```


| 名稱  | 用法                                                                     |
| ------- | -------------------------------------------------------------------------- |
| color | 【可選】顔色<br>(default / blue / pink / red / purple / orange / green)  |
| icon  | 【可選】可配置自定義 icon (只支持 fontawesome 圖標, 也可以配置 no-icon ) |
| style | 【可選】可以覆蓋配置中的 style<br/>（simple/modern/flat/disabled）       |

> simple

```markdown
{% note 'fab fa-cc-visa' simple %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' simple%}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}
前端最討厭的瀏覽器
{% endnote %}
```

{% note 'fab fa-cc-visa' simple %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' simple%}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}
前端最討厭的瀏覽器
{% endnote %}

> modern

```markdown
{% note 'fab fa-cc-visa' modern %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' modern %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' modern %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' modern%}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' modern %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' modern %}
前端最討厭的瀏覽器
{% endnote %}
```

{% note 'fab fa-cc-visa' modern %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' modern %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' modern %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' modern%}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' modern %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' modern %}
前端最討厭的瀏覽器
{% endnote %}

> flat

```markdown
{% note 'fab fa-cc-visa' flat %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' flat %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' flat %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' flat%}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' flat %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' flat %}
前端最討厭的瀏覽器
{% endnote %}
```

{% note 'fab fa-cc-visa' flat%}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' flat%}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' flat%}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' flat %}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' flat %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' flat %}
前端最討厭的瀏覽器
{% endnote %}

> disabled

```markdown
{% note 'fab fa-cc-visa' disabled %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' disabled %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' disabled %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' disabled %}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' disabled %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' disabled %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' disabled %}
前端最討厭的瀏覽器
{% endnote %}
```

{% note 'fab fa-cc-visa' disabled %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' disabled %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' disabled %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' disabled %}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' disabled %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' disabled %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' disabled %}
前端最討厭的瀏覽器
{% endnote %}

> no-icon

```markdown
{% note no-icon %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue no-icon %}
2021年快到了....
{% endnote %}
{% note pink no-icon %}
小心開車 安全至上
{% endnote %}
{% note red no-icon %}
這是三片呢？還是四片？
{% endnote %}
{% note orange no-icon %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple no-icon %}
剪刀石頭布
{% endnote %}
{% note green no-icon %}
前端最討厭的瀏覽器
{% endnote %}
```

{% note no-icon %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue no-icon %}
2021年快到了....
{% endnote %}
{% note pink no-icon %}
小心開車 安全至上
{% endnote %}
{% note red no-icon %}
這是三片呢？還是四片？
{% endnote %}
{% note orange no-icon %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple no-icon %}
剪刀石頭布
{% endnote %}
{% note green no-icon %}
前端最討厭的瀏覽器
{% endnote %}

<!-- endtab -->

{% endtabs %}

### Gallery相冊圖庫

> 2.2.0以上提供

一個圖庫集合。

寫法

```
<div class="gallery-group-main">
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
</div>
```

- name：圖庫名字
- description：圖庫描述
- link：連接到對應相冊的地址
- img-url：圖庫封面的地址

例如：

```
<div class="gallery-group-main">
{% galleryGroup '壁紙' '收藏的一些壁紙' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup '漫威' '關於漫威的圖片' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' '關於OH MY GIRL的圖片' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>
```

<div class="gallery-group-main">
{% galleryGroup '壁紙' '收藏的一些壁紙' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup '漫威' '關於漫威的圖片' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' '關於OH MY GIRL的圖片' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>

### Gallery相冊

> 2.0.0以上提供

區別於舊版的Gallery相冊,新的Gallery相冊會自動根據圖片長度進行排版，書寫也更加方便，與markdown格式一樣。可根據需要插入到相應的md。

寫法:

```markdown
{% gallery %}
markdown 圖片格式
{% endgallery %}
```

例如

```markdown
{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}
```

{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}

### tag-hide

{% note warning %}

2.2.0以上提供

請注意，tag-hide內的標簽外掛content內都不建議有h1 - h6 等標題。因為Toc會把隱藏內容標題也顯示出來，而且當滾動屏幕時，如果隱藏內容沒有顯示出來，會導致Toc的滾動出現異常。

{% endnote %}

如果你想把一些文字、內容隱藏起來，並提供按鈕讓用户點擊顯示。可以使用這個標籤外掛。

{% tabs tag-hide %}

<!-- tab Inline -->

`inline` 在文本里面添加按鈕隱藏內容，只限文字

( content不能包含英文逗號，可用`&sbquo;`)

```markdown
{% hideInline content,display,bg,color %}
```

- content: 文本內容
- display: 按鈕顯示的文字(可選)
- bg: 按鈕的背景顏色(可選)
- color: 按鈕文字的顏色(可選)

> Demo

```markdown
哪個英文字母最酷？ {% hideInline 因為西裝褲(C裝酷),查看答案,#FF7242,#fff %}

門裏站着一個人? {% hideInline 閃 %}
```

哪個英文字母最酷？ {% hideInline 因為西裝褲(C裝酷),查看答案,#FF7242,#fff %}

門裏站着一個人? {% hideInline 閃 %}

<!-- endtab -->

<!-- tab Block -->

`block`獨立的block隱藏內容，可以隱藏很多內容，包括圖片，代碼塊等等

( display 不能包含英文逗號，可用`&sbquo;`)

```markdown
{% hideBlock display,bg,color %}
content
{% endhideBlock %}
```

- content: 文本內容
- display: 按鈕顯示的文字(可選)
- bg: 按鈕的背景顏色(可選)
- color: 按鈕文字的顏色(可選)

> Demo

```mark
查看答案
{% hideBlock 查看答案 %}
傻子，怎麼可能有答案
{% endhideBlock %}
```

查看答案
{% hideBlock 查看答案 %}
傻子，怎麼可能有答案
{% endhideBlock %}

<!-- endtab -->

<!-- tab Toggle -->

> 2.3.0以上支持

如果你需要展示的內容太多，可以把它隱藏在收縮框裏，需要時再把它展開。

( display 不能包含英文逗號，可用`&sbquo;`)

```markdown
{% hideToggle display,bg,color %}
content
{% endhideToggle %}
```

> Demo

```markdown
{% hideToggle Butterfly安裝方法 %}
在你的博客根目錄裏

git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

如果想要安裝比較新的dev分支，可以

git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

{% endhideToggle %}
```

{% hideToggle Butterfly安裝方法 %}
在你的博客根目錄裏

git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

如果想要安裝比較新的dev分支，可以

git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

{% endhideToggle %}

<!-- endtab -->

{% endtabs %}

### mermaid

使用mermaid標籤可以繪製Flowchart（流程圖）、Sequence diagram（時序圖 ）、Class Diagram（類別圖）、State Diagram（狀態圖）、Gantt（甘特圖）和Pie Chart（圓形圖），具體可以查看[mermaid文檔](https://mermaid-js.github.io/mermaid/#/)

修改 `主題配置文件`

```yaml
# mermaid
# see https://github.com/mermaid-js/mermaid
mermaid:
  enable: true
  # built-in themes: default/forest/dark/neutral
  theme:
    light: default
    dark: dark
```

寫法：

```markdown
{% mermaid %}
內容
{% endmermaid %}
```

例如：

```markdown
{% mermaid %}
pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
{% endmermaid %}
```

![](https://fastly.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-mermaid.png)

### Tabs

移植於next主題

使用方法

```markdown
{% tabs Unique name, [index] %}
<!-- tab [Tab caption] [@icon] -->
Any content (support inline tags too).
<!-- endtab -->
{% endtabs %}

Unique name   : Unique name of tabs block tag without comma.
                Will be used in #id's as prefix for each tab with their index numbers.
                If there are whitespaces in name, for generate #id all whitespaces will replaced by dashes.
                Only for current url of post/page must be unique!
[index]       : Index number of active tab.
                If not specified, first tab (1) will be selected.
                If index is -1, no tab will be selected. It's will be something like spoiler.
                Optional parameter.
[Tab caption] : Caption of current tab.
                If not caption specified, unique name with tab index suffix will be used as caption of tab.
                If not caption specified, but specified icon, caption will empty.
                Optional parameter.
[@icon]       : FontAwesome icon name (full-name, look like 'fas fa-font')
                Can be specified with or without space; e.g. 'Tab caption @icon' similar to 'Tab caption@icon'.
                Optional parameter.
```

> Demo 1 - 預設選擇第一個【默認】

```markdown
{% tabs test1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}
```

{% tabs test1 %}

<!-- tab -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}

> Demo 2 - 預設選擇tabs

```markdown
{% tabs test2, 3 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}
```

{% tabs test2, 3 %}

<!-- tab -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}

> Demo 3 - 沒有預設值

```markdown
{% tabs test3, -1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}
```

{% tabs test3, -1 %}

<!-- tab -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}

> Demo 4 - 自定義Tab名 + 只有icon + icon和Tab名

```markdown
{% tabs test4 %}
<!-- tab 第一個Tab -->
**tab名字為第一個Tab**
<!-- endtab -->

<!-- tab @fab fa-apple-pay -->
**只有圖標 沒有Tab名字**
<!-- endtab -->

<!-- tab 炸彈@fas fa-bomb -->
**名字+icon**
<!-- endtab -->
{% endtabs %}
```

{% tabs test4 %}

<!-- tab 第一個Tab -->

**tab名字為第一個Tab**

<!-- endtab -->

<!-- tab @fab fa-apple-pay -->

**只有圖標 沒有Tab名字**

<!-- endtab -->

<!-- tab 炸彈@fas fa-bomb -->

**名字+icon**

<!-- endtab -->

{% endtabs %}

### Button

> 3.0以上適用

使用方法：

```markdown
{% btn [url],[text],[icon],[color] [style] [layout] [position] [size] %}

[url]         : 鏈接
[text]        : 按鈕文字
[icon]        : [可選] 圖標
[color]       : [可選] 按鈕背景顔色(默認style時）
                      按鈕字體和邊框顔色(outline時)
                      default/blue/pink/red/purple/orange/green
[style]       : [可選] 按鈕樣式 默認實心
                      outline/留空
[layout]      : [可選] 按鈕佈局 默認為line
                      block/留空
[position]    : [可選] 按鈕位置 前提是設置了layout為block 默認為左邊
                      center/right/留空
[size]        : [可選] 按鈕大小
                      larger/留空
```

> Demo

```markdown
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,,outline %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,larger %}
```

This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,,outline %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,larger %}

```markdown
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block center larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block right outline larger %}
```

{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block center larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block right outline larger %}

**more than one button in center**

```markdown
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,blue larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,pink larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,red larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,purple larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,orange larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,green larger %}
```

{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,blue larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,pink larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,red larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,purple larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,orange larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,green larger %}

```markdown
<div class="btn-center">
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline blue larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline pink larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline red larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline purple larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline orange larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline green larger %}
</div>
```

<div class="btn-center">
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline blue larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline pink larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline red larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline purple larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline orange larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline green larger %}
</div>

### inlineImg

主題中的圖片都是默認以`塊級元素`顯示，如果你想以`內聯元素`顯示，可以使用這個標簽外掛。

```markdown
{% inlineImg [src] [height] %}

[src]      :    圖片鏈接
[height]   ：   圖片高度限制【可選】
```

> Demo

```markdown
你看我長得漂亮不

![](https://i.loli.net/2021/03/19/2P6ivUGsdaEXSFI.png)

我覺得很漂亮 {% inlineImg https://i.loli.net/2021/03/19/5M4jUB3ynq7ePgw.png 150px %}
```

![image-20210319001204045](https://fastly.jsdelivr.net/gh/jerryc127/CDN@m2/img/hexo-theme-butterfly-docs-inlineimg.png)

### label

> 3.7.5 及以上版本適用

高亮所需的文字

```markdown
{% label text color %}
```


| 參數  | 解釋                                                                             |
| ------- | ---------------------------------------------------------------------------------- |
| text  | 文字                                                                             |
| color | 【可選】背景顏色，默認為`default`<br />default/blue/pink/red/purple/orange/green |

> Demo

```markdown
臣亮言：{% label 先帝 %}創業未半，而{% label 中道崩殂 blue %}。今天下三分，{% label 益州疲敝 pink %}，此誠{% label 危急存亡之秋 red %}也！然侍衞之臣，不懈於內；{% label 忠志之士 purple %}，忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。誠宜開張聖聽，以光先帝遺德，恢弘志士之氣；不宜妄自菲薄，引喻失義，以塞忠諫之路也。
宮中、府中，俱為一體；陟罰臧否，不宜異同。若有{% label 作奸 orange %}、{% label 犯科 green %}，及為忠善者，宜付有司，論其刑賞，以昭陛下平明之治；不宜偏私，使內外異法也。
```

臣亮言：{% label 先帝 %}創業未半，而{% label 中道崩殂 blue %}。今天下三分，{% label 益州疲敝 pink %}，此誠{% label 危急存亡之秋 red %}也！然侍衞之臣，不懈於內；{% label 忠志之士 purple %}，忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。誠宜開張聖聽，以光先帝遺德，恢弘志士之氣；不宜妄自菲薄，引喻失義，以塞忠諫之路也。

宮中、府中，俱為一體；陟罰臧否，不宜異同。若有{% label 作奸 orange %}、{% label 犯科 green %}，及為忠善者，宜付有司，論其刑賞，以昭陛下平明之治；不宜偏私，使內外異法也。

### timeline

> 4.0.0 以上支持

```markdown
{% timeline title,color %}
<!-- timeline title -->
xxxxx
<!-- endtimeline -->
<!-- timeline title -->
xxxxx
<!-- endtimeline -->
{% endtimeline %}
```


| 參數  | 解釋                                                                           |
| ------- | -------------------------------------------------------------------------------- |
| title | 標題/時間線                                                                    |
| color | timeline 顏色<br />default(留空) / blue / pink / red / purple / orange / green |

> Demo

```markdown
{% timeline 2022 %}
<!-- timeline 01-02 -->
這是測試頁面
<!-- endtimeline -->
{% endtimeline %}
```

{% timeline 2022 %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}

```markdown
{% timeline 2022,blue %}
<!-- timeline 01-02 -->
這是測試頁面
<!-- endtimeline -->
{% endtimeline %}
```

{% timeline 2022,blue %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}

```markdown
{% timeline 2022,pink %}
<!-- timeline 01-02 -->
這是測試頁面
<!-- endtimeline -->
{% endtimeline %}
```

{% timeline 2022,pink %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}

```markdown
{% timeline 2022,red %}
<!-- timeline 01-02 -->
這是測試頁面
<!-- endtimeline -->
{% endtimeline %}
```

{% timeline 2022,red %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}

```markdown
{% timeline 2022,purple %}
<!-- timeline 01-02 -->
這是測試頁面
<!-- endtimeline -->
{% endtimeline %}
```

{% timeline 2022,purple %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}

```markdown
{% timeline 2022,orange %}
<!-- timeline 01-02 -->
這是測試頁面
<!-- endtimeline -->
{% endtimeline %}
```

{% timeline 2022,orange %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}

```markdown
{% timeline 2022,green %}
<!-- timeline 01-02 -->
這是測試頁面
<!-- endtimeline -->
{% endtimeline %}
```

{% timeline 2022,green %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}

### flink

> 4.1.0 支持

可在任何界面插入類似友情鏈接列表效果

內容格式與友情鏈接界面一樣，支持 yml 格式

```markdown
{% flink %}
xxxxxx
{% endflink %}
```

> Demo

```markdown
{% flink %}
- class_name: 友情鏈接
  class_desc: 那些人，那些事
  link_list:
    - name: JerryC
      link: https://jerryc.me/
      avatar: https://jerryc.me/img/avatar.png
      descr: 今日事,今日畢
    - name: Hexo
      link: https://hexo.io/zh-tw/
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
      descr: 快速、簡單且強大的網誌框架

- class_name: 網站
  class_desc: 值得推薦的網站
  link_list:
    - name: Youtube
      link: https://www.youtube.com/
      avatar: https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png
      descr: 視頻網站
    - name: Weibo
      link: https://www.weibo.com/
      avatar: https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png
      descr: 中國最大社交分享平台
    - name: Twitter
      link: https://twitter.com/
      avatar: https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png
      descr: 社交分享平台
{% endflink %}
```

![](https://fastly.jsdelivr.net/gh/jerryc127/CDN@m2/img/hexo-theme-butterfly-docs-flink-demo.png)

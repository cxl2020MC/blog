---
aplayer: null
aside: null
comments: null
date: 2022-05-21 21:44:35
description: null
highlight_shrink: null
katex: null
keywords: null
mathjax: null
title: 关于博主
top_img: null
type: null
updated: 2022-09-05 11:35:21
---
> 欢迎来到我的小站呀，很高兴遇见你！🤝

## 🏠 关于本站

陈鑫磊的博客

## 👨‍💻 博主是谁

陈鑫磊

## 👨‍💻 博主生日

8月14日

<!-- ## ⛹ 兴趣爱好 -->

## 📬 联系我呀

[哔哩哔哩](https://space.bilibili.com/514753559)

![](https://img.shields.io/badge/dynamic/json?color=yellow&label=star&query=stars&url=https%3A%2F%2Fapi.github-star-counter.workers.dev%2Fuser%2Fcxl2020MC)
![](https://img.shields.io/badge/dynamic/json?color=inactive&label=fork&query=forks&url=https%3A%2F%2Fapi.github-star-counter.workers.dev%2Fuser%2Fcxl2020MC)

---

[![cxl2020MC's GitHub stats](https://github-readme-stats.vercel.app/api?username=cxl2020MC&show_icons=true&icon_color=CE1D2D&text_color=718096&bg_color=ffffff&hide_title=true)](https://github.com/anuraghazra/github-readme-stats)

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=cxl2020MC&a&layout=compact)](https://github.com/anuraghazra/github-readme-stats)

---

## [😀网站状态信息](https://stats.uptimerobot.com/8WJ06FjNZg)

## 51LA统计信息


### 访问统计

<div id="statistic">
<div class="content"></div>
<span style="font-size:14px">流量统计支持：<a style="color:#1690ff;" href="https://v6.51.la/">51la</a></span>
</div>

<!-- js -->

<script>
// 链接替换即可，不需要后面的参数
fetch('https://v6-widget.51.la/v6/Jnkp8oCL537VDXz1/quote.js').then(res => res.text()).then((data) => {
    let title = ['最近活跃访客', '今日人数', '今日访问', '昨日人数', '昨日访问', '本月访问', '总访问量']
    let num = data.match(/(?<=<\/span><span>).*?(?=<\/span><\/p>)/g)
    let order = [0, 1, 3, 2, 4, 5, 6] // 新增  可排序，如果需要隐藏则删除对应数字即可。
    // 示例：[1, 3, 2, 4, 5] 显示 ['今日人数', '昨日人数', '今日访问', '昨日访问', '本月访问']，不显示 最近活跃访客(0) 和 总访问量(6)
    for (let i = 0; i < order.length; i++) { document.querySelectorAll('#statistic .content')[0].innerHTML += '<div><span>' + title[order[i]] + '</span><span class="num">' + num[order[i]] + '</span></div>' }
});

// 老版本
// for (let i = 0; i < num.length; i++) {
//      // 自定义不显示哪个或者显示哪个，如下为不显示 最近活跃访客 和 总访问量
//     if (i == 0 || i == num.length - 1) continue;
//     s.innerHTML += '<div><span>' + title[i] + '</span><span class="num">' + num[i] + '</span></div>'
// }
// 
</script>




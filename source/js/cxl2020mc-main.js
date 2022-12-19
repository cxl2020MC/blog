// 动态标题
var OriginTitile = document.title;
var titleTime;

document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = ':(出错了! ' + OriginTitile; //'w(ﾟДﾟ)w 不要走！再看看嘛！';
        clearTimeout(titleTime);
    }
    else {
        //返回当前页面时标签显示内容
        document.title = ':)诶又好了! ' + OriginTitile; //'♪(^∇^*)欢迎回来！' + OriginTitile;
        //两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});

// 一言
async function asideHitokoto() {
    // hitokotojson = await (await fetch('https://v1.hitokoto.cn?select=json')).json()
    let asideHitokotodiv = document.getElementById("asideHitokoto")
    if (asideHitokotodiv) {
        let req = await fetch('https://v1.hitokoto.cn?select=json')
        let data = await req.json()
        text = data['hitokoto']
        from = data['from']
        let hitokotostr = `『${text}』 —— ${from}`
        console.log("一言文本: " + hitokotostr)
        asideHitokotodiv.innerHTML = hitokotostr
    }
}

// pjax加载完成重载函数
document.addEventListener('pjax:complete', (e) => {
    // 动态标题
    OriginTitile = document.title;
    asideHitokoto()
})

asideHitokoto()
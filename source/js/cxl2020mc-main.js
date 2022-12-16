//动态标题
var OriginTitile = document.title;
var titleTime;
// pjax加载完成重载函数
document.addEventListener('pjax:complete', (e) => {
    OriginTitile = document.title;
})
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


// 镜像站提示
function mirrorwelcome() {
    var domain = document.domain;
    console.log("你正在访问:" + domain);
    if (domain !== 'www.cxl2020mc.top') {
        alert("你正在访问 陈鑫磊的博客 镜像站，主站域名www.cxl2020mc.top");
    };
};


// 欢迎访客
function welcome() {
    var url = window.location.pathname;
    console.log("你正在访问路径:" + url);
    if (url == '/') {
        try {
            btf.snackbarShow('欢迎来到陈鑫磊的博客！');
        } catch (e) {
            console.error(e)
        }
    };
};

mirrorwelcome();
welcome();


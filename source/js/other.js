function mirrorwelcome() {
    var domain = document.domain
    console.log("你正在访问:" + domain)
    if (domain !== 'www.cxl2020mc.top') {
        alert("你正在访问 陈鑫磊的博客 镜像站，主站域名www.cxl2020mc.top")
    }
}
//$(document).ready(()=>{
//mirrorwelcome()
//})

function welcome() {
    var url = window.location.pathname;
    console.log("你正在访问路径:" + url)
    if (url == '/') {
        btf.snackbarShow('欢迎来到陈鑫磊的博客！');
    }
}

window.addEventListener("load", mirrorwelcome());

document.onreadystatechange = function () 　　//当页面加载状态改变的时候执行function
{
    if (document.readyState == "complete") { 　　//当页面加载状态为完全结束时进入 
        //mirrorwelcome();
        welcome() 　　 //你要做的操作。
    }
}
//btf.snackbarShow('欢迎来到陈鑫磊的博客！') 


//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = 'w(ﾟДﾟ)w 不要走！再看看嘛！';
        clearTimeout(titleTime);
    }
    else {
        //返回当前页面时标签显示内容
        document.title = '♪(^∇^*)欢迎回来！' + OriginTitile;
        //两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});

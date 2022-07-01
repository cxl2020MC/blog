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

//解决页面URL带着长长的后缀
//重定向浏览器地址
pjax.site_handleResponse = pjax.handleResponse;
pjax.handleResponse = function(responseText, request, href, options){
  Object.defineProperty(request,'responseURL',{
    value: href
  });
  pjax.site_handleResponse(responseText,request,href,options);
}
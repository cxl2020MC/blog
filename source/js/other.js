function mirrorwelcome(){
    var domain = document.domain
    console.log("你正在访问:"+domain)
    if(domain!=='www.cxl2020mc.top'){
        alert("你正在访问 陈鑫磊的博客 镜像站，主站域名www.cxl2020mc.top")
    }
}
//$(document).ready(()=>{
    //mirrorwelcome()
//})

//window.addEventListener("load", mirrorwelcome());

//当一个文档完全下载到浏览器中时，才会触发window.onload事件
//window.onload=function(){
    　　　　　　　//dosth//你要做的事情
    　　　　//}

window.addEventListener("onload", mirrorwelcome());
//btf.snackbarShow('欢迎来到陈鑫磊的博客！') 
window.addEventListener("onload", btf.snackbarShow('欢迎来到陈鑫磊的博客！') );
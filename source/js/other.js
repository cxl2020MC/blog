function mirrorwelcome() {
    var domain = document.domain;
    console.log("你正在访问:" + domain);
    if (domain !== 'www.cxl2020mc.top') {
        alert("你正在访问 陈鑫磊的博客 镜像站，主站域名www.cxl2020mc.top");
    };
};

//$(document).ready(()=>{
//mirrorwelcome()
//})

function welcome() {
    var url = window.location.pathname;
    console.log("你正在访问路径:" + url);
    if (url == '/') {
        btf.snackbarShow('欢迎来到陈鑫磊的博客！');
    };
};

mirrorwelcome();
welcome();
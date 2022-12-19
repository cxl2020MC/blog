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
        let req = await fetch('https://v1.hitokoto.cn?select=json');
        let data = await req.json();
        text = data['hitokoto'];
        from = data['from'];
        let hitokotostr = `『${text}』 —— ${from}`;
        console.log("一言文本: " + hitokotostr);
        asideHitokotodiv.innerHTML = hitokotostr;
    };
};

async function footerload() {
    const iconHtml = document.getElementsByClassName('card-info-social-icons is-center')[0].innerHTML
    const configs = {
        'footer_group': [
            {
                'group_name': '页面',
                'data': [
                    {   
                        'name': '首页',
                        'harf': '/',
                    },
                ],
            },
        ],
    };
    console.log('正在挂载footer');

    let footergroupStr;
    for (let config of configs.footer_group) {
        let footer_linksStr = '';
        for (let config_a of config.data) {
            footer_linksStr = footer_linksStr + `<a class="footer-item" href="${config_a.harf}" target="_blank">${config_a.name}</a>`;
        };
        footergroupStr = `
        <div class="footer-group">
            <h3 class="footer-title">${config.group_name}</h3>
            <div class="footer-links">
                ${footer_linksStr}
            </div>
        </div>`;
    };
    const footerHtmlStr = `
    
    <div id="footer_deal">
        ${iconHtml}
    </div>
    <div id="cxl2020mc_footer">
        ${footergroupStr}
    </div>
    `

    let footer = document.getElementById('footer-warp');
    // 删除行内样式
    document.getElementById('footer').style = '';
    // 更改内容
    footer.innerHTML = footerHtmlStr
}

// pjax加载完成重载函数
document.addEventListener('pjax:complete', (e) => {
    // 动态标题
    OriginTitile = document.title;
    asideHitokoto();
})

footerload();
asideHitokoto();
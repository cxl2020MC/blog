fetch("https://api.cxl2020mc.top/ip/").then(res => res.json()).then(function (data) {
    copyright_ip = document.getElementById("copyright_ip");
    ip = data['data']['ip'];
    city = data['data']['city'];
    province = data['data']['province'];
    isp = data['data']['isp'];
    info = `你的IP: 【${ip}】 | 你所在的区域: 【${city} ${province}】 | 你的运营商: 【${isp}】`;
    copyright_ip.innerHTML = info;
})

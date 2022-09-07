fetch("https://api.cxl2020mc.top/ip/").then(res => res.json()).then(function (data) {
    console.log(data)
    copyright_ip = document.getElementById("copyright_ip");
    ip = data['data']['addr'];
    country = data['data']['country']
    province = data['data']['province'];
    city = data['data']['city'];
    isp = data['data']['isp'];
    info = `你的IP: ${ip} | 你所在的区域: ${country} ${province} ${city} | 你的运营商: ${isp}`;
    copyright_ip.innerHTML = info;
})

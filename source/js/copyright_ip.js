fetch("https://api.cxl2020mc.top/ip/").then(res => res.json()).then(function (data) {
    copyright_ip = document.getElementById("copyright_ip");
    copyright_pos = document.getElementById("copyright_pos");
    copyright_isp = document.getElementById("copyright_isp");
    ip = data['data']['ip'];
    city = data['data']['city'];
    province = data['data']['province'];
    isp = data['data']['isp'];
    pos = `${ip} ${city} ${province}`;
    copyright_ip.innerHTML = ip;
    copyright_pos.innerHTML = pos;
    copyright_isp.innerHTML = isp;
})

hitokotojson = await fetch('https://v1.hitokoto.cn?select=json').json()
hitokototext = hitokotojson['hitokoto']
hitokotofrom = hitokotojson['from']
hitokotostr = "『" + hitokototext + "』" + " —— " + hitokotofrom
console.log("一言文本: " + hitokotostr)
asideHitokoto = document.getElementById("asideHitokoto")
asideHitokoto.innerHTML = hitokotostr
// async function get_music(url){
//     let data = await fetch(url);
//     console.log(data.json())
// }
// get_music("/api/music.json")

fetch("https://163-api.cxl2020mc.top/playlist/track/all?id=2701866695&limit=200").then(response => response.json()).then(data => {
    console.log(data);
    ap_audio = [];
    // https://music.163.com/song/media/outer/url?id=id.mp3
    for (let index = 0; index < data["songs"].length; index++) {
        ap_audio.push({"name": data["songs"][index]["name"],
                     "url": "https://music.163.com/song/media/outer/url?id=" + data["songs"][index]["id"] + ".mp3",
                     "artist": data["songs"][index]["ar"][0]["name"],
                    "cover": "/img/avatar.svg"});
    };
    console.log(ap_audio);
    const ap = new APlayer({
        container: document.getElementById('player'),
        fixed: true,
        autoplay: false,
        loop: 'all',
        order: 'random',
        preload: 'auto',
        volume: 0.7,
        mutex: true,
        listFolded: false,
        lrcType: 3,
        audio: ap_audio
    });
});
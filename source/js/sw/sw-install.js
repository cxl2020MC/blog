// 判断是否支持SW
if (navigator.serviceWorker) {
    // 判断浏览器是否支持 Promise.any
    if (Promise.any) {
        // 注册SW
        navigator.serviceWorker
            .register('/sw.js')
            .then((result) => {

                // 自动更新SW
                setInterval(function () {
                    result.update();
                    console.log(`[SW] 正在检查并更新SW`);
                }, 1000 * 60 * 5);

                // 判断是否安装了sw
                if (localStorage.getItem('installSW')) return
                localStorage.setItem('installSW', true);
                // 刷新部分
                // ------------------------

                // 计时器
                // const timer = setInterval(() => {
                //     // 判断sw安装后，是否处于激活状态，激活后刷新页面
                //     if (result.active.state === 'activated') {
                //         // 清理计时器
                //         clearInterval(timer);
                //         // 刷新页面
                //         location.reload();
                //     }
                // }, 100)
                
                // ------------------------
            })
            .catch((e) => { console.error(`[SW] 安装失败: ${e}`) });
    } else {
        console.error(`[SW] 安装失败: 浏览器不支持Promise.any`);
    }
} else {
    console.error(`[SW] 安装失败: 浏览器不支持Service Worker`);
};
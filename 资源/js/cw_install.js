if (!!navigator.serviceWorker) {
    if (localStorage.getItem('cw_installed') !== 'true') {window.stop();}
    navigator.serviceWorker.register('/cw.js?t=' + new Date().getTime()).then(async (registration) => {
        if (localStorage.getItem('cw_installed') !== 'true') {
                setInterval(() => {
                    fetch('/cw-cgi/api?type=config').then(res => res.text()).then(res => {
                        if(res === 'ok') {
                            localStorage.setItem('cw_installed', 'true');
                            console.log('[CW] Installation is completed.Reloading...');
                            location.reload()
                        }
                    }).catch(err => {
                        console.warn('[CW] Installation may not be complete, try again later.')
                    })
                }, 100);
        }
    }).catch(err => {
        console.error('[CW] Installing Failed,Error: ' + err.message);
    })
} else { console.error('[CW] Installing Failed,Error: Browser not support service worker'); }

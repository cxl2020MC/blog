const configs = {
    'redirect': [
        {
            'rule': /.*\/\/busuanzi\.ibruce\.info\/busuanzi\/2\.3\/busuanzi.pure.mini.js/,
            'repalce': 'https://jsd.cxl2020mc.top/npm/penndu@latest/bsz.js',
        },
    ],
    'cdn': [
        {
            'rule': /^https\:\/\/((cdn|fastly|gcore|test1|quantil)\.jsdelivr\.net\/npm|vercel\.jsd\.cxl2020mc\.top\/npm|unpkg\.com)/,
            'search': '_',
            'replace': [
                'https://jsd.cxl2020mc.top/npm',
                'https://vercel.jsd.cxl2020mc.top/npm',
                'https://netlify.jsd.cxl2020mc.top/npm',
                'https://cxl2020mc.cnortles.top/npm',
                'https://unpkg.cnortles.top',
                'https://cdn.cnortles.top/npm',
                'https://jsdelivr.pai233.top/npm',
                'https://cdn.bilicdn.tk/npm',
                'https://cdn.jsdelivr.net/npm',
                // 'https://cdn2.tianli0.top/npm',
                // 'https://cdn3.tianli0.top/npm',
                // qycdn
                'https://cdn.chuqis.com/npm',
                'https://jsd.cky.codes/npm',
                'https://unpkg.com',
                '_',
            ],
        },
        {
            'rule': /^https\:\/\/((cdn|fastly|gcore|test1|quantil)\.jsdelivr\.net\/gh|vercel\.jsd\.cxl2020mc\.top\/gh)/,
            'search': '_',
            'replace': [
                'https://jsd.cxl2020mc.top/gh',
                'https://vercel.jsd.cxl2020mc.top/gh',
                'https://netlify.jsd.cxl2020mc.top/gh',
                'https://cxl2020mc.cnortles.top/gh',
                'https://cdn.cnortles.top/gh',
                'https://jsdelivr.pai233.top/gh',
                'https://cdn.bilicdn.tk/gh',
                'https://cdn.jsdelivr.net/gh',
                // 'https://cdn2.tianli0.top/gh',
                // 'https://cdn3.tianli0.top/gh',
                // qycdn
                'https://cdn.chuqis.com/gh',
                'https://jsd.cky.codes/gh',
                'https://jsew.cky.codes/gh',
                '_',
            ],
        },
    ],
}


importScripts('/js/sw/sw-dev.js')
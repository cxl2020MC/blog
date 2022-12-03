const 全局配置 = [
    {
        'rule': /^https\:\/\/((cdn|fastly|gcore|test1|quantil)\.jsdelivr\.net\/npm|jsd\.cxl2020mc\.top\/npm|unpkg\.com)/,
        'transform_rules': [
            {
                'search': '_',
                'replace': [
                    'https://jsd.cxl2020mc.top/npm',
                    'https://vercel.jsd.cxl2020mc.top/npm',
                    'https://jsdcxl2020mc.domain.qystu.cc/npm',
                    'https://unpkg.cnortles.top',
                    'https://cdn.cnortles.top/npm',
                    'https://project.cnortles.top/proxy/jsdelivr/npm',
                    'https://jsdelivr.pai233.top/npm',
                    'https://cdn.jsdelivr.net/npm',
                    'https://cdn3.tianli0.top/npm',
                    'https://jsd.cky.codes/npm',
                    'https://unpkg.com',
                    '_'
                ],
            },
        ],
    },
];

importScripts('/js/sw/sw-dev.js')

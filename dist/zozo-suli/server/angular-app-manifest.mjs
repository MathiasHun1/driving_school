
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-WTLDWHMV.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B6YHTTWX.js"
    ],
    "route": "/arak"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZUDIBCER.js"
    ],
    "route": "/oktatok"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JF27J6LP.js"
    ],
    "route": "/jarmuvek"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3OAOLSPA.js"
    ],
    "route": "/tajekoztato"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QLMRBUAZ.js"
    ],
    "route": "/kategoriak"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ROUYGWSP.js"
    ],
    "route": "/am-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7RHOZI7T.js"
    ],
    "route": "/a1-kategoria-b-vel"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GBNTFLCD.js"
    ],
    "route": "/elso-lepes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FDIZIU7I.js"
    ],
    "route": "/a1-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XQ6RX6GX.js"
    ],
    "route": "/a2-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PRHXTQD3.js"
    ],
    "route": "/a-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VX7MK5PF.js"
    ],
    "route": "/kresz"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6AQSVD43.js"
    ],
    "route": "/kapcsolat"
  },
  {
    "renderMode": 2,
    "redirectTo": "/oktatok",
    "route": "/about"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6119, hash: '02e5059d72edea053d1d4a8389c7738906b14c340e774f3db9a15fd038480f96', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1208, hash: '8ad285d84461d9585533c3cc8f7b46e416b2560a5a6d4d2c6367418e6aa7fa48', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 694969, hash: 'ccb983902f352bdee362682b95b1cb27a8268cb13df5290d64675151311d0c45', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'arak/index.html': {size: 689065, hash: '685476258626de8144c0aa0d8b0c0f3bf8f14af439ef3240aae2eefd1497ba5b', text: () => import('./assets-chunks/arak_index_html.mjs').then(m => m.default)},
    'am-kategoria/index.html': {size: 692677, hash: 'e6402c5ac1c97ac538dbe991ba99a17c63ae95b0f7e07ab585fbde164e4aeddd', text: () => import('./assets-chunks/am-kategoria_index_html.mjs').then(m => m.default)},
    'kategoriak/index.html': {size: 688870, hash: 'b6180ecb250931e402434997c6c35dde6c1e89a8b33aab77fd7448aabeb1d33d', text: () => import('./assets-chunks/kategoriak_index_html.mjs').then(m => m.default)},
    'a2-kategoria/index.html': {size: 693380, hash: '5a97867958be35ae8179a7a7502cf357218edb7486221a0d06cec882890cc704', text: () => import('./assets-chunks/a2-kategoria_index_html.mjs').then(m => m.default)},
    'kresz/index.html': {size: 358570, hash: '9234af5d6e87bd9b421ce9f0a047a64d59d819ee07c87700a36ba8c8097bf6ca', text: () => import('./assets-chunks/kresz_index_html.mjs').then(m => m.default)},
    'oktatok/index.html': {size: 691317, hash: 'c8f8b2be150bf60cd3024cfe6e493696690c7e2f2c93e8044939fe0a322a4cd7', text: () => import('./assets-chunks/oktatok_index_html.mjs').then(m => m.default)},
    'tajekoztato/index.html': {size: 687571, hash: '4bef8b7648b05b11df32200da212af5236c5b609c5af4ea3d22207ac695741b4', text: () => import('./assets-chunks/tajekoztato_index_html.mjs').then(m => m.default)},
    'elso-lepes/index.html': {size: 358744, hash: '049e36850f886e2241b46dbe0b4553829062000563fef0d008688d0e2d3d5bfe', text: () => import('./assets-chunks/elso-lepes_index_html.mjs').then(m => m.default)},
    'a-kategoria/index.html': {size: 693193, hash: '230512108c8d930e53de89cae9236c8eaa87f10aad6d50345114cb9a3b344c02', text: () => import('./assets-chunks/a-kategoria_index_html.mjs').then(m => m.default)},
    'jarmuvek/index.html': {size: 691580, hash: 'a3157ba2630d0c1e770d7d796bd67046f6fb2968f1b3186a62a36ea81d130551', text: () => import('./assets-chunks/jarmuvek_index_html.mjs').then(m => m.default)},
    'a1-kategoria/index.html': {size: 693151, hash: '2bc3c17385eb35c3ff29f91a89f9b1ab59c986bbfd5ea9bef7ee729953cc4f09', text: () => import('./assets-chunks/a1-kategoria_index_html.mjs').then(m => m.default)},
    'a1-kategoria-b-vel/index.html': {size: 689104, hash: '760e0901c8c2a64f4bdea485e6bd823df4f12976c44d6553abfb98c924cd7ab2', text: () => import('./assets-chunks/a1-kategoria-b-vel_index_html.mjs').then(m => m.default)},
    'kapcsolat/index.html': {size: 690620, hash: '8c6fedadfca5bd33b08ec09b70778c1bb370fd936b462110135d5957b0360508', text: () => import('./assets-chunks/kapcsolat_index_html.mjs').then(m => m.default)},
    'styles-2BUCRLLH.css': {size: 228398, hash: 'FrTkdFyFJCg', text: () => import('./assets-chunks/styles-2BUCRLLH_css.mjs').then(m => m.default)}
  },
};

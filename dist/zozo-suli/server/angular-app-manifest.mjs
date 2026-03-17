
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
      "chunk-HHML4QX7.js"
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
      "chunk-DAKDSAIU.js"
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
      "chunk-Q3TYJ5UU.js"
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
    'index.csr.html': {size: 6119, hash: 'a3c73b32f316a5003653f34b92443fde37636b22ad51667bd44fc9d9b928d0be', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1208, hash: 'b97bb4e03bc79fe82d05431301f9936b3ac7c20a1784602f3da659a04ec22570', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 695177, hash: 'f5333597dd762827e4a0dbf4488e303a5e273755f3e604d47ed2bd5c0d5498c2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'kategoriak/index.html': {size: 689078, hash: '97e0ad952162837aa42f35969f296aab9b8ca51f09857df392e87b7e346a0def', text: () => import('./assets-chunks/kategoriak_index_html.mjs').then(m => m.default)},
    'arak/index.html': {size: 689273, hash: '9532a1e144072f6709f79bb01213061aaed7735aa8a1b14e7dda021df7509196', text: () => import('./assets-chunks/arak_index_html.mjs').then(m => m.default)},
    'am-kategoria/index.html': {size: 692885, hash: '8bdd1b7416c24b6dcf86bce2ae8807c631341d3ee5ac39f9661c1d5671ea1923', text: () => import('./assets-chunks/am-kategoria_index_html.mjs').then(m => m.default)},
    'a2-kategoria/index.html': {size: 693588, hash: '6e5a83c919753e43e5bb5f1a634ad18ad167461e2f8d71ff5c3ccf279b8c26bf', text: () => import('./assets-chunks/a2-kategoria_index_html.mjs').then(m => m.default)},
    'kresz/index.html': {size: 358778, hash: 'f229152ee7ffc9ab01398d15c19f613778ada6388b275a0d6036f448cb78508d', text: () => import('./assets-chunks/kresz_index_html.mjs').then(m => m.default)},
    'oktatok/index.html': {size: 691517, hash: '7ae040027998d267f8bf90ee8d241878b90bfdf06cb0f3e3bf3cdee65db9529b', text: () => import('./assets-chunks/oktatok_index_html.mjs').then(m => m.default)},
    'tajekoztato/index.html': {size: 687785, hash: 'aabfd2732c11a2927194c8bebc4dd1aef05509e10e90862c69b612bccab3b7b1', text: () => import('./assets-chunks/tajekoztato_index_html.mjs').then(m => m.default)},
    'elso-lepes/index.html': {size: 686822, hash: '2a537c44c0902acebe54462933aafa7327d76367690a2621e624560543c91eaa', text: () => import('./assets-chunks/elso-lepes_index_html.mjs').then(m => m.default)},
    'a-kategoria/index.html': {size: 693401, hash: '34999a6affedbfa69ec810b4159e90636542cf0f79802a27647e5a676c3be543', text: () => import('./assets-chunks/a-kategoria_index_html.mjs').then(m => m.default)},
    'jarmuvek/index.html': {size: 692252, hash: '1b7bcb2950effa78312b041a24055f098fa39907b473019716889f396c6e919b', text: () => import('./assets-chunks/jarmuvek_index_html.mjs').then(m => m.default)},
    'a1-kategoria/index.html': {size: 693367, hash: '5bff40c98a50c9f8d8b684b4525073e8cd179edad806f7832b0c781f047600ce', text: () => import('./assets-chunks/a1-kategoria_index_html.mjs').then(m => m.default)},
    'a1-kategoria-b-vel/index.html': {size: 689312, hash: 'f803fab675f0f54f68cefd1ec9205c590da9a99dfdf6446a67ef6116f05058c5', text: () => import('./assets-chunks/a1-kategoria-b-vel_index_html.mjs').then(m => m.default)},
    'kapcsolat/index.html': {size: 690828, hash: '18ed79983590ccd09e81acbe39418dd0e5111e0dac38e2591f2b35e1ebc8ff7c', text: () => import('./assets-chunks/kapcsolat_index_html.mjs').then(m => m.default)},
    'styles-2BUCRLLH.css': {size: 228398, hash: 'FrTkdFyFJCg', text: () => import('./assets-chunks/styles-2BUCRLLH_css.mjs').then(m => m.default)}
  },
};

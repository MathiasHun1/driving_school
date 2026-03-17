
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
      "chunk-LRRTTFYX.js"
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
      "chunk-6DNYIFGI.js"
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
    'index.csr.html': {size: 6119, hash: 'e5253882373c85a9cd8279fe8acafd459c4afefd857a4cc2885903c88bfba20c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1208, hash: 'fba33ce8c9452fda12563859387a47f4c7489537386cd36222cb57687d2309cb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'am-kategoria/index.html': {size: 693141, hash: 'b754e5e911cb61a5b35e0d59a8bbebbc2cc36ed49f03ee9741a1195ea6f33e1f', text: () => import('./assets-chunks/am-kategoria_index_html.mjs').then(m => m.default)},
    'kategoriak/index.html': {size: 689334, hash: '9625bccf5972ad7fdc4e622112d82c93004b7d2349fa01ca932b8d2bfa2ba65f', text: () => import('./assets-chunks/kategoriak_index_html.mjs').then(m => m.default)},
    'index.html': {size: 695433, hash: '85025b1c8f32de1ce8e275cc433b0237b0c6c0c07f3a4c78716e2d8f6dcf0689', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'arak/index.html': {size: 689529, hash: 'a1bc22d8ac75a7f150b58d2cfc55925929b7a4f411c7332a2129022ae917f70b', text: () => import('./assets-chunks/arak_index_html.mjs').then(m => m.default)},
    'kresz/index.html': {size: 359034, hash: '7c0bea07a101c3e06a2898c6546adb8f1bf7c39461035c2f9668746d7f840484', text: () => import('./assets-chunks/kresz_index_html.mjs').then(m => m.default)},
    'a2-kategoria/index.html': {size: 693854, hash: '4a87a6113cc7ee51124890572c7482d005fe287b9d44913bb2a51382f0052416', text: () => import('./assets-chunks/a2-kategoria_index_html.mjs').then(m => m.default)},
    'oktatok/index.html': {size: 691773, hash: '1fac84fca06388dd74e1c1c2e3100ae708da207e5be8e9cad38ac467f697828e', text: () => import('./assets-chunks/oktatok_index_html.mjs').then(m => m.default)},
    'tajekoztato/index.html': {size: 688035, hash: '0a6459ef8428472ff70c1d0f7fd23f36cfa56fb0a93a3ec1aa7c8faa2a3e68b9', text: () => import('./assets-chunks/tajekoztato_index_html.mjs').then(m => m.default)},
    'elso-lepes/index.html': {size: 687010, hash: 'a772c3251ce439975f5e98bfd39b7b256b59398db6c10fdf48966560f241bf61', text: () => import('./assets-chunks/elso-lepes_index_html.mjs').then(m => m.default)},
    'a-kategoria/index.html': {size: 693667, hash: '42276ae182ffd4029218daeee3d8a0e9b94c3590696f097e47a72fdb483b43df', text: () => import('./assets-chunks/a-kategoria_index_html.mjs').then(m => m.default)},
    'a1-kategoria/index.html': {size: 693615, hash: '628b1ed6b94b41d7a0b90e2aa67ad2cadc3ee9c895c3dda19aa0ede4647f2434', text: () => import('./assets-chunks/a1-kategoria_index_html.mjs').then(m => m.default)},
    'jarmuvek/index.html': {size: 692038, hash: '20b0b4970d03c13f516c5e58de1f8a4faaef188c5868040b85478459e4959c1b', text: () => import('./assets-chunks/jarmuvek_index_html.mjs').then(m => m.default)},
    'a1-kategoria-b-vel/index.html': {size: 689566, hash: '35bbdfb95770570a915a5b649197d6f3190e630154a775cc93890e9add809118', text: () => import('./assets-chunks/a1-kategoria-b-vel_index_html.mjs').then(m => m.default)},
    'kapcsolat/index.html': {size: 691088, hash: '22cc1dd290f9351993682918460577c5b55ae365b018b4b9d264e1ee74b24403', text: () => import('./assets-chunks/kapcsolat_index_html.mjs').then(m => m.default)},
    'styles-2BUCRLLH.css': {size: 228398, hash: 'FrTkdFyFJCg', text: () => import('./assets-chunks/styles-2BUCRLLH_css.mjs').then(m => m.default)}
  },
};

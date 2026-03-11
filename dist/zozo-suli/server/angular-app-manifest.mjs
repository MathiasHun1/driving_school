
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
      "chunk-B4XA7Q37.js"
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
    'index.csr.html': {size: 6119, hash: '673191c5439c9b058b3bc0de4fea7d7d6b0c27160f761b958817469201fb8a0d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1208, hash: '31e513dba969c96848ce4c4e0afcd9c3ac04386854f95e78deb492f5b6af301e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'am-kategoria/index.html': {size: 696427, hash: 'd289c0c4044d069fc02540be76173af99686015ef2bf7dfdeaf6fbf628055218', text: () => import('./assets-chunks/am-kategoria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 698719, hash: '703e489ce43b79a44982fb1064ae30226c8375a2f3c52b99f3d49202918349f2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'kategoriak/index.html': {size: 692620, hash: 'be1c7946341ccd20a11e9900d8649fb7c538f165267631435ac3a521855fdf26', text: () => import('./assets-chunks/kategoriak_index_html.mjs').then(m => m.default)},
    'arak/index.html': {size: 692815, hash: '0fa6e55769f718640497fd7b38e85dc967fa8bdff7166a7e9ab921a234457743', text: () => import('./assets-chunks/arak_index_html.mjs').then(m => m.default)},
    'kresz/index.html': {size: 362320, hash: '744628b976d4c7612c5ed9b3102f572c31bb27fad9ccccd5e8f0f83b2c2b82c2', text: () => import('./assets-chunks/kresz_index_html.mjs').then(m => m.default)},
    'oktatok/index.html': {size: 695059, hash: '25eeb8f506196a0eb2d9a466815466bb13d72601ba8dfc2a4fb34478104bf42f', text: () => import('./assets-chunks/oktatok_index_html.mjs').then(m => m.default)},
    'a2-kategoria/index.html': {size: 697140, hash: 'ccd66b3575458e924bcc432e070bb62130711e10705fb362c11e169b92e19c10', text: () => import('./assets-chunks/a2-kategoria_index_html.mjs').then(m => m.default)},
    'tajekoztato/index.html': {size: 691321, hash: '242f93f39cc3073c61ba79cf086971a1a6b5d1c175d95a99284c84b32cc703c6', text: () => import('./assets-chunks/tajekoztato_index_html.mjs').then(m => m.default)},
    'elso-lepes/index.html': {size: 362492, hash: 'ec0d57d9983ca52462c594539db1a092754b7787956af98ca998f614a2593953', text: () => import('./assets-chunks/elso-lepes_index_html.mjs').then(m => m.default)},
    'jarmuvek/index.html': {size: 695330, hash: '2f581996abf00caa3281bce5cfa723060a76462399d59f3b2cdcf9b67abb7c01', text: () => import('./assets-chunks/jarmuvek_index_html.mjs').then(m => m.default)},
    'a-kategoria/index.html': {size: 696947, hash: '8731b035ba7a6168fabe7e9e7c89b6e702a1f5a98a45a574c18b52822a7e03b9', text: () => import('./assets-chunks/a-kategoria_index_html.mjs').then(m => m.default)},
    'a1-kategoria/index.html': {size: 696901, hash: '4512027ecacd77a67b5e51856f4f2c247b099612bcdefbf8aa66b947d162126e', text: () => import('./assets-chunks/a1-kategoria_index_html.mjs').then(m => m.default)},
    'a1-kategoria-b-vel/index.html': {size: 692850, hash: '68f290a2fd19f5b16e8fcc0acbde3363dd8b601e91136c46eef0be4a7ef8f168', text: () => import('./assets-chunks/a1-kategoria-b-vel_index_html.mjs').then(m => m.default)},
    'kapcsolat/index.html': {size: 697881, hash: 'e554aa21be278e3765de747289fefb7aa148815ca4df87869fa790cd72f8d4fc', text: () => import('./assets-chunks/kapcsolat_index_html.mjs').then(m => m.default)},
    'styles-2BUCRLLH.css': {size: 228398, hash: 'FrTkdFyFJCg', text: () => import('./assets-chunks/styles-2BUCRLLH_css.mjs').then(m => m.default)}
  },
};

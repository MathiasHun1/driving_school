
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-PPL3IJEJ.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EHEA73Q6.js"
    ],
    "route": "/arak"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6W5YT5PO.js"
    ],
    "route": "/oktatok"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YZESO4CM.js"
    ],
    "route": "/jarmuvek"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDG2YB3T.js"
    ],
    "route": "/tajekoztato"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KJYLS6RM.js"
    ],
    "route": "/elso-lepes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-APIJZQUB.js"
    ],
    "route": "/a1-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NMCDOKWY.js"
    ],
    "route": "/a2-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GL5JN4YU.js"
    ],
    "route": "/a-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VAL4KWIP.js"
    ],
    "route": "/kresz"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5UJYG6DC.js"
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
    'index.csr.html': {size: 1322, hash: '6e05b894d667093989b08dcb9ff0ae42bc2b85da505eccf7e38f0ea46b02a839', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1211, hash: '1094ee00de55360f8790ee3bbbc221c4f8b403c8aa2aeb54e7d55cc1a90092e8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21230, hash: '78a607c53d845e16b826cfdf74ffda8c5e2316e244444208749397344a9063e7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'elso-lepes/index.html': {size: 13760, hash: '5d962ac8f3e9bf7a0cfb69c719462bb08d698b3ce1a41f6470fdf86ead366125', text: () => import('./assets-chunks/elso-lepes_index_html.mjs').then(m => m.default)},
    'arak/index.html': {size: 21159, hash: 'a32db24be8bc261d4c6465d39196df7e05280b285980cd18ccac22466c5e919d', text: () => import('./assets-chunks/arak_index_html.mjs').then(m => m.default)},
    'kapcsolat/index.html': {size: 16334, hash: '24af30423ddd7c6519ef27e0c5f980e806c129358d52835644cef0accafba280', text: () => import('./assets-chunks/kapcsolat_index_html.mjs').then(m => m.default)},
    'jarmuvek/index.html': {size: 16726, hash: '0456922326a0d22739170080f3c241b5015685a8293db41b2f8ce89ffbdd630b', text: () => import('./assets-chunks/jarmuvek_index_html.mjs').then(m => m.default)},
    'a2-kategoria/index.html': {size: 13315, hash: 'd00393e0ee6498fa12ace19dd8601eb813aecbaa182d0c45d0c2bbdc81b0b381', text: () => import('./assets-chunks/a2-kategoria_index_html.mjs').then(m => m.default)},
    'kresz/index.html': {size: 13594, hash: '0ec52c4e87ef6300a049ac5d6c4d5e7815b37d7b63f73b1d8ee56657d9581023', text: () => import('./assets-chunks/kresz_index_html.mjs').then(m => m.default)},
    'tajekoztato/index.html': {size: 16661, hash: 'a2f8e3ade8d3305b91fb24c5394da58b77ecfb7e85f484c6fd229fc46d80f3d0', text: () => import('./assets-chunks/tajekoztato_index_html.mjs').then(m => m.default)},
    'a1-kategoria/index.html': {size: 13313, hash: '1734d34d6b6809ce2d0d589dffb71b728dc2717e1e5931bef954de676e8b9e38', text: () => import('./assets-chunks/a1-kategoria_index_html.mjs').then(m => m.default)},
    'a-kategoria/index.html': {size: 13325, hash: 'fb06da75a72daa70c6dac6591e9459033abbb10a3cc05f8966ac3e26f6a2ac32', text: () => import('./assets-chunks/a-kategoria_index_html.mjs').then(m => m.default)},
    'oktatok/index.html': {size: 16916, hash: 'a7e47921accaabd1655c218455740e9fa00f2e16e856dc2cf5b8f582b5d13e28', text: () => import('./assets-chunks/oktatok_index_html.mjs').then(m => m.default)},
    'styles-3JK3HPJ3.css': {size: 1425, hash: 'ARnWCx3Bv/4', text: () => import('./assets-chunks/styles-3JK3HPJ3_css.mjs').then(m => m.default)}
  },
};

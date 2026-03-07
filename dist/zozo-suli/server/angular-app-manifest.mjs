
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-5QRXIHMJ.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LX4BKBAS.js"
    ],
    "route": "/arak"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UWDEIP6A.js"
    ],
    "route": "/oktatok"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AWQQNVG7.js"
    ],
    "route": "/jarmuvek"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-53DOP237.js"
    ],
    "route": "/tajekoztato"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4Z7ZXCAF.js"
    ],
    "route": "/kategoriak"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AGUOXTLD.js"
    ],
    "route": "/am-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X5CEJ5TR.js"
    ],
    "route": "/a1-kategoria-b-vel"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-725KRSTQ.js"
    ],
    "route": "/elso-lepes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GJ66AIWG.js"
    ],
    "route": "/a1-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RSDNM4V3.js"
    ],
    "route": "/a2-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-S5L44WXW.js"
    ],
    "route": "/a-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-57C7ZLA3.js"
    ],
    "route": "/kresz"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WOCQNGV.js"
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
    'index.csr.html': {size: 6119, hash: '66fefefe034c48b46bb91eee4b30c98c05cdc0e77840a4aaab9f03af92b38cb6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1208, hash: '3af695b969fad245026a8d7f2041ebfaa560518414d3f020899e4950cafa2eb3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'kategoriak/index.html': {size: 692667, hash: 'cf52d8c84a31756e6d95dbb1ddf63718e2c32fde9574d81a371f2e77c43dd6b5', text: () => import('./assets-chunks/kategoriak_index_html.mjs').then(m => m.default)},
    'index.html': {size: 698766, hash: '276551babeb2ff2637a22b06cdd397dae2528f1d5b2787fecd35d444e5f0a9db', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'am-kategoria/index.html': {size: 696474, hash: '27b2cff6ba0c4bd97a1604a1b39bbf5203ba8131b4ee93eb73c70ebd7d844d5f', text: () => import('./assets-chunks/am-kategoria_index_html.mjs').then(m => m.default)},
    'arak/index.html': {size: 692862, hash: '074d1e2dec93e9794567bda732109600fffd08ed85b934844659b9b6c3c60599', text: () => import('./assets-chunks/arak_index_html.mjs').then(m => m.default)},
    'kresz/index.html': {size: 362367, hash: 'ae48593666ff72b5324b57981599489191e548226069d7c267928dcfba590d25', text: () => import('./assets-chunks/kresz_index_html.mjs').then(m => m.default)},
    'a2-kategoria/index.html': {size: 697177, hash: '57317f9044bf76ed0561eec54f731483af39d83d3b7b22a93c31663e1076fa8b', text: () => import('./assets-chunks/a2-kategoria_index_html.mjs').then(m => m.default)},
    'oktatok/index.html': {size: 695114, hash: 'a3c2109831caf0f336fdcb2c78f9d3294d55359890c18b15d2c14adacfb47f49', text: () => import('./assets-chunks/oktatok_index_html.mjs').then(m => m.default)},
    'tajekoztato/index.html': {size: 691368, hash: '035cdea8a1ec379890bf5c1ee7bab89db2e3bf3571fcc7a0669b019880324c64', text: () => import('./assets-chunks/tajekoztato_index_html.mjs').then(m => m.default)},
    'elso-lepes/index.html': {size: 362539, hash: '3477e7a303c41836a8b84a9306b749182ea1602fbf844af43343ffcbca1d5ae7', text: () => import('./assets-chunks/elso-lepes_index_html.mjs').then(m => m.default)},
    'a-kategoria/index.html': {size: 696996, hash: '0132727eeb8a60d51b0f8eee301575a3c2be8af67be3f58ff28d546798127f80', text: () => import('./assets-chunks/a-kategoria_index_html.mjs').then(m => m.default)},
    'jarmuvek/index.html': {size: 695354, hash: '40a204bfe7838fe5e8b872396ab80a5733687f572bfe74c46c48294c098a5093', text: () => import('./assets-chunks/jarmuvek_index_html.mjs').then(m => m.default)},
    'a1-kategoria/index.html': {size: 696948, hash: 'bbedab82e9e10088e6088080e03ccc80711965fbef0e01a81b9b149e904e41c8', text: () => import('./assets-chunks/a1-kategoria_index_html.mjs').then(m => m.default)},
    'a1-kategoria-b-vel/index.html': {size: 692897, hash: 'bc0ebc8fe33dc29f14f141963c883b9aec8edd09ff90f6b3097d7fb7e9a7ec0d', text: () => import('./assets-chunks/a1-kategoria-b-vel_index_html.mjs').then(m => m.default)},
    'kapcsolat/index.html': {size: 697633, hash: 'dd6e2b2a5af48c7d5daaa90f1d93d7371dd407fc4434dc1a9db90f911d8ae54d', text: () => import('./assets-chunks/kapcsolat_index_html.mjs').then(m => m.default)},
    'styles-2BUCRLLH.css': {size: 228398, hash: 'FrTkdFyFJCg', text: () => import('./assets-chunks/styles-2BUCRLLH_css.mjs').then(m => m.default)}
  },
};

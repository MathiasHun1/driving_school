
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-CLGHI4ZO.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SMHLNZOI.js"
    ],
    "route": "/arak"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UIZQ7BOW.js"
    ],
    "route": "/oktatok"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HXFVE77S.js"
    ],
    "route": "/jarmuvek"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AVUITSDC.js"
    ],
    "route": "/tajekoztato"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UHHI742K.js"
    ],
    "route": "/kategoriak"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BRQCKFU5.js"
    ],
    "route": "/am-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R553UBJW.js"
    ],
    "route": "/a1-kategoria-b-vel"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZZNVBSNK.js"
    ],
    "route": "/elso-lepes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7B6XPLR6.js"
    ],
    "route": "/a1-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RBJAQOLB.js"
    ],
    "route": "/a2-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DE62CE5Q.js"
    ],
    "route": "/a-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6O6QN35O.js"
    ],
    "route": "/kresz"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NTO6CLLE.js"
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
    'index.csr.html': {size: 6122, hash: '62c1dccca98a5dedac1b7bab9e7a3afece94085595306a7ac85a4efae86eb73a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1211, hash: '2213f5cb706ead4a80284827d1c0eb476fb610ea5e4d2a4856da77d8f1b5bd0c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'arak/index.html': {size: 695327, hash: '5046f65b877257cfc9248ac90f5cb1913fc3a4ef559459361cb7f00537927a13', text: () => import('./assets-chunks/arak_index_html.mjs').then(m => m.default)},
    'index.html': {size: 697547, hash: '497f4b0e971f6f5b2c73ab63a4efa5beabc980ae762070163637e09c5325a97f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'kategoriak/index.html': {size: 691404, hash: 'fd2672bbb8329bfe0195955e1f6d91cee323dad5adec9e5ba84396b9a91107cc', text: () => import('./assets-chunks/kategoriak_index_html.mjs').then(m => m.default)},
    'am-kategoria/index.html': {size: 695211, hash: 'eae4b2eaf5c7779cef375a04558660abe9e46988b47dd1f11c89ebd8ca5c4c21', text: () => import('./assets-chunks/am-kategoria_index_html.mjs').then(m => m.default)},
    'kresz/index.html': {size: 361302, hash: '477d678d9aa6924bf29b66f87de66c530ce55aee5defe3e772edea99426f87cb', text: () => import('./assets-chunks/kresz_index_html.mjs').then(m => m.default)},
    'a2-kategoria/index.html': {size: 695914, hash: 'c8b58408b1f27d6c8e5673bcc0f845bc8e3526f8de3c86cd5d3b653ffe586322', text: () => import('./assets-chunks/a2-kategoria_index_html.mjs').then(m => m.default)},
    'tajekoztato/index.html': {size: 690130, hash: '2b0a28c6c8885454781a1c0587ed7e80eb486dc039badbd79dd0d6baf59e8633', text: () => import('./assets-chunks/tajekoztato_index_html.mjs').then(m => m.default)},
    'oktatok/index.html': {size: 690353, hash: 'afc1d29bbb722b84c5a7056eb87fb01c323715875185da57613cef6fa0690827', text: () => import('./assets-chunks/oktatok_index_html.mjs').then(m => m.default)},
    'elso-lepes/index.html': {size: 361474, hash: '5900e56bd9fa41003fc1f7436ce7f9c9db0b66c8476cbe6cc07f7f3f257cf562', text: () => import('./assets-chunks/elso-lepes_index_html.mjs').then(m => m.default)},
    'a-kategoria/index.html': {size: 695733, hash: '25c70fb3f2d9424baffde4c66e3723576351abed03b78143e6aa244bf2ed95d3', text: () => import('./assets-chunks/a-kategoria_index_html.mjs').then(m => m.default)},
    'a1-kategoria/index.html': {size: 695687, hash: 'd40f50f22adc416e822763c4c3e666519948602c51041c6e985753564157a0b6', text: () => import('./assets-chunks/a1-kategoria_index_html.mjs').then(m => m.default)},
    'jarmuvek/index.html': {size: 694497, hash: '263988160f41a0513a8c122c71f50885144110a187cecfc35662a62794c82637', text: () => import('./assets-chunks/jarmuvek_index_html.mjs').then(m => m.default)},
    'a1-kategoria-b-vel/index.html': {size: 691637, hash: 'b52de27a10d6addcc782d617457a99553db3f23beca30fc33566249eea6f1e69', text: () => import('./assets-chunks/a1-kategoria-b-vel_index_html.mjs').then(m => m.default)},
    'kapcsolat/index.html': {size: 690610, hash: '471982d8f72d8ee4399d3e795ad735de85e2467e69caee27a975fef2fd932bbc', text: () => import('./assets-chunks/kapcsolat_index_html.mjs').then(m => m.default)},
    'styles-XNUJFLPQ.css': {size: 228281, hash: 'gy+oyuGFkNs', text: () => import('./assets-chunks/styles-XNUJFLPQ_css.mjs').then(m => m.default)}
  },
};

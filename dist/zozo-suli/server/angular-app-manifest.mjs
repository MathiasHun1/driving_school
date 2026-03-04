
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-F4MQYLJ2.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IE43MMBH.js"
    ],
    "route": "/arak"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-T45FS2ST.js"
    ],
    "route": "/oktatok"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E6QQI66D.js"
    ],
    "route": "/jarmuvek"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QM25YTT3.js"
    ],
    "route": "/tajekoztato"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R6CPWI74.js"
    ],
    "route": "/kategoriak"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CW5CVZ73.js"
    ],
    "route": "/am-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IBUP5FGY.js"
    ],
    "route": "/a1-kategoria-b-vel"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WSYOBQ6R.js"
    ],
    "route": "/elso-lepes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZX5N65ZQ.js"
    ],
    "route": "/a1-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4JJEB2DU.js"
    ],
    "route": "/a2-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6T2I73RI.js"
    ],
    "route": "/a-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2JSNOH6L.js"
    ],
    "route": "/kresz"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ODEYQMAU.js"
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
    'index.csr.html': {size: 1322, hash: 'dcdb26219a633879f0ddd5dce5dd3cfdbe38f4919d5d1f51665547fdeb44da67', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1211, hash: '32fd6527bdeb0daf721c881c829faa3efce1264b52561b4dcf65c4a48e1603b7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'kategoriak/index.html': {size: 17931, hash: '52cafff01ebd0244cdbca034c08dbba9ff350866f562be53f96b5540b56358f9', text: () => import('./assets-chunks/kategoriak_index_html.mjs').then(m => m.default)},
    'index.html': {size: 21935, hash: '1e0f7caaeb6509d2b9b883ea92be07c7834d58719f0adaffbf809e787948da37', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'arak/index.html': {size: 21864, hash: 'c1896a3e9abe29673e2ec3140765442e1905d9aef1141f24d393d3d7778fbf13', text: () => import('./assets-chunks/arak_index_html.mjs').then(m => m.default)},
    'am-kategoria/index.html': {size: 21113, hash: '9d0e4b3e423799ddec9fbb3499432fb3e5414ad760bf16be63c192b469825882', text: () => import('./assets-chunks/am-kategoria_index_html.mjs').then(m => m.default)},
    'a2-kategoria/index.html': {size: 21814, hash: '5de78a25613700012f8e4e455d371ef90a470fb859f6a105a9879f80a2013acb', text: () => import('./assets-chunks/a2-kategoria_index_html.mjs').then(m => m.default)},
    'kresz/index.html': {size: 14299, hash: 'e1b3ac4b32d64bbc641a9784ff17e46caf0c9720f9c9e1d783894f752474e68c', text: () => import('./assets-chunks/kresz_index_html.mjs').then(m => m.default)},
    'oktatok/index.html': {size: 20431, hash: 'c411c5d3bb3cef609e09180a86abcfdd1eaacbcce3e26465a5878060088bcaf9', text: () => import('./assets-chunks/oktatok_index_html.mjs').then(m => m.default)},
    'elso-lepes/index.html': {size: 14467, hash: '3fcea6f169a631422fcda932a0b58c9ae8e6ac6e9fb26fae2a7b2c1291d1d369', text: () => import('./assets-chunks/elso-lepes_index_html.mjs').then(m => m.default)},
    'tajekoztato/index.html': {size: 20284, hash: 'f520c2c936f86f06f7ace17b5645e0278121d5ec2b44b60a141ed0eb419991ce', text: () => import('./assets-chunks/tajekoztato_index_html.mjs').then(m => m.default)},
    'a-kategoria/index.html': {size: 21627, hash: '2a2e1c7e4dcf7bb219b8c75bd94f5a163a700ada979656d4e4c7bced58b16797', text: () => import('./assets-chunks/a-kategoria_index_html.mjs').then(m => m.default)},
    'a1-kategoria/index.html': {size: 21595, hash: 'dc58188f377e02ccdb8b83e3fb1a46e719c27dea1f24d8cb606e8485a1efc72f', text: () => import('./assets-chunks/a1-kategoria_index_html.mjs').then(m => m.default)},
    'jarmuvek/index.html': {size: 20946, hash: '10c0ee4e20ae56143d3fd03db8ae2dd1b546250a4c82b6ee43de364dcd1069cf', text: () => import('./assets-chunks/jarmuvek_index_html.mjs').then(m => m.default)},
    'kapcsolat/index.html': {size: 17039, hash: 'd890d90524abb4b1bf01344a5314f710580317a6208315fcf8f5187903c3c538', text: () => import('./assets-chunks/kapcsolat_index_html.mjs').then(m => m.default)},
    'a1-kategoria-b-vel/index.html': {size: 21170, hash: 'a54ddd48f0639e4a03645864b8374d472c32db2a2d9ef982dba2437e6c0ba688', text: () => import('./assets-chunks/a1-kategoria-b-vel_index_html.mjs').then(m => m.default)},
    'styles-3JK3HPJ3.css': {size: 1425, hash: 'ARnWCx3Bv/4', text: () => import('./assets-chunks/styles-3JK3HPJ3_css.mjs').then(m => m.default)}
  },
};

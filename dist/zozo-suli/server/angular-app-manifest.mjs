
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
      "chunk-EZLCVN3V.js"
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
      "chunk-6SXMESDD.js"
    ],
    "route": "/jarmuvek"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QTNW7GCO.js"
    ],
    "route": "/tajekoztato"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSDWOKTB.js"
    ],
    "route": "/kategoriak"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B76M75BQ.js"
    ],
    "route": "/am-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YIWUQTAP.js"
    ],
    "route": "/a1-kategoria-b-vel"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OFZI236Q.js"
    ],
    "route": "/elso-lepes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GR5M643R.js"
    ],
    "route": "/a1-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UHODVZCH.js"
    ],
    "route": "/a2-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HUHZBZLQ.js"
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
      "chunk-IH6ZU5QP.js"
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
    'index.csr.html': {size: 1322, hash: '63a3f8fac11d0b94173f852380355ee4d00e261461937da41b05c7d183e8b06a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1211, hash: 'd9ad3aeb2286b12a5f5b4c94457491a1cd319208d08441b9926f7d94255a163a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'kategoriak/index.html': {size: 17588, hash: '51ec145bab8cee86243e9ab4e8bb0d100b1c9006f57442772bbde3cb144dfe7c', text: () => import('./assets-chunks/kategoriak_index_html.mjs').then(m => m.default)},
    'am-kategoria/index.html': {size: 20770, hash: '42344b63d670f31f81af5be9a35fc1112048772cb1b696913ac80c7096b439eb', text: () => import('./assets-chunks/am-kategoria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 21592, hash: '786b59a61ecafd6ab398a119ebb99219e40570bb86288edebe1e2bfc548c181d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'arak/index.html': {size: 21521, hash: '798cf497a8e0c3417a464cc8495ead8256696df1440bd78b1e14822b50ca4cc9', text: () => import('./assets-chunks/arak_index_html.mjs').then(m => m.default)},
    'oktatok/index.html': {size: 20088, hash: 'baf35c1574926c9d43a151d8aea830fb78cc687229d460bf07103119e3f4a698', text: () => import('./assets-chunks/oktatok_index_html.mjs').then(m => m.default)},
    'kresz/index.html': {size: 13956, hash: 'f306d924a387a79be891322ea34405cb39a2fc6828ca38a5faabd690b58f7c73', text: () => import('./assets-chunks/kresz_index_html.mjs').then(m => m.default)},
    'a2-kategoria/index.html': {size: 21471, hash: '8ee805f81e4c6838cf6b070581b585df4befe14bf8aab29b8d3481bbb5c7c248', text: () => import('./assets-chunks/a2-kategoria_index_html.mjs').then(m => m.default)},
    'tajekoztato/index.html': {size: 19941, hash: 'c999c1f2b75eaffbaf1dc8b7214f3fc71db3866e4e7677e8c8452886295b4910', text: () => import('./assets-chunks/tajekoztato_index_html.mjs').then(m => m.default)},
    'elso-lepes/index.html': {size: 14122, hash: '7d361ed109906330fa4d5a31e59f01739068cd5f85327553dbfd5d11b9f72606', text: () => import('./assets-chunks/elso-lepes_index_html.mjs').then(m => m.default)},
    'a-kategoria/index.html': {size: 21294, hash: '1f5d98af950245661429ebf9ac70b6927d69949cfece232b2d555967ef6f91b2', text: () => import('./assets-chunks/a-kategoria_index_html.mjs').then(m => m.default)},
    'jarmuvek/index.html': {size: 20605, hash: '9d738272fe66ebe2678733f86a19851464229977701e816c3b9e7e9df110f9b4', text: () => import('./assets-chunks/jarmuvek_index_html.mjs').then(m => m.default)},
    'a1-kategoria/index.html': {size: 21242, hash: 'f462a33a672a0efe8005085be50340f93293f634ba607bc3c7cd4c2f834bdce9', text: () => import('./assets-chunks/a1-kategoria_index_html.mjs').then(m => m.default)},
    'kapcsolat/index.html': {size: 16696, hash: '968c1a48eaaff8c88be15369b76512d290ad7f5e9e94db331fba02e6adf2f14c', text: () => import('./assets-chunks/kapcsolat_index_html.mjs').then(m => m.default)},
    'a1-kategoria-b-vel/index.html': {size: 20821, hash: '48d14a8b171b9d0c791a99e601999f8974a0083503f2d5f0e5a37d3bde9f94e9', text: () => import('./assets-chunks/a1-kategoria-b-vel_index_html.mjs').then(m => m.default)},
    'styles-3JK3HPJ3.css': {size: 1425, hash: 'ARnWCx3Bv/4', text: () => import('./assets-chunks/styles-3JK3HPJ3_css.mjs').then(m => m.default)}
  },
};

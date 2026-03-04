
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
      "chunk-PKOKDMIT.js"
    ],
    "route": "/am-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VFF4WQRQ.js"
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
      "chunk-HHW2T6U2.js"
    ],
    "route": "/a1-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IFKUAQIK.js"
    ],
    "route": "/a2-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YCRQCP2Z.js"
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
    'index.csr.html': {size: 1322, hash: '95d00da972b59a935653607b4f87ad6eaa16eb8dad9ae8fc37a4574904a78cbd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1211, hash: '78196be322627658e226b3c8edc1178d0e3da6723388056d473982d5263af36f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'am-kategoria/index.html': {size: 20170, hash: '1a5e0eedba469e55ffef44c71924708601835b1114bdf10b1a2bdbc9b4f0438c', text: () => import('./assets-chunks/am-kategoria_index_html.mjs').then(m => m.default)},
    'arak/index.html': {size: 21521, hash: '2a5e106665ef0fa112f5c2822b0ddef55b80de7f3f83c0536d87fb7ffc09548e', text: () => import('./assets-chunks/arak_index_html.mjs').then(m => m.default)},
    'index.html': {size: 21592, hash: '939a594aafcce1f141a6c65217986a844ed84775690f8af9568e4f53a2413a9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'a2-kategoria/index.html': {size: 20881, hash: 'e54e84e9bca5ba53a0426e7b9f42c3cbee8a25912e943ed8d9ac8c56fc29344b', text: () => import('./assets-chunks/a2-kategoria_index_html.mjs').then(m => m.default)},
    'kresz/index.html': {size: 13956, hash: '2be58064c66b209a644238ef5042975f51fec71325cf02850296dae00ad0d369', text: () => import('./assets-chunks/kresz_index_html.mjs').then(m => m.default)},
    'kategoriak/index.html': {size: 17588, hash: 'd249599a7a3c803c4a379747b83c88f02d0d6ed50c42b61a05b2e001073fb11c', text: () => import('./assets-chunks/kategoriak_index_html.mjs').then(m => m.default)},
    'oktatok/index.html': {size: 20088, hash: '0b521c4b6a641cb039f4d828adb1f6a8e7767cf9db338009dbcaa447996b6a9d', text: () => import('./assets-chunks/oktatok_index_html.mjs').then(m => m.default)},
    'tajekoztato/index.html': {size: 19943, hash: '99db763d0fd8cf4ec2c9e25f95d8bef38ab6494a48274891c5ea795378336a79', text: () => import('./assets-chunks/tajekoztato_index_html.mjs').then(m => m.default)},
    'elso-lepes/index.html': {size: 14122, hash: 'af53ac56ebd4c3edb6a3e94d5e698d3c0ee3f6c48f463757965524e6a07367f3', text: () => import('./assets-chunks/elso-lepes_index_html.mjs').then(m => m.default)},
    'a-kategoria/index.html': {size: 20685, hash: '68e0fde8aa50b8992e95475635fa8bf94a945843ed564c6b1fa667f53fb1662e', text: () => import('./assets-chunks/a-kategoria_index_html.mjs').then(m => m.default)},
    'jarmuvek/index.html': {size: 20603, hash: '60f3966c72df146b775cd5da79174de5579cb5e13bd2fb7519e4ba9e9eb05370', text: () => import('./assets-chunks/jarmuvek_index_html.mjs').then(m => m.default)},
    'a1-kategoria/index.html': {size: 20652, hash: '8fc102b87409621bece496fa265bcbd9d22361f6bffe1457981bbab0f7d32333', text: () => import('./assets-chunks/a1-kategoria_index_html.mjs').then(m => m.default)},
    'a1-kategoria-b-vel/index.html': {size: 20303, hash: '4e94b06ae888777e9a9bb7167b50e58db175b2bbb64aacf2095e488aa7020aed', text: () => import('./assets-chunks/a1-kategoria-b-vel_index_html.mjs').then(m => m.default)},
    'kapcsolat/index.html': {size: 16696, hash: 'eef9f6ce5fea4c9dd7655bae5d723f415cc8402ec97ae23cadcdd306f6cf0746', text: () => import('./assets-chunks/kapcsolat_index_html.mjs').then(m => m.default)},
    'styles-3JK3HPJ3.css': {size: 1425, hash: 'ARnWCx3Bv/4', text: () => import('./assets-chunks/styles-3JK3HPJ3_css.mjs').then(m => m.default)}
  },
};

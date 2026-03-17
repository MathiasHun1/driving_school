
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-TBU7YN5D.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EJ7NXRHB.js"
    ],
    "route": "/arak"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WYC76KUT.js"
    ],
    "route": "/oktatok"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WF26HL4E.js"
    ],
    "route": "/jarmuvek"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZTQSJXJN.js"
    ],
    "route": "/tajekoztato"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFKBP2OH.js"
    ],
    "route": "/kategoriak"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HZKQ7XP6.js"
    ],
    "route": "/am-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RR3IJG76.js"
    ],
    "route": "/a1-kategoria-b-vel"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-M4QLPHUW.js"
    ],
    "route": "/elso-lepes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7HKLDSXT.js"
    ],
    "route": "/a1-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WXFL3H2.js"
    ],
    "route": "/a2-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NE5ZBFUZ.js"
    ],
    "route": "/a-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BPATQ4O5.js"
    ],
    "route": "/kresz"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TSKP7CIB.js"
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
    'index.csr.html': {size: 6119, hash: 'b1b1d6f97cf5192d251943c858c41d6a67a13e790920ddb2979cade93f512faa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1208, hash: '59dbfca16916d74ba5b5f346fc6b11207d2dff410cd0b99812b223884f0178a6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 695177, hash: '0e9aa5b157217557fc4eaae70ed6d3407509c364b832a4362229ad6a01103fa6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'arak/index.html': {size: 689273, hash: 'ed5ab5a42524aff3e4830e063e38b3c2f22974352d8201f5167d70413b69fed3', text: () => import('./assets-chunks/arak_index_html.mjs').then(m => m.default)},
    'kategoriak/index.html': {size: 689078, hash: '0ba1f4cd3b0c97f8ae192d0a4d2024782c6fc51930df873218772c0b866f1d9b', text: () => import('./assets-chunks/kategoriak_index_html.mjs').then(m => m.default)},
    'am-kategoria/index.html': {size: 692885, hash: '913d5cfc258e53c8f54590efb0b08786b2e3c6ceda476b43b95d2526e2aef3ce', text: () => import('./assets-chunks/am-kategoria_index_html.mjs').then(m => m.default)},
    'kresz/index.html': {size: 358778, hash: '75feb7640acee5af417f0d1836ecfc17015d58d2a83aa454b56d0a087cf5d7b6', text: () => import('./assets-chunks/kresz_index_html.mjs').then(m => m.default)},
    'a2-kategoria/index.html': {size: 693588, hash: '5c74e569dea6c7ce4e932a5c972fec402b629a28b249d4d174296ae5b23faec5', text: () => import('./assets-chunks/a2-kategoria_index_html.mjs').then(m => m.default)},
    'oktatok/index.html': {size: 691517, hash: '3c6d240af65a96ad54dc99263f3300d6cc1de96014a281fdd95f9c0733393375', text: () => import('./assets-chunks/oktatok_index_html.mjs').then(m => m.default)},
    'tajekoztato/index.html': {size: 687785, hash: 'b98341b94a73ef03901fc0ae92f17379de799112504c007054dad0ad80f967a6', text: () => import('./assets-chunks/tajekoztato_index_html.mjs').then(m => m.default)},
    'elso-lepes/index.html': {size: 686818, hash: '4de8b59db7865114fe1c49ae50144a91c09ceba398c0afad2296084ce212b63c', text: () => import('./assets-chunks/elso-lepes_index_html.mjs').then(m => m.default)},
    'a-kategoria/index.html': {size: 693407, hash: '3fb15065d8e8eb7125f89cd834ad049f9125398ee8b9e1a3e1de7c59e7923a53', text: () => import('./assets-chunks/a-kategoria_index_html.mjs').then(m => m.default)},
    'jarmuvek/index.html': {size: 692252, hash: '4121e8fb54e3f264d4faab6a8b64013581a51b4196fe7ec7db415a6f3e88fda3', text: () => import('./assets-chunks/jarmuvek_index_html.mjs').then(m => m.default)},
    'a1-kategoria/index.html': {size: 693367, hash: 'a4f41e034687fe4696408ac7da82b077c9f1a2e9166e7098a1051d460d7155a9', text: () => import('./assets-chunks/a1-kategoria_index_html.mjs').then(m => m.default)},
    'a1-kategoria-b-vel/index.html': {size: 689310, hash: 'b9688e45588c0f9b71eafec14df65bb70357096c596913aa328afb4492309946', text: () => import('./assets-chunks/a1-kategoria-b-vel_index_html.mjs').then(m => m.default)},
    'kapcsolat/index.html': {size: 690828, hash: 'da27fabe2c196382a158422b4ca10e2d65042587f563ddf56382fbdbc22f9606', text: () => import('./assets-chunks/kapcsolat_index_html.mjs').then(m => m.default)},
    'styles-2BUCRLLH.css': {size: 228398, hash: 'FrTkdFyFJCg', text: () => import('./assets-chunks/styles-2BUCRLLH_css.mjs').then(m => m.default)}
  },
};

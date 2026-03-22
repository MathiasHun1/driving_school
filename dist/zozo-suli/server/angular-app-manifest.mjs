
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-XXOI62BO.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SEQ324SZ.js"
    ],
    "route": "/arak"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-F36QYCIW.js"
    ],
    "route": "/oktatok"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2ZDN35NT.js"
    ],
    "route": "/jarmuvek"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RYHDXNKF.js"
    ],
    "route": "/tajekoztato"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4XNUT3LD.js"
    ],
    "route": "/kategoriak"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QFZAUG4I.js"
    ],
    "route": "/am-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GH4KOU7B.js"
    ],
    "route": "/a1-kategoria-b-vel"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E4UQBRLG.js"
    ],
    "route": "/elso-lepes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H6KMDHJT.js"
    ],
    "route": "/a1-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4RSUTQDH.js"
    ],
    "route": "/a2-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MN7SZAIM.js"
    ],
    "route": "/a-kategoria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UM7XH5ZH.js"
    ],
    "route": "/kresz"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CLLCB3ZR.js"
    ],
    "route": "/kapcsolat"
  },
  {
    "renderMode": 1,
    "redirectTo": "/oktatok",
    "route": "/about"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-KG2PYBWL.js"
    ],
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6363, hash: '22098e6821a0b18fa7a835a0da91d01b76280ac1e23edaa9d6f1d0201613491c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1452, hash: '3312ecd3aab1b5b885c0daba6c2eb775bdc3321f99744969a0befbfc9722d425', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 697106, hash: 'a50aa172327fbc45104973a238870afc46c4944275819c2fc9050e35197e2066', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'am-kategoria/index.html': {size: 695032, hash: '94beecfe2e68027ed2e6fbd596e9fbe85df61e2e03a5f1214b808d97d0147f8d', text: () => import('./assets-chunks/am-kategoria_index_html.mjs').then(m => m.default)},
    'arak/index.html': {size: 691442, hash: '0e3d0691da2fe683407286e2e481eb8fc901ed1551fea34fd8897d1ff3d270ec', text: () => import('./assets-chunks/arak_index_html.mjs').then(m => m.default)},
    'kategoriak/index.html': {size: 687518, hash: 'e0fbae7ce03a1d2f1866038e57cbccbf9315a28fe074f5f2adf2261dda3103f6', text: () => import('./assets-chunks/kategoriak_index_html.mjs').then(m => m.default)},
    'a2-kategoria/index.html': {size: 695751, hash: '63be228516ca3cec5cc0f33f4e8ed33e059a0b8d62e44ee4c5dd1166d9242319', text: () => import('./assets-chunks/a2-kategoria_index_html.mjs').then(m => m.default)},
    'kresz/index.html': {size: 360929, hash: 'e04d47c96e8d11f3d722f9445e41d00f14bd7f64dd61c80dab67dab4564583a8', text: () => import('./assets-chunks/kresz_index_html.mjs').then(m => m.default)},
    'oktatok/index.html': {size: 693775, hash: '390ee3efebf89ac3c01931cb5d4f5abf30af86fd0235a4ee3a0b36dc1743f00c', text: () => import('./assets-chunks/oktatok_index_html.mjs').then(m => m.default)},
    'tajekoztato/index.html': {size: 690026, hash: 'e21ebb598fee4e1206533e3fd12e74eec0632480bc6141947090108da58c2f64', text: () => import('./assets-chunks/tajekoztato_index_html.mjs').then(m => m.default)},
    'elso-lepes/index.html': {size: 692603, hash: '5059891053f1275534d26bbf88ab526e85c440683fae3c34df06d9187f9f8704', text: () => import('./assets-chunks/elso-lepes_index_html.mjs').then(m => m.default)},
    'a-kategoria/index.html': {size: 695597, hash: '91f22568da162009fdf5c96bd26e844008980298ec0add205b4a7fc1b511531e', text: () => import('./assets-chunks/a-kategoria_index_html.mjs').then(m => m.default)},
    'jarmuvek/index.html': {size: 694467, hash: '9742ecfc82f0badce479689f8bdc71cde2cf41e1cad333933855b4e90211464b', text: () => import('./assets-chunks/jarmuvek_index_html.mjs').then(m => m.default)},
    'a1-kategoria/index.html': {size: 695534, hash: '7bb3992afed4bab7d15fdd217e1c2cca67e7645b7112cb217eeda8e4dae7f4a6', text: () => import('./assets-chunks/a1-kategoria_index_html.mjs').then(m => m.default)},
    'a1-kategoria-b-vel/index.html': {size: 691493, hash: 'f88dd1ced90640aaaf6b423a40baffa4e317d34e192a19de9c9da2c9b030d4f3', text: () => import('./assets-chunks/a1-kategoria-b-vel_index_html.mjs').then(m => m.default)},
    'kapcsolat/index.html': {size: 692993, hash: 'bb056e748cb31a66b5901f45accc5399277312a76844db93b681517b17b3ff11', text: () => import('./assets-chunks/kapcsolat_index_html.mjs').then(m => m.default)},
    'styles-2BUCRLLH.css': {size: 228398, hash: 'FrTkdFyFJCg', text: () => import('./assets-chunks/styles-2BUCRLLH_css.mjs').then(m => m.default)}
  },
};

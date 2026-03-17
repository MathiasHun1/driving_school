
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
      "chunk-HHML4QX7.js"
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
      "chunk-DAKDSAIU.js"
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
      "chunk-Q3TYJ5UU.js"
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
    'index.csr.html': {size: 6119, hash: 'ecaf80671cad4b2e37e3562a8c12c59a646ee5b1f0053fffa65a72c3a20ca7f4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1208, hash: '5bb09c741a641a9146cd8d6ac33148b303eeeafa7fc48b9911ff39d8094c01e4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 695123, hash: '33b76edf40ce6635c32ef059a0a4aa1e74accf4fc56beed70ba2581165ed7c02', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'am-kategoria/index.html': {size: 692831, hash: '2c8622e27f8db5daff3157c8e12f2be22141e86daf64fba63dd1263753dae82b', text: () => import('./assets-chunks/am-kategoria_index_html.mjs').then(m => m.default)},
    'kategoriak/index.html': {size: 689024, hash: 'b7fa0527b0c3f3585e18d04d739198f04ddc843c7bb413d96cb114b40d29622e', text: () => import('./assets-chunks/kategoriak_index_html.mjs').then(m => m.default)},
    'arak/index.html': {size: 689219, hash: 'd07380ff601f5e461683ea9456a5febe3404b43acc06f656b4dd9035a018d353', text: () => import('./assets-chunks/arak_index_html.mjs').then(m => m.default)},
    'kresz/index.html': {size: 358728, hash: '2e5c3977b7a2775989a39a0a8dd4309f9d586d4603185fa1a11b182e7c2cf3db', text: () => import('./assets-chunks/kresz_index_html.mjs').then(m => m.default)},
    'oktatok/index.html': {size: 691463, hash: '4ef8202edb6e391b0586b66bed1c338f799daa2391d75f82b4f87b1c9da05651', text: () => import('./assets-chunks/oktatok_index_html.mjs').then(m => m.default)},
    'a2-kategoria/index.html': {size: 693534, hash: 'de9154885c03dc29641b4a57d0572f6c3bf41e73d812b80af21dc681801ac1e5', text: () => import('./assets-chunks/a2-kategoria_index_html.mjs').then(m => m.default)},
    'tajekoztato/index.html': {size: 687725, hash: 'e956ee64220be5e510dc20797172b3cbc00901b4f306c805a095a494fc449f80', text: () => import('./assets-chunks/tajekoztato_index_html.mjs').then(m => m.default)},
    'elso-lepes/index.html': {size: 686772, hash: '233efcc4c5d3dd876b799ccc2399866c31ee817e03e10a38905feec81b816090', text: () => import('./assets-chunks/elso-lepes_index_html.mjs').then(m => m.default)},
    'jarmuvek/index.html': {size: 692200, hash: '7fe3e0bb8c4552adbff6c99bd674661920faa26cc3c854841ea3e3c0c4d34a3b', text: () => import('./assets-chunks/jarmuvek_index_html.mjs').then(m => m.default)},
    'a-kategoria/index.html': {size: 693351, hash: 'c8f6c9514832b17cf3d82e7661edc578319742c64828def96a3af050b34af670', text: () => import('./assets-chunks/a-kategoria_index_html.mjs').then(m => m.default)},
    'a1-kategoria/index.html': {size: 693305, hash: '39e1b4e68549721388af2cd106ff910d410b2bb4dba85eeb7ffcc8d07786d223', text: () => import('./assets-chunks/a1-kategoria_index_html.mjs').then(m => m.default)},
    'a1-kategoria-b-vel/index.html': {size: 689262, hash: 'c8293ade81d071dde1fff93699af393a5d9e584d2960d5d2bbdc946b93dbcd6f', text: () => import('./assets-chunks/a1-kategoria-b-vel_index_html.mjs').then(m => m.default)},
    'kapcsolat/index.html': {size: 690774, hash: '446822940f3524e868ab31a91f8906365e7f982eebb58cfc1527ff86a41717a1', text: () => import('./assets-chunks/kapcsolat_index_html.mjs').then(m => m.default)},
    'styles-2BUCRLLH.css': {size: 228398, hash: 'FrTkdFyFJCg', text: () => import('./assets-chunks/styles-2BUCRLLH_css.mjs').then(m => m.default)}
  },
};

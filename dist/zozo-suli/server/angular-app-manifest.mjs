
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZFJ4T64J.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XT4OG4FC.js"
    ],
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
    'index.csr.html': {size: 892, hash: '1251b621a5aa51eeb503783cc14880af3d854ae442d2ea623a5fd2191288bf5c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1058, hash: 'cd1e4deba80022ede7cfa9b7dc22ea5f7fe57f959d6492873092b2ba6fea4f0f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 23340, hash: '39320fd5a99c9c3c42e01297f4337215289cdb0358ca1ea037fb8dc3c67e1a92', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 30991, hash: 'fc285c817b667794776003ffdcf753d4bcb348dadd84ead3d0da6c7a574c229a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CA6AKGQ2.css': {size: 263, hash: 'yqulco3HY9Y', text: () => import('./assets-chunks/styles-CA6AKGQ2_css.mjs').then(m => m.default)}
  },
};

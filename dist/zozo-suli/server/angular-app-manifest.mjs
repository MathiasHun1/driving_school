
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-JXT3VIMI.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NGC6R4FA.js"
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
    'index.csr.html': {size: 969, hash: '49e1019801ddf97c13c0ebcb76ea48f564937a7d87ce98e7e9031d4e99319c65', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1058, hash: 'a5c89524408e1600cd05249c404dc28a9b140b660908da25d8e294b4c919b2fd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 25028, hash: '4c1b4f3a8b02501108006ff0a283ec65e887313937da464ac2ec45a78dfd98c5', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 32545, hash: '8224f0642f6a83e723f38098650066056aaab8172b175e9c955386128f967768', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6GOLTFSE.css': {size: 342, hash: 'nVjsfEMHHSQ', text: () => import('./assets-chunks/styles-6GOLTFSE_css.mjs').then(m => m.default)}
  },
};

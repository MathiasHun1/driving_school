
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
    'index.csr.html': {size: 969, hash: 'f08d616830a1713e1bf959b057a01b24ed1aecb126bbbacd7711489605c0b383', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1058, hash: '6036fef9058a212f5535a781c464829887c5a0edf4bab6ddebd5e22548f8cd64', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 25045, hash: '9488e07e868b743b73c04f6cbffe48880d285051bcc0ec7fa8b11c14e44645f4', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 32545, hash: 'c41fd9416a2e0df26e1f9a5ed051d0284b6995c2fa2532823b41ce6305f8eb32', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6GOLTFSE.css': {size: 342, hash: 'nVjsfEMHHSQ', text: () => import('./assets-chunks/styles-6GOLTFSE_css.mjs').then(m => m.default)}
  },
};

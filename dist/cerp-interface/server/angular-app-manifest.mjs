
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CARO3W7F.js"
    ],
    "route": "/auth"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 749, hash: 'fa7da4a53bd6bf74a13f175cd9666e38ff5f61dc510179a66f7a6294b96813e6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1112, hash: '12a56853fce0e8ee304c05fbd021f1b3d7c60687f1d90f94cf7a233f3791165d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 2983, hash: '381079eb8272ecef7767ba870c6fe784f383992cc2ad597f248e4f1b146f3810', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'index.html': {size: 2851, hash: '58c14bf9d18f8bdad68593bca90dc13d77a7421e2c6319ecdd54fccf98c64d0a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-2ATS7KEB.css': {size: 25, hash: 's97pOsClilc', text: () => import('./assets-chunks/styles-2ATS7KEB_css.mjs').then(m => m.default)}
  },
};

import pxToViewPort from 'postcss-px-to-viewport';
const config = {
  treeShaking: true,
  routes: [
    {
      path: '/',
      // component: '../layouts/BasicLayout',
      routes: [
        {
          path: '/',
          component: '../pages/index',
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          hmr: true,
        },
        dynamicImport: {
          webpackChunkName: true,
        },
        title: 'dream',
        dll: true,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
        hd: true,
        fastClick: true,
      },
    ],
  ],
  proxy: {
    '/api': {
      // target: 'https://sc.peiyou.eaydu.com/api',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
      secure: false,
    },
  },
  extraPostCSSPlugins: [
    pxToViewPort({
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
    }),
  ],
  publicPath: '/',
  base: '/',
  // targets: {
  //   ie: 9,
  // },
  history: 'hash',
  runtimePublicPath: true,
  hash: true,
};
export default config;


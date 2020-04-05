const {
  override,
  fixBabelImports,
  overrideDevServer,
  addPostcssPlugins,
  addLessLoader,
  addWebpackAlias,
  addDecoratorsLegacy,
} = require('customize-cra');
const path = require('path');

const addProxy = () => (configFunction) => {
  configFunction.proxy = {
    '/api': {
      target: 'https://test.saas.ely.work',
      changeOrigin: true,
    },
  };

  return configFunction;
};

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: 'css',
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#1DA57A' },
    }),
    addPostcssPlugins([
      require('autoprefixer')(),
      require('postcss-pxtorem')({
        rootValue: 37.5,
        propList: ['*', '!border*'],
        selectorBlackList: ['am'], // and-mobile css
      }),
    ]),
    addWebpackAlias({
      ['@']: path.resolve(__dirname, 'src'),
    }),
    addDecoratorsLegacy(),
  ),
  devServer: overrideDevServer(addProxy()),
};

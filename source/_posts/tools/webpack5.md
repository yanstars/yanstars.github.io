---
title: webpack5 && vue
date: 2021 03 17
categories:
  - webpack
tags:
  - webpack
---

## package.json

### VUE

```json
    "vue": "^2.6.12",
    "vuex": "^3.6.2",
    "vue-router": "^3.5.1",
    "vue-loader": "^15.9.6",
    "vue-template-compiler": "^2.6.12",
```

### JS

```json
    // MINI
    "terser-webpack-plugin": "^5.1.1",

    // BABEL
    // BASE
    "@babel/core": "^7.13.8",
    "babel-loader": "^8.2.2",
    "@babel/preset-env": "^7.13.9",
    // PLUGIN
    "@babel/plugin-proposal-nullish-coalescing-operator": "^7.13.8",
    "@babel/plugin-proposal-optional-chaining": "^7.13.8",
    "@babel/plugin-proposal-pipeline-operator": "^7.12.13",
    "@babel/plugin-proposal-class-properties": "^7.13.0",
    "@babel/plugin-proposal-decorators": "^7.13.5",
```

### CSS

```json
    // BASE LOADER
    "css-loader": "^5.1.1",
    "style-loader": "^2.0.0",
    // MINI CSS
    "mini-css-extract-plugin": "^1.3.9",
    "css-minimizer-webpack-plugin": "^1.2.0",
    "optimize-css-assets-webpack-plugin": "^4.0.0",
    "purgecss-webpack-plugin": "^4.0.2",

    // SASS
    "sass-loader": "^11.0.1",
    "node-sass": "^5.0.0",
    // postcss
    "postcss-loader": "^5.1.0",
    "precss": "^4.0.0",
    "autoprefixer": "^10.2.5",
```

### OTHER

```json
    "html-webpack-plugin": "^5.2.0",
    "node-notifier": "^9.0.0",
    "friendly-errors-webpack-plugin": "^1.7.0",
    "cross-env": "^7.0.3",
```

## config.js

### webpack.common.js

```js
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  resolve: {
    mainFields: ['jsnext:main', 'module', 'browser', 'main'],
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  entry: {
    index: './src/index.js',
    // index: {
    //   import: './src/index.js',
    //   dependOn: 'shared',
    // },
    // ui: {
    //   import: './src/ui.js',
    //   dependOn: 'shared',
    // },
    // shared: 'vue',
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      // title: 'Production', title 和 tempalte 起,冲突
      template: './index.html',
    }),
    new webpack.DefinePlugin({
      RUN_ENV: JSON.stringify(process.env.RUN_ENV),
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, //  不需要 CleanWebpackPlugin  了  webpack5.2新增
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
        },
      },
      {
        test: /\.m?js$/,
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
}
```

### webpack.dev.js

```js
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true, // 设置此选项后 ， 默认添加 HMR plugin
    quiet: true,
    compress: true,
  },
  target: 'web', // webpack5存在 热更新失效bug 设置该选项可暂时解决，不知道官方是否修复
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 2 } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
})
```

### webpack.prod.js

```js
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { importLoaders: 2, sourceMap: false } }, 'postcss-loader', 'sass-loader'],
      },
    ],
  },

  mode: 'production',
  externals: {
    vue: 'Vue',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
    }),
    new OptimizeCssAssetsWebpackPlugin(), // 压缩css
  ],
  optimization: {
    minimize: true, // 开始最小化
    minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial',
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true,
        },
      },
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})
```

### TODO

- eslint
- prettier
- node-notifier
- copy-webpack-plugin

### ！！

- node package 和 webpack 的对应关系
- package-lock.json 版本控制

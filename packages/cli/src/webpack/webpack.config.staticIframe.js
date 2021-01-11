const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const paths = {
  src: path.resolve(__dirname, '../../iframe/index.js'),
  html: path.resolve(__dirname, '../../iframe/index.html'),
};

const includedPaths = (templatesDirectory) => [
  path.resolve(__dirname, '../../iframe'),
  path.resolve(process.env.INIT_CWD || __dirname, templatesDirectory),
];

module.exports = ({ templatesDirectory, babelrc, outputPath }) => ({
  entry: paths.src,
  mode: 'production',
  devtool: 'none',
  output: {
    filename: 'iframe.js',
    path: outputPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: includedPaths(templatesDirectory),
        use: {
          loader: 'babel-loader',
          options: babelrc || {
            sourceType: 'unambiguous',
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              ['react-css-modules', { generateScopedName: '[local]___[hash:base64:5]' }],
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-nullish-coalescing-operator',
              '@babel/plugin-proposal-optional-chaining',
            ],
          },
        },
      },
      {
        test: /\.ts(x?)$/,
        include: includedPaths(templatesDirectory),
        use: [
          {
            loader: 'babel-loader',
            options: babelrc || {
              sourceType: 'unambiguous',
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                ['react-css-modules', { generateScopedName: '[local]___[hash:base64:5]' }],
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-nullish-coalescing-operator',
                '@babel/plugin-proposal-optional-chaining',
              ],
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({ template: paths.html, filename: 'iframe.html' }),
    new webpack.DefinePlugin({
      'process.env.templatesDirectory': JSON.stringify(templatesDirectory),
    }),
  ],
});

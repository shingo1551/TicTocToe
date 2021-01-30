const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode:"production",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'node_modules/step3/dist/custom-elements'),
          to: path.resolve(__dirname, 'dist/assets'),
        },
      ],
    }),
  ],
};

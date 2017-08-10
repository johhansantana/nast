const webpack = require("webpack");

module.exports = {
  webpack: function(config, { dev }) {
    if (config.resolve.alias) {
      delete config.resolve.alias["react"];
      delete config.resolve.alias["react-dom"];
    }

    config.devtool = 'source-map';

    config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx']

    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.s?(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader' }
        ]
      }
    );

    return config;
  }
};
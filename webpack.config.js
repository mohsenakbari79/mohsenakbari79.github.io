const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  externals: {
    canvg: 'Canvg',
    'slick-carousel': 'slick',
    react: 'React',
    'react-dom': 'ReactDOM',
    bootstrap: 'bootstrap'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]'
        },
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 50
              },
              optipng: {
                enabled: true
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              svgo: {
                plugins: [{ name: 'removeViewBox', active: false }]
              }
            }
          }
        ]
      },
      {
        test: /\.woff2$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]'
        }
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader']
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info']
          },
          mangle: true
        },
        extractComments: false
      }),
      new CssMinimizerPlugin()
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 10000, 
      maxInitialRequests: 12,
      maxAsyncRequests: 15,
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'react',
          chunks: 'all',
          priority: 0
        },
        bootstrap: {
          test: /[\\/]node_modules[\\/](bootstrap|react-bootstrap)[\\/]/,
          name: 'bootstrap',
          chunks: 'all',
          priority: 0
        },
        slick: {
          test: /[\\/]node_modules[\\/](slick-carousel|react-slick)[\\/]/,
          name: 'slick',
          chunks: 'all',
          priority: 0
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: 'single'
  },
  performance: {
    maxAssetSize: 1000000, // افزایش به 1 مگابایت برای کاهش اخطارها
    maxEntrypointSize: 2000000 // افزایش به 2 مگابایت
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'static/index.html'),
      filename: 'index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'static'),
          to: path.resolve(__dirname, 'public'),
          globOptions: {
            ignore: ['**/index.html', '**/*.gz', '**/report.html']
          }
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        PUBLIC_URL: JSON.stringify('https://mohsenakbari79.github.io')
      }
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ],
  cache: false,
  ignoreWarnings: [/Failed to parse source map/]
};
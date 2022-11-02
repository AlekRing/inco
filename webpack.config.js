const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    static: path.join(__dirname, '/'),
    compress: true,
    // open: true,
    historyApiFallback: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),

    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-modules-typescript-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      // {
      //   test: /\.(png|jpg|gif)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(jpg|gif|png|svg)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]?[hash]',
                    // outputPath: '/img/',
                    // hashType: 'md5',
                }
            }
        ]
      },
      // {
      //   test: /\.(woff(2)?|ttf|otf|eot)$/,
      //   use: [
      //       {
      //           loader: 'file-loader',
      //           options: {
      //               name: '[name].[ext]?[hash]',
      //               outputPath: '/fonts/',
      //               hashType: 'md5',
      //           }
      //       }
      //   ]
      // },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};

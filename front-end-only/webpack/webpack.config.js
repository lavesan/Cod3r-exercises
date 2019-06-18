const webpack = require("webpack");
const modoDev = process.env.NODE_ENV !== 'production';
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: "./src/index.js",
    optimization: {
        minimizer: [
          new OptimizeCssAssetsPlugin({})
        ]
    },
    module: {
        rules: [
          {
            test: /\s?[ac]ss$/,
            use: [
              MiniCssExtractPlugin.loader, // Vai gerar um arquivo chamado 'estiloGerado.css' com todos style seguindo a regex em 'test'
              "css-loader", // interpreta @import, url()
              "sass-loader"
            ]
          },
          {
            test: /\.(png|svg|jpg|gif)$/, // Mapeia todo arquivo .png .svg .jpg .gif para aplicar as regras:
            use: ['file-loader']
          }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estiloGerado.css"
        })
    ]
}
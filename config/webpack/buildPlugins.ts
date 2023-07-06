import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
  const { paths } = options;

  return [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon,
    }),
  ];
}

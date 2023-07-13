import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const { isDev } = options;

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const cssLoader = {
    test: /\.scss$/i,
    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
    options: {
      name() {
        if (options.isDev) {
          return '[path][name].[ext]';
        }

        return '[contenthash].[ext]';
      },
      outputPath: 'assets',
    },
  };
  return [fileLoader, svgLoader, cssLoader, babelLoader, typescriptLoader];
}

import { Configuration } from 'webpack';
import { BuildOptions } from './types';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildDevServer } from './buildDevServer';
import { BuildResolves } from './buildResolves';

export function buildConfig(options: BuildOptions): Configuration {
  const { mode, isDev, paths } = options;

  return {
    mode: mode,
    devtool: isDev ? 'inline-source-map' : undefined,
    entry: {
      main: paths.entry,
    },
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: BuildResolves(options),
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}

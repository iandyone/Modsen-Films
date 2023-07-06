import webpack from 'webpack';
import path from 'path';
import { BuildEnv, BuildMode, BuildOptions } from './config/webpack/types';
import { buildConfig } from './config/webpack/buildConfig';

export default (env: BuildEnv): webpack.Configuration => {
  const mode: BuildMode = env.mode || 'development';
  const PORT = env.port || 3300;
  const alias = {
    '@components': path.resolve(__dirname, 'src', 'components'),
  };

  const options: BuildOptions = {
    mode: mode,
    port: PORT,
    alias: alias,
    isDev: mode === 'development',
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'dist'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
    },
  };

  const config: webpack.Configuration = buildConfig(options);
  return config;
};

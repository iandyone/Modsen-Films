import webpack from 'webpack';
import path from 'path';
import { BuildEnv, BuildMode, BuildOptions } from './config/webpack/types';
import { buildConfig } from './config/webpack/buildConfig';

export default (env: BuildEnv): webpack.Configuration => {
  const mode: BuildMode = env.mode || 'development';
  const PORT = env.port || 3300;
  const alias = {
    '@components': path.resolve(__dirname, 'src', 'components'),
    '@assets': path.resolve(__dirname, 'src', 'assets'),
    '@constants': path.resolve(__dirname, 'src', 'constants'),
    '@styles': path.resolve(__dirname, 'src', 'styles'),
    '@utils': path.resolve(__dirname, 'src', 'utils'),
    '@hooks': path.resolve(__dirname, 'src', 'utils', 'hooks'),
    '@store': path.resolve(__dirname, 'src', 'store'),
    '@reducers': path.resolve(__dirname, 'src', 'store', 'reducers'),
    '@pages': path.resolve(__dirname, 'src', 'pages'),
    '@config': path.resolve(__dirname, 'config'),
  };

  const options: BuildOptions = {
    mode: mode,
    port: PORT,
    alias: alias,
    isDev: mode === 'development',
    paths: {
      favicon: path.resolve(__dirname, 'src', 'assets', 'favicon.ico'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'dist'),
      static: path.resolve(__dirname, 'src'),
    },
  };

  const config: webpack.Configuration = buildConfig(options);
  return config;
};

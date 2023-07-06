import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types';

export function BuildResolves(options: BuildOptions): ResolveOptions {
  const { alias} = options;

  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: alias,
  };
}

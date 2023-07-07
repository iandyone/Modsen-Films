import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types';

export function buildResolves(options: BuildOptions): ResolveOptions {
  const { alias } = options;

  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: alias,
  };
}

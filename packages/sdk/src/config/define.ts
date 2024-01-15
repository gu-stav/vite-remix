import type { Config } from './validate';

export function defineConfig(config: Config) {
  if (!config?.plugins) {
    config.plugins = [];
  }

  config.contentTypes.forEach((contentType) => {
    if (!contentType.access) {
      contentType.access = {};
    }
  });

  return config;
}

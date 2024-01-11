export function defineConfig(config = {}) {
  if (!config?.contentTypes) {
    config.contentTypes = [];
  }

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

export function defineConfig(config = {}) {
  if (!config?.contentTypes) {
    config.contentTypes = [];
  }

  if (!config?.plugins) {
    config.plugins = [];
  }

  config.contentTypes.push({
    slug: '_users',
    attributes: [
      {
        name: 'email',
        type: 'text',
      },

      {
        name: 'password',
        type: 'password',
      },
    ],
  });

  config.contentTypes.forEach((contentType) => {
    if (!contentType.access) {
      contentType.access = {};
    }
  });

  return config;
}

import { DatabaseAdapter } from 'sdk';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

import { validate } from './config/validate';
import { connect } from './connect';

class DatabaseAdapterPostgres extends DatabaseAdapter {
  async init() {
    this.createSchema();
    this.client = await connect(this.config, this.schemas);
  }

  createSchema() {
    this.sdk.config.contentTypes.forEach((contentType) => {
      let { slug } = contentType;

      // normalize content-type slugs
      if (slug.startsWith('_')) {
        slug = slug.slice(1);
      }

      const schema = pgTable(contentType.slug, {
        id: serial('id'),

        ...contentType.attributes.reduce((acc, attribute) => {
          switch (attribute.type) {
            case 'text':
              acc[attribute.name] = varchar('name', { length: 256 });
              break;
          }

          return acc;
        }, {}),
      });

      this.createContentTypeSchema(contentType.slug, schema);
    });
  }

  async find() {
    return [
      {
        id: 1,
        title: 'test',
      },
    ];
  }
}

export default function setupDbAdapter(config) {
  try {
    validate(config);
  } catch (error) {
    throw error;
  }

  return async ({ sdk }) => {
    const adapter = new DatabaseAdapterPostgres({ config, sdk });

    await adapter.init();

    return adapter;
  };
}

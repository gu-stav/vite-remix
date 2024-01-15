import type { Config, SDK } from '..';

export class DatabaseAdapter {
  config: Config;
  schemas: Record<string, unknown>;
  sdk: SDK;

  constructor({ config, sdk }: { config: Config; sdk: SDK }) {
    this.config = config;
    this.schemas = {};
    this.sdk = sdk;
  }

  createContentTypeSchema(contentTypeName: string, schema: any) {
    this.schemas[contentTypeName] = schema;
  }

  async connect() {
    throw new Error('Not implemented');
  }
  async create() {
    throw new Error('Not implemented');
  }
  async find() {
    throw new Error('Not implemented');
  }
  async update() {
    throw new Error('Not implemented');
  }
  async delete() {
    throw new Error('Not implemented');
  }
}

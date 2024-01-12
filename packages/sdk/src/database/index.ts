import type { Config, SDK } from '../index';

export class DatabaseAdapter {
  config: Config;
  schemas: Record<string, unknown>;
  sdk: SDK;

  constructor({ config, sdk }) {
    this.config = config;
    this.schemas = {};
    this.sdk = sdk;
  }

  createContentTypeSchema(contentTypeName, schema) {
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

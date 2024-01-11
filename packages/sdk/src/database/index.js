export class DatabaseAdapter {
  constructor({ config, sdk }) {
    this.config = config;
    this.sdk = sdk;
    this.schemas = {};
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

export class DatabaseAdapter {
  constructor({ sdk }) {
    this.sdk = sdk;
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

import pino from 'pino';
import type { Logger } from 'pino';

import { validate } from './config/validate';
import { find, login } from './contentTypes/index';
import type { DatabaseAdapter } from './database/index';

export * as errors from './errors/index';

type Plugin = (config?: Config) => Config;

interface Attribute {}

interface ContentType {
  access?: {
    create?: () => boolean;
    delete?: () => boolean;
    find?: () => boolean;
  };
  attributes: Attribute[];
  slug: string;
}

export interface Config {
  contentTypes: ContentType[];
  db?: (config: { sdk: SDK }) => Promise<DatabaseAdapter>;
  plugins?: Plugin[];
}

export class SDK {
  config: Config;
  db: DatabaseAdapter;
  initialized: boolean;
  logger: Logger;

  constructor() {
    this.initialized = false;
  }

  async init(config: Config) {
    this.config = config;
    this.logger = pino();
    this.db = await this.config.db({ sdk: this });

    // initialize plugins
    if (this.config.plugins) {
      this.config = this.config.plugins.reduce(
        (acc, plugin) => plugin(acc),
        this.config,
      );
    }

    // validate final config
    try {
      validate(this.config);
    } catch (error) {
      throw error;
    }

    this.initialized = true;
  }

  async create({ contentType, data }) {
    const doc = await this.db.create();
    return doc;
  }

  async update() {
    const doc = await this.db.update();
    return doc;
  }

  async find(payload) {
    return await find.bind(this)(payload);
  }

  async findById() {
    const doc = await this.db.find();
  }

  async delete() {
    const doc = await this.db.delete();
  }

  async login(payload) {
    return await login.bind(this)(payload);
  }
}

export const sdk = new SDK();
export * from './database/index';
export { defineConfig } from './config/define';

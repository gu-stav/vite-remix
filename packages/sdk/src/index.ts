import { validate } from './config/validate';
import type { Config } from './config/validate';
import { find, login } from './contentTypes';
import type { FindArg, LoginArg } from './contentTypes';
import type { DatabaseAdapter } from './database';

export * as errors from './errors';

interface Attribute {
  name: string;
  required?: boolean;
  type: 'text';
}

export type GeneratedTypes = {
  contentTypes: {
    [slug: string]: Record<string, unknown>;
  };
};

export interface ContentType {
  access?: {
    create?: () => boolean;
    delete?: () => boolean;
    find?: () => boolean;
  };
  attributes: Attribute[];
  slug: string;
}

export class SDK<TGeneratedTypes extends GeneratedTypes = GeneratedTypes> {
  // @ts-ignore
  config: Config;
  // @ts-ignore
  db: DatabaseAdapter;
  initialized: boolean;
  // @ts-ignore
  logger: any;

  constructor() {
    this.initialized = false;
  }

  async init(config: Config) {
    this.config = config;
    this.logger = this.config.logger({ sdk: this });

    // @ts-expect-error
    this.db = await this.config.db({ sdk: this });

    // initialize plugins
    if (this.config.plugins) {
      // @ts-expect-error
      this.config = this.config.plugins.reduce(
        // @ts-expect-error
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

  async create() {
    throw new Error('Not implemented');
  }

  async update() {
    throw new Error('Not implemented');
  }

  async find<T extends keyof TGeneratedTypes['contentTypes']>(
    payload: FindArg<T>,
  ) {
    // @ts-expect-error
    return find(this, payload);
  }

  async findById() {
    throw new Error('Not implemented');
  }

  async delete() {
    throw new Error('Not implemented');
  }

  async login(payload: LoginArg) {
    return login(this, payload);
  }
}

export const sdk = new SDK<GeneratedTypes>();

export * from './database';
export { defineConfig } from './config/define';
export { generateTypes } from './types/generateTypes';

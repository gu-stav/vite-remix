import pino from 'pino';
import { z } from 'zod';

import { validate } from './config/validate';

class SDK {
  async init(config) {
    this.config = config;
    this.db = this.config.db({ sdk: this });
    this.logger = pino();

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

    await this.db.connect();
  }

  async create({ contentType, data }) {
    const doc = await this.db.create();
    return doc;
  }

  async update() {
    const doc = await this.db.update();
    return doc;
  }

  async find() {
    this.logger.info('This is a logger message from find');

    const doc = await this.db.find();

    return doc;
  }

  async findById() {
    const doc = await this.db.find();
  }

  async delete() {
    const doc = await this.db.delete();
  }

  async login({ data }) {
    const userSchema = z
      .object({
        email: z.string().email(),
        password: z.string().min(1),
      })
      .strict();

    userSchema.parse(data);

    return {
      token: 'something',
    };
  }
}

export const sdk = new SDK();

import pino from 'pino';

import { validate } from './config/validate';

class SDK {
    init(config) {
        this.config = config;
        this.db = this.config.db({ sdk: this });
        this.logger = pino();
        
        // initialize plugins
        if (this.config.plugins) {
            this.config.plugins.reduce((acc, plugin) => {
                acc = plugin(acc);
                return acc;
            }, this.config);
        }

        // validate final config
        try {
            validate(this.config);
        } catch(error) {
            console.log(error);
            throw new Error('Config is not valid');
        }
    };

    async create() {
        const doc = await this.db.create();
    };

    async update() {
        const doc = await this.db.update();
    };

    async find() {
        this.logger.info('This is a logger message from find');

        const doc = await this.db.find();

        return [{ id: 1, title: 'Hello' }];
    };
    
    async findById() {
        const doc = await this.db.find();
    };

    async delete() {
        const doc = await this.db.delete();
    };
}

export const sdk = new SDK();

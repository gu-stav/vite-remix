import pino from 'pino';

class SDK {
    async init(config) {
        this.config = config;

        if (!config?.db) {
            throw new Error('You must provide a database adapter.');
        }

        this.db = this.config.db({ sdk: this });
        this.logger = pino();
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

export default new SDK();

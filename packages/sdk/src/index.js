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

    create() {};
    
    update() {};

    find() {
        this.logger.info('This is a logger message from find');

        return [{ id: 1, title: 'Hello' }];
    };
    
    findById() {};
    
    del() {};
}

export default new SDK();

import pino from 'pino';

class SDK {
    async init(config) {
        this.config = config;
        this.db = null;
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

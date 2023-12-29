import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { validate } from './config/validate';

export default function setupDbAdapter(config) {
    try {
        validate(config);
    } catch(error) {
        throw new Error('Could not validate db adapter config');
    }

    const { connectionString } = config;
    const client = postgres(connectionString);
    const drizzleClient = drizzle(client);

    return ({ sdk }) => {
        return {
            async create() {},
            async find() {
                return [{
                    id: 1,
                    title: 'test'
                }];
            },
            async update() {},
            async delete() {}
        };
    };
}

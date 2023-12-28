import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export default function setupDbAdapter(config) {
    const { connectionString } = config;
    const client = postgres(connectionString);
    const drizzleClient = drizzle(client);

    return ({ sdk }) => {
        return {
            async create() {},
            async find() {
                return drizzleClient.select();
            },
            async update() {},
            async delete() {}
        };
    };
}

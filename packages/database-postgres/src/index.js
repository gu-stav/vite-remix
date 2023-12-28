import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export default function setupDbAdapter(config) {
    const { connectionString } = config;
    const client = postgres(connectionString);

    return ({ sdk }) => {
        return drizzle(client);
    };
}

import { defineConfig } from "unding-studio-remix/config";
import postgres from 'database-postgres';

import { updatedAt } from "./src/plugins/updatedAt";

export default defineConfig({
    contentTypes: [
        {
            slug: 'content',
            attributes: [
                {
                    name: 'title',
                    type: 'text'
                }
            ]
        }
    ],

    db: postgres({
        connectionString: 'postgres://postgres:adminadmin@0.0.0.0:5432/db'
    }),

    plugins: [
        updatedAt()
    ]
})

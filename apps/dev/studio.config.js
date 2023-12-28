import { defineConfig } from "unding-studio-remix/config";
import postgres from 'database-postgres';

import { Logo } from "./src/components/Logo";

export default defineConfig({
    Logo,
    db: postgres({
        connectionString: 'postgres://postgres:adminadmin@0.0.0.0:5432/db'
    }),
    something: true,
})

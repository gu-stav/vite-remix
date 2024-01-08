import { defineConfig } from 'unding-studio-remix/config';
import postgres from 'database-postgres';

import { updatedAt } from './src/plugins/updatedAt';

export default defineConfig({
  contentTypes: [
    {
      slug: 'content',
      attributes: [
        {
          name: 'title',
          type: 'text',
        },
      ],
    },
  ],

  db: postgres({
    connectionString: process.env.DB_CONNECTION,
  }),

  plugins: [updatedAt()],
});

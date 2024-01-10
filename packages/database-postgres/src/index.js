import { DatabaseAdapter } from 'sdk';

import { validate } from './config/validate';
import { connect } from './connect';

class DatabaseAdapterPostgres extends DatabaseAdapter {
  async connect() {
    await connect();
  }

  async find() {
    return [
      {
        id: 1,
        title: 'test',
      },
    ];
  }
}

export default function setupDbAdapter(config) {
  try {
    validate(config);
  } catch (error) {
    throw new Error('Could not validate db adapter config');
  }

  return async ({ sdk }) => {
    const adapter = new DatabaseAdapterPostgres({ sdk });

    await adapter.connect();

    return adapter;
  };
}

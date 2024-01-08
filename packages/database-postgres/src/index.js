import { validate } from './config/validate';
import { connect } from './connect';

export default function setupDbAdapter(config) {
  try {
    validate(config);
  } catch (error) {
    throw new Error('Could not validate db adapter config');
  }

  return ({ sdk }) => {
    return {
      async connect() {
        return connect({ sdk, config });
      },
      async create() {},
      async find() {
        return [
          {
            id: 1,
            title: 'test',
          },
        ];
      },
      async update() {},
      async delete() {},
    };
  };
}

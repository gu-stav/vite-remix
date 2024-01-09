import { executeAccessControl } from '../../auth/executeAccessControl';
import { factory } from './factory';

export const find = factory(async function ({ contentType, where }) {
  const doc = await this.db.find({
    contentType,
    where,
  });

  return [];
});

import { executeAccessControl } from '../../auth/executeAccessControl';
import { factory } from './factory';

export const find = factory(async function ({ contentType, request, where }) {
  await executeAccessControl(contentType.access?.find, { request });

  return await this.db.find({
    contentType,
    where,
  });
});

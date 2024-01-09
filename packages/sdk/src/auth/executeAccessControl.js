import { ForbiddenError } from '../errors';

export async function executeAccessControl(callback, options) {
  if (!callback) {
    return;
  }

  const hasAccess = await callback({ request: options.request });

  if (!hasAccess) {
    throw new ForbiddenError();
  }
}

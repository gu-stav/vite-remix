import { ForbiddenError } from '../errors';

export async function executeAccessControl(
  callback: ({ request }: { request: Request }) => boolean,
  options: { request: Request },
) {
  const hasAccess = await callback({ request: options.request });

  if (!hasAccess) {
    throw new ForbiddenError('No access');
  }
}

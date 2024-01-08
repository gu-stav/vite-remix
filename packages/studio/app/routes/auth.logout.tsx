import { redirect } from '@remix-run/node';

import { cookie } from '../../src/lib/auth.server';

export async function loader() {
  throw redirect('/auth/login', {
    headers: {
      'Set-Cookie': await cookie.serialize('', {
        maxAge: 0,
      }),
    },
  });
}

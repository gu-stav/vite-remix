import { Link, Outlet, useLoaderData } from '@remix-run/react';
import { FormattedMessage } from 'react-intl';

import { init } from '../../src/lib/sdk.server';
import { requireAuth } from '../../src/lib/auth.server';

export async function loader({ params, request }) {
  await requireAuth(request);

  const sdk = await init();

  return await sdk.find({
    contentType: '_users',
  });
}

export default function AdminLayout() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <>
      <h1>
        <FormattedMessage id="test" defaultMessage="Admin" />
      </h1>

      <Link to="/auth/logout">Logout</Link>

      <Outlet />
    </>
  );
}

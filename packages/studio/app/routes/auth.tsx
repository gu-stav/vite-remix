import { Outlet } from '@remix-run/react';

import { Page } from '../../src/routes/auth/components/Page';

export default function AuthLayout() {
  return (
    <Page>
      <Outlet />
    </Page>
  );
}

import { Outlet, useLoaderData } from '@remix-run/react';

export async function loader({ params, request }) {
  const { default: config } = await import('~studio.config.js');

  return { data: [] };
}

export default function AdminLayout() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <>
      <h1>ADMIN</h1>
      <Outlet />
    </>
  );
}

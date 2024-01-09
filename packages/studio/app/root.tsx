import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { json } from '@remix-run/node';
import { IntlProvider } from 'react-intl';

import 'ui/style.css';

export async function loader() {
  const messagesRes = await fetch('http://localhost:5173/api/translations');
  const { messages } = await messagesRes.json();

  return json({
    messages,
  });
}

export default function App() {
  const { messages } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <IntlProvider messages={messages} locale="en" defaultLocale="en">
          <Outlet />
        </IntlProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

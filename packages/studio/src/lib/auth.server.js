import { createCookie, redirect } from '@remix-run/node';

export const cookie = createCookie('auth', {
  httpOnly: true,
  maxAge: 60 * 60 * 24 * 23, // 30 days
  path: '/',
  sameSite: 'lax',
  secrets: ['something'],
  secure: process.env.NODE_ENV === 'production',
});

export async function requireAuth(request) {
  const authCookie = await cookie.parse(request.headers.get('Cookie'));

  if (!authCookie) {
    throw redirect('/auth/login', {
      headers: {
        'Set-Cookie': await cookie.serialize('', {
          maxAge: 0,
        }),
      },
    });
  }
}

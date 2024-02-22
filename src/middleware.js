import { NextResponse } from 'next/server';

import routes from './config/routes';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const loginUser = request.cookies.has('userId');

  if (!loginUser && pathname !== routes.login) {
    return NextResponse.redirect(new URL(routes.login, request.url));
  } else if (loginUser && pathname === routes.login) {
    return NextResponse.redirect(new URL(routes.home, request.url));
  }
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};

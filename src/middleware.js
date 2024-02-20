import { NextResponse } from 'next/server';
import routes, { restrictedRoutes } from './config/routes';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  if (restrictedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL(routes.login, request.url));
  }
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};

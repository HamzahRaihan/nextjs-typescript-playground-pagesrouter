import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const isLogin = true;
  if (isLogin) {
    return NextResponse.next();
  }
  if (!isLogin && !req.nextUrl.pathname.startsWith('/auth/login')) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }
}

export const config = {
  matcher: ['/auth/login', '/product'],
};

import { NextResponse } from 'next/server';
import { verifyToken } from './src/lib/auth';

export function middleware(request) {
  // Check if the route requires authentication
  const protectedRoutes = ['/dashboard'];
  const authRoutes = ['/auth/login', '/auth/register'];
  const { pathname } = request.nextUrl;

  // Get token from cookies
  const token = request.cookies.get('token')?.value;

  // If accessing protected routes without token, redirect to login
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!token || !verifyToken(token)) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  // If accessing auth routes while authenticated, redirect to dashboard
  if (authRoutes.includes(pathname)) {
    if (token && verifyToken(token)) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/:path*']
};

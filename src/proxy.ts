import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/auth';

export async function proxy(request: NextRequest) {
  const session = request.cookies.get('session')?.value;
  const isAuthPage = request.nextUrl.pathname.startsWith('/admin/login');

  if (!session) {
    if (isAuthPage) return NextResponse.next();
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  try {
    await decrypt(session);
    if (isAuthPage) {
      return NextResponse.redirect(new URL('/admin/submissions', request.url));
    }
  } catch (error) {
    // Session is invalid or expired
    if (!isAuthPage) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};

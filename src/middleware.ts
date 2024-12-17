import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add CSP headers
  response.headers.set(
    'Content-Security-Policy',
    "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com;"
  );

  return response;
}

export const config = {
  matcher: '/:path*',
}; 
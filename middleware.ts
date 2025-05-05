import { NextRequest, NextResponse } from 'next/server';

// Підтримувані мови
export const locales = ['en', 'uk'];
export const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  // Отримуємо поточний шлях
  const pathname = request.nextUrl.pathname;
  
  // Перевіряємо, чи шлях починається з однієї з наших локалей
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  // Якщо локаль вже є в шляху, нічого не робимо
  if (pathnameHasLocale) return;
  
  // Якщо запит до API, статичних ресурсів тощо, пропускаємо
  if (pathname.startsWith('/api/') || 
      pathname.startsWith('/_next/') || 
      pathname === '/favicon.ico') {
    return;
  }
  
  // Визначаємо локаль (можна використовувати cookies, headers, тощо)
  const locale = defaultLocale;
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
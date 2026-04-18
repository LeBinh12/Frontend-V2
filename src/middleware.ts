import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Handle language selection based on geolocation if not already set
  if (!request.cookies.has("i18next")) {
    const country = (request as any).geo?.country || "unknown";
    const language = country === "VN" ? "vn" : "en";
    
    response.cookies.set("i18next", language, {
      path: "/",
      maxAge: 30 * 24 * 60 * 60, // 30 days
    });
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};

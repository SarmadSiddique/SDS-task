import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define protected routes that require authentication
const PROTECTED_ROUTES = [
  "/about",
  "/users",
  "/profile",
  "/dashboard",
  "/home",
];
const PUBLIC_ROUTES = [
  "/auth/login",
  "/auth/signup",
  "/terms",
  "/privacy",
];

const PROTECTED_API_ROUTES = [
  "/api/user",
  "/api/product",
];

const PUBLIC_API_ROUTES = [
  "/api/auth",
];
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log("Middleware running for path:", pathname);

  // Handle API routes specially
  if (pathname.startsWith("/api")) {
    // Check if it's a protected API route
    const isProtectedApiRoute = PROTECTED_API_ROUTES.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`)
    );

    const isPublicApiRoute = PUBLIC_API_ROUTES.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`)
    );

    // If it's a public API route, allow access
    if (isPublicApiRoute) {
      return NextResponse.next();
    }

    // For protected API routes, check authentication
    if (isProtectedApiRoute) {
      const hasAccess = request.cookies.get("userHasAccess")?.value === "true";
      if (!hasAccess) {
        // Return a JSON response with 401 Unauthorized for API routes
        return new NextResponse(
          JSON.stringify({
            error: "Unauthorized",
            message: "Authentication required",
          }),
          {
            status: 401,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }

    return NextResponse.next();
  }

  // Handle root path - redirect to login page
  if (pathname === "/" || pathname === "") {
    console.log("Root path detected, redirecting to login");
    return NextResponse.redirect(new URL("/en/auth/login", request.url));
  }

  // Extract the language prefix (e.g., "/en/", "/fr/", etc.)
  const langPathMatch = pathname.match(/^\/([^\/]+)\//);
  const langPrefix = langPathMatch ? `/${langPathMatch[1]}` : "";

  // Check if the current path (without language prefix) is a protected route
  const pathWithoutLang = langPrefix
    ? pathname.substring(langPrefix.length)
    : pathname;

  const isProtectedRoute = PROTECTED_ROUTES.some(
    (route) =>
      pathWithoutLang === route || pathWithoutLang.startsWith(`${route}/`)
  );

  const isPublicRoute = PUBLIC_ROUTES.some(
    (route) =>
      pathWithoutLang === route || pathWithoutLang.startsWith(`${route}/`)
  );

  // If it's a public route, always allow access
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // For protected routes, check authentication
  if (isProtectedRoute) {
    console.log("Found protected route, checking access");

    const hasAccess = request.cookies.get("userHasAccess")?.value === "true";
    console.log("Access status:", hasAccess);

    if (!hasAccess) {
      console.log("Redirecting to login");
      // Maintain the same language prefix when redirecting
      return NextResponse.redirect(
        new URL(`${langPrefix}/auth/login`, request.url)
      );
    }
  }

  return NextResponse.next();
}
// Define the matcher to include all routes we want to check
export const config = {
  matcher: [
    "/",
    "/:lang/about/:path*",
    "/:lang/users/:path*",
    "/:lang/profile/:path*",
    "/:lang/dashboard/:path*",
    "/api/:path*",
    "/:lang/auth/:path*",
  ],
};

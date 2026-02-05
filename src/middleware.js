// src/middleware.js
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req) {
  const session = await getToken({ req, secret });
  const { pathname } = req.nextUrl;

  // If user is logged in and tries to access /login, redirect to /dashboard
  if (session && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // If route is protected and no session, redirect to login
  const protectedPaths = ["/dashboard", "/profile"];
  if (!session && protectedPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Otherwise, allow access
  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/dashboard/:path*", "/profile/:path*"], // include /login
};

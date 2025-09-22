import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Handle SAML callback from Microsoft
  if (request.nextUrl.pathname.startsWith("/auth/saml/callback")) {
    // Extract SAML response data
    const samlResponse = request.nextUrl.searchParams.get("SAMLResponse")

    if (samlResponse) {
      // In a real implementation, you would validate the SAML response here
      // For demo purposes, we'll redirect to our callback handler

      // Parse user info from SAML response (simplified for demo)
      const mockUserInfo = {
        email: "usuario@uvg.edu.gt",
        name: "Usuario UVG",
        role: "student",
      }

      // Redirect to callback page with user info
      const callbackUrl = new URL("/auth/callback", request.url)
      callbackUrl.searchParams.set("email", mockUserInfo.email)
      callbackUrl.searchParams.set("name", mockUserInfo.name)
      callbackUrl.searchParams.set("role", mockUserInfo.role)

      return NextResponse.redirect(callbackUrl)
    }
  }

  // Handle authentication state for protected routes
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    // Check if user is authenticated (in a real app, validate JWT or session)
    const userCookie = request.cookies.get("uvg_auth")

    if (!userCookie) {
      return NextResponse.redirect(new URL("/auth/canvas", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/auth/saml/callback", "/dashboard/:path*", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

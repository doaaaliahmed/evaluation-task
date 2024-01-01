import { getCookie } from "cookies-next";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { PATHS } from "./core/paths";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const verfiy = request.cookies.get("token")?.value;
  if (!verfiy && request.nextUrl.pathname === PATHS.HOME) {
    const absoluteURL = new URL(PATHS.LOGIN, request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
  return NextResponse.next();
}

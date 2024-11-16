import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const protectedRoutes = ["/user", "/admin"];
const isProtected = createRouteMatcher(protectedRoutes);

export default clerkMiddleware(async (auth, request) => {
  if (isProtected(request)) {
    try {
      await auth.protect();
    } catch (error) {
      return new Response("Unauthorized", { status: 401 });
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
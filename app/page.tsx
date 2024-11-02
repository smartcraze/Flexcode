'use client';
import { useUser, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation for routing
import { ModeToggle } from '@/components/Mode-toggle';

export default function LandingPage() {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  // Redirect to /admin if the user is signed in
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push('/admin');
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
    <div className="container mx-auto p-4">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center bg-gray-800 p-4 rounded-lg mb-6">
        <h1 className="text-white text-2xl">Flexcode</h1>
        <div className="flex items-center space-x-4">
          {isSignedIn ? (
            <UserButton />
          ) : (
            <>
              <Link href="/sign-in" className="text-blue-500 hover:text-blue-700">
                Sign In
              </Link>
              <Link href="/sign-up" className="text-blue-500 hover:text-blue-700">
                Sign Up
              </Link>
              <ModeToggle />
            </>
          )}
        </div>
      </nav>

      {/* Welcome Message */}
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Flexcode!</h1>
        <p className="text-lg mb-4">Build, collaborate, and learn with projects.</p>
        {!isSignedIn && (
          <p className="text-md mb-6">Please sign in or sign up to get started.</p>
        )}
      </div>
    </div>
  );
}

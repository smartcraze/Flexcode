'use client'
import { useUser, SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs'

import Link from 'next/link'
export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded || !isSignedIn) {
    return (
      <>
      <div className="container">
      <h1>Welcome  Please Authenticate</h1>
     <Link href={'/sign-up'}>Sign-up</Link>
     <Link href={'/sign-in'}>Sign-in</Link>
      </div>
      </>
    )
  }

  return(
    <>
    <div className="container">
    <h1>Welcome {user.fullName}</h1>
    <UserButton />
    </div>
    </>
  )
}
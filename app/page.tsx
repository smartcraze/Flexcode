'use client'
import { useUser,UserButton } from '@clerk/nextjs'

import Link from 'next/link'
export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded || !isSignedIn) {
    return (
      <>
      <div className="container">
      <h1>Welcome  Please Authenticate</h1>
      <div className="container flex m-2 p-1">
     <Link href={'/sign-up'}>Sign-up</Link>
     <Link href={'/sign-in'}>Sign-in</Link>
      </div>
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
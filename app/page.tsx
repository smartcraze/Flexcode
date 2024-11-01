'use client'
import { ModeToggle } from '@/components/Mode-toggle'
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
      <ModeToggle/>
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

    <h1 className='text-4xl'>Welcome {user.fullName}</h1>
    <div className="flex container items-center">
    <ModeToggle/>
    <UserButton />
    </div>
    </div>
    </>
  )
}
"use client";

import * as React from "react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./Mode-toggle";

import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/dsa", label: "get started" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black bg-opacity-50 px-4">
      <div className="container flex items-center justify-between p-3">
        <Link href="/" className="text-2xl font-bold">
          <h1 className="text-3xl text-white">Flexcode</h1>
        </Link>
        <div className="flex space-x-4">
          {links.map((link) => (
            <Button key={link.href} variant="ghost" asChild>
              <Link href={link.href} className="text-white hover:text-gray-300">
                {link.label}
              </Link>
            </Button>
          ))}
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

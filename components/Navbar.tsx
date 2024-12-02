"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { ModeToggle } from "./Mode-toggle";

const links = [
  { href: "/", label: "Home" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50   ">
      <div className="container flex items-center justify-between p-4">
        <Link href="/" className="text-2xl  font-bold">
          {/* <Image
            src="/sclogo.png"
            alt="logo"
            width={100}
            height={100}
          /> */}
          <h1 className="text-3xl">Flexcode</h1>
          
        </Link>
        <div className="hidden md:flex space-x-4">
          
          {links.map((link) => (
            <Button key={link.href} variant="ghost" asChild>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <ModeToggle/>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <VisuallyHidden asChild>
              <SheetTitle>Navigation Menu</SheetTitle>
            </VisuallyHidden>
            <div className="flex flex-col space-y-4 mt-4">
              {links.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-background/0 to-background/20 backdrop-blur-sm" />
    </nav>
  );
}

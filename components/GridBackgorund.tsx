'use client';
import React from "react";
import { Spotlight } from "./ui/spotlight";
import Home from "./mainprojects";
import { useUser } from "@clerk/nextjs";


export function GridBackground() {
  const { isSignedIn, user } = useUser();
  if (!isSignedIn) {
    return (
      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <Spotlight />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to Your Next Journey 🚀
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-lg mx-auto text-gray-200">
            Start building your future with our tools. Log in to unlock endless possibilities.
          </p>
          <button
            className="mt-8 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white text-lg font-medium rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
            onClick={() => console.log("Redirect to login/signup")}
          >
            Log In / Sign Up
          </button>
        </div>

        {/* Decorative radial gradient overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent to-black opacity-60"></div>
      
      </div>
    );
  } else {
    return (
      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <Spotlight />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Home />
      </div>
    );
  }
}

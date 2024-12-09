"use client";
import React from "react";
import { Spotlight } from "./ui/spotlight";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function GridBackground() {
  return (
    <div className="h-[50vh] w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="green"
      />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {/* DSA Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Master DSA Through Visualization
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Learn Data Structures and Algorithms with interactive visualizations.  
          Watch algorithms come to life and gain a deep understanding of their behavior.
        </p>
        <Link href={'/dsa'}>
        <button 
            className="group px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 mx-auto"
          >
            Start Learning
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
       </Link>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent to-black opacity-60"></div>
    </div>
  );
}

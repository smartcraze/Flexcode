"use client";
import { GridBackground } from "@/components/GridBackgorund";
import React from "react";
import SocialHandle from "@/components/SocialHandle";
import Footer from "@/components/Footer";
import Hero from "@/Landing-components/Hero";
function Homescreen() {
  return (
    <div>
      <Hero/>
      <GridBackground />
      <SocialHandle />
      <Footer />
    </div>
  );
}

export default Homescreen;

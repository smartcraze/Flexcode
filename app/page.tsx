"use client";
import { GridBackground } from "@/components/GridBackgorund";
import React from "react";
import SocialHandle from "@/components/SocialHandle";
import Footer from "@/components/Footer";
function Homescreen() {
  return (
    <div>

      <GridBackground />
      <SocialHandle />
      <Footer />
    </div>
  );
}

export default Homescreen;

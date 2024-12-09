import React from "react";
import Link from "next/link"; // Import Link from Next.js
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl  justify-center items-center mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4"> Powered By</h2>
          <img
            src="/fclogo.png" 
            alt="FlexCode Logo"
            className="h-8 mb-4"
          />
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link href="#home">
                <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="#project">
                <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Projects
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Connect With Me</h2>
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com/in/surajv354/">
              <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                LinkedIn
              </span>
            </Link>
            <Link href="https://github.com/smartcraze">
              <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                GitHub
              </span>
            </Link>
            <Link href="https://twitter.com/surajv354">
              <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                Twitter
              </span>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <p>
            <Link href="https://www.instagram.com/surajv354">
              <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                Instagram - @surajv354
              </span>
            </Link>
          </p>
          <p>
            <Link href="https://www.linkedin.com/in/surajv354">
              <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                LinkedIn - @surajv354
              </span>
            </Link>
          </p>
          <p>
            <Link href="https://twitter.com/surajv354">
              <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                Twitter - @surajv354
              </span>
            </Link>
          </p>
        </div>
      </div>
      <p className="text-center text-xl pt-8">
        © 2025 FlexCode.in All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

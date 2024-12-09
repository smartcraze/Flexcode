"use client";
import { LinkPreview } from "@/components/ui/link-preview";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface FlexcodeItem {
  _id: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

const Home: React.FC = () => {
  const [data, setData] = useState<FlexcodeItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://dsabackend.smartcraze.online/api/flexcode")
      .then((response) => response.json())
      .then((data: FlexcodeItem[]) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 text-center">
        <p className="text-lg font-medium animate-pulse">
          🌟 Exciting Offer: New Visualizers Coming Soon! Stay Tuned 🚀
        </p>
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-100 via-blue-100 to-purple-200 dark:from-gray-800 dark:via-gray-900 dark:to-black p-2">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
            Flexcode Visualizers
          </h1>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <h1 className="text-4xl font-semibold animate-bounce text-gray-800 dark:text-white">
                Sabar karo bhai...🚀
              </h1>
            </div>
          ) : data.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center">
              {data.map((item) => (
                <div
                  key={item._id}
                  className="bg-red-600 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
                >
                  <img
                    src={item.image}
                    alt={`Image for ${item.title}`}
                    className="w-full h-48 object-cover border border-gray-300 dark:border-gray-600"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-2 dark:text-gray-300">
                      {item.description}
                    </p>
                    <div className="flex justify-center mt-4">
                      <LinkPreview
                        url={item.link}
                        className="inline text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Visualise
                      </LinkPreview>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-64">
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                No projects found! Maybe try again later? 😅
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
      </div>

      <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-6 px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Side: Footer Text */}
          <div className="text-center md:text-left text-sm md:w-1/2">
            <p className="mb-1">
              © 2024 <span className="font-semibold">Flexcode Visualizers</span>
              . All rights reserved.
            </p>
            <p>
              Designed by{" "}
              <span className="font-bold text-blue-400">Suraj Vishwakarma</span>
              , Powered by{" "}
              <span className="font-bold text-green-400">SmartCraze</span>.
            </p>
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex space-x-6 justify-center md:justify-end md:w-1/2">
            <Link
              href="https://twitter.com/surajv354"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-white hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <TwitterLogoIcon className="w-6 h-6" />
            </Link>
            <Link
              href="https://github.com/smartcraze"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white hover:text-gray-400 transition-transform transform hover:scale-110"
            >
              <GitHubLogoIcon className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/surajv354"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-blue-700 transition-transform transform hover:scale-110"
            >
              <LinkedInLogoIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;

import { Spotlight } from "./ui/spotlight";

export function GridBackground() {
  return (
    <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center overflow-hidden">
      {/* Masking the background with a radial gradient */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="grey"
      />
      <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 md:px-16 lg:px-24 py-8 space-y-10">
        {/* Main Heading */}
        <p className="text-4xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          Flex-Code
        </p>

        {/* Platform Introduction */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
           <span className="font-semibold">save time</span> and <span className="font-semibold">maximize productivity</span>.
        </p>

        {/* Key Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Feature 1 */}
          <div className="p-4 border dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
              Quick Access to Code Snippets
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Access a vast library of reusable code snippets to fast-track your development.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-4 border dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
              Easy Customization
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Tailor code snippets to your project needs with just a few clicks.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-4 border dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
              Full Stack Support
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Solutions for front-end and back-end technologies, including React, Next.js, Node.js, and more.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8">
          <a
            href="/get-started"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-200"
          >
            Get Started with Flex-Code
          </a>
        </div>
      </div>
    </div>
  );
}

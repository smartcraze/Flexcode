import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50 dark:bg-gray-900">
      <header className="row-start-1 text-center">
        <h1 className="text-5xl font-extrabold text-orange-600 dark:text-orange-600">
          Welcome to FlexCode
        </h1>
        <p className="mt-4 text-lg text-gray-800 dark:text-gray-200">
          Your hub for collaboration on industry-level projects!
        </p>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="text-center text-xl font-semibold text-gray-700 dark:text-gray-300">
          We&apos;re launching soon, and we can&apos;t wait to show you what we have in store!
        </p>
        <p className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300">
          Get ready for an innovative platform designed to help you:
        </p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] text-gray-600 dark:text-gray-400">
          <li className="mb-2 font-bold">Connect with project mates.</li>
          <li className="font-bold">Engage in exciting challenges.</li>
          <li className="font-bold">Collaborate in unique ways.</li>
        </ol>
        <p className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300">
          Stay tuned for more updates!
        </p>
        <Link
          href="suraj.flexcode.in"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors"
        >
          Visit My Portfolio
        </Link>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">
          Follow us on social media for the latest news and updates.
        </p>
      </footer>
    </div>
  );
}

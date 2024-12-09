import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Flexcode',
  description: 'Learn and visualize Data Structures and Algorithms in 3D and 2D. Improve your coding skills by interacting with 3D models of algorithms like sorting, trees, graphs, and more.',
  keywords: 'data structures, algorithms, 3d visualization, 2d visualization, learn coding, sorting algorithms, tree algorithms, graph algorithms, DSA, data structures learning',
  authors: [{ name: 'suraj vishwakarma' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',

 
  openGraph: {
    type: 'website',
    url: 'https://flexcode.in',
    title: 'Flexcode | Visualize 3D and 2D Data Structures & Algorithms',
    description: 'Learn and visualize Data Structures and Algorithms in 3D and 2D. Improve your coding skills by interacting with 3D models of algorithms like sorting, trees, graphs, and more.',
    siteName: 'Flexcode',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200, // Width of the image (Open Graph recommendation)
        height: 630, // Height of the image (Open Graph recommendation)
        alt: 'Visualize Data Structures & Algorithms in 3D and 2D' 
      }
    ],
  },

  // Twitter Card Tags
  twitter: {
    card: 'summary_large_image',
    site: '@surajv354', // Replace with your actual Twitter handle
    title: 'Flexcode | Visualize 3D and 2D Data Structures & Algorithms',
    description: 'Learn and visualize Data Structures and Algorithms in 3D and 2D. Improve your coding skills by interacting with 3D models of algorithms like sorting, trees, graphs, and more.',
    images: '/opengraph-image.jpg',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Learn DSA" />        
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased pt-16`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider>
            <Navbar />
            {children}
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

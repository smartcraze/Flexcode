import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";
import type { Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebarprovider from "@/components/Sidebarprovider";
import { Navbar } from "@/components/Navbar";


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
export const viewport: Viewport = {
  themeColor: "black",
};
export const metadata: Metadata = {
  title: "FlexCode - Your Project Hub for Student Collaboration",
  description:
    "FlexCode is a platform for students from standard 6 to university level, enabling collaboration on industry-level projects, competitions, and AI support.",
  keywords: [
    "student projects",
    "collaboration",
    "industry projects",
    "coding competition",
    "AI support",
    "project hub",
    "education platform",
    "FlexCode",
  ],
  authors: [
    { name: "Suraj Vishwakarma" },
    { name: "Parna Ghosh" },
    { name: "FlexCode Team" },
  ],
  openGraph: {
    title: "FlexCode - Collaborate on Projects",
    description:
      "Join FlexCode to find project mates, complete industry-level projects, and earn coins to unlock new levels while collaborating with friends.",
    url: "https://flexcode.in",
    type: "website",
    images: [
      {
        url: "https://flexcode.in/images/flexcode-banner.jpg", // Replace with actual URL to your image
        width: 1200,
        height: 630,
        alt: "FlexCode - Collaborate on Real-World Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlexCode - Collaborate on Projects",
    description:
      "Join FlexCode to find project mates, complete industry-level projects, and earn rewards while collaborating with friends.",
    images: ["https://flexcode.in/images/flexcode-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/surajbg.png" sizes="any" />
      <ClerkProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar/>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
              {children}
              
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}

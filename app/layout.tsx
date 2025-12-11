import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NUVSOL - Intelligent AI Solutions for Real-World Problems",
  description: "Nuvsol builds practical AI-powered applications that eliminate manual workflows, improve efficiency, and empower professionals across industries like healthcare, food services, and operations.",
  keywords: ["AI", "Artificial Intelligence", "Workflow Automation", "Healthcare AI", "MealMind", "NUVSOL"],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


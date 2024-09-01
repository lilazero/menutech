import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({// do e mesosh me vone
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav></nav>
        {children}
        {/** children jane elementet qe trashegohen nga page dmth shfaq layout kudo ne cdo link pastaj
         * shfaq page-in lokal
         */}
        
        </body>
    </html>
  );
}

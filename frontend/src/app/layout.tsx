import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kacchi Restaurant",
  description: "Made by Ullas Shome",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="border-red-500 border-12">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

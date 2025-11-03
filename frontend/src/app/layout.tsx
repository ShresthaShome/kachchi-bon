import type { Metadata } from "next";
import "./globals.css";
// import ScrollToTopButton from "@/components/ScrollToTopButton";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

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
      <body className="border-red-600 border-8 pt-28 max-lg:pt-37 min-h-dvh flex flex-col justify-between">
        <Navbar />
        {children}
        {/* <Footer />
        <ScrollToTopButton /> */}
      </body>
    </html>
  );
}

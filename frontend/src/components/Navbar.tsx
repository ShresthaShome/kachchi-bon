"use client";

import { Handbag, Search, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 0);

      if (currentScroll > lastScrollRef.current && currentScroll > 150) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }

      lastScrollRef.current = currentScroll;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed mt-0 top-0 left-0 w-full z-500 transition-all duration-700 border-red-600 border-x-8 py-3 ${
        !scrolled ? "bg-white/90 shadow-lg border-t-8" : "bg-white/50"
      } ${
        hideNav ? "-translate-y-full md:translate-y-0" : "translate-y-0"
      } backdrop-blur-md flex flex-col lg:flex-row justify-around w-full min-h-30 gap-3 my-3 items-center`}
    >
      <div className="flex max-lg:justify-evenly max-lg:w-full w-1/4 justify-around">
        <Link
          href="/"
          className={`${
            pathname === "/" ? "text-black underline" : "text-red-500"
          } hover:text-black hover:underline decoration-2 decoration-red-500 underline-offset-6`}
        >
          Home
        </Link>
        <Link
          href="/menu"
          className={`${
            pathname === "/menu" ? "text-black underline" : "text-red-500"
          } hover:text-black hover:underline decoration-2 decoration-red-500 underline-offset-6`}
        >
          Menu
        </Link>
        <Link
          href="/about"
          className={`${
            pathname === "/about" ? "text-black underline" : "text-red-500"
          } hover:text-black hover:underline decoration-2 decoration-red-500 underline-offset-6`}
        >
          Our Story
        </Link>
      </div>
      <Link href="/">
        <Image
          src={"https://placehold.co/165x45"}
          alt="logo"
          width={165}
          height={45}
          unoptimized
        />
      </Link>
      <div className="flex max-lg:justify-center max-md:w-full w-1/4 justify-evenly items-center gap-10">
        <div className="relative max-w-sm">
          <input
            type="text"
            placeholder="Search"
            className="rounded-3xl h-9 p-5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-gray-100"
          />

          <Search className="absolute left-50 top-3 h-4 w-5 text-gray-800 " />
        </div>
        <Link
          href="/cart"
          className="text-gray-800 hover:text-gray-900 flex gap-1 items-center justify-center"
        >
          <Handbag className="h-6 w-6 text-gray-700" />
          Cart
        </Link>
        <Link
          href="/login"
          className="text-gray-800 hover:text-gray-900 flex gap-1 items-center justify-center"
        >
          <UserRound className="h-6 w-6 text-gray-700" />
          Login
        </Link>
      </div>
    </nav>
  );
}

"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  PhoneIcon,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-orange-600 flex flex-col justify-between items-center gap-10 p-5 md:pl-30 footer">
      <div className="flex max-md:flex-col justify-between gap-10 w-full md:px-10">
        <div className="max-md:w-full w-1/3 text-white gap-3 flex flex-col text-sm justify-center">
          <h1 className="font-bold text-white uppercase text-xl">Address</h1>
          <p className="leading-6">
            Room 617, Sheikh Rasel Hall, <br /> Mawlana Bhashani Science &
            Technology University,
            <br />
            Santosh, Tangail.
            <br />
            Phone: <strong>01518-946109</strong>
          </p>
          <h1 className="font-bold text-white  text-md">Corporate Branch</h1>
          <p className="leading-6">
            House- 42 Road- 96 <br /> Dream Villa (7st Floor) <br />
            Gulbahar 3 Square
            <br />
            <strong>Corporate Number: 01366-429600</strong>
          </p>
        </div>
        <div className="max-md:w-full w-1/3 text-white gap-1 flex flex-col text-sm">
          <h1 className="font-bold text-white uppercase text-lg">
            Branch Opening hours
          </h1>
          Everyday: 12:00 pm – 10:30 pm <br />
          <br />
          <h1 className="font-bold text-white uppercase text-lg">
            Online Opening hours
          </h1>
          Everyday: 12:00 pm– 09:00 pm <br />
          <br />
          <h1 className="font-bold text-white uppercase text-xl">Hotline</h1>
          <h1 className="text-white text-xl flex gap-2 items-center">
            <PhoneIcon className="w-5 h-5 fill-current" /> 01518-946109
          </h1>
          <br />
          <h1 className="font-bold text-white text-lg">Check Us Out</h1>
          <div className="flex gap-8 mt-1">
            <Link
              href="https://facebook.com/s.shome.ullas/"
              className="inline-flex items-center justify-center rounded-full bg-white pt-1 w-8 h-8"
            >
              <Facebook className="w-8 h-8 stroke-transparent fill-orange-600" />
            </Link>
            <Link
              href=""
              className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white p-1"
            >
              <Instagram className="w-6 h-6 text-orange-600" />
            </Link>
            <Link
              href=""
              className="inline-flex items-center justify-center rounded-full bg-white h-8 w-8 p-1"
            >
              <Youtube className="w-6 h-6 text-orange-600" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shrestha-shome/"
              className="inline-flex items-center justify-center rounded-full bg-white  w-8 h-8"
            >
              <Linkedin className="w-7 h-7 stroke-transparent fill-orange-600" />
            </Link>
          </div>
        </div>
        <div className="max-md:w-full w-1/3 text-white gap-3 flex flex-col text-sm">
          <p className="font-bold leading-6">
            For any complaint or Assistance <br />
            info@kachchibon.com
          </p>
          <div className="flex flex-col justify-start">
            <h1 className="font-bold text-white text-lg">Download Our App</h1>
            <div className="flex max-md:flex-col gap-5 my-3">
              <Link href="">
                <Image
                  src="/images/google-playstore.png"
                  alt="playstore"
                  width={200}
                  height={50}
                  className="md:h-10 md:w-30"
                />
              </Link>
              <Link href="">
                <Image
                  src="/images/apple-appstore.png"
                  alt="appstore"
                  width={200}
                  height={50}
                  className="md:h-10 md:w-30"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <h1 className="font-bold text-white text-lg">
              Our Delivery Partners
            </h1>
            <div className="flex max-md:flex-col gap-5 my-3">
              <Link href="">
                <Image
                  src="/images/pathao.png"
                  alt="pathao"
                  width={200}
                  height={50}
                  className="md:h-10 md:w-30 bg-linear-to-r from-orange-400 to-orange-600"
                />
              </Link>
              <Link href="">
                <Image
                  src="/images/foodpanda.png"
                  alt="foodpanda"
                  width={200}
                  height={50}
                  className="md:h-10 md:w-30"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-lg:justify-evenly w-full justify-center gap-5">
        <Link
          href="/terms"
          className={`${
            pathname === "/terms" ? "text-black underline" : "text-white"
          } hover:text-black hover:underline decoration-2 decoration-black underline-offset-6`}
        >
          Terms & Conditions
        </Link>
        |
        <Link
          href="/privacy"
          className={`${
            pathname === "/privacy" ? "text-black underline" : "text-white"
          } hover:text-black hover:underline decoration-2 decoration-black underline-offset-6`}
        >
          Privacy Policy
        </Link>
        |
        <Link
          href="/refund"
          className={`${
            pathname === "/refund" ? "text-black underline" : "text-white"
          } hover:text-black hover:underline decoration-2 decoration-black underline-offset-6`}
        >
          Refund Policy
        </Link>
        |
        <Link
          href="/about"
          className={`${
            pathname === "/about" ? "text-black underline" : "text-white"
          } hover:text-black hover:underline decoration-2 decoration-black underline-offset-6`}
        >
          About Us
        </Link>
        |
        <Link
          href="/gallery"
          className={`${
            pathname === "/about" ? "text-black underline" : "text-white"
          } hover:text-black hover:underline decoration-2 decoration-black underline-offset-6`}
        >
          Gallery
        </Link>
        |
        <Link
          href="/faq"
          className={`${
            pathname === "/faq" ? "text-black underline" : "text-white"
          } hover:text-black hover:underline decoration-2 decoration-black underline-offset-6`}
        >
          FAQ
        </Link>
      </div>
      <div className="text-white -mb-7">
        Copyright © 2025{" "}
        <Link
          href={"https://github.com/shresthashome"}
          className="text-yellow-300 hover:underline decoration-1 decoration-yellow-300 underline-offset-6"
        >
          Ullas Shome
        </Link>
        . All rights reserved.
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rafi Ahmed",
      role: "Food Blogger",
      image: "/images/testimonials/Reviewer1.jpg",
      rating: 5,
      text: "Absolutely loved the Kacchi! The flavors felt like home — rich, aromatic, and perfectly balanced. A must-visit for true food lovers!",
    },
    {
      name: "Mitu Rahman",
      role: "Traveler",
      image: "/images/testimonials/Reviewer2.jpeg",
      rating: 5,
      text: "The service was heartwarming and the desserts were divine. You can taste the passion behind every dish!",
    },
    {
      name: "Tanvir Hasan",
      role: "Local Customer",
      image: "/images/testimonials/Reviewer3.jpg",
      rating: 4,
      text: "The grilled dishes are top-notch, juicy, and full of flavor. Plus, the restaurant ambiance is cozy and classy.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative py-20 bg-linear-to-b from-pink-100 to-white text-center overflow-hidden">
      <Link
        href="/testimonials"
        className="hover:cursor-pointer hover:underline"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          What Our Customers Say
        </h2>
      </Link>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Real stories from real food lovers — because great taste deserves great
        words.
      </p>

      <Carousel className="max-w-4xl mx-auto">
        <CarouselContent>
          {testimonials.map((t, index) => (
            <CarouselItem
              key={index}
              className={`transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
            >
              <motion.div className="flex flex-col items-center justify-center px-6">
                <motion.div className="relative w-28 h-28 mb-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </motion.div>

                <motion.div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < t.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </motion.div>

                <motion.p className="text-lg italic text-gray-700 max-w-2xl mb-4">
                  “{t.text}”
                </motion.p>

                <motion.h4 className="text-xl font-semibold text-gray-900">
                  {t.name}
                </motion.h4>
                <motion.p className="text-gray-500">{t.role}</motion.p>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-60 h-60 bg-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-yellow-200/30 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}

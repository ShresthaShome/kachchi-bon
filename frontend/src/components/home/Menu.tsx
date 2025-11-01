"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function MenuSection() {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  return (
    <section className="w-full flex flex-col items-center h-103 bg-pink-300">
      <h1 className="pt-18 text-gray-700 text-3xl font-bold">
        Featured Dishes
      </h1>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[autoplay.current]}
        className="w-full max-w-[80%] md:max-w-[90%] mt-2 py-4"
      >
        <CarouselContent className="w-full">
          {Array.from({ length: 15 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="max-md:basis-full max-lg:basis-1/3 max-2xl:basis-1/4 basis-1/5 flex items-center justify-center flex-col w-auto"
            >
              <Link href={`/menu/${index + 1}`}>
                <Card className="rounded-full max-md:w-60 max-md:h-60 mb-1 w-60 h-60 p-0">
                  <CardContent className="p-0 w-full h-full ">
                    <Image
                      src="/images/hero.png"
                      alt={`food item ${index + 1}`}
                      width={1600}
                      height={1567}
                      className="w-full h-full object-cover rounded-full relative top-0 left-0"
                    ></Image>
                  </CardContent>
                </Card>

                <h2 className="text-center">Item-{index + 1}</h2>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="text-white bg-black hover:bg-gray-400 hover:text-black transition-all" />
        <CarouselNext className="text-white bg-black hover:bg-gray-400 hover:text-black transition-all" />
      </Carousel>
    </section>
  );
}

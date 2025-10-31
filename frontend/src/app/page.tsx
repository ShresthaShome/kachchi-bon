"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  return (
    <main>
      {/* hero */}
      <section className="w-full flex max-md:flex-col">
        <Image
          src="/images/hero.png"
          alt="hero"
          width={1600}
          height={1567}
          className="md:w-18/32 h-125 object-cover"
        />
        <div className="w-full h-3 bg-linear-to-b from-gray-600 to-transparent relative backdrop-blur-md top-3 -mt-4 z-20 md:hidden"></div>
        <div className="flex flex-col justify-between gap-15 py-12 items-center md:h-125 w-1/2 max-md:w-full bg-orange-600">
          <h1 className="text-5xl font-bold text-white">
            Best Kacchi In Tangail
          </h1>
          <p className="text-center leading-8 text-white font-bold">
            We bring people together around plates of authentic Kacchi. <br />
            Crafted with care, inspired by tradition.
          </p>
          <Button
            className="uppercase hover:cursor-pointer rounded-full  text-orange-600 hover:text-white hover:bg-blue-900 hover:shadow-md transition-all border-0 px-5 py-4 h-11 text-sm hover:scale-90 font-bold duration-500 ease-in-out"
            variant="outline"
          >
            View The Menu
          </Button>
        </div>
      </section>
      {/* menu */}
      <section className="w-full flex flex-col items-center h-103 bg-pink-300">
        <h1 className="pt-18 text-gray-700 text-3xl font-bold">Menu</h1>
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
          <CarouselPrevious className="text-white bg-black hover:bg-gray-300 hover:text-black transition-all" />
          <CarouselNext className="text-white bg-black hover:bg-gray-300 hover:text-black transition-all" />
        </Carousel>
      </section>
      {/* reservation */}
      <div></div>
      {/* blog */}
      <div></div>
    </main>
  );
}

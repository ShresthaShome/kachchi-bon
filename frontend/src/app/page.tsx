"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Select } from "@radix-ui/react-select";
import { isBefore, startOfDay } from "date-fns";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeZone, setTimeZone] = useState<string | undefined>(undefined);

  useEffect(() => {
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

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
      <section className="flex max-md:flex-col w-full">
        <Image
          src="/images/hero.png"
          alt="hero"
          width={1600}
          height={1567}
          className="md:max-w-3/7 object-cover"
        />

        <div className="flex flex-col md:w-4/7 bg-pink-200 items-center">
          <h1 className="text-3xl font-bold text-gray-700 my-5 text-center">
            Reserve a Table
          </h1>

          <form className="w-7/10 mt-2 flex flex-col items-center">
            <div className="md:grid md:grid-cols-2 gap-5 text-center max-md:flex flex-col justify-center w-full items-center">
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                name="name"
                className="col-start-1 row-start-1 bg-white h-8 w-full p-2 rounded-sm"
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                name="email"
                className="col-start-1 row-start-2 bg-white h-8 w-full p-2 rounded-sm"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                name="phone"
                id="phone"
                pattern="^\+?[0-9\s\-()]{7,}$"
                className="col-start-2 row-start-1 bg-white h-8 w-full p-2 rounded-sm"
                required
              />

              <Select required>
                <SelectTrigger className="col-start-2 row-start-2 bg-white h-8 w-full p-2">
                  <SelectValue placeholder="Select for a number of people" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Number of people</SelectLabel>
                    {Array.from({ length: 10 }).map((_, index) => (
                      <SelectItem
                        key={`option-${index}`}
                        value={`${index + 1}`}
                      >
                        {index + 1 < 10 ? `0${index + 1}` : "10+"}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full my-4 flex max-md:flex-col items-start">
              <h2 className="mb-1">Select Restaurant:</h2>
              <div className="flex gap-5 ml-3">
                <div className="flex gap-2 justify-center items-center">
                  <input
                    type="radio"
                    id="santosh"
                    value="santosh"
                    name="place"
                    className="w-4 h-4 mt-1 accent-red-500"
                  />
                  <label htmlFor="santosh">Santosh</label>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <input
                    type="radio"
                    id="shantikunjo"
                    value="shantikunjo"
                    name="place"
                    className="w-4 h-4 mt-1 accent-red-500"
                  />
                  <label htmlFor="shantikunjo">Shantikunjo</label>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <input
                    type="radio"
                    id="nirala"
                    value="nirala"
                    name="place"
                    className="w-4 h-4 mt-1 accent-red-500"
                  />
                  <label htmlFor="nirala">Nirala More</label>
                </div>
              </div>
            </div>

            <div className="bg-white w-full flex justify-center items-center rounded-md border max-xl:flex-col px-2">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                timeZone={timeZone}
                className="h-90 w-80 border-0 border-white"
                captionLayout="label"
                weekStartsOn={6}
                disabled={(date) => {
                  const day = date.getDay();
                  return (
                    day === 5 ||
                    isBefore(startOfDay(date), startOfDay(new Date()))
                  );
                }}
              />

              <div className="w-80 pt-8 mb-4 flex flex-col justify-between">
                <label className="level_box mb-4 flex justify-between gap-4">
                  <span className="border w-1/2">
                    <input
                      type="text"
                      name="time0"
                      id="time0"
                      value="12:00 PM - 1:00 PM"
                      className="w-37 text-xs p-2 text-center"
                    />
                  </span>
                  <span className="border w-1/2">
                    <input
                      className="w-37 text-xs p-2 text-center"
                      type="text"
                      name="time1"
                      id="time1"
                      value="6:00 PM - 7:00 PM"
                    />
                  </span>
                </label>
                <label className="level_box mb-4 flex justify-between gap-4">
                  <span className="border w-1/2">
                    <input
                      type="text"
                      name="time2"
                      id="time2"
                      value="1:00 PM - 2:00 PM"
                      className="w-37 text-xs p-2 text-center"
                    />
                  </span>
                  <span className="border w-1/2">
                    <input
                      type="text"
                      name="time3"
                      id="time3"
                      value="7:00 PM - 8:00 PM"
                      className="w-37 text-xs p-2 text-center"
                    />
                  </span>
                </label>
                <label className="level_box mb-4 flex justify-between gap-4">
                  <span className="border w-1/2">
                    <input
                      type="text"
                      name="time4"
                      id="time4"
                      value="2:00 PM - 3:00 PM"
                      className="w-37 text-xs p-2 text-center"
                    />
                  </span>
                  <span className="border w-1/2">
                    <input
                      type="text"
                      name="time5"
                      id="time5"
                      value="8:00 PM - 9:00 PM"
                      className="w-37 text-xs p-2 text-center"
                    />
                  </span>
                </label>
                <label className="level_box mb-4 flex justify-between gap-4">
                  <span className="border w-1/2">
                    <input
                      type="text"
                      name="time6"
                      id="time6"
                      value="5:00 PM - 6:00 PM"
                      className="w-37 text-xs p-2 text-center"
                    />
                  </span>
                  <span className="border w-1/2">
                    <input
                      type="text"
                      name="time7"
                      id="time7"
                      value="9:00 PM - 10:00 PM"
                      className="w-37 text-xs p-2 text-center"
                    />
                  </span>
                </label>
              </div>
            </div>
            <Button
              type="submit"
              className="uppercase text-white bg-red-600 my-4 w-50 hover:scale-90 transition-all duration-300 ease-in-out"
            >
              Submit request
            </Button>
          </form>
        </div>
      </section>
      {/* blog */}
      <section></section>
    </main>
  );
}

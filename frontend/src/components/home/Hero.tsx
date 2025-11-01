import Image from "next/image";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
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
  );
}

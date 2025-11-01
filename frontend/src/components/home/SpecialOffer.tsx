import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function SpecialOffersSection() {
  const router = useRouter();

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <Image
        src="/images/offer.jpeg"
        alt="Special Offer"
        fill
        className="object-cover object-center w-full h-full"
        priority
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4 pt-38">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-300">
          Special Offers
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-6 text-white">
          Enjoy exclusive discounts on our chef’s signature dishes. Limited time
          only — taste the best of Tangail’s cuisine!
        </p>

        <Button
          className="bg-white text-black hover:bg-gray-200 font-semibold px-6 py-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          onClick={() => router.push("/menu")}
        >
          View All Offers
        </Button>
      </div>
    </section>
  );
}

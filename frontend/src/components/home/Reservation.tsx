"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ReservationCTA() {
  return (
    <section className="w-full bg-linear-to-r py-20 flex flex-col items-center justify-center text-center text-white min-h-120 gap-6 relative h-[80vh] overflow-hidden">
      <Image
        src="/images/reservation-bg.jpg"
        alt="Restaurant background"
        fill
        priority
        className="object-cover brightness-75 -z-20"
      />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
      >
        Ready to Taste Something Special?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg md:text-xl max-w-2xl mb-8 text-white/90"
      >
        Reserve your table now and enjoy a fine dining experience crafted by our
        expert chefs.
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link
          href="/reservation"
          className="hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] bg-gray-300 text-rose-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-rose-50 transition-all duration-300"
        >
          Reserve Now 🍽️
        </Link>
      </motion.div>
    </section>
  );
}

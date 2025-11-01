"use client";

import ReservationCTA from "@/components/home/Reservation";
import HeroSection from "@/components/home/Hero";
import MenuSection from "@/components/home/Menu";
import SpecialOffersSection from "@/components/home/SpecialOffer";
import ChefSection from "@/components/home/Chefs";
import TestimonialsSection from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MenuSection />
      <SpecialOffersSection />
      <ChefSection />
      <TestimonialsSection />
      <ReservationCTA />
    </main>
  );
}

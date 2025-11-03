"use client";

import Image from "next/image";

const galleryImages = [
  { id: 1, src: "/images/gallery/interior1.jpg", title: "Cozy Dining Area" },
  { id: 2, src: "/images/gallery/interior2.png", title: "Private Booths" },
  {
    id: 3,
    src: "/images/gallery/dish1.jpg",
    title: "Signature Chicken Biryani",
  },
  { id: 4, src: "/images/gallery/dish2.png", title: "Grilled BBQ Platter" },
  { id: 5, src: "/images/gallery/event1.jpg", title: "Family Gathering" },
  { id: 6, src: "/images/gallery/event2.jpg", title: "Weekend Live Music" },
  {
    id: 7,
    src: "/images/gallery/dish3.jpg",
    title: "Special Classic Kachchi ",
  },
  { id: 8, src: "/images/gallery/interior3.jpg", title: "Elegant Lighting" },
];

export default function page() {
  return (
    <main className="min-h-screen bg-gray-50 pt-8 pb-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Our Gallery</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore moments from our kitchen, our cozy interiors, and the happy
          memories shared by our guests.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {galleryImages.map((img) => (
          <div
            key={img.id}
            className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <div className="relative w-full h-64">
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{img.title}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

"use client";

import Image from "next/image";

const chefs = [
  {
    id: 1,
    name: "Chef Rahman",
    role: "Head Chef",
    image: "/images/Chef1.jpg",
  },
  {
    id: 2,
    name: "Chef Laila",
    role: "Desert Expert",
    image: "/images/Chef2.jpg",
  },
  {
    id: 3,
    name: "Chef Hasan",
    role: "Grill Master",
    image: "/images/Chef3.jpg",
  },
];

const awards = [
  {
    id: 1,
    title: "Best Fine Dining 2024",
    org: "Bangladesh Culinary Awards",
  },
  {
    id: 2,
    title: "Top 10 Restaurants in Dhaka",
    org: "FoodLovers Magazine",
  },
  {
    id: 3,
    title: "Excellence in Hygiene & Service",
    org: "Restaurant Association of Bangladesh",
  },
];

const interiors = [
  "/images/gallery/interior1.jpg",
  "/images/gallery/interior2.png",
  "/images/gallery/interior3.jpg",
  "/images/gallery/interior4.jpg",
];

export default function page() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <section className="max-w-6xl mx-auto pt-8 pb-16 px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-rose-600 mb-4">
            Our Story
          </h1>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Founded in 2010, <strong>Kachchi Bon Restaurant</strong> began with
            a dream — to bring authentic Bengali flavors and modern dining
            together under one roof. What started as a small family restaurant
            has now become a culinary destination known for passion, quality,
            and innovation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Every dish tells a story, crafted from the freshest local
            ingredients, cooked to perfection by our award-winning chefs. We
            believe in serving experiences — not just meals.
          </p>
        </div>
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/about.jpg"
            alt="Restaurant Interior"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-rose-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To deliver exceptional dining experiences that celebrate taste,
            tradition, and togetherness — while maintaining sustainability,
            ethical sourcing, and a commitment to community.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Meet Our Chefs
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {chefs.map((chef) => (
            <div
              key={chef.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition"
            >
              <div className="relative w-full h-72">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {chef.name}
                </h3>
                <p className="text-rose-600">{chef.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Our Awards</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award) => (
              <div
                key={award.id}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-rose-600 mb-1">
                  {award.title}
                </h3>
                <p className="text-gray-600">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Interior
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interiors.map((src, i) => (
            <div
              key={i}
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <Image
                src={src}
                alt={`Interior ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

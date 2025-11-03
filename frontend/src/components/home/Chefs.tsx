import Image from "next/image";
import Link from "next/link";

export default function ChefSection() {
  const chefs = [
    {
      name: "Chef Rahman",
      role: "Head Chef",
      image: "/images/Chef1.jpg",
      description:
        "With over 20 years of culinary experience, Chef Rahman brings authentic Bengali flavors with a modern twist.",
    },
    {
      name: "Chef Aisha",
      role: "Desert Expert",
      image: "/images/Chef2.jpg",
      description:
        "A master of desserts and fusion sweets, Chef Aisha ensures every bite ends on a delightful note.",
    },
    {
      name: "Chef Karim",
      role: "Grill Specialist",
      image: "/images/Chef3.jpg",
      description:
        "Known for his tender, perfectly grilled dishes that make our guests come back again and again.",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50 flex flex-col items-center text-center">
      <Link href="/team" className="hover:cursor-pointer hover:underline">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Meet Our Chefs
        </h2>
      </Link>
      <p className="text-gray-600 max-w-2xl mb-12">
        Our talented chefs blend tradition and creativity to bring you
        unforgettable dishes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
          >
            <div className="relative w-full h-104 max-md:h-154 mb-4 rounded-lg overflow-hidden">
              <Image
                src={chef.image}
                alt={chef.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{chef.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{chef.role}</p>
            <p className="text-gray-600 text-sm">{chef.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

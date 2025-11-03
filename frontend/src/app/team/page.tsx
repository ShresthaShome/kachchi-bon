"use client";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Chef Rahman",
    role: "Head Chef",
    experience: "15 Years of Culinary Excellence",
    image: "/images/Chef1.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Chef Laila",
    role: "Desert Expert",
    experience: "10 Years in Desserts & Baking",
    image: "/images/Chef2.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Chef Hasan",
    role: "Grill Master",
    experience: "12 Years in BBQ & Grilled Dishes",
    image: "/images/Chef3.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "Chef Tania",
    role: "Sous Chef",
    experience: "8 Years in Modern Cuisine",
    image: "/images/Chef4.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
];

export default function page() {
  return (
    <main className="min-h-screen bg-gray-50 pt-8 pb-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Meet Our Team</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our talented chefs and dedicated staff bring passion and perfection to
          every dish we serve.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden group hover:shadow-2xl transition"
          >
            <div className="relative w-full h-72">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-rose-600 font-medium">{member.role}</p>
              <p className="text-sm text-gray-500 mt-2">{member.experience}</p>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href={member.socials.facebook}
                  className="text-gray-500 hover:text-rose-600 transition"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={member.socials.instagram}
                  className="text-gray-500 hover:text-rose-600 transition"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href={member.socials.twitter}
                  className="text-gray-500 hover:text-rose-600 transition"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

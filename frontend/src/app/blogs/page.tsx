"use client";

import Link from "next/link";
import Image from "next/image";

// Mock data or fetch from CMS
const posts = [
  {
    id: 1,
    title: "5 Must-Try Kacchi Recipes",
    snippet: "Learn how to make authentic Kacchi at home...",
    image: "/images/blogs/kachchi.jpg",
  },
  {
    id: 2,
    title: "Summer Drinks Guide",
    snippet: "Cool off with our chef-approved smoothies...",
    image: "/images/blogs/drinks.jpg",
  },
];

export default function page() {
  return (
    <main className="max-w-7xl mx-auto px-4 pt-8 pb-16">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-rose-600">
        Our Blogs
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blogs/${post.id}`}
            className="block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
          >
            <div className="relative h-48 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.snippet}</p>
              <span className="text-rose-600 mt-2 inline-block font-semibold">
                Read More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

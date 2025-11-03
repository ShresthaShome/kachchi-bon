"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { foodItems } from "@/app/menu/page";
import { mockPosts } from "@/app/blogs/[id]/page";

export default function SearchClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const [dishResults, setDishResults] = useState<typeof foodItems>([]);
  const [blogResults, setBlogResults] = useState<typeof mockPosts>([]);

  useEffect(() => {
    if (!query) return;

    const filteredDishes = foodItems.filter((dish) =>
      dish.name.toLowerCase().includes(query)
    );

    const filteredBlogs = mockPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query)
    );

    setDishResults(filteredDishes);
    setBlogResults(filteredBlogs);
  }, [query]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-rose-600 mb-8">
        Search Results for "{query}"
      </h1>

      {dishResults.length === 0 && blogResults.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No results found 😢</p>
      ) : (
        <div className="flex flex-col gap-12">
          {dishResults.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Dishes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dishResults.map((dish) => (
                  <Link key={dish.id} href={`/menu/`}>
                    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer">
                      <div className="relative h-48 w-full">
                        <Image
                          src={dish.image}
                          alt={dish.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg">{dish.name}</h3>
                        <p className="text-gray-600">৳ {dish.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {blogResults.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogResults.map((post) => (
                  <Link key={post.id} href={`/blogs/${post.id}`}>
                    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer">
                      {post.image && (
                        <div className="relative h-48 w-full">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-bold text-lg">{post.title}</h3>
                        <p className="text-gray-600 line-clamp-2">
                          {post.content}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

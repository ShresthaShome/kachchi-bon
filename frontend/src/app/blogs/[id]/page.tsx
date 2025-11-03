"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const mockPosts = [
  {
    id: "1",
    title: "5 Must-Try Kachchi Recipes",
    content:
      "Kachchi biryani is one of the most aromatic and flavorful dishes from Bangladesh. In this post, we explore traditional techniques, spices, and regional variations...",
    image: "/images/blogs/kachchi.jpg",
  },
  {
    id: "2",
    title: "Summer Drinks Guide",
    content:
      "Beat the heat with our chef-approved smoothies, milkshakes, and mocktails. Discover ingredients that keep you refreshed throughout the season...",
    image: "/images/blogs/drinks.jpg",
  },
];

export default function page() {
  const { id } = useParams();
  const post = mockPosts.find((p) => p.id === id) || {
    title: "Post not found",
    content: "The post you're looking for does not exist!!!",
    image: "",
  };

  const [comments, setComments] = useState([
    { name: "Farhan", text: "Loved this recipe! So well explained 👏" },
    { name: "Tania", text: "I tried this and it turned out amazing!" },
  ]);
  const [newComment, setNewComment] = useState({ name: "", text: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.name.trim() || !newComment.text.trim()) return;
    setComments([...comments, newComment]);
    setNewComment({ name: "", text: "" });
  };

  return (
    <main className="max-w-3xl mx-auto px-4 pt-4 pb-16">
      <Link href="/blogs" className="hover:underline block mb-4">
        &larr;Blogs
      </Link>
      <h1
        className={`text-4xl font-bold mb-6 text-rose-600 ${
          !post.image && "mt-34 mb:mt-46"
        }`}
      >
        {post.title}
      </h1>

      {post.image && (
        <div className="relative w-full max-w-4xl mx-auto h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="prose max-w-full text-gray-700 mb-12 leading-relaxed">
        {post.content}
      </div>
      {post.image && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>

          <div className="space-y-4 mb-8">
            {comments.map((c, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-3"
              >
                <strong className="block text-gray-800">{c.name}</strong>
                <p className="text-gray-600">{c.text}</p>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-gray-200 p-4 rounded-lg"
          >
            {/* <div className="mb-3">
            <label className="block font-semibold mb-1">Your Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
              value={newComment.name}
              onChange={(e) =>
                setNewComment({ ...newComment, name: e.target.value })
              }
              placeholder="Enter your name"
            />
          </div> */}
            <div className="mb-3">
              <label className="block font-semibold mb-2">Your Comment</label>
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
                rows={3}
                value={newComment.text}
                onChange={(e) =>
                  setNewComment({ ...newComment, text: e.target.value })
                }
                placeholder="Write your comment here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-rose-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-rose-700 transition hover:cursor-pointer"
            >
              Post Comment
            </button>
          </form>
        </div>
      )}
    </main>
  );
}

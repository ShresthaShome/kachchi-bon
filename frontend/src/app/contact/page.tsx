"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";

export default function page() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully (demo only).");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        <section className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">Get in Touch</h1>
          <p className="text-gray-600">
            We'd love to hear from you! Whether you have questions about
            reservations, catering, or feedback, our team is here to help.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                📍 Address
              </h3>
              <p className="text-gray-600">
                123 Food Street, Dhaka 1205, Bangladesh
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">📞 Phone</h3>
              <p className="text-gray-600">+880 1777-123456</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                🕓 Working Hours
              </h3>
              <p className="text-gray-600">Everyday: 10:00 AM - 11:00 PM</p>
            </div>
          </div>

          <div className="w-full h-64 rounded-lg overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.457183955734!2d90.3925!3d23.8041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71c9d2b9f15%3A0xa72b45d6c55e69e7!2sDhaka!5e0!3m2!1sen!2sbd!4v1709222222222!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="border-3 border-yellow-500"
            ></iframe>
          </div>
        </section>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send a Message
          </h2>

          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none resize-none"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="hover:cursor-pointer w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Send A Message
          </button>
        </form>
      </div>
    </main>
  );
}

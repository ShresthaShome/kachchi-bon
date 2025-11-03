"use client";

const testimonials = [
  {
    id: 1,
    name: "Rahim Uddin",
    role: "Food Blogger",
    image: "/images/testimonials/Reviewer1.jpg",
    feedback:
      "Absolutely loved the Chicken Dum Biryani! The flavors were rich and authentic. Definitely one of the best restaurants in town.",
  },
  {
    id: 2,
    name: "Anika Chowdhury",
    role: "Regular Customer",
    image: "/images/testimonials/Reviewer2.jpeg",
    feedback:
      "Service was top-notch and the desserts are divine. I always come here with my friends for a great evening.",
  },
  {
    id: 3,
    name: "Tanvir Ahmed",
    role: "Corporate Client",
    image: "/images/testimonials/Reviewer3.jpg",
    feedback:
      "They handled our corporate catering beautifully. Everyone at the office loved the food and presentation.",
  },
];

export default function page() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          What Our Customers Say
        </h1>
        <p className="text-gray-600 mb-12">
          We value every word from our guests. Here’s what they have to say
          about their dining experience.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-500">{t.role}</p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  “{t.feedback}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

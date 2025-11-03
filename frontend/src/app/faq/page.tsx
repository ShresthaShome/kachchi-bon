"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is your average delivery time?",
    answer:
      "Our average delivery time within the city is 30–45 minutes depending on your location and order size. You can track your order in real-time once it’s confirmed.",
  },
  {
    question: "Do you accept cash on delivery?",
    answer:
      "Yes, we accept Cash on Delivery (COD), major credit/debit cards, mobile banking (bKash, Nagad), and online payments through our secure gateway.",
  },
  {
    question: "Are there any vegan or gluten-free options?",
    answer:
      "Absolutely! We have several vegan and gluten-free dishes clearly labeled on our menu. Please inform our staff when ordering to avoid allergens.",
  },
  {
    question: "Do you cater for events or large orders?",
    answer:
      "Yes, we offer catering services for birthdays, weddings, and corporate events. Contact us at least 48 hours in advance for custom menu arrangements.",
  },
  {
    question: "How do I report an issue with my order?",
    answer:
      "If there’s an issue with your order, please reach out to our support team through the Contact page or call us directly at +880-1234-567890 within 24 hours.",
  },
];

export default function page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gray-50 pt-8 pb-16 px-6 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-rose-600 mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Find answers to common questions about delivery, payment, and more.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h2>
                {openIndex === i ? (
                  <ChevronUp className="text-rose-600 w-5 h-5" />
                ) : (
                  <ChevronDown className="text-rose-600 w-5 h-5" />
                )}
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

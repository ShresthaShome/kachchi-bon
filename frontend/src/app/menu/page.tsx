"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Range, getTrackBackground } from "react-range";

const foodItems = [
  {
    id: 1,
    name: "Classic Kacchi",
    category: "Lunch",
    price: 300,
    image: "/images/menu/classic-kachchi.jpg",
  },
  {
    id: 2,
    name: "Veggie Delight",
    category: "Breakfast",
    price: 210,
    image: "/images/menu/Veggie-Delight.png",
  },
  {
    id: 3,
    name: "BBQ Dinner",
    category: "Dinner",
    price: 480,
    image: "/images/menu/BBQ.jpg",
  },
  {
    id: 4,
    name: "Mango Smoothie",
    category: "Drinks",
    price: 160,
    image: "/images/menu/mango-smoothie.jpg",
  },
  {
    id: 5,
    name: "Chocolate Cake",
    category: "Desserts",
    price: 510,
    image: "/images/menu/choco-cake.jpeg",
  },
  // Add more items...
];

const categories = ["Breakfast", "Lunch", "Dinner", "Drinks", "Desserts"];

export default function MenuPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([100, 1000]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredItems = foodItems.filter(
    (item) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(item.category)) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-rose-600">
        Our Feast Menu
      </h1>

      <div className="flex flex-col lg:flex-row gap-6">
        <aside className="lg:w-64 shrink-0">
          <div className="flex flex-col gap-6 p-4 bg-white rounded-lg shadow-md">
            <div>
              <h2 className="font-semibold mb-2 text-gray-700">Categories</h2>
              <div className="flex lg:flex-col gap-3 lg:gap-1">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2">
                    <Checkbox
                      checked={selectedCategories.includes(cat)}
                      onCheckedChange={() => toggleCategory(cat)}
                    />
                    <span className="text-gray-700">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-semibold mb-2 text-gray-700">Price Range</h2>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>৳{priceRange[0]}</span>
                  <span>৳{priceRange[1]}</span>
                </div>
                <Range
                  values={priceRange}
                  step={1}
                  min={100}
                  max={1000}
                  onChange={(values) => setPriceRange([values[0], values[1]])}
                  renderTrack={({ props, children }) => {
                    return (
                      <div
                        {...(props as any)}
                        className="h-2 w-full rounded-lg"
                        style={{
                          background: getTrackBackground({
                            values: priceRange,
                            colors: ["#f87171", "#fbbf24", "#f87171"],
                            min: 100,
                            max: 1000,
                          }),
                        }}
                      >
                        {children}
                      </div>
                    );
                  }}
                  renderThumb={({ props }) => {
                    const { key, ...rest } = props;
                    return (
                      <div
                        key={key}
                        {...rest}
                        className="h-5 w-5 bg-rose-600 rounded-full shadow-md"
                      />
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </aside>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-dvh">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-0 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <h2 className="text-xl font-bold mb-1">{item.name}</h2>
                  <p className="text-gray-600 mb-2">{item.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-rose-600 font-semibold">
                      <span className="text-2xl">৳</span>
                      {item.price}
                    </span>
                    <Button
                      size="sm"
                      onClick={() => alert(`Added ${item.name} to cart!`)}
                      className="hover:cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

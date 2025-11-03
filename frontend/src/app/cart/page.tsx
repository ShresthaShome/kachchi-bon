"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function page() {
  const router = useRouter();

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Classic Kacchi",
      price: 400,
      quantity: 2,
      image: "/images/menu/classic-kachchi.jpg",
    },
    {
      id: 2,
      name: "BBQ Dinner",
      price: 520,
      quantity: 1,
      image: "/images/menu/BBQ.jpg",
    },
  ]);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total = subtotal - discount + 100;

  const applyCoupon = () => {
    if (coupon.trim().toLowerCase() === "food10") {
      setDiscount(subtotal * 0.1);
      alert("Coupon applied: 10% off!");
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-4 pt-8 pb-16">
      <h1 className="text-4xl font-extrabold text-rose-600 mb-10 text-center">
        Dining Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty 🛒</p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-30">
          <div className="lg:col-span-2">
            <div className="overflow-x-auto rounded-lg shadow-md bg-white">
              <table className="w-full text-left border-collapse">
                <thead className="bg-rose-600 text-white">
                  <tr>
                    <th className="p-4">Product</th>
                    <th className="p-4 text-center">Price</th>
                    <th className="p-4 text-center">Quantity</th>
                    <th className="p-4 text-center">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b hover:bg-rose-50 transition"
                    >
                      <td className="p-4 flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-md overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {item.name}
                          </p>
                          <button
                            className="text-rose-500 text-sm flex items-center gap-1 hover:text-rose-700 hover:cursor-pointer"
                            onClick={() => removeItem(item.id)}
                          >
                            <X size={14} /> Remove
                          </button>
                        </div>
                      </td>

                      <td className="p-4 text-center text-gray-700">
                        <strong className="text-2xl">৳</strong>
                        {item.price.toFixed(2)}
                      </td>

                      <td className="p-4 text-center">
                        <div className="inline-flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="hover:cursor-pointer"
                          >
                            –
                          </Button>
                          <span className="font-medium w-6 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, +1)}
                            className="hover:cursor-pointer"
                          >
                            +
                          </Button>
                        </div>
                      </td>

                      <td className="p-4 text-center font-semibold text-gray-800">
                        <strong className="text-2xl">৳</strong>
                        {(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Input
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="sm:w-1/2 border-2 border-black"
              />
              <Button
                className="font-bold bg-rose-600 hover:bg-rose-700 text-white hover:cursor-pointer"
                onClick={applyCoupon}
              >
                Apply Coupon
              </Button>
            </div>
          </div>

          <Card className="p-6 shadow-md bg-white h-fit sticky top-24">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Order Summary
            </h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>
                <strong className="text-2xl">৳</strong>
                {subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount</span>
              <span className="text-green-600">
                -<strong className="text-2xl">৳</strong>
                {discount.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery</span>
              <span>
                <strong className="text-2xl font-bold">৳</strong>
                100
              </span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t pt-3">
              <span>Total</span>
              <span>
                <strong className="text-2xl">৳</strong>
                {total.toFixed(2)}
              </span>
            </div>
            <Button
              className="w-full mt-6 bg-rose-600 hover:bg-rose-700 text-white uppercase hover:cursor-pointer"
              onClick={() => {
                const proceed = confirm("Proceed to checkout?");
                if (proceed) {
                  router.push("/checkout");
                }
              }}
            >
              Proceed to checkout
            </Button>
          </Card>
        </div>
      )}
    </main>
  );
}

"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  addOns?: string;
  price: number;
}

export default function page() {
  const router = useRouter();

  const [items] = useState<OrderItem[]>([
    {
      id: 1,
      name: "Classic Kachchi",
      quantity: 2,
      price: 398,
    },
    { id: 2, name: "Mango Smoothie", quantity: 1, price: 120 },
  ]);

  const [paymentMethod, setPaymentMethod] = useState<"cod" | "online">("cod");
  const [agree, setAgree] = useState(false);

  const [billing, setBilling] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    street: "",
    town: "",
    district: "",
    zip: "",
  });

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBilling({ ...billing, [e.target.name]: e.target.value });
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 100;
  const total = subtotal + shipping;

  const placeOrder = () => {
    if (!agree) return alert("You must agree to the terms and conditions.");
    const ordered = confirm(
      `Order placed! Payment: ${
        paymentMethod === "cod" ? "Cash on Delivery" : "Online"
      }`
    );

    if (ordered) router.push("/");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 pb-16 pt-8">
      <h1 className="text-4xl font-extrabold text-rose-600 mb-10 text-center">
        Checkout
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <Card className="p-6 shadow-md bg-white">
            <h2 className="text-2xl font-semibold mb-4">
              Billing & Delivery Info
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                name="name"
                placeholder="Full Name*"
                value={billing.name}
                onChange={handleBillingChange}
              />
              <Input
                name="email"
                placeholder="Email*"
                value={billing.email}
                onChange={handleBillingChange}
              />
              <Input
                name="phone"
                placeholder="Phone Number*"
                value={billing.phone}
                onChange={handleBillingChange}
              />
              <Input
                name="address"
                placeholder="Delivery Address*"
                value={billing.address}
                onChange={handleBillingChange}
              />
              <Input
                name="street"
                placeholder="Street Name*"
                value={billing.street}
                onChange={handleBillingChange}
              />
              <Input
                name="town"
                placeholder="Town/City"
                value={billing.town}
                onChange={handleBillingChange}
              />
              <Input
                name="district"
                placeholder="District*"
                value={billing.district}
                onChange={handleBillingChange}
              />
              <Input
                name="zip"
                placeholder="ZIP Code*"
                value={billing.zip}
                onChange={handleBillingChange}
              />
            </div>
          </Card>

          <Card className="p-6 shadow-md bg-white">
            <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                CoD - Pay with cash upon delivery.
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={() => setPaymentMethod("online")}
                />
                Pay Online (Credit/Debit Card/Mobile Banking/NetBanking/bKash)
              </label>
            </div>
          </Card>
        </div>

        <Card className="p-6 shadow-md bg-white h-fit lg:sticky lg:top-24">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Your Order
            </h2>

            <table className="w-full mb-4 text-gray-700 border-collapse">
              <thead className="border-b font-semibold">
                <tr>
                  <th className="text-left p-2">Product</th>
                  <th className="text-right p-2">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-2">
                      {item.name} × {item.quantity}
                    </td>
                    <td className="p-2 text-right">
                      <span className="text-2xl">৳</span>{" "}
                      {item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between text-gray-800 font-medium mb-1">
              <span className="font-bold">Subtotal</span>
              <span>
                <span className="text-2xl">৳</span> {subtotal}
              </span>
            </div>

            <div className="text-gray-900 text-sm my-2">
              <strong className="font-bold">Shipping</strong>
              <p className="my-1">
                Minimum delivery charge: <span className="text-xl">৳</span>100
                (may vary by location, confirmed via call)
              </p>
            </div>

            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Total</span>
              <span>
                <span className="text-2xl">৳</span> {total}
              </span>
            </div>

            <label className="flex items-center gap-2 mb-4 text-gray-600">
              <Checkbox
                checked={agree}
                onCheckedChange={() => setAgree(!agree)}
                className="border border-gray-500 mt-1"
              />
              I have read and agreed to the website's{" "}
              <Link href="/terms" className="text-yellow-600">
                terms and conditions
              </Link>
              <span className="relative -left-2">*</span>
            </label>

            <Button
              className="w-full text-rose-600 bg-transparent hover:bg-yellow-600 hover:text-white hover:cursor-pointer uppercase font-bold"
              onClick={placeOrder}
            >
              Place Order
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

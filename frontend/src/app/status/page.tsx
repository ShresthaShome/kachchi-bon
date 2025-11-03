"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import OrderTimeline from "@/components/status/OrderTimeLine";
import StatusPill from "@/components/status/Pill";

export type OrderStatus =
  | "Pending"
  | "Processing"
  | "Out for delivery"
  | "Delivered"
  | "Cancelled";

type OrderItem = {
  id: number;
  name: string;
  qty: number;
  price: number;
  image?: string;
  addons?: string;
};

type Order = {
  id: string;
  date: string; // ISO or readable
  status: OrderStatus;
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  address: string;
  phone: string;
  notes?: string;
};

const MOCK_ORDERS: Order[] = [
  {
    id: "ORD-1001",
    date: "2025-10-12",
    status: "Pending",
    items: [
      {
        id: 1,
        name: "Classic Kachchi",
        qty: 2,
        price: 199,
        addons: "No add-ons",
        image: "/images/menu/classic-kachchi.jpg",
      },
    ],
    subtotal: 398,
    deliveryFee: 100,
    total: 498,
    address: "House 12, Road 4, Tangail",
    phone: "+8801XXXXXXXXX",
    notes: "Ring bell twice",
  },
  {
    id: "ORD-1002",
    date: "2025-10-28",
    status: "Processing",
    items: [
      {
        id: 2,
        name: "BBQ Dinner",
        qty: 1,
        price: 520,
        image: "/images/menu/BBQ.jpg",
      },
      {
        id: 3,
        name: "Mango Smoothie",
        qty: 1,
        price: 120,
        image: "/images/menu/mango-smoothie.jpg",
      },
    ],
    subtotal: 640,
    deliveryFee: 100,
    total: 740,
    address: "MBSTU Campus, Tangail",
    phone: "+8801YYYYYYYY",
  },
  {
    id: "ORD-1003",
    date: "2025-09-15",
    status: "Delivered",
    items: [
      {
        id: 4,
        name: "Chocolate Cake",
        qty: 1,
        price: 520,
        image: "/images/menu/choco-cake.jpeg",
      },
    ],
    subtotal: 520,
    deliveryFee: 0,
    total: 520,
    address: "45/A New Area, Dhaka",
    phone: "+8801ZZZZZZZZ",
  },
  {
    id: "ORD-1004",
    date: "2025-10-01",
    status: "Out for delivery",
    items: [
      {
        id: 5,
        name: "Veggie Delight",
        qty: 1,
        price: 120,
        image: "/images/menu/Veggie-Delight.png",
      },
    ],
    subtotal: 120,
    deliveryFee: 0,
    total: 120,
    address: "Some Road, City",
    phone: "+8801AAAAAAA",
  },
  {
    id: "ORD-1005",
    date: "2025-10-01",
    status: "Cancelled",
    items: [
      {
        id: 5,
        name: "BBQ Dinner",
        qty: 1,
        price: 520,
        image: "/images/menu/BBQ.png",
      },
    ],
    subtotal: 520,
    deliveryFee: 0,
    total: 520,
    address: "Some Road, City",
    phone: "+8801AAAAAAA",
  },
];

export default function page() {
  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);
  const [filter, setFilter] = useState<
    | "All"
    | "Pending"
    | "Processing"
    | "Out for delivery"
    | "Delivered"
    | "Cancelled"
  >("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Order | null>(null);

  const filtered = useMemo(() => {
    return orders.filter((o) => {
      if (filter !== "All" && o.status !== filter) return false;
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return (
        o.id.toLowerCase().includes(q) ||
        o.items.some((it) => it.name.toLowerCase().includes(q))
      );
    });
  }, [orders, filter, search]);

  const cancelOrder = (orderId: string) => {
    const confirmed = confirm("Are you sure you want to cancel this order?");
    if (!confirmed) return;

    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId &&
        (o.status === "Pending" || o.status === "Processing")
          ? { ...o, status: "Cancelled" }
          : o
      )
    );
    if (selected?.id === orderId)
      setSelected({ ...(selected as Order), status: "Cancelled" });
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-rose-600 mb-6">My Orders</h1>
      <p className="text-sm text-gray-600 mb-6">
        View all the orders that are currently —
        <br />
        Pending / Processing / Out for delivery / Delivered / Cancelled
      </p>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex gap-2 items-center flex-wrap">
          {(
            [
              "All",
              "Pending",
              "Processing",
              "Out for delivery",
              "Delivered",
              "Cancelled",
            ] as const
          ).map((s) => (
            <Button
              key={s}
              onClick={() => setFilter(s)}
              className={`hover:cursor-pointer px-3 py-1 rounded-full text-sm font-medium transition ${
                filter === s
                  ? "bg-rose-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {s}
            </Button>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <input
            type="search"
            placeholder="Search order ID or item..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 w-64"
          />
          <Button
            onClick={() => {
              setSearch("");
              setFilter("All");
            }}
            className="hover:cursor-pointer px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-black"
            title="Reset"
          >
            Reset
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="p-6 text-center bg-white shadow rounded">
            No orders found.
          </div>
        ) : (
          <div className="bg-white shadow rounded overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 text-sm text-gray-600">
                    Order
                  </th>
                  <th className="text-left px-4 py-3 text-sm text-gray-600">
                    Items
                  </th>
                  <th className="text-center px-4 py-3 text-sm text-gray-600">
                    Date
                  </th>
                  <th className="text-center px-4 py-3 text-sm text-gray-600">
                    Total
                  </th>
                  <th className="text-center px-4 py-3 text-sm text-gray-600">
                    Status
                  </th>
                  <th className="text-right px-4 py-3 text-sm text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((o) => (
                  <tr key={o.id} className="border-t hover:bg-rose-50">
                    <td className="px-4 py-3">
                      <div className="text-sm font-medium">{o.id}</div>
                      <div className="text-xs text-gray-500">{o.address}</div>
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex flex-col gap-2 items-start">
                        {o.items.slice(0, 2).map((it) => (
                          <div key={it.id} className="flex items-center gap-2">
                            <div className="w-12 h-12 relative rounded overflow-hidden bg-gray-100">
                              {it.image ? (
                                <Image
                                  src={it.image}
                                  alt={it.name}
                                  fill
                                  className="object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">
                                  img
                                </div>
                              )}
                            </div>
                            <div className="text-sm">
                              <div className="font-medium">{it.name}</div>
                              <div className="text-xs text-gray-500">
                                × {it.qty} • ৳{(it.price * it.qty).toFixed(2)}
                              </div>
                            </div>
                          </div>
                        ))}
                        {o.items.length > 2 && (
                          <div className="text-sm text-gray-500">
                            +{o.items.length - 2} more
                          </div>
                        )}
                      </div>
                    </td>

                    <td className="px-4 py-3 text-center text-sm">{o.date}</td>
                    <td className="px-4 py-3 text-center text-sm">
                      ৳ {o.total.toFixed(2)}
                    </td>
                    <td className="px-4 py-3 text-center text-sm">
                      <StatusPill status={o.status} />
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelected(o)}
                          className="hover:cursor-pointer text-rose-600 hover:underline text-sm"
                        >
                          View
                        </button>

                        {["Pending", "Processing"].includes(o.status) && (
                          <Button
                            onClick={() => cancelOrder(o.id)}
                            className="text-sm text-red-600 hover:underline hover:cursor-pointer bg-transparent hover:bg-red-200 px-2"
                          >
                            Cancel
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {selected && (
        <div className="fixed inset-0 z-1000 flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSelected(null)}
          />

          <div className="relative ml-auto w-full max-w-2xl bg-white shadow-xl h-full overflow-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 className="text-lg font-semibold">{selected.id}</h3>
                <div className="text-sm text-gray-500">
                  {selected.date} • {selected.phone}
                </div>
              </div>
              <Button
                className="p-2 hover:cursor-pointer bg-transparent text-black hover:bg-gray-200 hover:text-black"
                onClick={() => setSelected(null)}
              >
                <X />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Delivery Address
                  </h4>
                  <p className="text-sm text-gray-600">{selected.address}</p>
                  {selected.notes && (
                    <p className="text-sm text-gray-600 mt-2">
                      Notes: {selected.notes}
                    </p>
                  )}
                </div>

                <div className="w-full md:w-auto">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Order summary
                  </h4>
                  <div className="text-sm text-gray-600">
                    {selected.items.map((it) => (
                      <div key={it.id} className="flex justify-between gap-5">
                        <div>
                          {it.name} × {it.qty}
                        </div>
                        <div>৳ {(it.price * it.qty).toFixed(2)}</div>
                      </div>
                    ))}
                    <div className="border-t mt-2 pt-2">
                      <div className="flex justify-between font-medium">
                        <span>Subtotal</span>
                        <span>৳ {selected.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Delivery</span>
                        <span>৳ {selected.deliveryFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-bold mt-2">
                        <span>Total</span>
                        <span>৳ {selected.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Tracking</h4>
                <OrderTimeline status={selected.status} />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

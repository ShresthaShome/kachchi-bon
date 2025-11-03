"use client";
import { Separator } from "@/components/ui/separator";
import { Camera } from "lucide-react";
import { useState, useRef } from "react";

export default function page() {
  const [user, setUser] = useState({
    name: "Shrestha Shome",
    email: "shrestha@example.com",
    phone: "+8801XXXXXXXXX",
    image: "",
  });

  const [addresses, setAddresses] = useState([
    "123 Adalat Para, Tangail",
    "45/A New Area, Dhaka",
  ]);

  const [orders] = useState([
    {
      id: 1,
      name: "Classic Kacchi",
      count: 2,
      date: "2025-10-12",
      total: 840,
      status: "Delivered",
    },
    {
      id: 2,
      name: "BBQ Dinner",
      count: 1,
      date: "2025-10-28",
      total: 269,
      status: "Pending",
    },
  ]);

  const [passwords, setPasswords] = useState({
    old: "",
    new: "",
    confirm: "",
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleAddAddress = () => {
    const newAddress = prompt("Enter new address:");
    if (newAddress) setAddresses([...addresses, newAddress]);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () =>
        setUser({ ...user, image: reader.result as string });
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Your Profile
        </h1>

        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8 md:justify-center mb-10">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
            {user.image ? (
              <img
                src={user.image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-700 text-4xl font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="z-20 absolute bottom-0 flex justify-center bg-blue-600/30 text-white text-sm rounded-lg hover:bg-blue-700/30 hover:cursor-pointer transition w-full p-0"
            >
              <Camera className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-gray-500">{user.email}</p>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageChange}
            />
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            Personal Information
          </h2>
          <Separator className="-mt-5" />
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="m-1">Name</h3>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleUserChange}
                className="border rounded-lg px-4 py-2 w-full"
                placeholder="Full Name"
              />
            </div>
            <div>
              <h3 className="m-1">Email</h3>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleUserChange}
                className="border rounded-lg px-4 py-2 w-full"
                placeholder="Email"
              />
            </div>

            <div>
              <h3 className="m-1">Phone</h3>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleUserChange}
                className="border rounded-lg px-4 py-2 w-full"
                placeholder="Phone"
              />
            </div>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Save Changes
          </button>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 pb-2 flex justify-between items-center">
            Saved Addresses
            <button
              onClick={handleAddAddress}
              className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600 transition"
            >
              + Add
            </button>
          </h2>
          <Separator className="-mt-5" />
          <ul className="space-y-2">
            {addresses.map((addr, idx) => (
              <li
                key={idx}
                className="border rounded-lg px-4 py-2 flex justify-between items-center"
              >
                <span>{addr}</span>
                <button
                  onClick={() =>
                    setAddresses(addresses.filter((_, i) => i !== idx))
                  }
                  className="text-red-500 hover:text-red-600"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            Order History
          </h2>
          <Separator className="-mt-5" />
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-center">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border ">Order ID</th>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Count</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Total</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="p-2 border text-left">#{order.id}</td>
                    <td className="p-2 border">{order.name}</td>
                    <td className="p-2 border">{order.count}</td>
                    <td className="p-2 border">{order.date}</td>
                    <td className="p-2 border">৳{order.total}</td>
                    <td
                      className={`p-2 border ${
                        order.status === "Delivered"
                          ? "text-green-600"
                          : order.status === "Cancelled"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {order.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            Change Password
          </h2>
          <Separator className="-mt-5" />
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="password"
              name="old"
              placeholder="Old Password"
              value={passwords.old}
              onChange={handlePasswordChange}
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="password"
              name="new"
              placeholder="New Password"
              value={passwords.new}
              onChange={handlePasswordChange}
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              value={passwords.confirm}
              onChange={handlePasswordChange}
              className="border rounded-lg px-4 py-2"
            />
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Update Password
          </button>
        </section>
      </div>
    </main>
  );
}

"use client";

import { type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
// import Image from "next/image";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Logging in as ${email}`);
    router.push("/profile");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-200 via-gray-100 to-orange-200 ">
      <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-md shadow-xl">
        {/* <div className="flex justify-center mb-6">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full shadow-md"
          />
        </div> */}

        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Please login to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Email / Phone
            </label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address or phone number"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-rose-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-rose-500 focus:outline-none"
            />
          </div>

          <p className="ml-4 text-gray700 dark:text-gray-300 mt-6 text-sm">
            <a href="/register" className="hover:underline font-semibold">
              Forgot Password?
            </a>
          </p>

          <div className="w-full flex justify-center gap-2">
            <Button
              type="submit"
              className=" hover:cursor-pointer py-2.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-semibold transition-all duration-300 shadow-md min-h-11 w-1/3"
            >
              Login
            </Button>
            <Button
              type="button"
              className="hover:cursor-pointer w-1/3 py-2.5 rounded-lg bg-white hover:bg-gray-100 text-black font-semibold transition-all duration-300 shadow-md min-h-11 border-rose-600 border"
              onClick={() => router.push("/register")}
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}

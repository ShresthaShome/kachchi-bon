"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
// import Image from "next/image";

type FormFields = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export default function page() {
  const [form, setForm] = useState<FormFields>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Signing up as ${form.email}`);
    router.push("/profile");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-200 via-gray-100 to-orange-200">
      <div className="relative w-full max-w-lg p-8 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-md shadow-xl my-5">
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
          Create an Account
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Join us and explore our menu 🍽️
        </p>

        <form onSubmit={handleSubmit} className="space-y-1">
          <div className="w-full flex max-lg:flex-col justify-center gap-6 max-lg:gap-1">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                required
                value={form.firstname}
                onChange={handleChange}
                placeholder="Enter First Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-rose-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                required
                value={form.lastname}
                onChange={handleChange}
                placeholder="Enter Last Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-rose-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="w-full flex max-lg:flex-col justify-center gap-6 max-lg:gap-1">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Email
              </label>
              <input
                type="text"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Email Address"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-rose-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-rose-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="w-full flex max-lg:flex-col justify-center gap-6 max-lg:gap-1">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-rose-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-rose-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-2  text-gray700 dark:text-gray-300 mt-6 text-sm items-center">
            <Checkbox className="border border-black mt-[3px]" required /> Yes,
            I agree to the T&C and the privacy policy.
          </div>

          <div className="w-full flex justify-center gap-2 mt-5">
            <Button
              type="submit"
              className=" hover:cursor-pointer py-2.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-semibold transition-all duration-300 shadow-md min-h-11 w-1/3"
            >
              Register
            </Button>
            <Button
              type="button"
              className="hover:cursor-pointer w-1/3 py-2.5 rounded-lg bg-white hover:bg-gray-100 text-black font-semibold transition-all duration-300 shadow-md min-h-11 border-rose-600 border"
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-amber-50 to-orange-100 text-center px-6 max-md:pt-30 max-md:pb-50">
      <h1 className="text-[6rem] font-extrabold text-amber-600 leading-none">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-2">
        Oops! Page Not Found 🍽️
      </h2>
      <p className="text-gray-600 mt-3 max-w-md">
        Looks like the page you’re craving isn’t on our menu. Don’t worry —
        let’s get you back to something delicious.
      </p>

      <div className="flex gap-4 mt-8">
        <Link
          href="/"
          className="rounded-lg bg-amber-600 px-5 py-2.5 text-white font-medium hover:bg-amber-700 transition-all"
        >
          🏠 Go Home
        </Link>
        <Link
          href="/menu"
          className="rounded-lg border border-amber-600 px-5 py-2.5 text-amber-700 font-medium hover:bg-amber-100 transition-all"
        >
          📜 View Menu
        </Link>
      </div>
    </div>
  );
}

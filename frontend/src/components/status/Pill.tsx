import { type OrderStatus } from "@/app/status/page";

export default function StatusPill({ status }: { status: OrderStatus }) {
  const cls =
    status === "Pending"
      ? "bg-yellow-100 text-yellow-800"
      : status === "Processing"
      ? "bg-rose-100 text-rose-800"
      : status === "Out for delivery"
      ? "bg-sky-100 text-sky-800"
      : status === "Delivered"
      ? "bg-green-100 text-green-800"
      : "bg-gray-100 text-gray-800";

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${cls}`}
    >
      {status}
    </span>
  );
}

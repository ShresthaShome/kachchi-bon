import { type OrderStatus } from "@/app/status/page";

const STATUS_FLOW: OrderStatus[] = [
  "Pending",
  "Processing",
  "Out for delivery",
  "Delivered",
];

const statusIndex = (status: OrderStatus) => {
  const i = STATUS_FLOW.indexOf(status as OrderStatus);
  return i === -1 ? -1 : i;
};

const statusColor = (statusIndex: number) => {
  switch (STATUS_FLOW[statusIndex]) {
    case "Pending":
      return "bg-fuchsia-400 text-red-800";
    case "Processing":
      return "bg-rose-400 text-red-800";
    case "Out for delivery":
      return "bg-sky-400 text-sky-800";
    case "Delivered":
      return "bg-green-400 text-green-800";
    default:
      return "bg-gray-400 text-gray-800";
  }
};

export default function OrderTimeline({ status }: { status: OrderStatus }) {
  const currentIndex = statusIndex(status);

  return (
    <div className="flex flex-col gap-4">
      {STATUS_FLOW.map((step, idx) => {
        const done = idx <= currentIndex;
        return (
          <div key={step} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`w-6 h-6 font-bold rounded-full flex items-center justify-center ${
                  done ? statusColor(currentIndex) : "bg-gray-300 border"
                }`}
              >
                {done ? "✓" : idx + 1}
              </div>
              {idx < STATUS_FLOW.length - 1 && (
                <div
                  className={`w-px h-12 ${
                    done ? statusColor(currentIndex) : "bg-gray-400"
                  }`}
                />
              )}
            </div>

            <div>
              <div
                className={`font-medium ${
                  done
                    ? `${statusColor(currentIndex)} bg-transparent`
                    : "text-gray-500"
                }`}
              >
                {step}
              </div>
              <div className="text-sm text-gray-500">
                {!idx ? "" : done ? "Completed" : "Pending"}
              </div>
            </div>
          </div>
        );
      })}

      {status === "Cancelled" && (
        <div className="mt-4 p-3 border rounded bg-red-50 text-red-700">
          This order has been cancelled.
        </div>
      )}
      {status === "Delivered" && (
        <div className="mt-2 text-sm text-gray-500">
          Delivered. Thanks for ordering!
        </div>
      )}
    </div>
  );
}

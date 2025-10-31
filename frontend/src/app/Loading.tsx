import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center gap-3">
      <Loader2 className="h-10 w-10 text-amber-600 animate-spin" />
      <p className="text-gray-700 font-medium">Preparing your meal... 🍽️</p>
    </div>
  );
}

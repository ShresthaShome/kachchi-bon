import { Suspense } from "react";
import SearchClient from "./SearchClient";
import Loading from "../Loading";

export default function page() {
  return (
    <Suspense fallback={<Loading />}>
      <SearchClient />
    </Suspense>
  );
}

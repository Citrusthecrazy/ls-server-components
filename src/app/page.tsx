import ClientComponent from "@/components/ClientComponent";
import ServerComponent from "@/components/ServerComponent";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-row gap-24 p-4">
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Server Component */}
        <ServerComponent />
      </Suspense>
      {/* <ServerComponent /> */}
      <ClientComponent />
    </main>
  );
}

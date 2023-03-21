import ClientComponent from "@/components/ClientComponent";
import ServerComponent from "@/components/ServerComponent";
import { Suspense, useState } from "react";

export default function Home() {
  return (
    <main className="grid grid-cols-4 gap-24 my-2">
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      {/* @ts-expect-error Server Component */}
      <ServerComponent />
      {/* </Suspense> */}
      <ClientComponent />
    </main>
  );
}

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Profile } from "./ServerComponent";

const ClientComponent = () => {
  const [data, setData] = useState<Profile | null>(null);
  useEffect(() => {
    const id = Math.floor(Math.random() * 10) + 1;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="grid grid-cols-4 shadow-md p-2 rounded-md items-center bg-white w-80">
      <div className="relative w-16 h-16 overflow-hidden rounded-full col-span-1 row-span-2">
        <Image
          fill
          src={
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80"
          }
          alt={`Image of ${data?.name}`}
        />
      </div>
      <div className="col-span-3 ml-6 flex flex-col row-span-2">
        <h1 className="text-2xl font-bold">{data?.name}</h1>
        <span className="col-span-full">{data?.email}</span>
      </div>
      <h2 className="col-span-full font-bold">
        {data?.company.name || "Loading..."}
      </h2>
      <p className="col-span-full text-sm">
        {data?.company.catchPhrase || "Loading..."}
      </p>
    </div>
  );
};

export default ClientComponent;

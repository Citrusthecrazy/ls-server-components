import Image from "next/image";
import React from "react";

export type Profile = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const getData = (): Promise<Profile> => {
  const id = Math.floor(Math.random() * 10) + 1;
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "GET",
      });
      resolve(res.then((res) => res.json()));
    }, 5000);
  });
};

const ServerComponent = async () => {
  const { name, company } = await getData();

  return (
    <div className="grid grid-cols-4 shadow-md p-2 rounded-md items-center bg-white">
      <div className="relative w-16 h-16 overflow-hidden rounded-full col-span-1">
        <Image
          fill
          src={
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80"
          }
          alt={`Image of ${name}`}
        />
      </div>
      <div className="col-span-3 ml-6">
        <h1 className="text-2xl font-bold">{name}</h1>
      </div>
      <h2 className="col-span-full font-bold">{company.name}</h2>
      <p className="col-span-full text-sm">{company.catchPhrase}</p>
    </div>
  );
};

export default ServerComponent;

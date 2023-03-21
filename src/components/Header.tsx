import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex flex-row gap-4 items-center shadow-md bg-white p-4 rounded-t-md">
      <Link href="#">Link</Link>
      <Link href="#">Link</Link>
      <Link href="#">Link</Link>
      <Link href="#">Link</Link>
    </header>
  );
};

export default Header;

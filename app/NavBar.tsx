import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="mb-5">
      <ul className="flex border-b border-gray-400 py-3 justify-between px-5">
        <li className="text-gray-700">
          <Link href="/">TaskX</Link>
        </li>
        <li>Profile</li>
      </ul>
    </nav>
  );
};

export default NavBar;

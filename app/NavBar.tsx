import { Button } from "@radix-ui/themes";

import React from "react";

const NavBar = () => {
  return (
    <nav className="mb-5">
      <ul className="flex border-b border-gray-400 py-3 justify-between px-5">
        <li className="text-gray-700">TaskX</li>
        <li className="flex gap-3 items-center">
          <Button>Signin</Button>
          <Button color="pink" variant="soft">
            Signup
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

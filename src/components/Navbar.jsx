import React from "react";

function Navbar() {
  return (
    <nav className="bg-sky-400 w-full h-auto py-3 flex">
      <label className="mx-auto ">
        <div className="flex items-center">
          <input className="rounded-sm py-2 text-center" placeholder="Search" type="text" />
        </div>
      </label>
    </nav>
  );
}

export default Navbar;

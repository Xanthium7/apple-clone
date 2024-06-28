import React from "react";
import { navLists } from "@/constants";

const Navbar = () => {
  return (
    <header className=" w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width justify-between">
        <img
          src="/assets/images/apple.svg"
          alt="apple"
          width={14}
          height={18}
        />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              key={nav}
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7">
          <img
            src="/assets/images/search.svg"
            alt="search"
            width={18}
            height={18}
          />
          <img src="/assets/images/bag.svg" alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

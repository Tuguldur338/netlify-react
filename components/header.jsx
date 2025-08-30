"use client";

import Image from "next/image";
import Button from "react-bootstrap/Button";
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex position-sticky top-0 bg-gray-800 items-center h-24 px-4 z-[1000]">
      <div className="max-w-screen w-full h-[70px] flex items-center bg-gray-700 rounded-[45px] shadow-xl/30 transition duration-300 hover:shadow-xl/50 px-6 justify-between">
        {/* Logo */}
        <div className="mr-8 flex-shrink-0">
          <a href="http://localhost:3000/">
            <Image
              src="/images/netlify-logo.png"
              alt="Netlify image png"
              width={120}
              height={120}
              className="cursor-pointer"
            />
          </a>
        </div>

        {/* Tabs */}
        <div className="flex">
          <div className="">
            <Button variant="link" className="!no-underline text-white">
              Home
            </Button>
          </div>

          <div>
            <Button variant="link" className="!no-underline text-white">
              About
            </Button>
          </div>

          <div>
            <Button variant="link" className="!no-underline text-white">
              Prices
            </Button>
          </div>
        </div>

        {/* Header controls */}
        <div className="relative flex items-center">
          <div className="relative group flex items-center hover:position-absolute">
            <IoSearchSharp
              size={20}
              className="text-white cursor-text transition-colors duration-300"
            />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 w-0 group-hover:w-32 focus:w-32 transition-all duration-600 outline-none rounded-md px-2 text-white"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

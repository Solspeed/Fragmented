// pages/index.tsx
"use client";
import React, { useState } from "react";
import Icon from '../../public/Group45.svg'
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-auto sm:h-[118px] flex-shrink-0 rounded-sm flex flex-col sm:flex-row justify-between items-center  py-4 sm:py-0">
      <div className="flex gap-2 justify-between items-center w-full h-16 sm:w-auto">
        <div className="w-[37px] h-[32.40px] relative whot">
          <Image src={Icon} alt="Fragmented" />
        </div>
        <div className="flex flex-col justify-center h-auto flex-shrink-0 text-white font-bold text-2xl  leading-[18px] tracking-[0.5px]">
          Fragmented
        </div>
        <div className="sm:hidden flex items-center ml-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:flex flex-col sm:flex-row items-center gap-[16px] sm:gap-[33px] mt-4 sm:mt-0`}
      >
        <div className="flex flex-col gap-6 sm:flex-row">
          <span className="text-white text-center font-normal text-[16px] sm:text-[18px] leading-[18px]">
            Home
          </span>
          <span className="text-white text-center font-normal text-[16px] sm:text-[18px] leading-[18px]">
            About
          </span>
          <span className="text-white text-center font-normal text-[16px] sm:text-[18px] leading-[18px]">
            Contact
          </span>
        </div>
        <div className="bg-white rounded-[30px] px-6 py-0 mt-3 sm:px-8 sm:py-0">
          <span className="text-[#08070B] font-medium text-[14px] sm:text-[18px] leading-[40px] sm:leading-[58px]">
            Whitepaper
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

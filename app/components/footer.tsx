import React from "react";

const Footer = () => {
  return (
    <footer className="mt-24 w-full px-4">
      <div className="flex flex-col items-center m-12">
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center md:items-start">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="/fragimgwhite.svg"
              alt="Fragmented Logo"
              className="mr-2"
            />
            <div className="text-white text-2xl font-bold font-['Instrument Sans'] leading-[18px] tracking-wide">
              Fragmented
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row md:space-x-8 mt-4 md:mt-0">
            <div className="text-center text-white text-lg font-normal font-['Instrument Sans'] leading-[18px]">
              Home
            </div>
            <div className="text-center text-white text-lg font-normal font-['Instrument Sans'] leading-[18px]">
              About
            </div>
            <div className="text-center text-white text-lg font-normal font-['Instrument Sans'] leading-[18px]">
              Contact
            </div>
            <div className="text-center text-white text-lg font-normal font-['Instrument Sans'] leading-[18px]">
              Whitepaper
            </div>
          </div>
          <div className="text-center text-white text-xl font-bold font-['Instrument Sans'] leading-tight">
            Follow us
          </div>
        </div>
        <div className="mt-4 w-full flex flex-col items-center md:flex-row md:justify-between">
          <div className="opacity-40 text-white text-lg font-normal font-['Instrument Sans'] leading-[30px] text-center md:text-left mb-2 md:mb-0">
            Copyright © 2023 Fragmented
            <br />
            All Rights Reserved
          </div>
          <div className="flex flex-row">
            <div className="w-9 h-9 relative mr-2">
              <div className="w-9 h-9 left-0 top-0 absolute opacity-40 bg-indigo-900 rounded-lg" />
            </div>
            <div className="w-9 h-9 relative">
              <div className="w-9 h-9 left-0 top-0 absolute opacity-40 bg-indigo-900 rounded-lg" />
              <img
                className="w-[18px] h-[18px] left-[9px] top-[9px] absolute"
                src="https://via.placeholder.com/18x18"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

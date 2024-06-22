import React from "react";

const Page = () => {
  return (
    <div className="bg-[#08070B] w-full h-auto sm:h-[118px] flex-shrink-0 rounded-sm flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-4 sm:py-0">
      <div className="flex flex-col justify-center w-full sm:w-[180px] h-auto sm:h-[36px] flex-shrink-0 text-white font-bold text-2xl sm:text-4xl leading-[18px] tracking-[0.5px]">
        Fragmented
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-[16px] sm:gap-[33px] mt-4 sm:mt-0">
        <span className="text-white text-center font-normal text-[16px] sm:text-[18px] leading-[18px]">
          Home
        </span>
        <span className="text-white text-center font-normal text-[16px] sm:text-[18px] leading-[18px]">
          About
        </span>
        <span className="text-white text-center font-normal text-[16px] sm:text-[18px] leading-[18px]">
          Contact
        </span>
        <div className="bg-white rounded-[30px] px-4 py-2 sm:py-0">
          <span className="text-[#08070B] font-medium text-[16px] sm:text-[18px] leading-[58px]">
            Whitepaper
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;

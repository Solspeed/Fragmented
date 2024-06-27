import React from "react";
import Card from './Card'
const Page = () => {
  return (
    <main className="flex flex-col justify-center items-center flex-shrink-0 gap-8 p-4 md:p-0 ">
      <div className="relative w-full max-w-[1240px] h-[100px] mx-auto mt-28">
        <div
          className=" absolute top-0 left-0 w-full h-[76px] text-center text-[100px] font-bold font-['Instrument Sans'] uppercase leading-[82px] tracking-[5.50px]"
          style={{
            opacity: 0.4,
            background:
              "linear-gradient(180deg, #6C3FBC 0%, rgba(108, 63, 188, 0) 95.31%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          WHAT
        </div>
        <div className="absolute top-[30px] left-0 w-full h-16 text-center text-white text-[24px] md:text-[40px] font-bold font-['Instrument Sans'] uppercase leading-[40px] md:leading-[82px] tracking-wide">
          WHAT IS FRAGMENTED?
        </div>
      </div>
      <div className="w-full max-w-[1264px] h-auto md:h-[74px] opacity-60 text-center text-white text-[16px] md:text-[26px] font-medium font-['Instrument Sans'] leading-6 md:leading-10 px-4 md:px-0">
        Fragmented is changing the digital asset market by allowing partial
        ownership of Non-Fungible Tokens (NFTs). Our technology helps more
        investors access high-value digital assets.
      </div>
      <Card />
    </main>
  );
};

export default Page;

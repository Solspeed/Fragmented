import React from "react";
import Image from "next/image";
import Bcard from "./bcard";
import Fragper from "./fragper";
const Page = () => {
  return (
    <section className=" flex flex-col ">
    <main className="flex flex-col justify-center items-center flex-shrink-0 gap-8 p-4 md:p-0">
      <div className="relative w-full max-w-[1240px] h-[100px] mx-auto mt-28">
        <div
          className="absolute top-0 left-0 w-full h-[76px] text-center  text-[68px] md:text-[100px] font-bold font-['Instrument Sans'] uppercase leading-[82px] tracking-[5.50px]"
          style={{
            opacity: 0.4,
            background:
              "linear-gradient(180deg, #6C3FBC 0%, rgba(108, 63, 188, 0) 95.31%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          USECASE
        </div>
        <div className="absolute top-[30px] left-0 w-full h-16 text-center text-white text-[24px] md:text-[40px] font-bold font-['Instrument Sans'] uppercase leading-[40px] md:leading-[82px] tracking-wide">
          WHAT IS FRAGMENTED?
        </div>
      </div>
      </main>
      {/* <div>
        <div className="w-96 h-96 bg-zinc-950 rounded-[30px]">
          <img src="/bcard1.png" alt="" />
        </div>
      </div> */} 
      <Bcard />
    <Fragper />
    </section>
  );
};

export default Page;

import React from "react";

const Working = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-[1240px] h-[100px] mx-auto mt-28">
        <div
          className="absolute top-0 left-0 w-full h-[76px] text-center text-[50px] md:text-[100px] font-bold font-['Instrument Sans'] uppercase leading-[40px] md:leading-[82px] tracking-[2.75px] md:tracking-[5.50px]"
          style={{
            opacity: 0.4,
            background:
              "linear-gradient(180deg, #6C3FBC 0%, rgba(108, 63, 188, 0) 95.31%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          HOW
        </div>
        <div className="absolute top-[30px] left-0 w-full h-16 text-center text-white text-[16px] md:text-[40px] font-bold font-['Instrument Sans'] uppercase leading-[40px] md:leading-[82px] tracking-wide">
          HOW FRAGMENTED WORKS
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 place-items-center w-full px-4">
        <div
          className="w-full md:w-[37.375rem] h-[19.8125rem] rounded-[1.875rem]"
          style={{
            backgroundImage: `url("/working1.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-full md:w-[37.375rem] h-[19.8125rem] rounded-[1.875rem]"
          style={{
            backgroundImage: `url("/SECOND.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-full md:w-[37.375rem] h-[19.8125rem] rounded-[1.875rem]"
          style={{
            backgroundImage: `url("/working3.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-full md:w-[37.375rem] h-[19.8125rem] rounded-[1.875rem]"
          style={{
            backgroundImage: `url("/Group 39480 (1).png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Working;

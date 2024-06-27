import React from "react";

const fragper = () => {
  return (
    <main className=" flex flex-col items-center mt-44 mb-96">
      <div className=" flex w-full max-w-[470px] h-auto md:h-[81px] justify-between">
        <div>
          <img
            className="w-[81px] h-[81px] rounded-[10px] border border-black/opacity-30"
            src="/fragimg.png"
          />
        </div>

        <div className="w-[140px] h-5 relative mt-8">
          <div className="w-4 h-4 left-[36px] top-[2px] absolute opacity-10 bg-white rounded-full" />
          <div className="w-3 h-3 left-[16px] top-[4px] absolute opacity-10 bg-white rounded-full" />
          <div className="w-2 h-2 left-0 top-[6px] absolute opacity-10 bg-white rounded-full" />
          <div className="w-4 h-4 left-[104px] top-[18px] absolute origin-top-left -rotate-180 opacity-10 bg-white rounded-full" />
          <div className="w-3 h-3 left-[124px] top-[16px] absolute origin-top-left -rotate-180 opacity-10 bg-white rounded-full" />
          <div className="w-2 h-2 left-[140px] top-[14px] absolute origin-top-left -rotate-180 opacity-10 bg-white rounded-full" />
          <div className="w-5 h-5 left-[80px] top-[20px] absolute origin-top-left -rotate-180 opacity-10 bg-white rounded-full" />
        </div>
        <img
          className="w-[81px] h-[81px] rounded-[10px] border border-black/opacity-30"
          src="/percentageicon.png"
        />
      </div>
      <div className=" flex mt-7 gap-5">
      <div className="w-[161px] h-8 text-center text-white text-3xl font-bold font-['Instrument Sans'] leading-[30px]">
        Fragmeted
      </div>
      <div className="opacity-60 text-white text-3xl font-normal font-['Inter']">
        will be used in
      </div>
      <div className="w-[169px] h-[34px] text-center text-white text-3xl font-bold font-['Instrument Sans'] leading-[30px]">
        Percentage
      </div>
      </div>
    </main>
  );
};

export default fragper;

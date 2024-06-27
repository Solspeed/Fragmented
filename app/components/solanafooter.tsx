import React from "react";

const SolanaFooter = () => {
  return (
    <div className="relative w-full max-w-[1240px] mx-auto flex-shrink-0">
      <div className="relative">
        <img src="/solanfooter.png" alt="" className="w-full h-auto" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-center text-[4vw] sm:text-[42px] font-semibold font-['Instrument Sans'] leading-none tracking-wide mix-blend-overlay">
            Giving access soon to community
          </span>
        </div>
      </div>
    </div>
  );
};

export default SolanaFooter;

import React from "react";

const page = () => {
  return (
    <div className="w-[1142px] md:w-[calc(100%-200px)] h-[654px] mx-auto bg-zinc-950 rounded-[30px] overflow-hidden relative border border-[linear-gradient(to bottom, #ffffff 100%, #000000 10%)]">
      <div className="w-full text-center text-white/opacity-5 text-7xl md:text-9xl font-bold font-['Instrument Sans'] tracking-[6px] absolute bottom-0 left-[50%] transform -translate-x-1/2">
        COMING SOON
      </div>
      <div className="absolute left-[50%] transform -translate-x-1/2 top-[0px] w-[1080px] h-[433px] bg-violet-800 rounded-full blur-[290px]" />
      {/* <div style={{width: 1240, height: 654, borderRadius: 30, border: '2px rgba(255, 255, 255, 0.10) solid'}} /> */}

      <div className="mt-[68px] px-4 md:px-0 md:absolute left-[50%] transform -translate-x-1/2">
        <div className="max-w-[782px] mx-auto h-60 text-center">
          <div className="text-white text-4xl md:text-[64px] font-bold font-['Instrument Sans'] leading-tight md:leading-[82px]">
            Digital Ownership Through Fractional NFTs
          </div>
          <div className="mt-4 md:mt-0 md:absolute left-[50%] transform -translate-x-1/2 top-[182px] w-full max-w-[760px] opacity-50 text-white text-base md:text-[22px] font-normal font-['Instrument Sans'] leading-6 md:leading-[34px]">
            Secure, transparent, and user-friendly platform for fractionalizing
            NFTs, enabling investors of all sizes to participate in the digital
            asset
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:absolute left-[50%] transform -translate-x-1/2 top-[290px] w-full max-w-[604px] h-[74px]">
          <div className="w-full h-full bg-zinc-950/opacity-60 rounded-[37px] border border-white/opacity-10"></div>
          <div className="absolute left-[50%] transform -translate-x-1/2 md:left-[70%] md:transform-none top-[6px] w-[177px] h-[62px] flex items-center justify-center gap-6">
            <div className="bg-violet-800 rounded-[40px] px-9 py-6 flex items-center justify-center">
              <div className="text-white text-lg font-medium font-['Instrument Sans']">
                Get in touch
              </div>
            </div>
          </div>
          <div className="absolute left-[28px] top-[28px] opacity-30 text-white text-lg font-medium font-['Instrument Sans']">
            Add your email address
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

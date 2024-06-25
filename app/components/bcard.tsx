import React from "react";

const Bcard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly mt-8 gap-8 md:gap-0">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="w-full md:w-[384px] h-[250px] md:h-[384px] rounded-sm md:rounded-[1.875rem] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("/bcard1.png")`,
          }}
        >
          {/* <div className="flex w-full h-full bg-black bg-opacity-50 rounded-[1.875rem]">
            <div className="text-white text-xl md:text-3xl font-medium font-['Instrument Sans'] leading-6 md:leading-[30px] opacity-80">
              Art & Collectibles
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Bcard;   

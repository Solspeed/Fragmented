import React from "react";

const Page = () => {
  const cards = Array(6).fill(
    <div
      className="  w-[384px] h-[384px]  rounded-[1.875rem] flex-shrink-0"
      style={{
        backgroundImage: `url("/card1.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="p-6 opacity-80 text-white text-xl font-medium font-['Instrument Sans'] leading-7 rounded-[1.8rem]">
        You have a nice NFT that you want to share among your friends.
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index}>{card}</div>
        ))}
      </div>
    </div>
  );
};

export default Page;

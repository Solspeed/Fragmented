import React from "react";

const Card = () => {
  return (
    <div className="relative w-96 h-[400px] bg-zinc-950 rounded-[30px] p-4 flex flex-col justify-center items-center bg-gradient-to-b">
      <div className="w-full text-center opacity-80 text-white text-xl font-medium font-['Instrument Sans'] leading-7 mb-4">
        You have a nice NFT that you want to share among your friends.
      </div>
      <div className="relative w-48 h-60">
        <img
          className="absolute w-full h-full top-0 left-0 rounded-md border border-white/50"
          src="https://via.placeholder.com/192x240"
          alt="NFT"
        />
        <img
          className="absolute w-full h-full top-0 left-0 rounded-md border border-white/50 blur-lg rotate-12"
          src="https://via.placeholder.com/192x240"
          alt="NFT"
        />
      </div>
    </div>
  );
};

const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default CardGrid;

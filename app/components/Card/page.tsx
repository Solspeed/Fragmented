import React from "react";
import Card1 from "../../../public/card1.png";

const page = () => {
  return (
    <div
      className="w-[384px] h-[384px] mb-96 rounded-[1.875rem]"
      style={{
        backgroundImage: `url("/card1.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="p-6  opacity-80 text-white text-xl font-medium font-['Instrument Sans'] leading-7 rounded-[1.8rem]">
          You have a nice nft that you want to share among your friends.
                </div>
    </div>
  );
};

export default page;

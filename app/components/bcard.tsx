import React from "react";

const cardData = [
  {
    id: 1,
    image: "/bcard1.png",
    text: "Art & Collectibles",
  },
  {
    id: 2,
    image: "/map.png",
    text: "Technology",
  },
  {
    id: 3,
    image: "/map.png",
    text: "Fashion",
  },
];

const Bcard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly mt-8 gap-8 md:gap-0">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="w-full md:w-[384px] h-[250px] md:h-[384px] rounded-sm md:rounded-[1.875rem] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${card.image})`,
          }}
        >
          <div className="flex w-full h-full bg-black bg-opacity-50 rounded-[1.875rem] p-4">
            <div className="text-white text-xl md:text-3xl font-medium font-['Instrument Sans'] leading-6 md:leading-[30px] opacity-80">
              {card.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bcard;

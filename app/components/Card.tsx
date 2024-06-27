import React from "react";

type CardData = {
  id: number;
  imageUrl: string;
  text: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: "/card1.png",
    text: "You have a nice NFT that you want to share among your friends.",
  },
  {
    id: 2,
    imageUrl: "/card2.png",
    text: "You can easily fractionalise your nft using our platform and share each fraction with your friend.",
  },
  {
    id: 3,
    imageUrl: "/card3.png",
    text: "Value of the NFT will also get divided evenly among all the holders.",
  },
  {
    id: 4,
    imageUrl: "/card4.png",
    text: "You have a nice NFT that you want to share among your friends.",
  },
  {
    id: 5,
    imageUrl: "/card5.png",
    text: "You have a nice NFT that you want to share among your friends.",
  },
  {
    id: 6,
    imageUrl: "/card6.png",
    text: "Start fractionizing your nft and keep it safe and secure.",
  },
];

type CardItemProps = {
  imageUrl: string;
  text: string;
};

const CardItem: React.FC<CardItemProps> = ({ imageUrl, text }) => (
  <div
    className="w-full h-[300px] sm:h-[350px] md:h-[384px] sm:w-[300px] md:w-[384px] rounded-[1.875rem] flex-shrink-0"
    style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="p-6 opacity-80 text-white text-xl font-medium font-['Instrument Sans'] leading-7 rounded-[1.8rem]">
      {text}
    </div>
  </div>
);

const Card: React.FC = () => {
  return (
    <div className="mt-6 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
      {cardData.map((card) => (
        <CardItem key={card.id} imageUrl={card.imageUrl} text={card.text} />
      ))}
    </div>
  );
};

export default Card;

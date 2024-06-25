export default function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <div
        className="  w-[384px] h-[384px]  rounded-[1.875rem] flex-shrink-0"
        style={{
          backgroundImage: `url("/card2.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-6 opacity-80 text-white text-xl font-medium font-['Instrument Sans'] leading-7 rounded-[1.8rem]">
        You can easily fractionalise your nft using our platform and share each fraction with your friend.
        </div>
      </div>
      <div
        className="  w-[384px] h-[384px]  rounded-[1.875rem] flex-shrink-0"
        style={{
          backgroundImage: `url("/card3.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-6 opacity-80 text-white text-xl font-medium font-['Instrument Sans'] leading-7 rounded-[1.8rem]">
        Value of the NFT will also get divided evenly among all the holders.
        </div>
      </div>
      <div
        className="  w-[384px] h-[384px]  rounded-[1.875rem] flex-shrink-0"
        style={{
          backgroundImage: `url("/card4.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-6 opacity-80 text-white text-xl font-medium font-['Instrument Sans'] leading-7 rounded-[1.8rem]">
          You have a nice NFT that you want to share among your friends.
        </div>
      </div>
      <div
        className="  w-[384px] h-[384px]  rounded-[1.875rem] flex-shrink-0"
        style={{
          backgroundImage: `url("/card5.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-6 opacity-80 text-white text-xl font-medium font-['Instrument Sans'] leading-7 rounded-[1.8rem]">
          You have a nice NFT that you want to share among your friends.
        </div>
      </div>
      <div
        className="  w-[384px] h-[384px]  rounded-[1.875rem] flex-shrink-0"
        style={{
          backgroundImage: `url("/card6.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-6 opacity-80 text-white text-xl font-medium font-['Instrument Sans'] leading-7 rounded-[1.8rem]">
        Start fractionizing your nft and keep it safe and secure
        </div>
      </div>
      
    </div>
    
  );
}

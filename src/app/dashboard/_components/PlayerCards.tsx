import React from "react";
import { playerCards } from "@/data";
import nftOne from "../../../../public/nft-img.jpg";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const PlayerCards = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {playerCards.map((card, index) => (
          <Card
            key={index}
            className="bg-zinc-800 border-yellow-400 hover:border-yellow-500 transition-colors"
          >
            <CardContent className="p-2 md:p-4">
              <div className="relative">
                <Image
                  src={nftOne}
                  alt="Player Card"
                  className="w-full h-auto rounded-lg mb-2 md:mb-4"
                />
                <span className="absolute top-1 left-1 md:top-2 md:left-2 px-2 py-1 rounded text-xs md:text-sm bg-red-600">
                  {card.type}
                </span>
              </div>

              <div className="flex justify-between mb-1 md:mb-2 text-sm">
                <span>Price</span>
                <span>
                  ${card.price} ({card.currency})
                </span>
              </div>
              <div className="flex justify-between mb-2 md:mb-4 text-sm">
                <span>Time Left</span>
                <span>{card.timeLeft}</span>
              </div>
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-sm md:text-base text-black font-semibold">
                Place Bid
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default PlayerCards;

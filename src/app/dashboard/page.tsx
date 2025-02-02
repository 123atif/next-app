"use client";
import React, { useState } from "react";
import Image from "next/image";
import nfttwo from "../../../public/nft-2.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import PlayersFilter from "./_components/PlayersFilter";
import { mainTabs, teamCards, sportTabs, marketTabs } from "@/data";
import PlayerCards from "./_components/PlayerCards";
const Page = () => {
  const [activeMainTab, setActiveMainTab] = useState("Buy Cards");
  const [activeSportTab, setActiveSportTab] = useState("Football");
  const [activeMarketTab, setActiveMarketTab] = useState("MarketPlace");
  const [activeTab, setActiveTab] = useState("team");

  return (
    <div className="m-2 p-1 ">
      <Header />
      <nav className="p-4">
        <ul className="flex gap-2 md:gap-6 whitespace-nowrap">
          {mainTabs.map((tab) => (
            <li key={tab}>
              <button
                onClick={() => setActiveMainTab(tab)}
                className={`relative font-bold text-sm md:text-xl after:absolute after:left-0 after:bottom-[-0.5rem] after:h-1 after:bg-yellow-500 after:transition-all after:duration-300 ${
                  activeMainTab === tab
                    ? "text-white after:w-full"
                    : "text-gray-500 after:w-0 hover:after:w-full"
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="p-4 bg-zinc-600/40 border-none rounded-[10px] min-w-[450px]">
        <ul className="flex gap-2 md:gap-6">
          {sportTabs.map((tab) => (
            <li key={tab}>
              <Button
                onClick={() => setActiveSportTab(tab)}
                className={`relative font-bold text-md after:absolute after:left-0 after:bottom-[-0.5rem] after:h-1 after:bg-yellow-500 after:transition-all after:duration-300 ${
                  activeSportTab === tab
                    ? "text-white after:w-full"
                    : "text-gray-500 after:w-0 hover:after:w-full"
                }`}
              >
                {tab}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-2">
        <div className="flex">
          <PlayersFilter />
          <main className="flex-1 p-3 mt-[-1rem] ">
            <nav className="p-4">
              <ul className="flex gap-2 md:gap-6 whitespace-nowrap">
                {marketTabs.map((tab) => (
                  <li key={tab}>
                    <Button
                      onClick={() => setActiveMarketTab(tab)}
                      className={`relative font-bold text-sm md:text-xl after:absolute after:left-0 after:bottom-[-0.5rem] after:h-1 after:bg-yellow-500 after:transition-all after:duration-300 ${
                        activeMarketTab === tab // Changed from activeMainTab to activeMarketTab
                          ? "text-white after:w-full"
                          : "text-gray-500 after:w-0 hover:after:w-full"
                      }`}
                    >
                      {tab}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="bg-zinc-600/40 p-2 rounded-[15px] mt-2">
              <div className="mb-6 md:mb-8 ">
                <div className="flex flex-col md:flex-row md:items-center p-2 gap-3 mb-3 md:mb-4">
                  <Button
                    onClick={() => setActiveTab("team")}
                    className={`text-lg md:text-xl font-medium relative after:absolute after:left-[10%] after:right-[10%] after:bottom-[-0.25rem] after:h-1 after:bg-yellow-500 after:transition-all after:duration-300 ${
                      activeTab === "team"
                        ? "text-white after:w-[80%]"
                        : "text-gray-400 after:w-0 hover:after:w-[80%]"
                    }`}
                  >
                    Player Cards |
                  </Button>

                  <Button
                    onClick={() => setActiveTab("popular")}
                    className={`text-lg md:text-xl font-medium relative after:absolute after:left-[5%] md:after:left-[15%] after:right-[5%] md:after:right-[15%] 
                                after:bottom-[-0.25rem] after:h-1 after:bg-yellow-500 after:transition-all after:duration-300 ${
                                  activeTab === "popular"
                                    ? "text-white after:w-[90%] md:after:w-[70%]"
                                    : "text-gray-400 after:w-0 hover:after:w-[90%] md:hover:after:w-[70%]"
                                }`}
                  >
                    Popular |
                  </Button>

                  <Button
                    variant="link"
                    className="text-sm md:text-base p-0 ml-0 md:ml-2 mt-2 md:mt-0"
                  >
                    View All Team Cards{" "}
                    <span className="hidden md:inline text-yellow-400">→</span>
                  </Button>
                </div>

                <PlayerCards />
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:items-center p-2 gap-3 mb-3 md:mb-4">
                  <Button
                    onClick={() => setActiveTab("team")}
                    className={`text-lg md:text-xl font-medium relative after:absolute after:left-[10%] after:right-[10%] after:bottom-[-0.25rem] after:h-1 after:bg-yellow-500 after:transition-all after:duration-300 ${
                      activeTab === "team"
                        ? "text-white after:w-[80%]"
                        : "text-gray-400 after:w-0 hover:after:w-[80%]"
                    }`}
                  >
                    Team Cards |
                  </Button>
                  <button
                    onClick={() => setActiveTab("popular")}
                    className={`text-lg md:text-xl font-medium relative after:absolute after:left-[5%] md:after:left-[15%] after:right-[5%] md:after:right-[15%] after:bottom-[-0.25rem] after:h-1 after:bg-yellow-500 after:transition-all after:duration-300 ${
                      activeTab === "popular"
                        ? "text-white after:w-[90%] md:after:w-[70%]"
                        : "text-gray-400 after:w-0 hover:after:w-[90%] md:hover:after:w-[70%]"
                    }`}
                  >
                    Popular |
                  </button>

                  <Button
                    variant="link"
                    className="text-sm md:text-base p-0 ml-0 md:ml-2 mt-2 md:mt-0"
                  >
                    View All Team Cards{" "}
                    <span className="hidden md:inline text-yellow-400">→</span>
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
                  {teamCards.map((card, index) => (
                    <Card
                      key={index}
                      className="bg-zinc-800 border-yellow-400 hover:border-yellow-500 transition-colors"
                    >
                      <CardContent className="p-2 md:p-4">
                        <div className="relative">
                          <Image
                            src={nfttwo}
                            alt="Team Card"
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
                        <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-sm md:text-base">
                          Place Bid
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Page;

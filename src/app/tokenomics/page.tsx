"use client";
import React, { useState } from "react";
import dummy from "../../../public/dummy.svg";
import nftOne from "../../../public/nft-img.jpg";
import nfttwo from "../../../public/nft-2.jpg";
import visa from "../../../public/visa.svg";
import mastercard from "../../../public/master-card.svg";
import paypal from "../../../public/paypal.svg";
import logo from "../../../public/main-logo.svg";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import PlayerCard from "@/components/PlayerCard";
import TeamCard from "@/components/TeamCard";
import Pricing from "@/components/Pricing";
import Position from "@/components/Position";
import Club from "@/components/Club";
import Player from "@/components/Player";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Page = () => {
  const [activeMainTab, setActiveMainTab] = useState("Buy Cards");
  const [activeSportTab, setActiveSportTab] = useState("Football");
  const [activeMarketTab, setActiveMarketTab] = useState("MarketPlace");
  const [activeTab, setActiveTab] = useState("team");
  const mainTabs = ["Buy Cards", "Store", "My Collection", "Invite Friends"];
  const sportTabs = ["Football", "Cricket", "Tennis", "Basketball", "Baseball"];
  const marketTabs = ["MarketPlace", "Auctions"];

  const playerCards = [
    {
      type: "DIAMOND",

      rating: 9,
      price: 1800,
      currency: "GLZN",
      timeLeft: "2d 5h 15m",
    },
    {
      type: "PLATINUM",

      rating: 16,
      price: 975,
      currency: "GLZN",
      timeLeft: "1d 4h 32m",
    },
    {
      type: "GOLD",

      rating: 20,
      price: 140,
      currency: "GLZN",
      timeLeft: "3d 12h 45m",
    },
  ];

  const teamCards = [
    {
      type: "DIAMOND",

      price: 1930,
      currency: "GLZN",
      timeLeft: "2d 8h 20m",
    },
    {
      type: "PLATINUM",

      price: 975,
      currency: "GLZN",
      timeLeft: "1d 8h 10m",
    },
    {
      type: "GOLD",

      price: 65,
      currency: "GLZN",
      timeLeft: "4h 1m 5s",
    },
  ];

  return (
    <div className="m-2 p-1 ">
      <header className="bg-zinc-600/40 rounded-lg md:rounded-[10px] p-2 flex flex-nowrap gap-2 md:gap-4 justify-between items-center min-w-[450px]">
        <div className="flex items-center gap-2 md:gap-4 ">
          <Image
            src={logo}
            alt="Logo"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0"
          />
          <h1 className="text-[10px] md:text-xl font-bold ">
            Glorizen NFT Marketplace
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          <div className="hidden sm:block text-center min-w-[120px]">
            <div className="text-[10px]">Balance:</div>
            <div className="text-xs font-bold bg-zinc-500/50 px-2 py-1 rounded-[6px] whitespace-nowrap">
              $5,337{" "}
              <span className="hidden md:inline tracking-[1px]">
                (42,696 GLZN)
              </span>
            </div>
            <div className="flex gap-3 justify-center">
              <Image src={visa} alt="Logo" height={25} width={25} />
              <Image src={mastercard} alt="Logo" height={25} width={25} />
              <Image src={paypal} alt="Logo" height={25} width={25} />
            </div>
            <Button
              variant="default"
              className="bg-[#66ff00] h-6 hover:bg-green-700 text-xs whitespace-nowrap text-black font-bold"
            >
              <p className="tracking-[3px]">BUY GLZN</p>
            </Button>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[8px] text-center">Current Exchange Rate</div>
            <div className="text-xs font-bold bg-zinc-500/50 px-2 py-1 rounded-[6px] whitespace-nowrap">
              <span className="text-[#6dc463]">1</span> GLZEN =
              <span className="text-[#11AD79] tracking-[1px]"> $0.125 </span>
            </div>
          </div>

          <Image
            src={dummy}
            alt="Profile"
            className="w-8 h-8 md:w-14 md:h-14  rounded-full bg-zinc-500 flex-shrink-0"
          />
        </div>
      </header>
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
              <button
                onClick={() => setActiveSportTab(tab)}
                className={`relative font-bold text-md after:absolute after:left-0 after:bottom-[-0.5rem] after:h-1 after:bg-yellow-500 after:transition-all after:duration-300 ${
                  activeSportTab === tab
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
      <div className="mt-2">
        <div className="flex">
          <aside className="w-60 p-4 m-2 bg-zinc-600/40 rounded-[15px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold">Filters</h2>
              <button className="text-sm text-zinc-400">
                Clear All Filters
              </button>
            </div>
            <div className="space-y-3">
              <div className="relative rounded-[10px]">
                <Input
                  placeholder="Search Player/Team"
                  className="w-full border-none pl-3 pr-10 bg-zinc-800/100"
                />
                <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <PlayerCard />
              <TeamCard />
              <Pricing />
              <Position />
              <Club />
              <Player />
            </div>
          </aside>

          <main className="flex-1 p-3 mt-[-1rem] ">
            <nav className="p-4">
              <ul className="flex gap-2 md:gap-6 whitespace-nowrap">
                {marketTabs.map((tab) => (
                  <li key={tab}>
                    <button
                      onClick={() => setActiveMarketTab(tab)}
                      className={`relative font-bold text-sm md:text-xl after:absolute after:left-0 after:bottom-[-0.5rem] after:h-1 after:bg-yellow-500 after:transition-all after:duration-300 ${
                        activeMarketTab === tab // Changed from activeMainTab to activeMarketTab
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
            <div className="bg-zinc-600/40 p-2 rounded-[15px] mt-2">
              <div className="mb-6 md:mb-8 ">
                <div className="flex flex-col md:flex-row md:items-center p-2 gap-3 mb-3 md:mb-4">
                  <button
                    onClick={() => setActiveTab("team")}
                    className={`text-lg md:text-xl font-medium relative after:absolute after:left-[10%] after:right-[10%] after:bottom-[-0.25rem] after:h-1 after:bg-yellow-500 after:transition-all after:duration-300 ${
                      activeTab === "team"
                        ? "text-white after:w-[80%]"
                        : "text-gray-400 after:w-0 hover:after:w-[80%]"
                    }`}
                  >
                    Player Cards |
                  </button>

                  <button
                    onClick={() => setActiveTab("popular")}
                    className={`text-lg md:text-xl font-medium relative after:absolute 
    after:left-[5%] md:after:left-[15%] 
    after:right-[5%] md:after:right-[15%] 
    after:bottom-[-0.25rem] after:h-1 after:bg-yellow-500 
    after:transition-all after:duration-300 ${
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
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:items-center p-2 gap-3 mb-3 md:mb-4">
                  <button
                    onClick={() => setActiveTab("team")}
                    className={`text-lg md:text-xl font-medium relative after:absolute after:left-[10%] after:right-[10%] after:bottom-[-0.25rem] after:h-1 after:bg-yellow-500 after:transition-all after:duration-300 ${
                      activeTab === "team"
                        ? "text-white after:w-[80%]"
                        : "text-gray-400 after:w-0 hover:after:w-[80%]"
                    }`}
                  >
                    Team Cards |
                  </button>
                  <button
                    onClick={() => setActiveTab("popular")}
                    className={`text-lg md:text-xl font-medium relative after:absolute 
    after:left-[5%] md:after:left-[15%] 
    after:right-[5%] md:after:right-[15%] 
    after:bottom-[-0.25rem] after:h-1 after:bg-yellow-500 
    after:transition-all after:duration-300 ${
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

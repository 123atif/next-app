"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import logo from "../../../public/logo.png";
import dummy from "../../../public/dummy.png";
import cr7 from "../../../public/cr.jpg";
import batman from "../../../public/batman.jpg";
import Image from "next/image";
import PlayerCard from "@/components/PlayerCard";
import TeamCard from "@/components/TeamCard";
import Pricing from "@/components/Pricing";
import Position from "@/components/Position";
import Club from "@/components/Club";
import Player from "@/components/Player";
const page = () => {
  const [activeMainTab, setActiveMainTab] = useState("Buy Cards");
  const [activeSportTab, setActiveSportTab] = useState("Football");
  const [activeTab, setActiveTab] = useState("team");
  const mainTabs = ["Buy Cards", "Store", "My Collection", "Invite Friends"];
  const sportTabs = ["Football", "Cricket", "Tennis", "Basketball", "Baseball"];

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
    <div className="m-2 p-1 text-white ">
      <header className="bg-zinc-600/50 rounded-lg md:rounded-[10px] p-2 md:p-4 flex flex-nowrap gap-2 md:gap-4 justify-between items-center w-full">
        <div className="flex items-center gap-2 md:gap-4 min-w-0">
          <Image
            src={logo}
            alt="Logo"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0"
          />
          <h1 className="text-base md:text-xl font-bold truncate min-w-0">
            Glorizen NFT Marketplace
          </h1>
        </div>

        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          <div className="hidden sm:block text-right min-w-[120px]">
            <div className="text-xs md:text-sm">Balance</div>
            <div className="text-sm md:text-base font-bold bg-zinc-500 px-2 py-1 md:p-2 rounded-md md:rounded-[10px] whitespace-nowrap">
              $5,337 <span className="hidden md:inline">(42,696 GLZN)</span>
            </div>
          </div>

          <Button
            variant="default"
            className="bg-green-600 hover:bg-green-700 text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 whitespace-nowrap"
          >
            <span className="hidden md:inline">BUY GLZN</span>
            <span className="md:hidden">BUY</span>
          </Button>

          <Image
            src={dummy}
            alt="Profile"
            width={40}
            height={40}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0"
          />
        </div>
      </header>
      <nav className="p-4">
        <ul className="flex gap-2 md:gap-6 whitespace-nowrap">
          {mainTabs.map((tab) => (
            <li key={tab}>
              <button
                onClick={() => setActiveMainTab(tab)}
                className={`relative text-sm after:absolute after:left-0 after:bottom-[-0.5rem] after:h-1 after:bg-yellow-500 after:transition-all after:duration-300 ${
                  activeMainTab === tab
                    ? "text-white after:w-full"
                    : "text-gray-400 after:w-0 hover:after:w-full"
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="p-4 bg-zinc-600/50 border-none rounded-[10px]">
        <ul className="flex gap-2 md:gap-6">
          {sportTabs.map((tab) => (
            <li key={tab}>
              <button
                onClick={() => setActiveSportTab(tab)}
                className={`relative text-sm after:absolute after:left-0 after:bottom-[-0.5rem] after:h-1 after:bg-yellow-500 after:transition-all after:duration-300 ${
                  activeSportTab === tab
                    ? "text-white after:w-full"
                    : "text-gray-400 after:w-0 hover:after:w-full"
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
          <aside className="w-60 p-4 m-2 bg-zinc-600/50 rounded-[15px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold">Filters</h2>
              <button className="text-sm text-zinc-400">
                Clear All Filters
              </button>
            </div>

            <Input placeholder="Search Player/Team" className="mb-4" />
            <div className="space-y-4">
              <PlayerCard />
              <TeamCard />
              <Pricing />
              <Position />
              <Club />
              <Player />
            </div>
          </aside>

          <main className="flex-1 p-2 sm:p-4">
            <Tabs defaultValue="auctions">
              <TabsList className="w-full">
                <TabsTrigger
                  value="marketplace"
                  className="text-sm md:text-base"
                >
                  Marketplace
                </TabsTrigger>
                <TabsTrigger value="auctions" className="text-sm md:text-base">
                  Auctions
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="auctions"
                className="bg-zinc-600/50 rounded-lg md:rounded-[10px] p-2 md:p-4"
              >
                <div className="mb-6 md:mb-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3 md:mb-4">
                    <button
                      onClick={() => setActiveTab("team")}
                      className={`text-lg md:text-xl font-bold relative after:absolute after:left-0 after:bottom-[-0.25rem] after:h-1 after:bg-yellow-500 after:transition-all after:duration-300 ${
                        activeTab === "team"
                          ? "text-white after:w-full"
                          : "text-gray-400 after:w-0 hover:after:w-full"
                      }`}
                    >
                      Team Cards |
                    </button>

                    <button
                      onClick={() => setActiveTab("popular")}
                      className={`text-lg md:text-xl font-bold relative after:absolute after:left-0 after:bottom-[-0.25rem] after:h-1 after:bg-yellow-500 after:transition-all after:duration-300 ${
                        activeTab === "popular"
                          ? "text-white after:w-full"
                          : "text-gray-400 after:w-0 hover:after:w-full"
                      }`}
                    >
                      Popular |
                    </button>

                    <Button
                      variant="link"
                      className="text-sm md:text-base p-0 ml-0 md:ml-2 mt-2 md:mt-0"
                    >
                      View All Team Cards{" "}
                      <span className="hidden md:inline">→</span>
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
                              src={cr7}
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
                          <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-sm md:text-base">
                            Place Bid
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3 md:mb-4">
                    <button
                      onClick={() => setActiveTab("team")}
                      className={`text-lg md:text-xl font-bold relative after:absolute after:left-0 after:bottom-[-0.25rem] after:h-1 after:bg-yellow-500 after:transition-all after:duration-300 ${
                        activeTab === "team"
                          ? "text-white after:w-full"
                          : "text-gray-400 after:w-0 hover:after:w-full"
                      }`}
                    >
                      Team Cards |
                    </button>

                    <button
                      onClick={() => setActiveTab("popular")}
                      className={`text-lg md:text-xl font-bold relative after:absolute after:left-0 after:bottom-[-0.25rem] after:h-1 after:bg-yellow-500 after:transition-all after:duration-300 ${
                        activeTab === "popular"
                          ? "text-white after:w-full"
                          : "text-gray-400 after:w-0 hover:after:w-full"
                      }`}
                    >
                      Popular |
                    </button>

                    <Button
                      variant="link"
                      className="text-sm md:text-base p-0 ml-0 md:ml-2 mt-2 md:mt-0"
                    >
                      View All Team Cards{" "}
                      <span className="hidden md:inline">→</span>
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
                              src={batman}
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
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
};

export default page;

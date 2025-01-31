"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { FaUser } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { IoMdGrid } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import logo from "../../../public/main-logo.svg";
import Image from "next/image";
import dummy from "../../../public/dummy.svg";
import nft from "../../../public/nft-2.jpg";
import nfttwo from "../../../public/nft-img.jpg";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [showAllPlayers, setShowAllPlayers] = useState(false);
  const [showAllTeams, setShowAllTeams] = useState(false);

  const players = [
    {
      name: "Matheus",
      position: "Goalkeeper",
      price: 8.5,
      glzn: 68,
      change: "+3.8%",
      imageUrl: nfttwo,
    },
    {
      name: "Amadou Dante",
      position: "Left Back",
      price: 7.75,
      glzn: 62,
      change: "+2.1%",
      imageUrl: nfttwo,
    },
    {
      name: "Victor Gómez",
      position: "Right Back",
      price: 9.25,
      glzn: 74,
      change: "-1.5%",
      imageUrl: nfttwo,
    },
    {
      name: "Facundo Cáseres",
      position: "Center Midfielder",
      price: 8.0,
      glzn: 64,
      change: "+1.7%",
      imageUrl: nfttwo,
    },
    {
      name: "Jason",
      position: "Right Winger",
      price: 10.5,
      glzn: 84,
      change: "-2.3%",
      imageUrl: nfttwo,
    },
    {
      name: "Henrique Araújo",
      position: "Forward",
      price: 11.0,
      glzn: 88,
      change: "+4.2%",
      imageUrl: nfttwo,
    },
    {
      name: "Henrique Araújo",
      position: "Forward",
      price: 11.0,
      glzn: 88,
      change: "+4.2%",
      imageUrl: nfttwo,
    },
    {
      name: "Henrique Araújo",
      position: "Forward",
      price: 11.0,
      glzn: 88,
      change: "+4.2%",
      imageUrl: nfttwo,
    },
    {
      name: "Henrique Araújo",
      position: "Forward",
      price: 11.0,
      glzn: 88,
      change: "+4.2%",
      imageUrl: nfttwo,
    },
  ];

  const teams = [
    {
      name: "Boavista",
      price: 13.0,
      glzn: 104,
      change: "+2.9%",
      imageUrl: nft,
    },
    {
      name: "Rio Ave FC",
      price: 12.75,
      glzn: 102,
      change: "-1.8%",
      imageUrl: nft,
    },
    {
      name: "Cruzeiro",
      price: 14.5,
      glzn: 116,
      change: "-3.2%",
      imageUrl: nft,
    },
    {
      name: "Santos FC",
      price: 16.0,
      glzn: 128,
      change: "+4.1%",
      imageUrl: nft,
    },
    {
      name: "Trabzonspor",
      price: 15.5,
      glzn: 124,
      change: "-2.5%",
      imageUrl: nft,
    },
    {
      name: "Besiktas",
      price: 17.0,
      glzn: 136,
      change: "+3.7%",
      imageUrl: nft,
    },
    {
      name: "Besiktas",
      price: 17.0,
      glzn: 136,
      change: "+3.7%",
      imageUrl: nft,
    },
    {
      name: "Besiktas",
      price: 17.0,
      glzn: 136,
      change: "+3.7%",
      imageUrl: nft,
    },
    {
      name: "Besiktas",
      price: 17.0,
      glzn: 136,
      change: "+3.7%",
      imageUrl: nft,
    },
  ];

  const displayedPlayers = showAllPlayers ? players : players.slice(0, 6);
  const displayedTeams = showAllTeams ? teams : teams.slice(0, 6);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black">
      {/* Sidebar for MD+ screens */}
      <div className="hidden md:flex flex-col w-64 bg-zinc-700 border-gray-700 fixed h-full p-2 gap-3">
        <nav className="flex flex-col flex-1 p-4 space-y-4">
          <div className="flex items-center space-x-3 p-2 hover:bg-gray-900 rounded-lg cursor-pointer">
            <IoHomeOutline className="h-6 w-6" />
            <span>Home</span>
          </div>
          <div className="flex items-center space-x-3 p-2  text-yellow-400 rounded-lg cursor-pointer">
            <IoMdGrid className="h-6 w-6" />
            <span>Modules</span>
          </div>
          <div className="flex items-center space-x-3 p-2 hover:bg-gray-900 rounded-lg cursor-pointer">
            <IoWalletOutline className="h-6 w-6" />
            <span>Wallet</span>
          </div>
          <div className="flex items-center space-x-3 p-2 hover:bg-gray-900 rounded-lg cursor-pointer">
            <FaUser className="h-5 w-5" />
            <span>Profile</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Header */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-4">
              <Image src={logo} alt="Logo" className="h-11 w-11" />
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex gap-3">
                <div className="flex flex-col gap-1">
                  <div className="text-[8px] text-center">
                    Current Exchange Rate
                  </div>
                  <div className="text-[8px] md:text-xs font-bold bg-zinc-500/50 px-2 md:py-1 text-center rounded-[6px] whitespace-nowrap">
                    <span className="text-[#6dc463]">1</span> GLZEN =
                    <span className="text-[#11AD79]"> $0.125 </span>
                  </div>
                </div>
              </div>
              <Image src={dummy} alt="Logo" className="h-11 w-11" />
            </div>
          </div>
          <h1 className="text-sm md:text-xl mt-2 font-bold ">
            SPORTS STOCK MARKET
          </h1>
          <div className="flex justify-between items-center mt-4">
            <h1 className="text-sm md:text-xl font-bold text-white">Popular</h1>
            <span className="whitespace-nowrap text-sm md:text-xl font-bold text-white">
              NEW FSO
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 pb-20 md:pb-4">
          {/* Player Shares */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-white text-center">
              Player Shares
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {displayedPlayers.map((player, index) => (
                <Card
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-zinc-900" : "bg-transparent"
                  } border-none p-4 transition-all duration-300 hover:border-blue-500 hover:border-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] cursor-pointer`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={player.imageUrl}
                        alt={player.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="text-white font-medium text-xs md:text-lg">
                          {player.name}
                        </h3>
                        <p className="text-gray-400 text-[8px] md:text-lg">
                          {player.position}
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex gap-3 items-center">
                      <p className="text-white text-xs md:text-lg">
                        ${player.price.toFixed(2)}, ~{player.glzn} GLZEN
                      </p>
                      <p
                        className={`text-sm ${
                          player.change.startsWith("+")
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {player.change}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <Button
              onClick={() => setShowAllPlayers(!showAllPlayers)}
              className="w-full text-center text-white-400 py-2 hover:underline mt-4"
            >
              {showAllPlayers ? "Show Less" : "View All Players"}
            </Button>
            <div className="relative mt-4 mb-8">
              <hr className="  border-green-500 border-t-2 shadow-[0px_0px_20px_5px_rgba(34,197,94,0.5),0px_0px_50px_10px_rgba(34,197,94,0.3)] my-8" />
            </div>
          </div>

          {/* Team Shares */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-white text-center">
              Team Shares
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {displayedTeams.map((team, index) => (
                <Card
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-zinc-900" : "bg-transparent"
                  } border-none p-4 transition-all duration-300 hover:border-blue-500 hover:border-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] cursor-pointer`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={team.imageUrl}
                        alt={team.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="text-white font-medium text-xs md:text-lg">
                          {team.name}
                        </h3>
                      </div>
                    </div>
                    <div className="text-right flex gap-3 items-center">
                      <p className="text-white text-xs md:text-lg">
                        ${team.price.toFixed(2)}, ~{team.glzn} GLZEN
                      </p>
                      <p
                        className={`text-sm ${
                          team.change.startsWith("+")
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {team.change}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <Button
              onClick={() => setShowAllTeams(!showAllTeams)}
              className="w-full text-center text-green-400 py-2 hover:underline mt-4"
            >
              {showAllTeams ? "Show Less" : "View All Teams"}
            </Button>
          </div>

          {/* Buy/Sell Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Button className="bg-green-400 button-text-glow py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.5)] text-black">
              Buy
            </Button>
            <Button className="bg-red-500 button-text-glow text-black py-3 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.5)]">
              Sell
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-700 rounded-[100px] mb-1 w-[95%] m-auto z-50">
        <div className="flex justify-around p-3 h-[14vh]">
          <div className="flex flex-col items-center">
            <IoHomeOutline className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </div>
          <div className="flex flex-col items-center text-yellow-400">
            <IoMdGrid className="h-6 w-6" />
            <span className="text-xs mt-1">Modules</span>
          </div>
          <div className="flex flex-col items-center">
            <IoWalletOutline className="h-6 w-6" />
            <span className="text-xs mt-1">Wallet</span>
          </div>
          <div className="flex flex-col items-center">
            <FaUser className="h-6 w-6" />
            <span className="text-xs mt-1">Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

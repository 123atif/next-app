"use client";
import React from "react";
import nft from "../../../public/nft-2.jpg";
import logo from "../../../public/main-logo.svg";
import dummy from "../../../public/dummy.svg";
import { Card, CardContent } from "@/components/ui/card";
import { FaUser } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { IoMdGrid } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

import Image from "next/image";
const Page = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-blue-900/20">
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
            <div className="flex items-center gap-2 md:gap-4 ">
              <Image src={logo} alt="Logo" className="h-11 w-11 " />
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex gap-3">
                <div className="flex flex-col gap-1">
                  <div className="text-[8px] text-center">
                    Current Exchange Rate
                  </div>
                  <div className="text-[8px] md:text-xs font-bold bg-zinc-500/50 px-2 md:py-1 text-center rounded-[6px] whitespace-nowrap">
                    <span className="text-[#6dc463]">1</span> GLZEN =
                    <span className="text-[#11AD79] "> $0.125 </span>
                  </div>
                </div>
                <div className="text-center flex flex-col gap-1">
                  <div className="text-[10px]">Balance:</div>
                  <div className=" text-[8px] md:text-xs font-bold bg-zinc-500/50 px-3 md:py-1 rounded-[6px] whitespace-nowrap">
                    $5,337 <sub className=" text-[#11AD79] ">(42,696 GLZN)</sub>
                  </div>
                </div>
              </div>
              <Image src={dummy} alt="Logo" className="h-11 w-11" />
            </div>
          </div>
          <h1 className="text-sm md:text-xl font-medium mt-2 text-white">
            COMMUNITY & VIP
          </h1>
        </div>

        {/* Cards Container */}
        <div className="p-4 pb-20 md:pb-4 max-w-7xl mx-auto mt-[-1.5rem]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-blue-950/40 border-yellow-600 rounded-[10px]">
              <CardContent className="p-3">
                <Image src={nft} alt="Stadium" className="w-full mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">
                  UEFA Champions League Final 2026 At Ferenc Puskás Stadium,
                  Budapest
                </h3>
                <p className="text-sm text-gray-400 mb-4">May 26, 2026</p>
                <button className="w-full bg-pink-100 text-black py-2 rounded-lg">
                  Vote Now
                </button>
                <p className="text-xs text-gray-400 mt-2 text-center">
                  Cast Your Vote To Influence Access To Exclusive Events
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-950/40 border-yellow-600 rounded-[10px]">
              <CardContent className="p-3">
                <Image src={nft} alt="Stadium" className="w-full mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">
                  FIFA World Cup 2026 Final At MetLife Stadium, New Jersey
                </h3>
                <p className="text-sm text-gray-400 mb-4">July 13, 2026</p>
                <button className="w-full bg-pink-100 text-black py-2 rounded-lg">
                  Claim Rewards
                </button>
                <p className="text-xs text-gray-400 mt-2 text-center">
                  Unlock Rewards That Enhance Your VIP Experience
                </p>
              </CardContent>
            </Card>
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

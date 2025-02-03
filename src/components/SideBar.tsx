"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import iphone from "../../public/iphone.svg";
import { AiOutlineStock } from "react-icons/ai";
import { FaFantasyFlightGames } from "react-icons/fa";
import { RiNftLine } from "react-icons/ri";
import { LiaGiftsSolid } from "react-icons/lia";
import { RiUserCommunityFill } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { Button } from "./ui/button";

interface ModuleType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const modules: ModuleType[] = [
  {
    id: "/sport-stock-market",
    title: "Sports Stock Market",
    description: "Decentralized Sports Trading & Dividends",
    icon: <AiOutlineStock />,
  },
  {
    id: "/nft-fantasy",
    title: "NFT Fantasy Game",
    description: "Play, Compete & Win with Digital Sports Cards",
    icon: <FaFantasyFlightGames />,
  },
  {
    id: "/nft-marketplace",
    title: "NFT Marketplace",
    description: "Trade Exclusive NFTs & Build Your Collection",
    icon: <RiNftLine />,
  },
  {
    id: "/staking-rewards",
    title: "Staking & Rewards",
    description: "Earn Passive Income with Staking & Shares",
    icon: <LiaGiftsSolid />,
  },
  {
    id: "/community-engagement",
    title: "Community Engagement",
    description: "Join the Elite: Exclusive Perks & Play-to-Earn",
    icon: <RiUserCommunityFill />,
  },
  {
    id: "/smart-wallet",
    title: "Smart Wallet & DApp",
    description: "Seamless Asset Management: GLZEN, NFTs & More",
    icon: <IoWalletOutline />,
  },
];

const SideBar = () => {
  const [selectedModule, setSelectedModule] = useState<ModuleType>(modules[0]);
  const [isNavigating, setIsNavigating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleModuleSelect = (
    module: ModuleType,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    if (isNavigating) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setSelectedModule(module);
    setIsNavigating(true);

    timeoutRef.current = window.setTimeout(() => {
      window.location.href = module.id;
    }, 2000);
  };

  // Reset isNavigating state when the component mounts or the page is reloaded
  useEffect(() => {
    setIsNavigating(false); // Reset the state
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 space-y-4 font-mono text-xl">
          {modules.map((module) => (
            <Link key={module.id} href={module.id} passHref legacyBehavior>
              <a
                onClick={(e) => handleModuleSelect(module, e)}
                className={`w-full flex items-center space-x-2 p-4 rounded-lg transition-all duration-300 ${
                  selectedModule.id === module.id
                    ? "text-[#FFD700] shadow-lg"
                    : "hover:bg-gray-900"
                } ${
                  isNavigating
                    ? "opacity-75 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                <span className="text-xl">{module.icon}</span>
                <span className="flex-1 text-left font-medium">
                  {module.title}
                </span>
              </a>
            </Link>
          ))}
          <div className="space-y-4 p-4">
            <Button className="bg-white text-black hover:bg-gray-500 duration-300 md:block">
              White Paper
            </Button>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:w-2/3 flex flex-col items-center">
          {/* <div className="relative w-full max-w-md">
            <Image
              src={iphone}
              alt="iPhone"
              className="w-full h-auto"
              priority
            />
          </div> */}

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedModule.id + (isNavigating ? "-navigating" : "")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8 text-center"
            >
              <motion.h2
                className="text-2xl font-bold text-[#FFD700] mb-4"
                layout
              >
                {selectedModule.title}
              </motion.h2>
              <motion.p className="text-lg max-w-2xl font-serif" layout>
                {selectedModule.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

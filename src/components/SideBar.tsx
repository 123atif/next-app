"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineStock } from "react-icons/ai";
import { FaFantasyFlightGames } from "react-icons/fa";
import { RiNftLine } from "react-icons/ri";
import { LiaGiftsSolid } from "react-icons/lia";
import { RiUserCommunityFill } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
// import { Button } from "./ui/button";

interface ModuleType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  value: string;
}

const modules: ModuleType[] = [
  {
    id: "/sport-stock-market",
    title: "Sports Stock Market",
    description: "Decentralized Sports Trading & Dividends",
    icon: <AiOutlineStock />,
    value: "stock-market",
  },
  {
    id: "/nft-fantasy",
    title: "NFT Fantasy Game",
    description: "Play, Compete & Win with Digital Sports Cards",
    icon: <FaFantasyFlightGames />,
    value: "nft-fantasy",
  },
  {
    id: "/nft-marketplace",
    title: "NFT Marketplace",
    description: "Trade Exclusive NFTs & Build Your Collection",
    icon: <RiNftLine />,
    value: "marketplace",
  },
  {
    id: "/staking-rewards",
    title: "Staking & Rewards",
    description: "Earn Passive Income with Staking & Shares",
    icon: <LiaGiftsSolid />,
    value: "staking-rewards",
  },
  {
    id: "/community-engagement",
    title: "Community Engagement",
    description: "Join the Elite: Exclusive Perks & Play-to-Earn",
    icon: <RiUserCommunityFill />,
    value: "community",
  },
  {
    id: "/smart-wallet",
    title: "Smart Wallet & DApp",
    description: "Seamless Asset Management: GLZEN, NFTs & More",
    icon: <IoWalletOutline />,
    value: "wallet",
  },
];

interface SideBarProps {
  setModuleSection: (section: string) => void;
  moduleSection: string;
  closeSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({
  setModuleSection,
  moduleSection,
  closeSidebar,
}) => {
  // const [selectedModule, setSelectedModule] = useState<ModuleType>(modules[0]);
  const [isNavigating, setIsNavigating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleModuleSelect = (
    module: ModuleType,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    // if (isNavigating) return;

    // if (timeoutRef.current) {
    //   clearTimeout(timeoutRef.current);
    // }

    // setSelectedModule(module);
    // setIsNavigating(true);

    // timeoutRef.current = window.setTimeout(() => {
    // window.location.href = module.id;
    // }, 2000);

    setModuleSection(module?.value);
    closeSidebar();
  };

  // Reset isNavigating state when the component mounts or the page is reloaded
  useEffect(() => {
    setIsNavigating(false);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="mx-auto px-2 py-4">
      <div className="">
        {/* Left column: Module list */}
        {/*  */}
        <div className="space-y-2 font-mono text-sm">
          {modules.map((module) => (
            <Link key={module.id} href={module.id} passHref legacyBehavior>
              <a
                onClick={(e) => handleModuleSelect(module, e)}
                className={`w-full flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ${
                  moduleSection === module.value
                    ? "text-[#FFD700] shadow-md"
                    : "hover:bg-gray-950"
                } ${
                  isNavigating
                    ? "opacity-75 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                <span className="text-base">{module.icon}</span>
                <span className="flex-1 text-left font-medium">
                  {module.title}
                </span>
              </a>
            </Link>
          ))}
          {/* <div className="p-2">
            <Button className="bg-white text-black hover:bg-gray-500 duration-300 text-sm">
              White Paper
            </Button>
          </div> */}
        </div>

        {/* Right column: Module details */}
        {/* <div className="lg:w-2/3 flex flex-col items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedModule.id + (isNavigating ? "-navigating" : "")}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-2 text-left"
            >
              <motion.h2
                className="text-base font-bold text-[#FFD700] mb-1"
                layout
              >
                {selectedModule.title}
              </motion.h2>
              <motion.p className="text-xs font-serif leading-tight" layout>
                {selectedModule.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div> */}
      </div>
    </div>
  );
};

export default SideBar;

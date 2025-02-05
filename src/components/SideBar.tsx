"use client";
import React, { useState } from "react";
import { AiOutlineStock } from "react-icons/ai";
import { FaFantasyFlightGames } from "react-icons/fa";
import { RiNftLine } from "react-icons/ri";
import { LiaGiftsSolid } from "react-icons/lia";
import { RiUserCommunityFill } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";

interface ModuleType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface SideBarProps {
  onSelectModule: (moduleId: string) => void;
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

const SideBar: React.FC<SideBarProps> = ({ onSelectModule }) => {
  const [selectedModule, setSelectedModule] = useState<ModuleType>(modules[0]);

  const handleModuleSelect = (module: ModuleType) => {
    setSelectedModule(module);
    onSelectModule(module.id);
  };

  return (
    <div className="mx-auto px-2 py-4">
      <div className="space-y-2 font-mono text-sm">
        {modules.map((module) => (
          <div
            key={module.id}
            onClick={() => handleModuleSelect(module)}
            className={`w-full flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ${
              selectedModule.id === module.id
                ? "text-[#FFD700] shadow-md"
                : "hover:bg-gray-950"
            } cursor-pointer`}
          >
            <span className="text-base">{module.icon}</span>
            <span className="flex-1 text-left font-medium">{module.title}</span>
          </div>
        ))}
      </div>
      {/* Optionally, module details can be rendered here */}
    </div>
  );
};

export default SideBar;

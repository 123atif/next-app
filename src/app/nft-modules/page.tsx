import React from "react";
import { BarChart2, Users, Wallet, Store, Trophy, Coins } from "lucide-react";

const modules = [
  {
    id: "sports-stock",
    title: "Sports Stock Market",
    description: "Fantasy Shares Trading",
    icon: <BarChart2 size={24} />,
    bgColor: "bg-cyan-400",
    iconColor: "text-cyan-900",
  },
  {
    id: "nft-fantasy",
    title: "NFT Fantasy Game",
    description: "Tournaments & Rewards",
    icon: <Trophy size={24} />,
    bgColor: "bg-orange-400",
    iconColor: "text-orange-900",
  },
  {
    id: "nft-marketplace",
    title: "NFT Marketplace",
    description: "Buy & Sell NFTs",
    icon: <Store size={24} />,
    bgColor: "bg-purple-400",
    iconColor: "text-purple-900",
  },
  {
    id: "staking",
    title: "Staking and Rewards",
    description: "Earn Passive Income",
    icon: <Coins size={24} />,
    bgColor: "bg-yellow-400",
    iconColor: "text-yellow-900",
  },
  {
    id: "community",
    title: "Community Engagement",
    description: "VIP Perks & Voting",
    icon: <Users size={24} />,
    bgColor: "bg-green-400",
    iconColor: "text-green-900",
  },
  {
    id: "wallet",
    title: "Smart Wallet",
    description: "Manage Assets & Transactions",
    icon: <Wallet size={24} />,
    bgColor: "bg-gray-100",
    iconColor: "text-gray-900",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen bg-[#0A0B1E] text-white p-6">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 tracking-wide">MODULES</h2>

        <div className="space-y-3">
          {modules.map((module) => (
            <div
              key={module.id}
              className="flex items-center space-x-4 p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 transition-colors cursor-pointer"
            >
              <div className={`p-2 rounded-xl ${module.bgColor}`}>
                <div className={module.iconColor}>{module.icon}</div>
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-white">{module.title}</h3>
                <p className="text-sm text-gray-400">{module.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 py-3 px-6 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg text-white font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-300">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Page;

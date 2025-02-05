import React from "react";
import Title from "../Title";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const playerCards = [
  "/svg/player-1.svg",
  "/svg/player-2.svg",
  "/svg/player-3.svg",
  "/svg/player-4.svg",
  "/svg/player-5.svg",
  "/svg/player-6.svg",
];

const teamCards = ["/card-1.svg", "/card-2.svg", "/card-4.svg", "/card-5.svg"];

interface ModuleSectionProps {
  moduleSection: string;
}

const ModuleSection: React.FC<ModuleSectionProps> = ({ moduleSection }) => {
  return (
    <>
      {moduleSection === "stock-market" && (
        <>
          <div className="max-w-4xl m-auto p-8">
            <Title text="Real-World Team & Player Stocks with Earnings" />
          </div>

          <AnimatePresence mode="wait">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-roboto-bold text-[#FFD700]"
            >
              <div className="p-2 flex flex-col md:flex-row items-center justify-center gap-8">
                <Image
                  src="/svg/mod1.svg"
                  alt="iphone"
                  className="max-h-[25rem]"
                  width={300}
                  height={300}
                />
                <Image
                  src="/svg/mod2.svg"
                  alt="iphone"
                  className="max-h-[25rem]"
                  width={300}
                  height={300}
                />
              </div>
            </motion.h1>
          </AnimatePresence>
        </>
      )}

      {moduleSection === "nft-fantasy" && (
        <div className="max-w-4xl mx-auto p-4 md:p-8">
          <Title
            text="Glorizen Player NFT Cards"
            className="mt-3 p-4 text-center"
          />

          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4 md:gap-8"
            >
              {playerCards.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-[150px] h-[200px] md:w-[200px] md:h-[250px] lg:w-[250px] lg:h-[300px] p-2"
                >
                  <Image
                    src={img}
                    alt={`Player ${index + 1}`}
                    fill
                    className="object-contain hover:z-10"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          <Title
            text="Glorizen Team NFT Cards"
            className="mt-3 p-4 text-center"
          />
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6"
            >
              {teamCards.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <img src={img} alt={`Team Card ${index + 1}`} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          <p className="text-sm text-gray-300 pb-3 text-center">
            *The football player images are used solely for informational
            purposes and are not indicative of any current partnerships.
            Official partnerships will be established as the platform grows and
            scales
          </p>
        </div>
      )}

      {moduleSection === "marketplace" && (
        <>
          <div className="max-w-4xl m-auto p-8">
            <Title
              text="Buy, Sell & Collect Authentic Digital Sports Assets"
              className="text-center"
            />
            <Title
              text={`Discover the ultimate marketplace for sports enthusiasts and collectors! The Glorizen NFT Marketplace is your hub for trading, buying, and selling exclusive player and team NFTs. Participate in thrilling auctions, secure rare collectibles, and expand your digital portfolio with one-of-a-kind items. Designed for seamless transactions and enriched by advanced blockchain technology, our marketplace offers transparency, security, and endless opportunities to engage with your favorite sports like never before. Step into the future of fan ownership and elevate your game with the Glorizen NFT Marketplace.`}
              className="text-base pt-6 text-center"
            />
          </div>
        </>
      )}

      {moduleSection === "staking-rewards" && (
        <>
          <div className="max-w-4xl m-auto p-8">
            <Title
              text="Stake GLZEN & Fan Shares for Exclusive Benefits"
              className="text-center"
            />
            <Title
              text="Earn while you engage! Stake your GLZEN tokens and player shares to unlock exclusive rewards
and grow your portfolio. With dynamic rewards tailored to your activity, Staking & Rewards is the
key to long-term success on Glorizen."
              className="text-base pt-6 text-center"
            />
          </div>
          <AnimatePresence mode="wait">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-roboto-bold text-[#FFD700]"
            >
              {/* <div className="p-2 flex flex-col xl:flex-row items-center justify-center">
                <Image
                  src="/iphone-stake-rewards.svg"
                  alt=""
                  className=""
                  width={200}
                  height={200}
                />
              </div> */}
            </motion.h1>
          </AnimatePresence>
        </>
      )}
      {moduleSection === "community" && (
        <>
          <div className="max-w-4xl m-auto p-8">
            <Title
              text="Engage with Clubs, Vote, and Access VIP Events"
              className="text-center"
            />
          </div>
          <AnimatePresence mode="wait">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-roboto-bold text-[#FFD700]"
            >
              <div className="p-2 flex flex-col xl:flex-row items-center justify-center">
                <Image
                  src="/iphone-community.svg"
                  alt=""
                  className=""
                  width={200}
                  height={200}
                />
              </div>
            </motion.h1>
          </AnimatePresence>
        </>
      )}

      {moduleSection === "wallet" && (
        <>
          <div className="max-w-4xl m-auto p-8">
            <Title
              text="All Your Digital Sports Assets in One Secure Wallet"
              className="text-center"
            />
            <Title
              text="Manage your assets with ease. The Glorizen Smart Wallet oers secure and seamless access to
your tokens, shares, and NFTs. Integrated with advanced Web3 features, it’s your gateway to the
future of blockchain-powered gaming and trading."
              className="text-base pt-6 text-center"
            />
          </div>
          {/* <AnimatePresence mode="wait">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-roboto-bold text-[#FFD700]"
            >
              <div className="p-2 flex flex-col xl:flex-row items-center justify-center">
                <Image
                  src="/iphone-smart-wallet.svg"
                  alt=""
                  className=""
                  width={200}
                  height={200}
                />
              </div>
            </motion.h1>
          </AnimatePresence> */}
        </>
      )}
    </>
  );
};

export default ModuleSection;

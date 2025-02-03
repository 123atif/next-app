"use client";
import React from "react";
import Title from "@/components/Title";
import player1 from "../../../public/player-1.png";
import player2 from "../../../public/player-2.png";
import player3 from "../../../public/player-3.png";
import player4 from "../../../public/player-4.png";
import player5 from "../../../public/player-5.png";
import player6 from "../../../public/player-7.png";
import card1 from "../../../public/card-1.svg";
import card2 from "../../../public/card-2.svg";
import card4 from "../../../public/card-4.svg";
import card5 from "../../../public/card-5.svg";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <Title text="Glorizon Player NFT Cards" className="mt-3 p-4" />
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {[player1, player2, player3, player4, player5, player6].map(
              (img, index) => (
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
              )
            )}
          </motion.div>
        </AnimatePresence>

        <Title text="Glorizon Team NFT Cards" className="mt-3 p-4" />
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {[card1, card2, card4, card5].map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-[200px] h-[250px] md:w-[250px] md:h-[300px] p-2"
              >
                <Image
                  src={img}
                  alt={`Team Card ${index + 1}`}
                  fill
                  className="object-contain hover:z-10"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Page;

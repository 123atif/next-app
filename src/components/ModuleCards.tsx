import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Title from "./Title";

const ModuleCards = ({ playerCards, teamCards }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <Title
        text="Glorizon Player NFT Cards"
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
      <Title text="Glorizon Team NFT Cards" className="mt-3 p-4 text-center" />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8"
        >
          {teamCards.map((img, index) => (
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
  );
};

export default ModuleCards;

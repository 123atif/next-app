"use client";
import React from "react";
import Image from "next/image";
import Title from "@/components/Title";
import { motion, AnimatePresence } from "framer-motion";
import iphone from "../../../public/iphone-stake-rewards.svg";

const StakeRewards = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto p-8">
        <Title text="Stake GLZEN & Fan Shares for Exclusive Benefits" />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="p-2 flex flex-col xl:flex-row items-center justify-center"
        >
          <Image src={iphone} alt="Stake Rewards" />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default StakeRewards;

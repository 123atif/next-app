"use client";
import React from "react";
import Image from "next/image";
import Title from "@/components/Title";
import iphone from "../../../public/iphone-stake-rewards.svg";
import { motion, AnimatePresence } from "framer-motion";
const page = () => {
  return (
    <>
      <div className="max-w-4xl m-auto p-8">
        <Title text="Stake GLZEN & Fan Shares for Exclusive Benefits" />
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
            <Image src={iphone} alt="" className="" />
          </div>
        </motion.h1>
      </AnimatePresence>
    </>
  );
};

export default page;

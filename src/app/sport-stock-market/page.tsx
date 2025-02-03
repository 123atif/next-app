"use client";
import Title from "@/components/Title";
import Image from "next/image";
import React from "react";
import iphoneone from "../../../public/iphone-1.svg";
import iphonetwo from "../../../public/iphone-2.svg";
import { motion, AnimatePresence } from "framer-motion";

const page = () => {
  return (
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
          <div className="p-2 flex flex-col xl:flex-row items-center justify-center gap-8">
            <Image src={iphoneone} alt="" className="max-h-[25rem]" />
            <Image src={iphonetwo} alt="" className="max-h-[25rem]" />
          </div>
        </motion.h1>
      </AnimatePresence>
    </>
  );
};

export default page;

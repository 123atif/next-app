"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TitleProps {
  text: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={text}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className={`text-4xl font-roboto-bold text-[#FFD700] ${
          className || ""
        }`}
      >
        {text}
      </motion.h1>
    </AnimatePresence>
  );
};

export default Title;

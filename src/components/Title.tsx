"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={text}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold"
      >
        {text}
      </motion.h1>
    </AnimatePresence>
  );
};

export default Title;

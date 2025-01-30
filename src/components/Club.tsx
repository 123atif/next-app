"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Slider } from "@/components/ui/slider";
import { IoIosArrowUp } from "react-icons/io";

const Club = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  // const dropdownRef = useRef<HTMLDivElement>(null);

  // const handleKeyDown = (e) => {
  //   if (e.key === "Escape") {
  //     setIsOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  return (
    <div className="relative mt-12 w-72 max-w-full">
      {/* ref={dropdownRef} add in thet top div if needed */}
      <Button
        type="button"
        className="flex w-full items-center justify-between rounded-[10px] bg-zinc-800/100 px-4 py-2.5 text-sm"
        onClick={() => setIsOpen(!isOpen)}
        // onKeyDown={handleKeyDown}
      >
        <span className="font-semibold">{selectedOption || " Club"}</span>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <IoIosArrowUp />
        </span>
      </Button>

      {isOpen && (
        <div className="m-3">
          <h3 className="font-bold mb-2">Price Range</h3>
          <Slider defaultValue={[50]} max={5000} step={1} className="my-4" />
          <div className="flex justify-between text-sm">
            <span>$50</span>
            <span>$5000</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Club;

"use client";
import { useState } from "react";
import { Checkbox } from "../../../components/ui/checkbox";
import { Button } from "../../../components/ui/button";
import { IoIosArrowUp } from "react-icons/io";

const PlayerCardsFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption] = useState(null); //setSelectedOption
  // const dropdownRef = useRef<HTMLDivElement>(null);

  // const handleKeyDown = () => {
  //   setIsOpen(false);
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
        // onClick={handleKeyDown}
      >
        <span className="font-semibold">
          {selectedOption || "Players Cards"}
        </span>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <IoIosArrowUp />
        </span>
      </Button>

      {isOpen && (
        <div className="flex flex-col gap-4 m-6 ">
          <div className="flex items-center space-x-3">
            <Checkbox id="diamond" />
            <label
              htmlFor="diamond"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Diamond
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="platinum" />
            <label
              htmlFor="platinum"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Platinum
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="gold" />
            <label
              htmlFor="gold"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Gold
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="silver" />
            <label
              htmlFor="silver"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Silver
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="bronze" />
            <label
              htmlFor="bronze"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Bronze
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerCardsFilter;

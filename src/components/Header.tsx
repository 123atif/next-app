import React from "react";
import logo from "../../public/main-logo.svg";
import visa from "../../public/visa.svg";
import mastercard from "../../public/master-card.svg";
import paypal from "../../public/paypal.svg";
import dummy from "../../public/dummy.svg";
import Image from "next/image";
import { Button } from "./ui/button";
const Header = () => {
  return (
    <>
      <header className="bg-zinc-600/40 rounded-lg md:rounded-[10px] p-2 flex flex-nowrap gap-2 md:gap-4 justify-between items-center min-w-[450px]">
        <div className="flex items-center gap-2 md:gap-4 ">
          <Image
            src={logo}
            alt="Logo"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0"
          />
          <h1 className="text-[10px] md:text-xl font-bold ">
            Glorizen NFT Marketplace
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          <div className="hidden sm:block text-center min-w-[120px]">
            <div className="text-[10px]">Balance:</div>
            <div className="text-xs font-bold bg-zinc-500/50 px-2 py-1 rounded-[6px] whitespace-nowrap">
              $5,337{" "}
              <span className="hidden md:inline tracking-[1px]">
                (42,696 GLZN)
              </span>
            </div>
            <div className="flex gap-3 justify-center">
              <Image src={visa} alt="Logo" height={25} width={25} />
              <Image src={mastercard} alt="Logo" height={25} width={25} />
              <Image src={paypal} alt="Logo" height={25} width={25} />
            </div>
            <Button
              variant="default"
              className="bg-[#66ff00] h-6 hover:bg-green-700 text-xs whitespace-nowrap text-black font-bold"
            >
              <p className="tracking-[3px]">BUY GLZN</p>
            </Button>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[8px] text-center">Current Exchange Rate</div>
            <div className="text-xs font-bold bg-zinc-500/50 px-2 py-1 rounded-[6px] whitespace-nowrap">
              <span className="text-[#6dc463]">1</span> GLZEN =
              <span className="text-[#11AD79] tracking-[1px]"> $0.125 </span>
            </div>
          </div>

          <Image
            src={dummy}
            alt="Profile"
            className="w-8 h-8 md:w-14 md:h-14  rounded-full bg-zinc-500 flex-shrink-0"
          />
        </div>
      </header>
    </>
  );
};

export default Header;

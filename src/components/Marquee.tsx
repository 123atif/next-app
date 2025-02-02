// MarqueeBrands.jsx
import React from "react";
import one from "../../public/one.png";
import two from "../../public/two.png";
import five from "../../public/five.png";
import eight from "../../public/eight.png";
import nine from "../../public/nine.png";
import ten from "../../public/ten.png";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const MarqueeBrands = () => {
  return (
    <div className="w-full py-8 ">
      <Marquee speed={60} delay={0} gradient={false}>
        {[one, two, five, eight, nine, ten].map((img, index) => (
          <div
            key={index}
            className="mx-8 hover:scale-105 hover:bg-yellow-400 rounded-md p-3 transition-transform"
          >
            <Image
              src={img}
              alt="Trusted Partners"
              width={100}
              height={60}
              className=""
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeBrands;

import React from "react";
import Image from "next/image";
import gradient from "../../public/graident.svg";

const BackgroundGradient = ({ children }) => {
  return (
    <div className="relative w-full h-full ">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={gradient}
          alt="Background gradient"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
};

export default BackgroundGradient;

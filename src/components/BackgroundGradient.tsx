import React, { ReactNode } from "react";
import Image from "next/image";
import gradient from "../../public/graident.svg";

interface BackgroundGradientProps {
  children: ReactNode;
}

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  children,
}) => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src={gradient}
          alt="Background gradient"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
};

export default BackgroundGradient;

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
<<<<<<< HEAD
    <div className="relative w-full h-full">
=======
    <div className="relative w-full min-h-auto md:min-h-screen">
>>>>>>> 703c7b31267d0094a70350a229db751b17bbc65e
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

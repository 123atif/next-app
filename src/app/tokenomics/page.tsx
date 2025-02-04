// pages/Page.tsx (or wherever your page component is located)
import React from "react";
import Title from "@/components/Title";
import BackgroundGradient from "@/components/BackgroundGradient";

const Page = () => {
  return (
    <BackgroundGradient>
      <Title text="GLZEN Tokenomics" className="text-center pt-8" />
    </BackgroundGradient>
  );
};

export default Page;

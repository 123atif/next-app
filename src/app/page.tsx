"use client";
import BackgroundVideo from "@/components/BackgroundVideo";
import MarqueeBrands from "@/components/Marquee";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <nav className="fixed w-full top-0 z-50">
        <Navbar />
      </nav>

      <div className="relative h-[75vh] md:h-[100vh]">
        <div className="absolute inset-0">
          <BackgroundVideo />
        </div>
        <div className="absolute text-white text-[15px] text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-glow z-10 px-4 md:text-4xl sm:text-2xl">
          A Multimodule Sports Ecosystem Powered by SGZELN
        </div>
      </div>

      <div className="relative ">
        <MarqueeBrands />
      </div>
    </>
  );
}

"use client";
import BackgroundVideo from "@/components/BackgroundVideo";
// import MarqueeBrands from "@/components/Marquee";
import Navbar from "@/components/Navbar";
// import Image from "next/image";
// import SideBar from "@/components/SideBar";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <nav className="fixed w-full top-0 z-50">
        <Navbar />
      </nav>

      <div className="relative h-[100vh]">
        <div className="absolute inset-0">
          <BackgroundVideo />
        </div>
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="font-serif font-medium text-white text-[15px] text-center  text-glow z-10 px-4 md:text-4xl sm:text-2xl">
            A Multimodule Sports Ecosystem Powered by $GLZEN
          </div>
          <div className="relative w-full max-w-md mt-6 mx-auto">
            <Image
              src="/iphone.svg"
              alt="iPhone"
              className="w-full h-auto"
              priority
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* <div className="relative ">
        <MarqueeBrands />
      </div> */}
      {/* <SideBar /> */}
    </>
  );
}

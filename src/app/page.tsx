"use client";
import BackgroundGradient from "@/components/BackgroundGradient";
import BackgroundVideo from "@/components/BackgroundVideo";
// import MarqueeBrands from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { emails, socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEnvelopeOpen } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ModuleCards from "@/components/ModuleCards";
import player1 from "../../public/player-1.png";
import player2 from "../../public/player-2.png";
import player3 from "../../public/player-3.png";
import player4 from "../../public/player-4.png";
import player5 from "../../public/player-5.png";
import player6 from "../../public/player-7.png";
import card1 from "../../public/card-1.svg";
import card2 from "../../public/card-2.svg";
import card4 from "../../public/card-4.svg";
import card5 from "../../public/card-5.svg";
export default function Home() {
  const playerCards = [player1, player2, player3, player4, player5, player6];

  const teamCards = [card1, card2, card4, card5];

  const [showText, setShowText] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowText(false);
    }, 2000);
  }, [showText]);

  return (
    <>
      <nav className="fixed w-full top-0 z-50">
        <Navbar />
      </nav>

      <section id="home">
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
                src="/svg/iphone.svg"
                alt="iPhone"
                className="w-full h-auto max-w-36 md:max-w-48 mx-auto"
                priority
                width={140}
                height={140}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="modules-page">
        <BackgroundGradient>
          <div className="min-h-screen ">
            {/* */}
            <Title
              text="Modules"
              className="text-center  pt-10 md:pt-28 text-[24px] md:text-[50px]"
            />
            {/* <div className="flex justify-center pt-10">
              <Image
                alt="image"
                src="/images/mod-1.jpg"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto max-w-3xl rounded-lg"
              />
            </div> */}
            <ModuleCards playerCards={playerCards} teamCards={teamCards} />
          </div>
        </BackgroundGradient>
      </section>

      <section id="tokenomics">
        <BackgroundGradient>
          <div className="min-h-auto md:min-h-screen flex flex-col">
            <Title
              text="GLZEN Tokenomics"
              className="text-center pt-10 md:pt-28 text-[24px] md:text-[50px]"
            />
            <div>
              <div className="flex justify-center pb-10">
                <Image
                  alt="image"
                  src="/svg/token-supply.svg"
                  width={0}
                  height={0}
                  // sizes="100vw"
                  className="w-full max-w-[90%] h-auto  rounded-lg"
                />
              </div>

              <div className="flex-grow flex flex-col justify-end px-4 pb-10">
                <div className="mb-4">
                  <AnimatePresence>
                    {showText && (
                      <motion.p
                        initial={{ opacity: 0, rotateX: -90 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        exit={{ opacity: 0, rotateX: 90 }}
                        transition={{ duration: 0.5 }}
                        className="text-gray-400 text-sm text-center"
                      >
                        Available soon with the beta launch
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <motion.div className="flex justify-between w-full space-x-4">
                  <div className="flex flex-col items-center">
                    <Button
                      className="bg-[#00FF00] text-black transform transition-transform hover:scale-105"
                      onClick={() => setShowText(!showText)}
                    >
                      Buy GLZEN
                    </Button>
                    <p className="text-gray-500 text-xs mt-1">
                      (Use Crypto Wallet)
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <Button
                      className="bg-[#00FF00] text-black transform transition-transform hover:scale-105"
                      onClick={() => setShowText(!showText)}
                    >
                      Buy GLZEN
                    </Button>
                    <p className="text-gray-500 text-xs mt-1">(Use Card)</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </BackgroundGradient>
      </section>
      <section id="contact-us">
        <BackgroundGradient>
          <div className="min-h-screen flex flex-col items-center justify-between py-5">
            <div className="flex justify-center items-center pt-16">
              <Title
                text="Play. Trade. Earn. Repeat."
                className="text-center font-bold text-[24px] md:text-[50px] absolute top-[40%]"
              />
            </div>
            <div className="w-full px-4">
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col space-y-2">
                  {emails.map((email) => (
                    <Link
                      key={email}
                      href={`mailto:${email}`}
                      className="flex items-center space-x-2 hover:text-yellow-500 transition-colors"
                    >
                      <FaEnvelopeOpen className="h-5 w-5 text-blue-600" />
                      <span className="text-sm md:text-base">{email}</span>
                    </Link>
                  ))}
                </div>
                <div className="flex space-x-4 md:space-x-6">
                  {socialMedia.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300 hover:scale-110"
                    >
                      <span className="text-2xl md:text-3xl">
                        {social.icon}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </BackgroundGradient>
      </section>
    </>
  );
}

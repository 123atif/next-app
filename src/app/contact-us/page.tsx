"use client";
import BackgroundGradient from "@/components/BackgroundGradient";
import Title from "@/components/Title";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const page = () => {
  const emails = [
    "support@glorizen.io",
    "investors@glorizen.io",
    "partners@glorizen.io",
  ];

  const socialMedia = [
    { icon: <FaSquareXTwitter className="text-[#1DA1F2]" />, href: "#" },
    { icon: <CiLinkedin className="text-[#0077B5]" />, href: "#" },
    { icon: <FaTelegram className="text-[#0088CC]" />, href: "#" },
  ];

  return (
    <BackgroundGradient>
      <div className="flex justify-center items-center min-h-screen">
        <Title
          text="Play. Trade. Earn. Repeat."
          className="text-center font-bold text-[36px]"
        />
      </div>
      <div className="h-screen flex flex-col justify-end py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl flex justify-between items-center">
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
                <span className="text-2xl md:text-3xl">{social.icon}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default page;

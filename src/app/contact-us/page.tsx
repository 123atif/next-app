"use client";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-[#0B0D10] rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">
        {/* Email Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
            <FaEnvelopeOpen className="h-8 w-8 mr-3 text-blue-600" />
            Contact Us
          </h2>

          <div className="space-y-4">
            {[
              "support@glorizen.io",
              "investors@glorizen.io",
              "partners@glorizen.io",
            ].map((email) => (
              <div
                key={email}
                className="group flex items-center hover:bg-gray-800 rounded-lg p-3 transition-colors"
              >
                <Link
                  href={`mailto:${email}`}
                  className=" font-semibold text-sm md:text-base w-full flex items-center"
                >
                  <span className="bg-blue-50 rounded-lg p-2 mr-4">
                    <FaEnvelopeOpen className="h-5 w-5 text-blue-600" />
                  </span>
                  {email}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t pt-12">
          <h3 className="text-xl font-semibold  mb-8 text-center">
            Connect With Us
          </h3>

          <div className="flex justify-center space-x-6 md:space-x-8">
            {[
              { icon: <FaTwitter className="text-[#1DA1F2]" />, href: "#" },
              { icon: <CiLinkedin className="text-[#0077B5]" />, href: "#" },
              { icon: <FaTelegram className="text-[#0088CC]" />, href: "#" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-500 hover:scale-110"
              >
                <span className="text-2xl md:text-3xl">{social.icon}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import menu from "../../public/menu.svg";
import { routes } from "@/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/home-page"); // Default active tab

  // Set active tab on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveTab(window.location.pathname);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-gradient">
      <div className="mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Image src={logo} alt="logo" width={50} height={50} />

        {/* Hamburger Menu Icon */}
        <Image
          src={menu}
          alt="menu"
          width={30}
          height={30}
          className="sm:hidden bg-white rounded-full cursor-pointer"
          onClick={toggleMenu}
        />

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-6">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                onClick={() => setActiveTab(route.path)}
                className={`relative after:absolute after:left-0 after:bottom-[-0.5rem] after:h-1 after:bg-yellow-500 after:transition-all after:duration-300 
                  ${
                    activeTab === route.path
                      ? "after:w-full text-yellow-500"
                      : "after:w-0 hover:after:w-full"
                  }`}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-blue-gradient p-4">
          <ul className="space-y-4">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  onClick={() => {
                    setActiveTab(route.path);
                    toggleMenu(); // Close menu on selection
                  }}
                  className={`block relative after:absolute after:left-0 after:bottom-[-0.5rem] after:h-1 after:bg-yellow-500 after:transition-all after:duration-300 
                    ${
                      activeTab === route.path
                        ? "after:w-[3rem] text-yellow-500"
                        : "after:w-0 hover:after:w-[3rem]"
                    }`}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

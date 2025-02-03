"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-1.svg";
import menu from "../../public/menu.svg";
import { MobileMenuroutes, routes } from "@/data";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Default activeTab set to "/home-page"
  const [activeTab, setActiveTab] = useState("/home-page");

  // Determine active route on mount (client side)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveTab(window.location.pathname);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Determine if we're on the home page.
  // Adjust this condition based on your home route ("/" or "/home-page")
  const isHomePage = activeTab === "/" || activeTab === "/home-page";

  // Set the appropriate background classes based on the route.
  const navbarBgClass = isHomePage ? "bg-blue-gradient" : "bg-[#0B0D10]";

  return (
    <nav className={navbarBgClass}>
      <div className="mx-auto flex items-center justify-between p-4">
        <Image src={logo} alt="logo" width={50} height={50} />
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
        <Button className="bg-white text-black hover:bg-gray-500 duration-300 hidden md:block">
          White Paper
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          sm:hidden
          fixed right-0 top-0 h-full w-64
          ${navbarBgClass}
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          z-50
          shadow-2xl
        `}
      >
        <div className="p-4 flex justify-between">
          <Image src={logo} alt="logo" width={50} height={50} />
          <Button
            onClick={toggleMenu}
            className="text-xl font-bold p-2 hover:text-yellow-500"
          >
            x
          </Button>
        </div>
        <ul className="space-y-4 p-4">
          {MobileMenuroutes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                onClick={() => {
                  setActiveTab(route.path);
                  toggleMenu();
                }}
                className={`block text-white relative 
                  after:absolute after:left-0 after:bottom-[-0.5rem] 
                  after:h-1 after:bg-yellow-500 
                  after:transition-all after:duration-300 
                  hover:text-yellow-500
                  ${
                    activeTab === route.path
                      ? "after:w-[3rem] text-yellow-500"
                      : "after:w-0 hover:after:w-[3rem]"
                  }`}
              >
                <div className="flex items-center gap-3">
                  {route.icon}
                  {route.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="space-y-4 p-4">
          <Button className="bg-white text-black hover:bg-gray-500 duration-300 md:block">
            White Paper
          </Button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;

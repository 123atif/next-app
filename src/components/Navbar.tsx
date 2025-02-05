"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-2.svg";
import menu from "../../public/menu.svg";
import module from "../../public/module-menu.svg";
import { MobileMenuroutes, routes } from "@/data";
import { Button } from "./ui/button";
import SideBar from "./SideBar";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeTab, setActiveTab] = useState("/home");

  // useEffect(() => {
  //   setActiveTab(window.location.pathname);
  //   const handlePopState = () => setActiveTab(window.location.pathname);
  //   window.addEventListener("popstate", handlePopState);
  //   return () => window.removeEventListener("popstate", handlePopState);
  // }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const openSidebar = () => setShowSidebar(true);
  const closeSidebar = () => setShowSidebar(false);

  const isHomePage = activeTab === "/" || activeTab === "/home-page";
  const navbarBgClass = isHomePage ? "bg-[#000]" : "bg-[#000]";

  const handleSmoothScroll = (
    event: React.MouseEvent,
    targetId: string,
    path: string
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveTab(path);
    }
  };

  useEffect(() => {
    const sectionIds = routes.map((route) => route.path.slice(1));

    const handleScroll = () => {
      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            setActiveTab(`/${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={navbarBgClass}>
        <div className="mx-auto flex items-center justify-between p-4">
          <div className="cursor-pointer">
            <Image src={logo} alt="logo" width={150} height={150} />
          </div>
          <div className="flex items-end justify-end">
            <Image
              src={menu}
              alt="menu"
              width={30}
              height={30}
              className="sm:hidden bg-white rounded-full cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          {/* Desktop Menu */}
          <div className="sm:flex gap-7">
            <ul className="hidden sm:flex items-center space-x-6">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    // onClick={() => setActiveTab(route.path)}
                    onClick={(e) =>
                      handleSmoothScroll(e, route.path.slice(1), route.path)
                    }
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

              <Link href="https://glorizen.gitbook.io/docs">
                <Button className="bg-white text-black hover:bg-gray-500 duration-300 md:block">
                  White Paper
                </Button>
              </Link>
            </ul>

            <Image
              src={module}
              alt="menu"
              width={40}
              height={30}
              className="bg-gray-700 hover:bg-gray-600 transition duration-300 rounded-full cursor-pointer"
              onClick={openSidebar}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed right-0 top-0 h-full w-64 ${navbarBgClass} transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } z-50 shadow-2xl`}
        >
          <div className="p-4 flex justify-between">
            <div className="cursor-pointer" onClick={openSidebar}>
              <Image src={logo} alt="logo" width={150} height={150} />
            </div>
            <Button
              onClick={toggleMenu}
              className="text-xl font-bold p-2 hover:text-yellow-500"
            >
              ×
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
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 sm:hidden"
            onClick={toggleMenu}
          />
        )}
      </nav>

      {/* Sidebar */}
      <AnimatePresence>
        {showSidebar && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 bg-black/50"
              onClick={closeSidebar}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="w-72 bg-black p-4 overflow-y-auto"
            >
              <SideBar />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(Navbar);

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/asstes";
import { FaTiktok } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";
import ReactFlagsSelect from "react-flags-select";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({
  isMenuOpen,
  menuItems,
  setIsMenuOpen,
  selected,
  setSelected,
}) => {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="menu fixed inset-0 h-screen bg-black/90 backdrop-blur-[12px]   px-5 md:px-20 pb-8 flex flex-col gap-0 z-[99999] overflow-y-auto lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {/* logo */}
          <div className="flex flex-row items-center justify-between py-5 pb-12">
            <Link href="/" className="cursor-pointer">
              <Image
                src={Logo}
                alt="logo"
                width={500}
                height={500}
                priority={true}
                className="max-w-[200px] w-full"
              />
            </Link>
            <button
              className="flex flex-col gap-1.5 p-2 group"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Toggle menu"
            >
              {/* TOP LINE */}
              <span
                className={`block w-6 h-0.5 bg-theme-primary transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "rotate-45 translate-y-[8px]" // Moves down to center then rotates
                    : "rotate-0"
                }`}
              />

              {/* MIDDLE LINE */}
              <span
                className={`block w-6 h-0.5 bg-theme-primary transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 translate-x-2" : "opacity-100"
                }`}
              />

              {/* BOTTOM LINE */}
              <span
                className={`block w-6 h-0.5 bg-theme-primary transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "-rotate-45 translate-y-[-8px]" // Moves up to center then rotates
                    : "rotate-0"
                }`}
              />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="shrink-0">
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer hover:text-white text-theme-light w-full table uppercase text-base tracking-[2px]  px-6"
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <div className="language-converter">
              <ReactFlagsSelect
                selected={selected}
                onSelect={(code) => setSelected(code)}
                className="menu-flags"
                defaultCountry="US"
                customLabels={{ US: "Englisg", GB: "German", FR: "French" }}
              />
            </div>
            <div className="login">
              <Link href={"/"} className="themeButton">
                Login
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selected, setSelected] = useState("US");
  const [isScrolled, setIsScrolled] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const menuItems = [
    { label: "dine with us", href: "/" },
    { label: "plan your visit", href: "/" },
    { label: "events", href: "/" },
    { label: "view group map", href: "/" },
    { label: "our story", href: "/" },
    { label: "contact us", href: "/" },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if( typeof window !== undefined){
      const handleResize = () => {
        if (window.innerWidth > 1024 && isMenuOpen) {
          setIsMenuOpen(false);
        }
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }

    return () => {
      document.body.classList.remove("noScroll");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if(typeof window !== undefined){
      const handleScroll = () => {
        const currentScroll = window.scrollY || document.documentElement.scrollTop;
        setIsScrolled(currentScroll > 50);
      }
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ease-in-out ${
        isScrolled ? " backdrop-blur-lg bg-black/50" : " bg-transparent"
      }`}
    >
      <div className="wrapper relative  ">
        <div className="custom-container">
          <div className="py-5 flex flex-row items-center justify-between gap-3">
            <Link href="/" className="cursor-pointer">
              <Image
                src={Logo}
                alt="logo"
                width={500}
                height={500}
                priority={true}
                className="max-w-[200px] w-full"
              />
            </Link>

            <div className="flex flex-row gap-3 items-center justify-end">
              <div className="hidden cursor-pointer lg:flex items-center gap-4 flex-row-reverse">
                <div className="language-converter">
                  <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    className="menu-flags"
                    defaultCountry="US"
                    customLabels={{ US: "Englisg", GB: "German", FR: "French" }}
                  />
                </div>
                <div className="login">
                  <Link href={"/"} className="themeButton">
                    Login
                  </Link>
                </div>
                <div className="social-media flex flex-row gap-4 items-center">
                  <FaTiktok className="icons  hover-transition text-theme-light" />
                  <RiInstagramFill className="icons  hover-transition text-theme-light" />
                  <BsTwitterX className="icons  hover-transition text-theme-light" />
                  <FaSnapchatGhost className="icons  hover-transition text-theme-light" />
                </div>
              </div>

              <div className="toggler lg:hidden lg:static absolute  right-2 z-50 ">
                <button
                  onClick={handleMenuToggle}
                  className="text-white focus:outline-none"
                  aria-label="Toggle menu"
                >
                  {/* menu */}
                  <div className="flex flex-col gap-1.5 p-2 ">
                    <span
                      className={`block w-6 h-0.5 bg-theme-primary transition-all duration-300 ${
                        isMenuOpen
                          ? "rotate-45 translate-x-1 translate-y-1"
                          : ""
                      }`}
                    />
                    <span
                      className={`block w-6 h-0.5 bg-theme-primary transition-all duration-300 ${
                        isMenuOpen ? "opacity-0" : ""
                      }`}
                    />
                    <span
                      className={`block w-6 h-0.5 bg-theme-primary transition-all duration-300 ${
                        isMenuOpen
                          ? "-rotate-45 translate-y-[-5px] translate-x-1"
                          : ""
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="menu-bar border-white lg:border-t lg:border-b py-1">
          <div className="custom-container">
            <div className="desktop-menu justify-center items-center w-full hidden lg:flex">
              <ul
                className={`custom-design lg:flex lg:flex-row flex-col lg:h-full h-[100vh] w-full justify-between ${
                  isMenuOpen ? "flex" : "hidden"
                }`}
              >
                {menuItems?.map((item, index) => (
                  <li
                    key={index}
                    className="  font-semibold whitespace-nowrap "
                  >
                    <Link
                      href={item.href}
                      className={`cursor-pointer hover:text-white text-theme-light py-2 w-full table lg:text-center  uppercase text-base tracking-[2px]`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {mounted && (
              <MobileMenu
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                menuItems={menuItems}
                selected={selected}
                setSelected={setSelected}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

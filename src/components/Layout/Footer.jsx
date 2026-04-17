import {
  AppleStore,
  GoogleStore,
  Logo,
  payment1,
  payment2,
  payment3,
} from "@/asstes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTiktok } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="Footer py-10 border-t border-white">
      <div className="custom-container ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-between">
          <Image
            src={Logo}
            alt="logo"
            width={500}
            height={500}
            className="max-w-[250px] w-full block lg:hidden"
          />
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal mb-2 md:col-span-2">
            Join us for an
            <br /> unforgettable experience
          </h2>
          <div className="flex flex-col gap-4">
            <p className="font-semibold">DOWNLOAD THE GROVES APP</p>
            <div className="flex flex-row items-center gap-4">
              <Image
                src={AppleStore}
                alt="App Store"
                width={150}
                height={50}
                className="w-[140px] h-auto"
              />
              <Image
                src={GoogleStore}
                alt="App Store"
                width={150}
                height={50}
                className="w-[140px] h-auto"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8 md:my-16 text-white">
          <div className="location-area">
            <h6 className="mb-3 uppercase font-sans tracking-[2px] text-sm font-normal">
              Location
            </h6>
            <Link href={"/"} className="text-sm">
              Al-Hizam Park
              <br /> Al-Semairi, Yanbu Al Bahr 46455 <br />
              Riyadh Saudi Arabia
            </Link>
          </div>
          <div className="working-area">
            <h6 className="mb-3 uppercase font-sans tracking-[2px] text-sm font-normal">
              WORKING HOURS
            </h6>
            <span className="text-sm">
              Sun until Thurs: 4:00PM <br />
              Fri & Sat: 2:30PM
            </span>
            <h6 className="mt-6  font-sans text-sm font-normal">
              Gates Close at:
            </h6>
            <span className="text-sm">
              Sat until Wed: 12:00AM <br />
              Thu & Fri: 12:30AM
            </span>
          </div>
          <div className="working-area flex flex-col">
            <h6 className="mb-3 uppercase font-sans tracking-[2px] text-sm font-normal">
              GUEST SERVICE CALL
            </h6>
            <Link href={"mailto:cc@thegroves-sa.com"} className="text-sm">
              cc@thegroves-sa.com
            </Link>
            <Link href={"tel:920001672"} className="text-sm">
              920001672
            </Link>
            <Link href={"tel:+966556631309"} className="text-sm">
              +966556631309
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <Image
            src={Logo}
            alt="logo"
            width={500}
            height={500}
            className="max-w-[250px] w-full hidden lg:block"
          />
          <div className="social-media flex flex-row gap-4 lg:items-center">
            <FaTiktok className="icons  hover-transition text-theme-light" />
            <RiInstagramFill className="icons  hover-transition text-theme-light" />
            <BsTwitterX className="icons  hover-transition text-theme-light" />
            <FaSnapchatGhost className="icons  hover-transition text-theme-light" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 justify-center md:justify-between items-center mt-9">
          <div className="flex flex-col md:flex-row   lg:flex-row lg:items-center justify-start lg:justify-between gap-4 text-left">
            <Link href={"/"} className="text-white text-sm ">
              Terms & Conditions
            </Link>
            <Link href={"/"} className="text-white text-sm ">
              Privacy Policy
            </Link>
            <Link href={"/"} className="text-white text-sm ">
              ©2023 The Groves for Entertainment
            </Link>
          </div>
          <div className="social-media flex flex-row gap-4 lg:items-center   justify-start lg:justify-end">
            <Image src={payment3} alt="payment" width={26} height={26} />
            <Image src={payment2} alt="payment" width={26} height={26} />
            <Image src={payment1} alt="payment" width={26} height={26} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

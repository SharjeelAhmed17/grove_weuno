import { Map } from "@/asstes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="generalaccess py-10">
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6  place-content-center place-items-center">
          <Image
            src={Map}
            alt="Map"
            width={600}
            height={600}
            className="w-full h-auto order-2 md:order-1"
            priority= {true}
          />
          <div className="content-area md:order-2 order-1">
            <div className="content-area flex flex-col gap-4 md:gap-6 lg:w-[80%] ">
              <span className="text-white font-light tracking-[2px]">
                EXPERIENCE THE GROVES
              </span>
              <h3 className="text-white text-5xl  font-normal leading-tight">
                Find your place
              </h3>
              <p className="text-white">
                Our interactive map will show you the way to the shops and
                restaurants that you want to see.
              </p>
              <Link
                href={"/"}
                className="themeButton max-w-fit flex items-center gap-4 justify-between group"
              >
                Open the Map
                <FaArrowRight className="icons hover-transition group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

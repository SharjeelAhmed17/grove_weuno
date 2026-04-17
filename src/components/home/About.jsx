"use client";
import React, { useState } from "react";
import { VideoPoster } from "@/asstes";
import Image from "next/image";
import { FaArrowRight, FaPlay } from "react-icons/fa6";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="About custom-container flex flex-col gap-12  py-10">
        <div className="w-full flex flex-col gap-3 lg:w-[80%] mx-auto text-white">
          <h2 className="text-center text-2xl md:text-4xl lg:text-[50px] font-normal ">
            Mall Of: Endless Possibilities
          </h2>
          <p className="text-center text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        
        <div className="relative flex items-center justify-center">
          <Image
            src={VideoPoster}
            width={960}
            height={540}
            alt="About Image"
            className="w-full h-auto"
          />
          <button
            className="bg-white px-4 rounded-full absolute flex justify-center items-center cursor-pointer top-0 bottom-0 my-auto mx-auto h-20 aspect-square hover:bg-primary-green group"
            onClick={() => setIsModalOpen(true)}
          >
            <FaPlay className="text-primary-green text-2xl md:text-4xl group-hover:text-white" />
          </button>
          {isModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
              onClick={() => setIsModalOpen(false)}
            >
              <div
                className="bg-white  rounded-lg max-w-2xl w-full relative  "
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  width="100"
                  height="240"
                  controls
                  className="w-full h-auto rounded-lg"
                >
                  <source src="" type="video/mp4" />
                </video>
                <button
                  className=" text-black rounded-md absolute top-0 right-0"
                  onClick={() => setIsModalOpen(false)}
                >
                  X
                </button>
              </div>
            </div>
          )}
        </div>

          <div className="rounded-3xl bg-secondary-green p-8 cursor-pointer">
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
              <div className="w-full flex flex-col gap-8 lg:w-[60%] text-white">
                <span className="table  tracking-[1px] text-sm leading-tight">25 SR/GUEST</span>
                <div className="flex flex-col gap-3">  
                <h4 className="">Get your General Access Ticket</h4>
                <p className="font-normal">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text e
                </p>
                </div>
              </div>
              <div className="flex w-full lg:w-fit justify-end">
                <FaArrowRight className="icons text-theme-light hover-transition hover:translate-x-2 text-4xl md:text-5xl font-normal" />
              </div>
            </div>
          </div>
        

    </section>
  );
};

export default About;

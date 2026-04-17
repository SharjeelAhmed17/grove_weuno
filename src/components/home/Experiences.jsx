"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa6";
import { Experiences0, Experiences1, Experiences2 } from "@/asstes";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const Experiences = () => {
  const data = [
    {
      name: "Resturants",
      image: Experiences0,
    },
    {
      name: "Experiences",
      image: Experiences1,
    },
    {
      name: "Events",
      image: Experiences2,
    },
    {
      name: "Resturants",
      image: Experiences0,
    },
    {
      name: "Experiences",
      image: Experiences1,
    },
    {
      name: "Events",
      image: Experiences2,
    },
  ];
  return (
    <section className="generalaccess py-10">
      <div className="custom-container-left">
        <div className="w-full text-white grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6  gap-6 md:gap-4 ">
          <div className="col-span-1 md:col-span-2 flex flex-col justify-center gap-6 md:gap-12">
            <h2 className="  text-3xl md:text-[50px] font-normal md:leading-[55px]">
              Curate your experience as you like
            </h2>

            <Link
              href={"/"}
              className="themeButton  flex gap-4 w-fit items-center justify-between group"
            >
              Book Tickets
              <FaArrowRight className="icons hover-transition group-hover:translate-x-2" />
            </Link>
          </div>

          <div className="md:col-span-3 lg:col-span-4">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              breakpoints={{
                320: {
                  slidesPerView: 1.5,
                  spaceBetween: 10,
                },

                768: {
                  slidesPerView: 1.7,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2.8,
                  spaceBetween: 10,
                },
              }}
              className="experiencesslider"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="text-center flex flex-col gap-4">
                    <Image
                      src={item.image}
                      height={200}
                      width={200}
                      alt="General Access"
                      className="w-[342px] h-[480px] rounded-3xl  object-cover object-center"
                    />
                    <h2 className="text-2xl md:text-3xl ">{item.name}</h2>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;

"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa6";
import { Portfolio, Portfolio2, Portfolio3 } from "@/asstes";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const GeneralAccess = () => {
  const data = [
    {
      name: "Little Krazy",
      image: Portfolio,
    },
    {
      name: "Hawanim Groves City",
      image: Portfolio2,
    },
    {
      name: "Picnic Market",
      image: Portfolio3,
    },
    {
      name: "Little Krazy",
      image: Portfolio,
    },
    {
      name: "Hawanim Groves City",
      image: Portfolio2,
    },
    {
      name: "Picnic Market",
      image: Portfolio3,
    },
  ];

  return (
    <section className="GeneralAccess py-10 flex flex-col gap-12">
      <div className="custom-container ">
        <div className="w-full lg:w-[70%]  text-white flex flex-col gap-12">
          <h2 className="  text-3xl md:text-[50px] font-normal leading-normal md:leading-[54px]">
            Book General Access ticket and enjoy the attractions for free
          </h2>

          <Link
            href={"/"}
            className="themeButton max-w-fit flex items-center gap-4 justify-between group "
          >
            Book General Access Tickets
            <FaArrowRight className="icons hover-transition group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
      <div className="custom-container-left">
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
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
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
          className="attractionsslider"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="text-center flex flex-col justify-center items-center gap-5">
                <Image
                  src={item.image}
                  height={200}
                  width={200}
                  alt="General Access"
                  className=" h-[480px] w-[342px] rounded-3xl object-cover object-center"
                />
                <h2 className="text-2xl md:text-3xl text-center">
                  {item.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GeneralAccess;

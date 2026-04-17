"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { BannerBG } from "@/asstes";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const homeBannerSlide = [
    {
      imageSrc: BannerBG,
      subtitle: "KHAWAJA YANNI",
      title: "The new era of luxury",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "/",
      btntext: "Book reservation now",
    },
    {
      imageSrc: BannerBG,
      subtitle: "Vida Vera",
      title: "The new era of luxury",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "/",
      btntext: "Book reservation now",
    },
    {
      imageSrc: BannerBG,
      subtitle: "Zama Zulu",
      title: "The new era of luxury",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "/",
      btntext: "Book reservation now",
    },
  ];
  return (
    <section className="Banner h-screen">
      <div className="h-full relative">
        {/* content */}
        <div className="absolute top-0  h-screen w-full z-40">
          <div className="relative w-full h-full">
            {/* black bg */}
            <div className=" absolute top-0 w-full md:w-[60vw] lg:[55vw] xl:w-[47vw] h-full bg-black/60 -z-10"></div>
            {/* content */}
            <div className=" h-full w-full custom-container">
              <div className="h-full  w-full md:w-[60%] lg:[55%] xl:w-[43%]">
                <div className="flex flex-col w-full h-full justify-evenly">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="content-area flex flex-col justify-center gap-7 h-full md:pt-32"
                    >
                      <motion.span
                        variants={{
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: -10 },
                        }}
                        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                        className="text-sm text-white font-light tracking-[2px] uppercase"
                      >
                        {homeBannerSlide[activeIndex].subtitle}
                      </motion.span>

                      <motion.h1
                        variants={{
                          initial: { opacity: 0, y: 30, filter: "blur(10px)" },
                          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                          exit: { opacity: 0, y: -20, filter: "blur(5px)" },
                        }}
                        transition={{
                          delay: 0.15,
                          duration: 0.8,
                          ease: [0.19, 1, 0.22, 1],
                        }}
                        className="text-white text-4xl lg:text-[68px] font-normal lg:leading-[76px] max-w-[80%]"
                      >
                        {homeBannerSlide[activeIndex].title}
                      </motion.h1>

                      <motion.p
                        variants={{
                          initial: { opacity: 0, x: -20 },
                          animate: { opacity: 1, x: 0 },
                          exit: { opacity: 0, x: 10 },
                        }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="text-white text-base"
                      >
                        {homeBannerSlide[activeIndex].description}
                      </motion.p>

                      <motion.div
                        variants={{
                          initial: { opacity: 0, scale: 0.95 },
                          animate: { opacity: 1, scale: 1 },
                          exit: { opacity: 0, scale: 0.95 },
                        }}
                        transition={{ delay: 0.45, duration: 0.5 }}
                      >
                        <Link
                          href={homeBannerSlide[activeIndex].link}
                          className="themeButton max-w-fit flex gap-4 items-center justify-between group font-normal"
                        >
                          {homeBannerSlide[activeIndex].btntext}
                          <FaArrowRight className="icons hover-transition group-hover:translate-x-2" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                  {/* bullets */}
                  <div className="flex w-full pb-6 justify-end px-5">
                  <div className="custom-pagination-container flex items-center gap-2">
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          pagination={{
            clickable: true,
            el: ".custom-pagination-container",
          }}
          speed={1000}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          autoplay={{
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            delay: 5000,
          }}
          modules={[Pagination, Autoplay]}
          className="BannnerSwiper h-full"
        >
          {homeBannerSlide?.map((slide, index) => (
            <SwiperSlide
              className="relative h-full"
              style={{
                backgroundImage: `url(${slide.imageSrc.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;

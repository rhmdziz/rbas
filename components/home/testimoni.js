"use client";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";

import { TestimonialList } from "@/data/testimoni";

export default function Testimoni() {
  return (
    <>
      <div className="w-full py-16 bg-background-blue flex flex-col items-center justify-center">
        <div className=" max-w-4xl ">
          <h2 className="text-3xl font-medium mb-4 text-green text-center font-rubik">
            Apa Kata Orang Tua dan Murid
          </h2>
          <p className="text-obsidian font-dm-sans text-sm">
            Kami berkomitmen untuk terus memberikan pengalaman belajar seni
            terbaik bagi setiap anak, dengan pendekatan yang penuh perhatian dan
            kasih.
          </p>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={18}
            slidesPerView={1}
            centeredSlides={true}
            slidesPerGroup={1}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: { slidesPerView: 2, slidesPerGroup: 1 },
              1024: { slidesPerView: 3, slidesPerGroup: 1 },
            }}
          >
            {TestimonialList.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-sm p-6 h-96 flex flex-col mt-6 mb-16 mx-1 justify-start text-center hover:shadow-xl transition-shadow duration-300 hover:cursor-grab">
                  <div className="flex justify-center mb-4">
                    <Image
                      src={`/icons/user/${
                        item.gender === "female" ? "female" : "male"
                      }.png`}
                      alt={item.name}
                      width={110}
                      height={110}
                      className="rounded-full pt-2"
                    />
                  </div>
                  <h4 className="font-semibold text-green font-rubik">
                    {item.name}
                  </h4>
                  <span className="text-sm text-white-secondary font-dm-sans">
                    {item.role}
                  </span>
                  <p className="text-black-secondary font-light text-sm italic mt-2 font-dm-sans line-clamp-8">
                    “{item.message}”
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

"use client";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";

import { AchievementData } from "@/data/achievement";

export default function Achievment() {
  return (
    <div className="w-full bg-green flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl flex items-center gap-4 justify-between">
        <h2 className="text-4xl font-medium text-background font-rubik w-1/4">
          Prestasi Siswa Kami
        </h2>
        <div className="w-3/4 flex items-center justify-center">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={18}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={AchievementData.length > 1}
            pagination={
              AchievementData.length > 1 ? { clickable: true } : false
            }
            autoplay={
              AchievementData.length > 1
                ? {
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
                : false
            }
            className="achievement-swiper"
          >
            {AchievementData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white px-6 py-14 rounded-2xl flex justify-between gap-4 items-center my-10 hover:cursor-grab">
                  <div className="relative h-40 w-40">
                    <Image
                      src="/images/achievement/umar.jpg"
                      alt="Achievement Image"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                    <Image
                      src="/icons/medals.png"
                      alt="Trophy Icon"
                      width={80}
                      height={80}
                      className="absolute bottom-0 right-0"
                    />
                  </div>
                  <div className="flex w-[calc(100%-10rem)] flex-col justify-center gap-2">
                    <p className="text-xl text-orange font-medium font-rubik">
                      {item.name}
                    </p>
                    <p className="text-2xl text-obsidian font-rubik font-medium">
                      {item.achievement} {item.competition}
                    </p>
                    <p className="text-white-secondary font-dm-sans">
                      {item.category}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

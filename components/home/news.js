"use client";
import { BeritaData } from "@/data/news";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function News() {
  return (
    <div className="w-full bg-background py-16 flex flex-col items-center justify-center">
      <div className=" max-w-4xl">
        <h2 className="text-3xl font-medium mb-4 text-green text-center font-rubik">
          Berita Tentang Kami
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={BeritaData.length > 3}
          pagination={BeritaData.length > 3 ? { clickable: true } : false}
          autoplay={
            BeritaData.length > 3
              ? {
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
              : false
          }
          breakpoints={{
            768: { slidesPerView: 2, slidesPerGroup: 1 },
            1024: { slidesPerView: 3, slidesPerGroup: 1 },
          }}
        >
          {BeritaData.map((item, index) => (
            <SwiperSlide key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="bg-white rounded-xl shadow-sm h-[300px] flex flex-col my-6 mx-1 justify-start hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full h-[150px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-t-2xl"
                    />
                  </div>
                  <div className="px-4 h-[200px] flex flex-col justify-between">
                    <div>
                      <p className="text-green font-dm-sans text-sm mt-2">
                        {item.author}
                      </p>
                      <h4 className="text-sm font-medium text-gray my-2 font-rubik line-clamp-3">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-white-secondary text-xs pb-4 font-dm-sans">
                      {item.date}
                    </p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

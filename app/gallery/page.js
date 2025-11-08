"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { artworks } from "@/data/gallery";
import CTA from "@/components/cta";
import BackToTopButton from "@/components/back_to_top";
import Breadcrumb from "@/components/breadcrumb";

export default function Gallery() {
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Galeri", href: "/gallery" },
    { label: "Karya Siswa Kami" },
  ];

  const [heights, setHeights] = useState([]);

  useEffect(() => {
    const newHeights = artworks.map(
      () => `${Math.floor(Math.random() * (280 - 180) + 180)}px`
    );
    setHeights(newHeights);
  }, []);

  return (
    <div className="w-full min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full py-16 px-4">
        <h2 className="text-5xl py-8 font-medium text-green text-center font-rubik">
          Karya Siswa Kami
        </h2>
        <Breadcrumb items={breadcrumbItems} />

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mt-10">
          {artworks.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 break-inside-avoid"
              style={{ height: heights[index] || "200px" }}
            >
              <Image
                src={src}
                alt={`Karya Siswa ${index + 1}`}
                fill="true"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <CTA />
      <BackToTopButton />
    </div>
  );
}

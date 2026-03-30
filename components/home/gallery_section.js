"use client";

import { useState } from "react";
import Image from "next/image";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { artworks } from "@/data/gallery";

export default function GallerySection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleArtworks = isExpanded ? artworks : artworks.slice(0, 6);

  return (
    <section id="gallery" className="w-full scroll-mt-28 bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.24em] uppercase text-orange">
            Galeri Karya
          </p>
          <h2 className="mt-4 font-rubik text-3xl font-semibold text-obsidian md:text-4xl">
            Hasil belajar yang terasa hidup, berwarna, dan penuh karakter.
          </h2>
        </Reveal>

        <Stagger
          className="mt-8 columns-1 gap-4 space-y-4 md:mt-10 md:columns-2 lg:columns-3"
          delay={0.08}
          staggerChildren={0.08}
        >
          {visibleArtworks.map((src, index) => (
            <StaggerItem
              key={`${src}-${index}`}
              className="relative mb-4 overflow-hidden rounded-[1.5rem] border border-obsidian/8 shadow-[0_18px_44px_rgba(37,44,65,0.08)] break-inside-avoid md:rounded-[1.75rem]"
              style={{
                height:
                  index % 5 === 0 ? "280px" : index % 3 === 0 ? "230px" : "200px",
              }}
            >
              <Image
                src={src}
                alt={`Karya siswa ${index + 1}`}
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </StaggerItem>
          ))}
        </Stagger>

        {artworks.length > 6 && (
          <Reveal className="mt-8 flex justify-center md:mt-10" delay={0.1}>
            <button
              type="button"
              onClick={() => setIsExpanded((current) => !current)}
              className="rounded-full border border-obsidian/12 bg-white px-6 py-3 font-rubik text-sm font-medium text-obsidian transition hover:border-green hover:text-green"
            >
              {isExpanded ? "Tampilkan lebih sedikit" : "Lihat selengkapnya"}
            </button>
          </Reveal>
        )}
      </div>
    </section>
  );
}

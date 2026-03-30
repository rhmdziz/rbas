"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { AchievementData } from "@/data/achievement";

export default function AchievementCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (AchievementData.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % AchievementData.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  const activeItem = AchievementData[activeIndex];

  if (!activeItem) {
    return null;
  }

  return (
    <div className="min-w-0 w-full rounded-[2rem] bg-white p-6 text-obsidian shadow-[0_26px_64px_rgba(14,30,37,0.22)]">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {AchievementData.map((item, index) => (
            <div
              key={`${item.name}-${item.competition}-${index}`}
              className="w-full shrink-0"
            >
              <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-center">
                <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-[1.75rem] bg-background-blue">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="inline-flex rounded-full bg-orange/12 px-4 py-2 text-sm font-medium text-orange">
                    {item.achievement}
                  </p>
                  <h3 className="mt-4 font-rubik text-3xl font-semibold">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-lg leading-8 text-gray">
                    {item.competition}
                  </p>
                  <p className="mt-2 text-sm text-white-secondary">
                    {item.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {AchievementData.length > 1 && (
        <div className="mt-10 flex justify-center gap-3">
          {AchievementData.map((item, index) => (
            <button
              key={`${item.name}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Tampilkan prestasi ${index + 1}`}
              className={`carousel-dot ${index === activeIndex ? "is-active" : ""}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";

import { TestimonialList } from "@/data/testimoni";

function getSlidesPerView(width) {
  if (width >= 1200) {
    return 3;
  }

  if (width >= 768) {
    return 2;
  }

  return 1;
}

export default function TestimonialCarousel() {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const updateSlidesPerView = () => {
      setSlidesPerView(getSlidesPerView(window.innerWidth));
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const pages = useMemo(() => {
    return Array.from(
      { length: Math.ceil(TestimonialList.length / slidesPerView) },
      (_, index) =>
        TestimonialList.slice(
          index * slidesPerView,
          index * slidesPerView + slidesPerView
        )
    );
  }, [slidesPerView]);

  useEffect(() => {
    if (pages.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActivePage((current) => (current + 1) % pages.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, [pages.length]);

  const safeActivePage =
    pages.length === 0 ? 0 : Math.min(activePage, pages.length - 1);
  return (
    <div className="mt-10">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${safeActivePage * 100}%)` }}
        >
          {pages.map((page, pageIndex) => (
            <div key={`testimonial-page-${pageIndex}`} className="w-full shrink-0">
              <div
                className={`grid gap-5 ${
                  slidesPerView === 3
                    ? "lg:grid-cols-3"
                    : slidesPerView === 2
                      ? "md:grid-cols-2"
                      : "grid-cols-1"
                }`}
              >
                {page.map((item) => (
                  <div
                    key={`${item.name}-${item.role}`}
                    className="min-h-[320px] rounded-[2rem] bg-white p-7 shadow-[0_18px_48px_rgba(37,44,65,0.08)]"
                  >
                    <p className="font-rubik text-xl font-medium text-obsidian">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-green">{item.role}</p>
                    <p className="mt-5 text-sm leading-7 text-gray">
                      &ldquo;{item.message}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {pages.length > 1 && (
        <div className="mt-10 flex justify-center gap-3">
          {pages.map((_, index) => (
            <button
              key={`testimonial-page-${index}`}
              type="button"
              onClick={() => setActivePage(index)}
              aria-label={`Tampilkan testimoni halaman ${index + 1}`}
              className={`carousel-dot ${index === safeActivePage ? "is-active" : ""}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

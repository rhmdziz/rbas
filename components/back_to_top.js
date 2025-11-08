"use client";
import { useEffect, useState } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <div
          className="fixed bottom-26 right-10 flex items-center gap-2 z-50"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className={`bg-gray-700 text-white text-sm px-3 py-1.5 rounded-full shadow-md transition-all duration-100 ${
              hovered
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-3 pointer-events-none"
            }`}
          >
            Kembali ke atas
          </div>

          <button
            onClick={scrollToTop}
            className="bg-gray-200 text-obsidian p-5 rounded-full shadow-lg hover:bg-gray-300 transition-all duration-100 hover:scale-105 flex items-center justify-center cursor-pointer"
            aria-label="Kembali ke atas"
          >
            <ArrowUpOutlined style={{ fontSize: 22 }} />
          </button>
        </div>
      )}
    </>
  );
}

"use client";
import { useState } from "react";

export default function WhatsappButton() {
  const [hovered, setHovered] = useState(false);

  const phoneNumber = "6281234567890";
  const message =
    "Halo! Saya ingin bertanya tentang Rumah Belajar Abi Sakinah.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div
      className="fixed bottom-10 right-10 flex items-center gap-2 z-50"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`bg-green-600 text-white text-sm px-3 py-1.5 rounded-full shadow-md transition-all duration-100 ${
          hovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-3 pointer-events-none"
        }`}
      >
        Hubungi kami
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
        aria-label="Chat via WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-white"
        >
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.39 0 .09 5.3.09 11.85c0 2.09.55 4.14 1.59 5.94L0 24l6.36-1.67a11.81 11.81 0 0 0 5.67 1.44h.01c6.65 0 11.95-5.3 11.95-11.85 0-3.17-1.24-6.14-3.47-8.44zM12.04 21.5c-1.8 0-3.56-.48-5.09-1.39l-.36-.21-3.77 1 .99-3.66-.24-.38a9.7 9.7 0 0 1-1.5-5.19c0-5.33 4.36-9.68 9.71-9.68 2.59 0 5.02 1 6.86 2.82a9.58 9.58 0 0 1 2.85 6.86c0 5.33-4.36 9.68-9.71 9.68zm5.35-7.27c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.9 1.13-.16.19-.33.22-.62.07-.29-.15-1.24-.46-2.36-1.46a8.71 8.71 0 0 1-1.63-2.02c-.17-.29-.02-.45.13-.6.13-.12.29-.31.43-.46.15-.15.19-.26.29-.45.1-.19.05-.34-.02-.49-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48-.16-.01-.34-.01-.52-.01-.19 0-.49.07-.74.34-.26.29-1 1-1 2.45 0 1.44 1.03 2.83 1.17 3.02.15.19 2.03 3.11 4.93 4.36.69.3 1.23.48 1.65.62.69.22 1.31.19 1.8.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.37-.07-.12-.26-.19-.55-.34z" />
        </svg>
      </a>
    </div>
  );
}

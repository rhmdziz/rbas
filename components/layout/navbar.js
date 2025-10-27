"use client";
import { useState, useEffect } from "react";
import Button from "../button";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`bg-background w-full py-3 flex justify-center z-9999 fixed
          ${isScrolled ? "shadow" : "shadow-none"}
          `}
      >
        <div className="flex justify-between items-center mx-0 max-w-5xl w-full">
          <Link href="/">
            <p className="text-lg font-medium">Rumah Belajar Abi Sakinah</p>
          </Link>
          <ul className="hidden md:flex items-center gap-4 text-sm">
            {[
              { name: "Beranda", href: "#" },
              { name: "Tentang", href: "#" },
              { name: "Program", href: "#" },
              { name: "Galeri", href: "#" },
              { name: "Kontak", href: "#" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="
                    relative text-foreground transition-all duration-300
                    before:content-[''] before:absolute before:-bottom-1 before:left-0
                    before:w-0 before:h-[2px] before:bg-orange
                    hover:before:w-full hover:text-orange
                    before:transition-all before:duration-300
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="fill">Daftar Sekarang</Button>
        </div>
      </div>
    </>
  );
}

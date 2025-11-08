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
        className={`fixed top-0 left-0 bg-background w-full py-3 flex items-center justify-center z-50
    ${isScrolled ? "shadow" : "shadow-none"}
  `}
      >
        <div className="flex justify-between items-center mx-auto max-w-4xl w-full font-rubik">
          <Link href="/">
            <p className="text-lg font-medium">Rumah Belajar Abi Sakinah</p>
          </Link>
          <ul className="hidden md:flex items-center gap-4 text-sm">
            {[
              { name: "Beranda", href: "/" },
              { name: "Tentang", href: "#" },
              { name: "Program", href: "#" },
              { name: "Galeri", href: "/gallery" },
              { name: "Kontak", href: "#" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="
                    relative text-foreground transition-all duration-300
                    before:content-[''] before:absolute before:-bottom-1 before:left-0
                    before:w-0 before:h-0.5 before:bg-orange
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

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Button from "../button";

const navItems = [
  { name: "Beranda", href: "#beranda" },
  { name: "Tentang", href: "#tentang" },
  { name: "Program", href: "#program" },
  { name: "Galeri", href: "#gallery" },
  { name: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border px-3 py-3 transition md:px-4 ${
          isScrolled
            ? "border-obsidian/10 bg-white/92 shadow-[0_18px_48px_rgba(37,44,65,0.12)] backdrop-blur"
            : "border-white/40 bg-white/72 backdrop-blur"
        }`}
      >
        <Link href="#beranda" className="flex items-center gap-3 pl-2">
          <span className="flex h-10 items-center justify-center rounded-full bg-green px-3 font-rubik text-xs font-semibold tracking-[0.18em] text-white">
            RBAS
          </span>
          <div className="hidden sm:block">
            <p className="font-rubik text-sm font-semibold text-obsidian">
              Rumah Belajar Abi Sakinah
            </p>
            <p className="text-xs text-white-secondary">
              Studio les menggambar & melukis
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-rubik text-sm text-obsidian transition hover:text-orange"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Button
          href="#registration"
          variant="fill"
          className="hidden px-5 py-3 md:inline-block"
        >
          Daftar Sekarang
        </Button>

        <button
          type="button"
          aria-label="Buka navigasi"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-obsidian/10 bg-white text-obsidian md:hidden"
        >
          <span className="flex w-4 flex-col gap-1.5">
            <span
              className={`block h-0.5 w-full bg-current transition ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="mx-auto mt-3 w-full max-w-6xl rounded-[2rem] border border-obsidian/10 bg-white/96 p-4 shadow-[0_18px_48px_rgba(37,44,65,0.12)] backdrop-blur md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl px-4 py-3 font-rubik text-sm text-obsidian transition hover:bg-background-blue hover:text-green"
              >
                {item.name}
              </Link>
            ))}
            <Button
              href="#registration"
              variant="fill"
              className="mt-2 w-full px-5 py-3 text-center"
            >
              Daftar Sekarang
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

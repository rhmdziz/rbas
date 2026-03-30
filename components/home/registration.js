"use client";

import { useState } from "react";

import { Reveal } from "@/components/motion/reveal";
import { InformationDetail } from "@/data/about";

const programs = [
  "Kelas Menggambar",
  "Kelas Melukis Kanvas",
  "Kelas Kaligrafi",
];

export default function Registration() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    program: programs[0],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Halo, saya ingin mendaftar les di Rumah Belajar Abi Sakinah.%0A%0ANama: ${form.name}%0AUmur: ${form.age}%0AProgram: ${form.program}`;
    const whatsappUrl = `https://wa.me/${InformationDetail.whatsapp}?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="registration"
      className="w-full scroll-mt-28 bg-background-blue py-16 md:py-20"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.24em] uppercase text-green">
            Pendaftaran
          </p>
          <h2 className="mt-4 font-rubik text-3xl font-semibold leading-tight text-obsidian md:text-4xl">
            Pilih program, kirim data singkat, lalu lanjut konsultasi lewat
            WhatsApp.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-gray md:text-base md:leading-8">
            Form ini dibuat sederhana agar orang tua bisa langsung terhubung dan
            mendapat arahan kelas yang paling sesuai untuk kebutuhan anak.
          </p>
        </Reveal>

        <Reveal
          className="rounded-[2rem] bg-white p-5 shadow-[0_24px_64px_rgba(37,44,65,0.12)] md:p-7"
          delay={0.12}
          y={30}
        >
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div>
              <label
                htmlFor="student-name"
                className="font-rubik text-sm font-medium text-obsidian"
              >
                Nama Lengkap
              </label>
              <input
                id="student-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-obsidian/10 px-4 py-4 text-sm text-obsidian outline-none transition focus:border-green focus:ring-4 focus:ring-green/10"
                placeholder="Nama calon murid"
              />
            </div>

            <div>
              <label
                htmlFor="student-age"
                className="font-rubik text-sm font-medium text-obsidian"
              >
                Umur
              </label>
              <input
                id="student-age"
                type="number"
                required
                min="3"
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-obsidian/10 px-4 py-4 text-sm text-obsidian outline-none transition focus:border-green focus:ring-4 focus:ring-green/10"
                placeholder="Contoh: 8"
              />
            </div>

            <div>
              <label
                htmlFor="student-program"
                className="font-rubik text-sm font-medium text-obsidian"
              >
                Program yang Diminati
              </label>
              <select
                id="student-program"
                required
                value={form.program}
                onChange={(e) => setForm({ ...form, program: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-obsidian/10 bg-white px-4 py-4 text-sm text-obsidian outline-none transition focus:border-green focus:ring-4 focus:ring-green/10"
              >
                {programs.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="mt-2 rounded-full bg-orange px-6 py-4 font-rubik text-sm font-medium text-white shadow-[0_16px_40px_rgba(255,134,48,0.26)] transition hover:-translate-y-0.5 hover:opacity-95"
            >
              Kirim ke WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

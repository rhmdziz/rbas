"use client";

import { useState } from "react";

import { InformationDetail } from "@/data/about";

export default function Registration() {
  const [form, setForm] = useState({ name: "", age: "", program: "" });

  const program = [
    "Kelas Menggambar",
    "Kelas Melukis Kanvas",
    "Kelas Kaligrafi",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = `Halo, saya ingin mendaftar les Rumah Belajar Abi Sakinah untuk program berikut:\n\nNama: ${form.name}\nUmur: ${form.age}\nProgram: ${form.program}`;
    const whatsappUrl = `https://wa.me/${
      InformationDetail.whatsapp
    }?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="w-full bg-background-blue flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full">
          {/* Registration */}
          <div className="flex justify-between items-center flex-col md:flex-row gap-6 overflow-hidden my-10">
            <div className="w-full max-w-1/2 ">
              <h2 className="text-4xl font-medium mb-4 text-green font-rubik">
                Daftar Sekarang!
              </h2>
              <p className="text-obsidian font-dm-sans mb-6">
                Isi formulir di samping untuk mendaftar ke program kami. Kami
                akan membalas Anda untuk konfirmasi lebih lanjut.
              </p>
            </div>
            <div>
              <div className="w-full min-w-1/2 px-6 py-8 shadow my-2 bg-white rounded-2xl">
                <form>
                  <p className="font-rubik font-medium text-green">
                    Nama Lengkap
                  </p>
                  <input
                    type="text"
                    placeholder=""
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green transition font-dm-sans mb-4"
                  />
                  <p className="font-rubik font-medium text-green">Umur</p>
                  <input
                    type="number"
                    required
                    value={form.age}
                    onChange={(e) => setForm({ ...form, age: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green transition font-dm-sans mb-4"
                  />
                  <p className="font-rubik font-medium text-green">Program</p>

                  <select
                    required
                    value={form.program}
                    onChange={(e) =>
                      setForm({ ...form, program: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green transition font-dm-sans mb-4 bg-white cursor-pointer"
                  >
                    <option value="" disabled></option>
                    {program.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-orange text-white rounded-lg py-3 font-medium hover:opacity-90 transition cursor-pointer w-full"
                  >
                    Kirim ke Whatsapp
                  </button>
                </form>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}

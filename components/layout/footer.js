"use client";

import Link from "next/link";
import {
  FacebookFilled,
  InstagramOutlined,
  MailOutlined,
  TikTokFilled,
  TikTokOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

import { InformationDetail } from "@/data/information_detail";

export default function Footer() {
  return (
    <>
      <div className="w-full bg-obsidian text-white-secondary flex-row items-center justify-center">
        <div className="max-w-5xl  mx-auto flex justify-between w-full gap-32 py-12">
          <div className="w-[50%]">
            <h2 className="text-2xl font-medium">Rumah Belajar Abi Sakinah</h2>
            <p className="text-sm mt-1 mb-6 italic">
              Belajar, berprestasi, berakhlak, & bermanfaat
            </p>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3700827614475!2d104.78435587406857!3d-2.9945979414824047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b7700433ed0fb%3A0x36b78affb9434227!2sRumah%20Belajar%20Abi%20Sakinah%20(Les%20Mewarnai%2C%20Menggambar%2C%20Melukis%2C%20%26%20Kaligrafi)%20Kota%20Palembang!5e0!3m2!1sid!2sid!4v1761552394604!5m2!1sid!2sid"
              width="400"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md w-full h-[350px]"
            ></iframe>

            <p className="font-medium mt-4">Kantor Pusat</p>
            <p className="text-xs my-2 leading-loose">
              {InformationDetail.address_1}
            </p>
            <p className="font-medium">Cabang Perwari</p>
            <p className="text-xs my-2 leading-loose">
              {InformationDetail.address_2}
            </p>
          </div>
          <div className="w-[50%]">
            <div className="my-4 flex justify-between">
              <div>
                <p>Quick Link</p>
                <ul className="text-xs mt-2 ">
                  {[
                    { name: "Beranda", href: "" },
                    { name: "Tentang", href: "" },
                    { name: "Program", href: "" },
                    { name: "Galeri", href: "" },
                    { name: "Testimoni", href: "" },
                    { name: "Pengajar", href: "" },
                    { name: "Kontak", href: "" },
                  ].map((item) => (
                    <li key={item.name} className="mb-2 hover:opacity-80">
                      <a href={item.href}>{item.name}</a>
                    </li>
                  ))}
                </ul>

                <p className="mt-4">Program Kami</p>
                <ul className="text-xs mt-2">
                  {[
                    { name: "Kelas Menggambar", href: "" },
                    { name: "Melukis Kanvas", href: "" },
                    { name: "Kaligrafi", href: "" },
                  ].map((item) => (
                    <li key={item.name} className="mb-2 hover:opacity-80">
                      <a href={item.href}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p>Sosial Media Kami</p>
                <div className="flex flex-col gap-4 mt-3">
                  <Link
                    href={`https://wa.me/${InformationDetail.whatsapp}`}
                    target="_blank"
                  >
                    <div className="border py-2 px-4 flex gap-2">
                      <WhatsAppOutlined /> {InformationDetail.whatsapp}
                    </div>
                  </Link>
                  <Link
                    href={`https://instagram.com/${InformationDetail.instagram}`}
                    target="_blank"
                  >
                    <div className="border py-2 px-4 flex gap-2">
                      <InstagramOutlined /> {InformationDetail.instagram}
                    </div>
                  </Link>
                  <Link href={InformationDetail.facebook} target="_blank">
                    <div className="border py-2 px-4 flex gap-2">
                      <FacebookFilled /> Rumah Sakinah
                    </div>
                  </Link>
                  <Link href={InformationDetail.tiktok} target="_blank">
                    <div className="border py-2 px-4 flex gap-2">
                      <TikTokOutlined /> {InformationDetail.name}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-black-secondary flex justify-center">
          <div className="max-w-5xl w-full">
            <p className=" text-xs py-4">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/">Rumah Belajar Abi Sakinah</Link> | Made by Aziz &
              Umar
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

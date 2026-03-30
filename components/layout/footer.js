import Link from "next/link";
import {
  FacebookFilled,
  InstagramOutlined,
  TikTokOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

import { InformationDetail } from "@/data/about";

const quickLinks = [
  { name: "Tentang", href: "#tentang" },
  { name: "Program", href: "#program" },
  { name: "Galeri", href: "#gallery" },
  { name: "Testimoni", href: "#testimoni" },
  { name: "Kontak", href: "#kontak" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-obsidian text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:px-8 md:py-14 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
        <div>
          <p className="font-rubik text-xl font-semibold md:text-2xl">
            Rumah Belajar Abi Sakinah
          </p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/72">
            Les menggambar, melukis, dan kaligrafi untuk anak dengan pendekatan
            yang hangat, terarah, dan mendorong prestasi.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-white/72">
            <p>{InformationDetail.address_1}</p>
            <p>{InformationDetail.address_2}</p>
          </div>
        </div>

        <div>
          <p className="font-rubik text-lg font-medium">Navigasi</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/72">
            {quickLinks.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-orange">
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-rubik text-lg font-medium">Terhubung</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/72">
            <Link
              href={`https://wa.me/${InformationDetail.whatsapp}`}
              target="_blank"
              className="inline-flex items-start gap-3 break-all hover:text-orange"
            >
              <WhatsAppOutlined />
              {InformationDetail.whatsapp}
            </Link>
            <Link
              href={`https://instagram.com/${InformationDetail.instagram}`}
              target="_blank"
              className="inline-flex items-start gap-3 break-all hover:text-orange"
            >
              <InstagramOutlined />
              {InformationDetail.instagram}
            </Link>
            <Link
              href={InformationDetail.facebook}
              target="_blank"
              className="inline-flex items-start gap-3 break-all hover:text-orange"
            >
              <FacebookFilled />
              Rumah Sakinah
            </Link>
            <Link
              href={InformationDetail.tiktok}
              target="_blank"
              className="inline-flex items-start gap-3 break-all hover:text-orange"
            >
              <TikTokOutlined />
              {InformationDetail.name}
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl px-5 py-5 text-sm text-white/56 md:px-8">
          <p>&copy; {new Date().getFullYear()} Rumah Belajar Abi Sakinah</p>
        </div>
      </div>
    </footer>
  );
}

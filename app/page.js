import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightOutlined,
  CheckCircleFilled,
  EnvironmentOutlined,
  PlayCircleFilled,
} from "@ant-design/icons";

import BackToTopButton from "@/components/back_to_top";
import AchievementCarousel from "@/components/home/achievement_carousel";
import GallerySection from "@/components/home/gallery_section";
import Registration from "@/components/home/registration";
import TestimonialCarousel from "@/components/home/testimonial_carousel";
import Main from "@/components/layout/main";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import WhatsappButton from "@/components/whatsapp_button";
import { InformationDetail } from "@/data/about";
import { artworks } from "@/data/gallery";
import { BeritaData } from "@/data/news";

const programs = [
  {
    title: "Kelas Menggambar",
    description:
      "Belajar dasar bentuk, komposisi, dan observasi visual dengan pendekatan yang sabar dan terstruktur.",
    accent: "bg-orange/12 text-orange",
  },
  {
    title: "Melukis Kanvas",
    description:
      "Mengenal warna, tekstur, dan eksplorasi medium untuk menghasilkan karya yang lebih ekspresif.",
    accent: "bg-green/12 text-green",
  },
  {
    title: "Kaligrafi",
    description:
      "Melatih ketelitian, ritme, dan estetika tulisan dalam suasana belajar yang tenang dan fokus.",
    accent: "bg-obsidian/8 text-obsidian",
  },
];

const strengths = [
  "Mentor sabar dan berpengalaman membimbing anak dari level dasar sampai mahir.",
  "Kelas nyaman dengan pendekatan personal agar setiap murid berkembang sesuai bakatnya.",
  "Rutin diarahkan mengikuti lomba untuk membentuk mental juara dan portofolio karya.",
];

const stats = [
  { value: "3+", label: "Program utama" },
  { value: "2", label: "Lokasi belajar" },
  { value: "Puluhan", label: "Karya & partisipasi lomba" },
];

export default function Home() {
  return (
    <>
      <Main>
        <section
          id="beranda"
          className="relative w-full scroll-mt-28 overflow-hidden bg-[linear-gradient(180deg,#f5f8fa_0%,#ffffff_46%,#f5f8fa_100%)] pt-24 md:pt-28"
        >
          <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_left,rgba(255,134,48,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(0,173,181,0.18),transparent_34%)]" />
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-16 md:gap-12 md:px-8 md:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal className="relative z-10">
              <p className="inline-flex rounded-full border border-orange/20 bg-white px-3 py-2 font-dm-sans text-[11px] font-medium tracking-[0.2em] text-orange uppercase shadow-sm md:px-4 md:text-xs md:tracking-[0.24em]">
                Tempat Les Melukis Anak di Palembang
              </p>
              <h1 className="mt-5 max-w-3xl font-rubik text-4xl leading-tight font-semibold text-obsidian sm:text-5xl md:mt-6 md:text-6xl">
                Ruang belajar seni yang hangat, terarah, dan serius membangun
                keberanian berkarya.
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray sm:text-base md:mt-6 md:text-lg md:leading-8">
                {InformationDetail.name} membantu anak belajar menggambar,
                melukis, dan kaligrafi dengan pendampingan yang telaten,
                suasana nyaman, dan target perkembangan yang nyata.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#registration"
                  className="inline-flex items-center justify-center rounded-full bg-orange px-6 py-4 font-rubik text-sm font-medium text-white shadow-[0_16px_40px_rgba(255,134,48,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(255,134,48,0.32)]"
                >
                  Daftar Kelas
                </Link>
                <Link
                  href="#gallery"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-obsidian/12 bg-white px-6 py-4 font-rubik text-sm font-medium text-obsidian transition hover:border-green hover:text-green"
                >
                  Lihat Karya Siswa
                  <ArrowRightOutlined />
                </Link>
              </div>
              <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/80 bg-white/90 p-5 shadow-[0_14px_36px_rgba(37,44,65,0.08)] backdrop-blur"
                  >
                    <p className="font-rubik text-3xl font-semibold text-obsidian">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm text-white-secondary">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative mx-auto w-full max-w-xl" delay={0.12} y={36}>
              <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-orange/15 blur-2xl" />
              <div className="absolute -right-6 bottom-16 h-32 w-32 rounded-full bg-green/15 blur-2xl" />
              <div className="grid gap-4 md:grid-cols-[0.8fr_1fr]">
                <div className="space-y-4 md:pt-16">
                  <div className="rounded-[2rem] bg-green p-5 text-white shadow-[0_24px_48px_rgba(0,173,181,0.22)]">
                    <p className="text-xs font-medium tracking-[0.24em] uppercase text-white/80">
                      Fokus Pembelajaran
                    </p>
                    <p className="mt-3 font-rubik text-2xl font-medium leading-snug">
                      Teknik dasar, eksplorasi warna, dan rasa percaya diri.
                    </p>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_22px_60px_rgba(37,44,65,0.14)] md:aspect-[4/5]">
                    <Image
                      src={artworks[0]}
                      alt="Karya siswa Rumah Belajar Abi Sakinah"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_22px_60px_rgba(37,44,65,0.14)] md:aspect-[4/5]">
                    <Image
                      src={artworks[1]}
                      alt="Hasil karya murid les melukis"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="rounded-[2rem] bg-white p-5 shadow-[0_18px_48px_rgba(37,44,65,0.1)]">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-rubik text-lg font-medium text-obsidian">
                          Bimbingan menuju lomba
                        </p>
                        <p className="text-sm leading-6 text-white-secondary">
                          Anak dibantu berkembang, bukan sekadar mengisi waktu.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[2rem] border border-obsidian/8 bg-background-blue p-5">
                    <p className="font-rubik text-sm font-medium text-obsidian">
                      Lokasi belajar
                    </p>
                    <p className="mt-2 text-sm leading-7 text-gray">
                      16 Ulu dan Perwari, Palembang. Mudah dijangkau untuk
                      keluarga yang mencari kelas seni anak.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="tentang" className="w-full scroll-mt-28 bg-white py-16 md:py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <Reveal className="rounded-[2rem] bg-obsidian p-8 text-white shadow-[0_24px_64px_rgba(37,44,65,0.18)]">
              <p className="text-xs font-medium tracking-[0.24em] uppercase text-orange">
                Tentang RBAS
              </p>
              <h2 className="mt-4 font-rubik text-3xl font-semibold leading-tight md:text-4xl">
                Tempat les yang menumbuhkan teknik, karakter, dan semangat
                berkarya.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/74">
                Kami membangun pengalaman belajar seni yang hangat dan
                terstruktur, agar anak merasa aman untuk mencoba, bertumbuh,
                lalu bangga pada hasil karyanya sendiri.
              </p>
              <div className="mt-8 rounded-[1.5rem] bg-white/8 p-5">
                <p className="font-rubik text-lg font-medium">
                  Belajar, berprestasi, berakhlak, & bermanfaat
                </p>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  Nilai inti ini tetap terasa di cara kami mengajar, membimbing,
                  dan mendampingi anak mengikuti proses kreatifnya.
                </p>
              </div>
            </Reveal>
            <Stagger className="grid gap-4" delay={0.08}>
              {strengths.map((item) => (
                <StaggerItem
                  key={item}
                  className="flex gap-4 rounded-[1.75rem] border border-obsidian/8 bg-background-blue p-5"
                >
                  <div className="mt-1 text-green">
                    <CheckCircleFilled />
                  </div>
                  <p className="text-sm leading-7 text-gray">{item}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section
          id="program"
          className="w-full scroll-mt-28 bg-background-blue py-16 md:py-20"
        >
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <Reveal className="flex max-w-3xl flex-col gap-4">
              <p className="text-xs font-medium tracking-[0.24em] uppercase text-green">
                Program Kelas
              </p>
              <h2 className="font-rubik text-3xl font-semibold text-obsidian md:text-4xl">
                Jalur belajar seni yang dibuat untuk anak berkembang bertahap.
              </h2>
              <p className="text-base leading-8 text-gray">
                Setiap program dirancang agar anak tidak hanya menghasilkan
                gambar yang bagus, tetapi juga memahami proses, disiplin, dan
                keberanian mengekspresikan ide.
              </p>
            </Reveal>

            <Stagger className="mt-10 grid gap-5 lg:grid-cols-3" delay={0.1}>
              {programs.map((item, index) => (
                <StaggerItem
                  key={item.title}
                  className="group rounded-[2rem] bg-white p-7 shadow-[0_18px_48px_rgba(37,44,65,0.08)] transition hover:-translate-y-1"
                >
                  <div
                    className={`inline-flex rounded-full px-4 py-2 font-rubik text-sm font-medium ${item.accent}`}
                  >
                    0{index + 1}
                  </div>
                  <h3 className="mt-6 font-rubik text-2xl font-medium text-obsidian">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-gray">
                    {item.description}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-green">
                    <PlayCircleFilled />
                    Pendampingan bertahap dan ramah anak
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section
          id="prestasi"
          className="w-full scroll-mt-28 bg-green py-16 text-white md:py-20"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <Reveal>
              <p className="text-xs font-medium tracking-[0.24em] uppercase text-white/70">
                Prestasi Siswa
              </p>
              <h2 className="mt-4 font-rubik text-3xl font-semibold leading-tight md:text-4xl">
                Anak-anak dibimbing untuk siap tampil, berproses, dan percaya
                diri membawa karyanya ke publik.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/80">
                Pencapaian ini lahir dari latihan yang konsisten, arahan yang
                tepat, dan keberanian anak untuk terus berkembang dari satu
                karya ke karya berikutnya.
              </p>
            </Reveal>
            <Reveal className="min-w-0" delay={0.12} x={20}>
              <AchievementCarousel />
            </Reveal>
          </div>
        </section>

        <GallerySection />

        <section
          id="testimoni"
          className="w-full scroll-mt-28 bg-background-blue py-16 md:py-20"
        >
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <Reveal className="max-w-3xl">
              <p className="text-xs font-medium tracking-[0.24em] uppercase text-green">
                Testimoni
              </p>
              <h2 className="mt-4 font-rubik text-3xl font-semibold text-obsidian md:text-4xl">
                Orang tua dan murid merasakan proses belajar yang serius, sabar,
                dan nyaman dijalani.
              </h2>
            </Reveal>
            <Reveal delay={0.12} y={30}>
              <TestimonialCarousel />
            </Reveal>
          </div>
        </section>

        <section id="berita" className="w-full scroll-mt-28 bg-white py-16 md:py-20">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <Reveal className="max-w-3xl">
              <p className="text-xs font-medium tracking-[0.24em] uppercase text-orange">
                Berita & Sorotan
              </p>
              <h2 className="mt-4 font-rubik text-3xl font-semibold text-obsidian md:text-4xl">
                Jejak RBAS di media dan komunitas belajar seni.
              </h2>
            </Reveal>

            <Stagger className="mt-10 grid gap-5 lg:grid-cols-3" delay={0.1}>
              {BeritaData.map((item) => (
                <StaggerItem
                  key={item.id}
                  className="group overflow-hidden rounded-[2rem] border border-obsidian/8 bg-white shadow-[0_18px_48px_rgba(37,44,65,0.08)] transition hover:-translate-y-1"
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-green">{item.author}</p>
                      <h3 className="mt-3 font-rubik text-xl font-medium leading-8 text-obsidian">
                        {item.title}
                      </h3>
                      <p className="mt-5 text-sm text-white-secondary">
                        {item.date}
                      </p>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section
          id="kontak"
          className="w-full scroll-mt-28 bg-obsidian py-16 text-white md:py-20"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <p className="text-xs font-medium tracking-[0.24em] uppercase text-orange">
                Kunjungi atau Hubungi Kami
              </p>
              <h2 className="mt-4 font-rubik text-3xl font-semibold leading-tight md:text-4xl">
                Siap memilih kelas yang cocok untuk anak Anda.
              </h2>
              <div className="mt-8 grid gap-4">
                <div className="rounded-[1.75rem] bg-white/8 p-5">
                  <p className="font-rubik text-lg font-medium">Kantor Pusat</p>
                  <p className="mt-2 text-sm leading-7 text-white/72">
                    {InformationDetail.address_1}
                  </p>
                </div>
                <div className="rounded-[1.75rem] bg-white/8 p-5">
                  <p className="font-rubik text-lg font-medium">
                    Cabang Perwari
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/72">
                    {InformationDetail.address_2}
                  </p>
                </div>
                <a
                  href={`https://wa.me/${InformationDetail.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-3 rounded-full bg-orange px-6 py-4 font-rubik text-sm font-medium text-white transition hover:-translate-y-0.5"
                >
                  <EnvironmentOutlined />
                  Konsultasi via WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-2"
              delay={0.12}
              x={20}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3700827614475!2d104.78435587406857!3d-2.9945979414824047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b7700433ed0fb%3A0x36b78affb9434227!2sRumah%20Belajar%20Abi%20Sakinah%20(Les%20Mewarnai%2C%20Menggambar%2C%20Melukis%2C%20%26%20Kaligrafi)%20Kota%20Palembang!5e0!3m2!1sid!2sid!4v1761552394604!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta lokasi Rumah Belajar Abi Sakinah"
                className="rounded-[1.5rem]"
              />
            </Reveal>
          </div>
        </section>

        <Registration />
      </Main>

      <WhatsappButton />
      <BackToTopButton />
    </>
  );
}

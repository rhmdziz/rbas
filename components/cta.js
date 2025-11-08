import { InformationDetail } from "@/data/about";
import Image from "next/image";

export default function CTA() {
  return (
    <div className="w-full bg-background-blue flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="bg-green relative px-36 py-12 rounded-2xl shadow-lg my-12 flex justify-between items-center flex-col md:flex-row gap-6 overflow-hidden">
          <div className="z-10 text-center md:text-left flex flex-col gap-2">
            <h2 className="text-4xl font-medium text-background  font-rubik">
              Ada Pertanyaan?
            </h2>

            <a
              href={`https://wa.me/${
                InformationDetail.whatsapp
              }?text=${encodeURIComponent(
                "Halo, saya ingin bertanya tentang Rumah Belajar Abi Sakinah."
              )}`}
              target="_blank"
              className="inline-block hover:scale-105 transition-transform duration-200 mt-2 "
            >
              <p className="text-green  px-8 py-4 text-xl font-medium rounded-2xl relative font-rubik bg-white ">
                Hubungi Kami!
                <span className="absolute -right-4 -top-2 shake-loop">
                  <Image
                    src="/icons/wa.png"
                    alt="Decoration Line"
                    width={100}
                    height={100}
                    className="object-contain  mx-auto md:mx-0"
                  />
                </span>
              </p>
            </a>
          </div>

          <div className="absolute z-0 -top-12 -right-10 w-96 h-96  bg-white/20 rounded-full">
            <p className="font-rubik text-[300px] text-white text-center">?</p>
          </div>
          <div className="absolute z-0 -bottom-4 -left-40 p-40 bg-white/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

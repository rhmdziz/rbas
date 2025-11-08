import { ArrowRightOutlined } from "@ant-design/icons";
import { Image } from "antd";
import Link from "next/link";
import { artworks } from "@/data/gallery";

export default function Creation() {

  return (
    <div className="w-full min-h-screen bg-background pt-16 pb-4 flex flex-col items-center justify-center">
      <div className=" max-w-4xl w-full">
        <h2 className="text-3xl font-medium mb-8 text-green text-center font-rubik">
          Karya Siswa Kami
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {artworks.slice(0, 12).map((src, index) => (
            <div
              key={index}
              className="relative w-full aspect-4/3 overflow-hidden rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={src}
                alt={`Karya Siswa ${index + 1}`}
                fill="true"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/gallery">
            <p className="text-sm text-white-secondary font-rubik hover:opacity-90 transitio hover:text-green">
              Lihat lebih banyak
              <ArrowRightOutlined className="ml-2" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

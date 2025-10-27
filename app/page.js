import Footer from "@/components/layout/footer";
import Main from "@/components/layout/main";
import Navbar from "@/components/layout/navbar";
import WhatsappButton from "@/components/whatsapp_button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main>
        <p>Hallo</p>
      </Main>
      <Footer />
      <WhatsappButton />
    </>
  );
}

import BackToTopButton from "@/components/back_to_top";
import Achievment from "@/components/home/achievement";
import Creation from "@/components/home/creation";
import News from "@/components/home/news";
import Testimoni from "@/components/home/testimoni";
import Main from "@/components/layout/main";
import WhatsappButton from "@/components/whatsapp_button";
import Registration from "@/components/home/registration";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <>
      <Main>
        <Creation />
        <Achievment />
        <Testimoni />
        <News />
        <Registration />
        <CTA />
      </Main>

      <WhatsappButton />
      <BackToTopButton />
    </>
  );
}

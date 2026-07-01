import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import ShopBySpace from "@/components/sections/ShopBySpace";
import SignatureCollection from "@/components/sections/SignatureCollection";
import Services from "@/components/sections/Services";
import WhyIlma from "@/components/sections/WhyIlma";
import Lookbook from "@/components/sections/Lookbook";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <ShopBySpace />
      <SignatureCollection />
      <Services />
      <WhyIlma />
      <Lookbook />
      <Testimonials />
      <Contact />
    </>
  );
}

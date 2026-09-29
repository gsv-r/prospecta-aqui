import Container from "@/components/ui/container";
import NavBar from "@/components/home/navbar"
import Hero from "@/components/home/hero";
import Feature from "@/components/home/feature";
import Process from "@/components/home/process";
import { Pricing } from "@/components/home/pricing";
import { Cta } from "@/components/home/cta";
import Faq from "@/components/home/faq";
import Footer from "@/components/home/footer";

import Services from "@/components/home/services";

export default function Home() {
  return (
    <Container>
      <NavBar />
      <Hero />
      <Services />
      <Feature />
      <Process />
      <Pricing />
      <Cta />
      <Faq />
      <Footer />
    </Container>
  );
}

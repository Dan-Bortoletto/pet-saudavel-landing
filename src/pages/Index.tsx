import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PetCarousel } from "@/components/PetCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PetCarousel />
      <Services />
      <About />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
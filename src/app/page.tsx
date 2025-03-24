import HeroSection from "@/components/homepage/HeroSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import ProjectsSection from "@/components/homepage/ProjectsSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import ContactSection from "@/components/homepage/ContactSection";
import { Providers } from "./providers";

export default function Home() {
  return (
    <Providers>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </Providers>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import VisionSection from "@/components/VisionSection";
import SolutionsSection from "@/components/SolutionsSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <FeaturedProducts />
      <VisionSection />
      <SolutionsSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

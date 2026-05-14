import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import Hero from "./components/Hero";
import FeaturedCollections from "./components/FeaturedCollections";
import WhyChooseUs from "./components/WhyChooseUs";
import InstagramShowcase from "./components/InstagramShowcase";
import Testimonials from "./components/Testimonials";
import BrandStory from "./components/BrandStory";
import WhatsAppCTA from "./components/WhatsAppCTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import MobileBottomNav from "./components/MobileBottomNav";

export default function Home() {
  return (
    <main className="min-h-screen pb-24 md:pb-0">
      <Navbar />
      <Stories />
      <Hero />
      <FeaturedCollections />
      <WhyChooseUs />
      <InstagramShowcase />
      <Testimonials />
      <BrandStory />
      <WhatsAppCTA />
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomNav />
    </main>
  );
}

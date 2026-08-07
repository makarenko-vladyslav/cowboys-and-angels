import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ConceptSection from "@/components/ConceptSection";
import ServicesSection from "@/components/ServicesSection";
import CalculatorSection from "@/components/CalculatorSection";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import GallerySection from "@/components/GallerySection";
import TeamSection from "@/components/TeamSection";
import VideoShowcase from "@/components/VideoShowcase";
import ShopSection from "@/components/ShopSection";
import FaqSection from "@/components/FaqSection";
import BookingContactSection from "@/components/BookingContactSection";
import Footer from "@/components/Footer";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import {
  TickerInterstitial,
  WatermarkStatementInterstitial,
  LabeledHairlineInterstitial,
  PressRatingInterstitial,
} from "@/components/Interstitials";

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(35_25%_96%)] text-[hsl(25_20%_12%)] selection:bg-[hsl(28_85%_52%)] selection:text-[hsl(25_20%_8%)]">
      <Header />
      <main>
        <Reveal><Hero /></Reveal>
        <Reveal><SocialProof /></Reveal>
        
        <TickerInterstitial />
        
        <Reveal><ConceptSection /></Reveal>
        
        <WatermarkStatementInterstitial />
        
        <Reveal><ServicesSection /></Reveal>
        <Reveal><CalculatorSection /></Reveal>
        
        <LabeledHairlineInterstitial label="СТАНДАРТИ ОБСЛУГОВУВАННЯ МЕРЕЖІ COWBOYS AND ANGELS" />
        
        <Reveal><CraftsmanshipSection /></Reveal>
        <Reveal><BeforeAfterSection /></Reveal>
        <Reveal><GallerySection /></Reveal>
        
        <PressRatingInterstitial />
        
        <Reveal><TeamSection /></Reveal>
        <Reveal><VideoShowcase /></Reveal>
        <Reveal><ShopSection /></Reveal>
        <Reveal><FaqSection /></Reveal>
        
        <LabeledHairlineInterstitial label="ОНЛАЙН-БРОНЮВАННЯ ТА ЛОКАЦІЇ" />
        
        <Reveal><BookingContactSection /></Reveal>
      </main>
      <Footer />
    </div>
  );
}

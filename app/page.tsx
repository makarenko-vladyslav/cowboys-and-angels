import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Locations from "@/components/Locations";
import Services from "@/components/Services";
import PriceCalculator from "@/components/PriceCalculator";
import WhyUs from "@/components/WhyUs";
import RitualProcess from "@/components/RitualProcess";
import ShopShowcase from "@/components/ShopShowcase";
import Gallery from "@/components/Gallery";
import VideoSection from "@/components/VideoSection";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { MarqueeTicker, LabeledHairline, StatementBand } from "@/components/Interstitials";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        
        <MarqueeTicker />
        
        <Locations />
        
        <LabeledHairline label="TRONDHEIM · SOLSIDEN & MOHOLT · EST 2018" />
        
        <Services />
        <PriceCalculator />
        
        <StatementBand
          text="ВІЗИТ У COWBOYS & ANGELS — ЦЕ НЕ ПРОСТО СТРИЖКА, ЦЕ ЧІТКИЙ РИТУАЛ ТА ПОВАГА ДО ВАШОГО ЧАСУ"
          sub="SOLSIDEN STUDIO & MOHOLT CAMPUS"
        />
        
        <WhyUs />
        <RitualProcess />
        
        <MarqueeTicker text="L'ANZA KERATIN · KEUNE CARE · BEARDBURYS · TRADITIONAL SHAVE · FOILAGE · BALAYAGE · " />
        
        <ShopShowcase />
        <Gallery />
        <VideoSection />
        <Team />
        
        <LabeledHairline label="ОЦІНКА 4.6 НА GOOGLE MAPS · ПОНАД 100 РЕАЛЬНИХ ВІДГУКІВ" />
        
        <Testimonials />
        <Faq />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

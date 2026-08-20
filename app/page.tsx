import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import LocationSplit from "@/components/LocationSplit";
import PriceMenu from "@/components/PriceMenu";
import Calculator from "@/components/Calculator";
import CraftAdvantages from "@/components/CraftAdvantages";
import VideoShowcase from "@/components/VideoShowcase";
import GalleryMasonry from "@/components/GalleryMasonry";
import ProductShop from "@/components/ProductShop";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import FaqAccordion from "@/components/FaqAccordion";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { RatingStrip, LabeledHairline, WatermarkBanner } from "@/components/Interstitials";

export default function Home() {
  return (
    <div className="bg-dark-bg min-h-screen text-text-light font-body">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <LocationSplit />
        
        <LabeledHairline labelKey="interstitials.services_label" fallback="TJENESTER & PRISER" />
        <PriceMenu />
        
        <Calculator />
        <RatingStrip />
        
        <CraftAdvantages />
        <VideoShowcase />
        
        <WatermarkBanner textKey="interstitials.craft_banner" fallback="HÅNDVERK · STIL · PRESISJON" />
        <GalleryMasonry />
        
        <ProductShop />
        <LabeledHairline labelKey="interstitials.team_label" fallback="MØT VÅRT TEAM" />
        <TeamSection />
        
        <Testimonials />
        <FaqAccordion />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

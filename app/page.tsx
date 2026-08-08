import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TickerStrip from "@/components/TickerStrip";
import DualConcept from "@/components/DualConcept";
import ServicesMenu from "@/components/ServicesMenu";
import PriceCalculator from "@/components/PriceCalculator";
import CraftShowcase from "@/components/CraftShowcase";
import Gallery from "@/components/Gallery";
import ProductsShop from "@/components/ProductsShop";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import BookingForm from "@/components/BookingForm";
import LocationsMap from "@/components/LocationsMap";
import Footer from "@/components/Footer";
import { LabeledHairline, StatementBand, RatingStrip } from "@/components/Interstitials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero */}
        <Hero />
        
        {/* Interstitial 1: Ticker Strip */}
        <TickerStrip />

        {/* Section 2: Dual Concept (Dark) */}
        <DualConcept />

        {/* Interstitial 2: Labeled Hairline */}
        <LabeledHairline label="TRONDHEIM BARBERSHOP & FRISØRSALONG · SOLSIDEN & MOHOLT" />

        {/* Section 3: Services Menu (Primary Light) */}
        <ServicesMenu />

        {/* Interstitial 3: Statement Band */}
        <StatementBand statement="INGEN REGISTRERING · DIREKTE TIMEBESTILLING PÅ 30 SEKUNDER" />

        {/* Section 4: Price Calculator (Dark) */}
        <PriceCalculator />

        {/* Section 5: Craft Showcase (Primary Light) */}
        <CraftShowcase />

        {/* Interstitial 4: Rating Strip */}
        <RatingStrip ratingText="GOOGLE VURDERING · BASERT PÅ 420+ ANMELDELSER FRA TRONDHEIM" />

        {/* Section 6: Gallery (Dark) */}
        <Gallery />

        {/* Section 7: Products Shop (Primary Light) */}
        <ProductsShop />

        {/* Section 8: Team Section (Dark) */}
        <TeamSection />

        {/* Section 9: FAQ Section (Primary Light) */}
        <FAQSection />

        {/* Section 10: Booking Form (Dark) */}
        <BookingForm />

        {/* Section 11: Locations Map (Primary Light) */}
        <LocationsMap />
      </main>
      
      {/* Footer (Dark) */}
      <Footer />
    </>
  );
}

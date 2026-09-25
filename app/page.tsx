import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import PriceList from "@/components/PriceList";
import Calculator from "@/components/Calculator";
import CraftPhilosophy from "@/components/CraftPhilosophy";
import VideoShowcase from "@/components/VideoShowcase";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Locations from "@/components/Locations";
import FAQ from "@/components/FAQ";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/motion";
import {
  StatementStrip,
  LabeledHairline,
  WatermarkStrip,
} from "@/components/Interstitials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero with Looping Video Stack & Direct Phone */}
        <Reveal>
          <Hero />
        </Reveal>

        {/* Section 2: Social Proof & Verfied Customer Quote Strip */}
        <Reveal>
          <SocialProof />
        </Reveal>

        {/* Interstitial 1: Labeled Hairline */}
        <LabeledHairline label="SPESIALISTER PÅ HERREKLIPP · SKJEGGTRIM · FOILAGE & BALAYAGE" />

        {/* Section 3: Core Services with Real Photos */}
        <Reveal>
          <Services />
        </Reveal>

        {/* Section 4: Signature Packages */}
        <Reveal>
          <Packages />
        </Reveal>

        {/* Interstitial 2: Standalone Statement Band */}
        <StatementStrip
          quote="«Skjegg og hår handler om millimeter. En god klipp gjenkjennes på hvordan den ser ut tre uker etterpå.»"
          source="FAGSTANDARD · SOLSIDEN & MOHOLT"
        />

        {/* Section 5: Official Price List with Leader Lines */}
        <Reveal>
          <PriceList />
        </Reveal>

        {/* Section 6: Interactive Estimate Calculator */}
        <Reveal>
          <Calculator />
        </Reveal>

        {/* Interstitial 3: Low-contrast Watermark Strip */}
        <WatermarkStrip word="KNIVBARBERING · SOLSIDEN · MOHOLT · FOILAGE · BALAYAGE" />

        {/* Section 7: Craft Philosophy & 2-Photo Cluster */}
        <Reveal>
          <CraftPhilosophy />
        </Reveal>

        {/* Section 8: Traditional Barbering Video Showcase */}
        <Reveal>
          <VideoShowcase />
        </Reveal>

        {/* Section 9: Real Client Work Gallery with Lightbox */}
        <Reveal>
          <Gallery />
        </Reveal>

        {/* Section 10: Real 10-person Staff Team */}
        <Reveal>
          <Team />
        </Reveal>

        {/* Section 11: Two Trondheim Locations (Solsiden & Moholt) */}
        <Reveal>
          <Locations />
        </Reveal>

        {/* Section 12: Professional FAQ with Advice */}
        <Reveal>
          <FAQ />
        </Reveal>

        {/* Section 13: Invitation Booking Section with Hours Table */}
        <Reveal>
          <BookingSection />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}

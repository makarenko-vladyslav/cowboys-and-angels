import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import Locations from "@/components/Locations";
import CraftMethod from "@/components/CraftMethod";
import Gallery from "@/components/Gallery";
import BeforeAfter from "@/components/BeforeAfter";
import Team from "@/components/Team";
import ProShop from "@/components/ProShop";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookingContact from "@/components/BookingContact";
import Footer from "@/components/Footer";
import {
  TickerInterstitial,
  WatermarkInterstitial,
  StatementInterstitial,
  RatingInterstitial
} from "@/components/Interstitials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <TickerInterstitial />
        <Services />
        <WatermarkInterstitial word="FOILAGE & BARBERING" />
        <Calculator />
        <Locations />
        <StatementInterstitial statement="Kombinasjonen av klassisk barbershop-håndverk og moderne hårfargekjemi." />
        <CraftMethod />
        <Gallery />
        <RatingInterstitial />
        <BeforeAfter />
        <Team />
        <ProShop />
        <Testimonials />
        <FAQ />
        <BookingContact />
      </main>
      <Footer />
    </>
  );
}

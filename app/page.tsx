import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import UspBadges from "@/src/components/UspBadges";
import Packages from "@/src/components/Packages";
import MustTryMenu from "@/src/components/MustTryMenu";
import RentalPackages from "@/src/components/RentalPackages";
import BookingProcess from "@/src/components/BookingProcess";
import Clients from "@/src/components/Stats";
import ServiceAreas from "@/src/components/ServiceAreas";
import CtaBanner from "@/src/components/CtaBanner";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <UspBadges />
      <Packages />
      <MustTryMenu />
      <RentalPackages />
      <BookingProcess />
      <Clients />
      <ServiceAreas />
      <CtaBanner />
      <Footer />
    </main>
  );
}
import HeroSection from "./components/HeroSection";
import StatsStrip from "./components/StatsStrip";
import PhilosophySection from "./components/PhilosophySection";
import PillarsGrid from "./components/PillarsGrid";
import HowItWorksSection from "./components/HowItWorksSection";
import CollageSection from "./components/CollageSection";
import TestimonialSection from "./components/TestimonialSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsStrip />
      <PhilosophySection />
      <PillarsGrid />
      <HowItWorksSection />
      <CollageSection />
      <TestimonialSection />
    </main>
  );
}

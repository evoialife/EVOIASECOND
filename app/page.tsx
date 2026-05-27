import HeroSection from "./components/HeroSection";
import StatsStrip from "./components/StatsStrip";
import PhilosophySection from "./components/PhilosophySection";
import PillarsGrid from "./components/PillarsGrid";
import HowItWorksSection from "./components/HowItWorksSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsStrip />
      <PhilosophySection />
      <PillarsGrid />
      <HowItWorksSection />
    </main>
  );
}

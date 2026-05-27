import HeroSection from "./components/HeroSection";
import StatsStrip from "./components/StatsStrip";
import PhilosophySection from "./components/PhilosophySection";
import PillarsGrid from "./components/PillarsGrid";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsStrip />
      <PhilosophySection />
      <PillarsGrid />
    </main>
  );
}

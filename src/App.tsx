import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import PillNav from "./components/PillNav";
import SelectedWork from "./components/SelectedWork";
import ExperienceSection from "./components/ExperienceSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function App(): JSX.Element {
  return (
    <div className="dot-grid relative min-h-screen bg-ink text-cream">
      <TopBar />
      <Hero />
      <main>
        <SelectedWork />
        <ExperienceSection />
        <AboutSection />
      </main>
      <Footer />
      <PillNav />
    </div>
  );
}

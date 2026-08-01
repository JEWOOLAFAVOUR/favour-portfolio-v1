import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <Hero />
    </div>
  );
}

import About from "./components/About";
import FloatingContact from "./components/FloatingContact";
import Hero from "./components/Hero";
import Shows from "./components/Shows";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="divider-gradient" aria-hidden="true" />
      <About />
      <div className="divider-gradient mx-auto max-w-3xl" aria-hidden="true" />
      <Shows />
      <FloatingContact />
    </main>
  );
}

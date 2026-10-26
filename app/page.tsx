import About from "./components/About";
import FloatingContact from "./components/FloatingContact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Shows from "./components/Shows";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <div className="divider-gradient mx-auto max-w-3xl" aria-hidden="true" />
        <Shows />
      </main>
      <FloatingContact />
    </>
  );
}

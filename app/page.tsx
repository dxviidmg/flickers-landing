import About from "./components/About";
import FloatingContact from "./components/FloatingContact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Shows from "./components/Shows";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="divider-gradient" aria-hidden="true" />
        <About />
        <div className="divider-gradient mx-auto max-w-3xl" aria-hidden="true" />
        <Shows />
      </main>
      <FloatingContact />
    </>
  );
}

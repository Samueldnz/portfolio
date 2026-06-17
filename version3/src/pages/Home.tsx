import { Navbar } from "../sections/Navbar/Navbar";
import { Hero } from "../sections/Hero/Hero";
import { Experience } from "../sections/Experience/Experience";
import { Expenses } from "../sections/Expenses/Expenses";
import { Footer } from "../sections/Footer/Footer";

export function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* SOBRE */}

        <Experience />

        {/* GASTOS */}

        <Expenses />

        {/* CONTATO */}

        <Footer />
      </main>
    </>
  );
}
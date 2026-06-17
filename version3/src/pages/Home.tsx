import { Navbar } from "../sections/Navbar/Navbar";
import { Hero } from "../sections/Hero/Hero";
import { Experience } from "../sections/Experience/Experience";
import { Expenses } from "../sections/Expenses/Expenses";

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

        <section
          id="contato"
          className="
            min-h-screen
            flex
            items-center
            justify-center
            px-6
          "
        >
          <div
            className="
              max-w-4xl
              mx-auto
              text-center
            "
          >
            <h2
              className="
                text-4xl
                font-bold
                mb-6
              "
            >
              Contato
            </h2>

            <p
              className="
                text-[var(--color-muted)]
                text-lg
              "
            >
              Placeholder para contato.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
import { Navbar } from "../sections/Navbar/Navbar";

export function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}

        <section
          id="inicio"
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
            <span className="pill mb-4">
              República Tcheca 🇨🇿
            </span>

            <h1
              className="
                mt-4
                text-5xl
                md:text-7xl
                font-black
                tracking-tight
                text-[var(--color-text)]
              "
            >
              Samuca Europa 2026
            </h1>

            <p
              className="
                mt-6
                max-w-2xl
                mx-auto
                text-lg
                md:text-xl
                text-[var(--color-muted)]
              "
            >
              Acompanhando minha jornada de intercâmbio,
              pesquisas acadêmicas e experiências pela Europa.
            </p>

            <div
              className="
                mt-10
                flex
                flex-wrap
                justify-center
                gap-4
              "
            >
              <a
                href="#sobre"
                className="btn-primary"
              >
                Conhecer a Jornada
              </a>

              <a
                href="#gastos"
                className="btn-outline"
              >
                Ver Gastos
              </a>
            </div>
          </div>
        </section>

        {/* SOBRE */}

        <section
          id="sobre"
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
              Sobre
            </h2>

            <p
              className="
                text-[var(--color-muted)]
                text-lg
              "
            >
              Placeholder para a seção Sobre.
            </p>
          </div>
        </section>

        {/* GASTOS */}

        <section
          id="gastos"
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
              Gastos
            </h2>

            <p
              className="
                text-[var(--color-muted)]
                text-lg
              "
            >
              Placeholder para a seção de gastos.
            </p>
          </div>
        </section>

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
import { motion } from "framer-motion";

import { ExperienceCard } from "../../components/ExperienceCard";

import { experienceData } from "../../data/experience";

export function Experience() {
  return (
    <section
      id="sobre"
      className="
        py-24
        px-6
      "
    >
      <div
        className="
          max-w-[1100px]
          mx-auto
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            text-center
            mb-16
          "
        >
          <span className="pill">
            Europa 2026
          </span>

          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-black
            "
          >
            {experienceData.title}
          </h2>

          <p
            className="
              mt-6
              max-w-3xl
              mx-auto
              text-lg
              text-[var(--color-muted)]
            "
          >
            {experienceData.subtitle}
          </p>
        </motion.div>

        {/* ROADMAP */}

        <div
          className="
            hidden
            lg:flex

            items-center
            justify-center

            gap-6

            mb-12
          "
        >
          <div className="pill">
            🇨🇿 Czech Republic
          </div>

          <div
            className="
              h-[2px]
              w-24
              bg-[var(--color-accent-cyan)]
            "
          />

          <div className="pill">
            🇮🇹 Italy
          </div>
        </div>

        <div
          className="
            grid
            lg:grid-cols-2
            gap-8
          "
        >
          {experienceData.items.map(
            (item) => (
              <ExperienceCard
                key={item.institution}
                {...item}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
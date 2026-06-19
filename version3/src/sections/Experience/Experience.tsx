import { motion } from "framer-motion";

import { useLanguage } from "../../hooks/useLanguage";

import { ExperienceCard } from "../../components/ExperienceCard";

import { experienceData } from "../../data/experience";

export function Experience() {

  const { t } = useLanguage();

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
            mb-12
          "
        >
          <span className="pill">
            {t.experience.eyebrow}
          </span>

          <h2
            className="
              mt-4
              text-3xl
              md:text-4xl
              xl:text-5xl
              font-[600]
              font-playfair
              tracking-tight
            "
          >
            {t.experience.title}
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
            {t.experience.subtitle}
          </p>
        </motion.div>

        <div
          className="
            grid
            lg:grid-cols-2
            gap-8
          "
        >
          {experienceData.map((item) => (
            <ExperienceCard
              key={item.id}
              institution={
                t.experience.institutions[item.id]
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
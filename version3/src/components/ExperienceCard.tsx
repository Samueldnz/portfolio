import { motion } from "framer-motion";

interface ExperienceInstitution {
  tag: string;
  title: string;
  highlight: string;
  topics: readonly string[];
}

interface ExperienceCardProps {
  country: string;
  institution: ExperienceInstitution;
}

export function ExperienceCard({
  country,
  institution,
}: ExperienceCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        relative

        bg-[var(--color-paper)]
        rounded-3xl

        p-6

        shadow-lg
        border
        border-black/5

        dark:border-white/5
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          mb-5
        "
      >
        <span
          className="
            pill
          "
        >
          {institution.tag}
        </span>

        <span
          className="
            text-sm
            font-medium
            text-[var(--color-muted)]
          "
        >
          {country}
        </span>
      </div>

      <h3
        className="
          text-2xl
          font-bold
          mb-3
        "
      >
        {institution.title}
      </h3>

      <p
        className="
          text-[var(--color-muted)]
          mb-6
        "
      >
        {institution.highlight}
      </p>

      <ul className="space-y-2">
        {institution.topics.map((topic) => (
          <li
            key={topic}
            className="
              flex
              items-start
              gap-2
            "
          >
            <span
              className="
                mt-2
                h-2
                w-2
                rounded-full
                bg-[var(--color-accent-cyan)]
              "
            />

            <span>{topic}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
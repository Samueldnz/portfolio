import { motion } from "framer-motion";

interface ExperienceCardProps {
  country: string;
  tag: string;
  institution: string;
  description: string;
  skills: string[];
}

export function ExperienceCard({
  country,
  tag,
  institution,
  description,
  skills,
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
          {tag}
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
        {institution}
      </h3>

      <p
        className="
          text-[var(--color-muted)]
          mb-6
        "
      >
        {description}
      </p>

      <ul className="space-y-2">
        {skills.map((skill) => (
          <li
            key={skill}
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

            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
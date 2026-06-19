import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";

interface ExperienceInstitution {
  country: string;
  flag: string;

  journeyTitle: string;

  institution: string;

  highlight: string;

  period: string;

  startDate: string;
  endDate: string;

  topics: readonly string[];
}

interface ExperienceCardProps {
  institution: ExperienceInstitution;
}

export function ExperienceCard({
  institution,
}: ExperienceCardProps) {
  const { t } = useLanguage();

  const now = new Date();

  const startDate = new Date(
    institution.startDate
  );

  const endDate = new Date(
    institution.endDate
  );

  const status =
    now < startDate
      ? "preparing"
      : now > endDate
        ? "completed"
        : "active";
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
      <div className="mb-5">
        <div
          className="
            flex
            items-center
            gap-2
            mb-2
          "
        >
          <span className="text-xl">
            {institution.flag}
          </span>

          <span
            className="
              text-sm
              uppercase
              tracking-wider
              font-semibold
              text-[var(--color-muted)]
            "
          >
            {institution.country}
          </span>
        </div>

        <p
          className="
            text-sm
            font-semibold
            text-[var(--color-accent-blue)]
          "
        >
          {institution.journeyTitle}
        </p>
      </div>

      <h3
        className="
          text-2xl
          font-bold
          mb-3
        "
      >
        {institution.institution}
      </h3>

      <p
        className="
          text-[var(--color-muted)]
          mb-6
        "
      >
        {institution.highlight}
      </p>

      <h4
        className="
          mb-3
          text-sm
          uppercase
          tracking-wide
          font-semibold
          text-[var(--color-muted)]
        "
      >
        {t.experience.focusAreas}
      </h4>

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
                text-[var(--color-accent-blue)]
                font-bold
              "
            >
              →
            </span>

            <span>{topic}</span>
          </li>
        ))}
      </ul>
      <div
        className="
          mt-6
          pt-4

          border-t
          border-black/5

          dark:border-white/10

          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-sm
            text-[var(--color-muted)]
          "
        >
          {institution.period}
        </span>

        <span
          className={`
            px-3
            py-1

            rounded-full

            text-xs
            font-semibold

            ${
              status === "completed"
                ? "bg-emerald-500/10 text-emerald-600"
                : status === "active"
                  ? "bg-blue-500/10 text-blue-600"
                  : "bg-amber-500/10 text-amber-600"
            }
          `}
        >
          {
            status === "completed"
              ? `✓ ${t.experience.status.completed}`
              : status === "active"
                ? `● ${t.experience.status.active}`
                : `◌ ${t.experience.status.preparing}`
          }
        </span>
      </div>
    </motion.article>
  );
}
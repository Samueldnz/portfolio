import { motion } from "framer-motion";

import { formatCurrency } from "../utils/currency";
import { useLanguage } from "../hooks/useLanguage";

interface ExpenseCardProps {
  titleKey: string;
  paid: number;
  total: number;
  featured?: boolean;
}

export function ExpenseCard({
  titleKey,
  paid,
  total,
  featured = false,
}: ExpenseCardProps) {
  const { t } = useLanguage();
  const percentage =
    total > 0
      ? (paid / total) * 100
      : 0;

  const completed =
    paid >= total;

  return (
    <motion.article
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        bg-[var(--color-paper)]
        rounded-3xl
        p-6
        shadow-lg

        ${
          featured
            ? "lg:col-span-2"
            : ""
        }
      `}
    >
      <div
        className="
          flex
          items-start
          justify-between
          gap-4
        "
      >
        <h3
          className="
            text-lg
            font-bold
          "
        >
          {
            t.expenses.categories[
              titleKey as keyof typeof t.expenses.categories
            ]
          }
        </h3>

        {completed && (
          <span className="pill">
            {t.expenses.completed}
          </span>
        )}
      </div>

      <div
        className="
          mt-4
          text-lg
          font-semibold
        "
      >
        {formatCurrency(paid)}

        <span
          className="
            mx-2
            text-[var(--color-muted)]
          "
        >
          /
        </span>

        {formatCurrency(total)}
      </div>

      <div
        className="
          mt-4
          h-3
          rounded-full
          overflow-hidden

          bg-black/5
          dark:bg-white/10
        "
      >
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: `${percentage}%`,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            h-full
            rounded-full

            bg-gradient-to-r
            from-[var(--color-accent-blue)]
            to-[var(--color-blue-dark)]
          "
        />
      </div>

      <p
        className="
          mt-3
          text-sm
          text-[var(--color-muted)]
        "
      >
        {percentage.toFixed(0)}% {t.expenses.financed}
      </p>
    </motion.article>
  );
}
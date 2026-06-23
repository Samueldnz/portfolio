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
}: ExpenseCardProps) {
  const { t } = useLanguage();
  const percentage =
    total > 0
      ? (paid / total) * 100
      : 0;

  const inProgress =
    paid > 0 && paid < total;

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
            font-[600]
          "
        >
          {
            t.expenses.categories[
              titleKey as keyof typeof t.expenses.categories
            ]
          }
        </h3>

        <span
          className={`
            px-3
            py-1

            rounded-full

            text-xs
            font-semibold

            ${
              completed
                ? "bg-emerald-500/10 text-emerald-600"
                : inProgress
                  ? "bg-blue-500/10 text-blue-600"
                  : "bg-amber-500/10 text-amber-600"
            }
          `}
        >
          {
            completed
              ? `✓ ${t.expenses.status.completed}`
              : inProgress
                ? `◐ ${t.expenses.status.inProgress}`
                : `○ ${t.expenses.status.awaiting}`
          }
        </span>
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
          className={`
            h-full
            rounded-full

            ${
              completed
                ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                : inProgress
                  ? "bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-blue-dark)]"
                  : "bg-amber-500"
            }

            
          `}
        />
      </div>

      <p
        className="
          mt-3
          text-sm
          text-[var(--color-muted)]
        "
      >
        {
          completed
            ? `100% ${t.expenses.financed}`
            : inProgress
              ? `${percentage.toFixed(0)}% ${t.expenses.financed}`
              : t.expenses.status.awaiting
        }
      </p>
    </motion.article>
  );
}
import { motion } from "framer-motion";

import { formatCurrency } from "../utils/currency";
import { useLanguage } from "../hooks/useLanguage";

interface CampaignProgressProps {
  totalPaid: number;
  totalGoal: number;
}

export function CampaignProgress({
  totalPaid,
  totalGoal,
}: CampaignProgressProps) {
  const { t } = useLanguage();

  const percentage =
    totalGoal > 0
      ? (totalPaid / totalGoal) * 100
      : 0;

  const completed =
    totalPaid >= totalGoal;

  const inProgress =
    totalPaid > 0 &&
    totalPaid < totalGoal;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className="
        bg-[var(--color-paper)]
        rounded-3xl
        p-8
        shadow-lg
      "
    >
      <div>
        <div
          className="
            flex
            items-center
            justify-between
            gap-4
            flex-wrap
          "
        >
          <span className="pill">
            {t.expenses.roadmap}
          </span>

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

        <h2
          className="
            mt-6
            text-3xl
            md:text-4xl

            font-[600]
            font-playfair
            tracking-tight
          "
        >
          {t.expenses.title}
        </h2>
      </div>

      <div
        className="
          mt-8
          text-xl
          font-semibold
        "
      >
        {formatCurrency(totalPaid)}

        <span
          className="
            mx-2
            text-[var(--color-muted)]
          "
        >
          /
        </span>

        {formatCurrency(totalGoal)}
      </div>

      <div
        className="
          mt-4
          h-4
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
            duration: 1,
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
          font-medium
          text-[var(--color-muted)]
        "
      >
        {percentage.toFixed(0)}% {t.expenses.financed}
      </p>
    </motion.div>
  );
}
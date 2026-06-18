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
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <span className="pill">
            {t.expenses.roadmap}
          </span>

          <h2
            className="
              mt-4
              text-3xl
              md:text-4xl
              font-black
            "
          >
            {t.expenses.title}
          </h2>
        </div>

        <div className="text-right">
          <p
            className="
              text-sm
              text-[var(--color-muted)]
            "
          >
            {t.expenses.totalPlanned}
          </p>

          <p
            className="
              text-xl
              font-bold
            "
          >
            {formatCurrency(totalGoal)}
          </p>
        </div>
      </div>

      <div
        className="
          mt-8
          text-2xl
          font-bold
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
            from-emerald-500
            to-green-600
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
        {percentage.toFixed(0)}% {t.expenses.funded}
      </p>
    </motion.div>
  );
}
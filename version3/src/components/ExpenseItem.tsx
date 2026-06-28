import { CalendarClock, BadgeDollarSign } from "lucide-react";

import { useLanguage } from "../hooks/useLanguage";
import { formatCurrency } from "../utils/currency";

interface ExpenseItemProps {
  titleKey: string;
  value: number;
  installment: string;
  date: string;
  status: "paid" | "planned";
}

export function ExpenseItem({
  titleKey,
  value,
  installment,
  date,
  status,
}: ExpenseItemProps) {
  const { t } = useLanguage();

  const paid = status === "paid";

  return (
    <div
      className="
        relative

        ml-8

        rounded-2xl

        border
        border-black/5
        dark:border-white/5

        bg-[var(--color-paper)]

        p-5
      "
    >
      {/* Timeline Dot */}

      <div
        className={`
          absolute

          -left-6
          top-6

          h-4
          w-4

          rounded-full

          border-4

          ${
            paid
              ? "bg-emerald-500 border-emerald-100"
              : "bg-[var(--color-accent-blue)] border-blue-100"
          }
        `}
      />

      {/* Header */}

      <div
        className="
          flex
          items-start
          justify-between
          gap-4
        "
      >
        <div>
          <h4
            className="
              text-xl
              md:text-lg

              font-semibold
              md:font-medium

              tracking-tight
            "
          >
            {
              t.expenses.items[
                titleKey as keyof typeof t.expenses.items
              ]
            }
          </h4>

          <p
            className="
              mt-1
              text-sm
              md:text-xs
              text-[var(--color-muted)]
            "
          >
            {t.expenses.installment} {installment}
          </p>
        </div>

        {/* Mobile Status */}

        <span
          className={`
            md:hidden

            shrink-0

            px-3
            py-1

            rounded-full

            text-xs
            font-semibold

            ${
              paid
                ? "bg-emerald-500/10 text-emerald-600"
                : "bg-blue-500/10 text-blue-600"
            }
          `}
        >
          {paid
            ? t.expenses.timeline.paid
            : t.expenses.timeline.planned}
        </span>
      </div>

      {/* Mobile Layout */}

      {/* Mobile Layout */}

      <div
        className="
          mt-5

          flex
          md:hidden

          flex-col

          rounded-2xl

          border
          border-black/5
          dark:border-white/8

          bg-black/[0.02]
          dark:bg-white/[0.03]

          overflow-hidden
        "
      >
        {/* Value */}

        <div
          className="
            flex
            items-center
            gap-4

            px-4
            py-4
          "
        >
          <div
            className="
              flex
              items-center
              justify-center

              w-10
              h-10

              rounded-full

              bg-[var(--color-accent-blue)]/10

              shrink-0
            "
          >
            <BadgeDollarSign
              size={18}
              className="text-[var(--color-accent-blue)]"
            />
          </div>

          <div className="min-w-0">
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.18em]

                text-[var(--color-muted)]
              "
            >
              {t.expenses.value}
            </p>

            <p
              className="
                mt-1

                text-xl
                font-semibold
                tracking-tight
              "
            >
              {formatCurrency(value)}
            </p>
          </div>
        </div>

        <div
          className="
            h-px

            bg-black/5
            dark:bg-white/8
          "
        />

        {/* Due Date */}

        <div
          className="
            flex
            items-center
            gap-4

            px-4
            py-4
          "
        >
          <div
            className="
              flex
              items-center
              justify-center

              w-10
              h-10

              rounded-full

              bg-[var(--color-accent-blue)]/10

              shrink-0
            "
          >
            <CalendarClock
              size={18}
              className="text-[var(--color-accent-blue)]"
            />
          </div>

          <div>
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.18em]

                text-[var(--color-muted)]
              "
            >
              {t.expenses.duedata}
            </p>

            <p
              className="
                mt-1

                text-lg
                font-medium
              "
            >
              {date}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}

      <div
        className="
          hidden
          md:grid

          mt-5

          grid-cols-[1fr_auto]

          items-center
        "
      >
        <div>
          <p
            className="
              text-xl
              font-medium
              tracking-tight
            "
          >
            {formatCurrency(value)}
          </p>

          <p
            className="
              text-xs
              tracking-wide
              text-[var(--color-muted)]
            "
          >
            {date}
          </p>
        </div>

        <div className="flex justify-end">
          <span
            className={`
              px-3
              py-1

              rounded-full

              text-xs
              font-semibold

              ${
                paid
                  ? "bg-emerald-500/10 text-emerald-600"
                  : "bg-blue-500/10 text-blue-600"
              }
            `}
          >
            {paid
              ? t.expenses.timeline.paid
              : t.expenses.timeline.planned}
          </span>
        </div>
      </div>
    </div>
  );
}
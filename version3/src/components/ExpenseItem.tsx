import { formatCurrency } from "../utils/currency";

import { useLanguage } from "../hooks/useLanguage";

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

        grid
        grid-cols-[1fr_1fr_1fr]

        items-center

        gap-6

        p-5

        rounded-2xl

        bg-[var(--color-paper)]

        border
        border-black/5

        dark:border-white/5
      "
    >
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
      <div>
        <h4 className="font-semibold">
          {
            t.expenses.items[
              titleKey as keyof typeof t.expenses.items
            ]
          }
        </h4>

        <p
          className="
            text-sm
            text-[var(--color-muted)]
          "
        >
          {t.expenses.installment} {installment}
        </p>
      </div>

      <div 
        className="
          text-center">
        <p
          className="
            text-lg
            font-[500]
          "
        >
          {formatCurrency(value)}
        </p>

        <p
          className="
            text-xs
            text-[var(--color-muted)]
          "
        >
          {date}
        </p>
      </div>

      <div
        className="
          flex
          justify-end
        "
      >
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
          {
            paid
              ? t.expenses.timeline.paid
              : t.expenses.timeline.planned
          }
        </span>
      </div>
    </div>
  );
}
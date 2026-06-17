import { formatCurrency } from "../utils/currency";

interface ExpenseItemProps {
  title: string;
  value: number;
  installment: string;
  date: string;
  status: string;
}

export function ExpenseItem({
  title,
  value,
  installment,
  date,
  status,
}: ExpenseItemProps) {
  const paid = status === "paid";

  return (
    <div
      className="
        flex
        items-center
        justify-between
        gap-4

        p-4

        rounded-2xl

        bg-[var(--color-paper)]

        border
        border-black/5

        dark:border-white/5
      "
    >
      <div>
        <h4 className="font-semibold">
          {title}
        </h4>

        <p
          className="
            text-sm
            text-[var(--color-muted)]
          "
        >
          Parcela {installment}
        </p>
      </div>

      <div className="text-right">
        <p className="font-semibold">
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
        {paid ? "Pago" : "Planejado"}
      </span>
    </div>
  );
}
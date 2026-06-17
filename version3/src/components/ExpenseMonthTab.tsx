interface ExpenseMonthTabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export function ExpenseMonthTab({
  label,
  active,
  onClick,
}: ExpenseMonthTabProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4
        py-2

        rounded-xl

        whitespace-nowrap

        transition-all

        ${
          active
            ? "bg-[var(--color-accent-blue)] text-white"
            : "bg-[var(--color-paper)]"
        }
      `}
    >
      {label}
    </button>
  );
}
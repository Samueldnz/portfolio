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

        rounded-full

        whitespace-nowrap

        transition-all

        ${
          active
          ? `
              bg-[var(--color-accent-blue)]/10
              text-[var(--color-accent-blue)]
              border
              border-[var(--color-accent-blue)]/20
            `
          : `
              bg-[var(--color-paper)]
              text-[var(--color-muted)]
              border
              border-transparent
            `
        }
      `}
    >
      {label}
    </button>
  );
}
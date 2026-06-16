import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({
  isDark,
  onToggle,
}: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label="Alterar tema"
      className="
        h-11
        w-11
        rounded-full
        flex
        items-center
        justify-center

        bg-[var(--color-paper)]
        text-[var(--color-text)]

        shadow-lg

        transition-all
        hover:scale-105
      "
    >
      {isDark ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}
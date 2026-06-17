interface LanguageToggleProps {
  language: "pt" | "en";
  onChange: (lang: "pt" | "en") => void;
}

export function LanguageToggle({
  language,
  onChange,
}: LanguageToggleProps) {
  return (
    <div
      className="
        flex
        items-center

        rounded-full

        bg-[var(--color-paper)]

        p-1

        shadow-md
      "
    >
      <button
        onClick={() => onChange("pt")}
        className={`
          px-3
          py-1

          rounded-full

          text-sm
          font-semibold

          transition-all

          ${
            language === "pt"
              ? "bg-[var(--color-accent-blue)] text-white"
              : ""
          }
        `}
      >
        PT
      </button>

      <button
        onClick={() => onChange("en")}
        className={`
          px-3
          py-1

          rounded-full

          text-sm
          font-semibold

          transition-all

          ${
            language === "en"
              ? "bg-[var(--color-accent-blue)] text-white"
              : ""
          }
        `}
      >
        EN
      </button>
    </div>
  );
}
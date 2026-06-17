import type { ReactNode } from "react";

import {
  createContext,
  useEffect,
  useMemo,
  useState
} from "react";

import {
  locales,
  type Language,
  type Locale,
} from "../locales";

interface LanguageContextType {
  language: Language;

  setLanguage: (
    language: Language
  ) => void;

  toggleLanguage: () => void;

  t: Locale;
}

export const LanguageContext =
  createContext<
    LanguageContextType | undefined
  >(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguage] =
    useState<Language>("pt");

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "language"
      ) as Language | null;

    if (
      saved &&
      (saved === "pt" ||
        saved === "en")
    ) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (
    value: Language
  ) => {
    setLanguage(value);

    localStorage.setItem(
      "language",
      value
    );
  };

  const toggleLanguage = () => {
    handleSetLanguage(
      language === "pt"
        ? "en"
        : "pt"
    );
  };

  const value = useMemo(
    () => ({
      language,

      setLanguage:
        handleSetLanguage,

      toggleLanguage,

      t: locales[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider
      value={value}
    >
      {children}
    </LanguageContext.Provider>
  );
}
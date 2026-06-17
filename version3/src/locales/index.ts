import { pt } from "./pt";
import { en } from "./en";

export const locales = {
  pt,
  en,
};

export type Language =
  keyof typeof locales;

export type Locale =
  (typeof locales)[Language];
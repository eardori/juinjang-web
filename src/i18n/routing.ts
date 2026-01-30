import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["ko", "en"],

  // Used when no locale matches
  defaultLocale: "ko",

  // The prefix for the locale path
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import stringsEn from './locale/strings.en.json';
import stringsCy from './locale/strings.cy.json';
export type Locale = "en" | "cy";
export interface LocaleText {
  en: string;
  cy: string;
}
export const locales: Locale[] = ["en", "cy"];

const resources = {
  en: {
    translation: stringsEn
  },
  cy: {
    translation: stringsCy
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  supportedLngs: locales,
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});

export default i18n;

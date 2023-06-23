import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Locale } from "./init";

/**
 * A custom hook that simply retrieves the current locale
 */
export const useLocale = () => {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState<Locale>(i18n.resolvedLanguage as Locale);

  useEffect(() => {
    setLocale(i18n.resolvedLanguage as Locale);
  }, [i18n.resolvedLanguage]);

  return locale;
};

const defaultExport = {
  useLocale
};
export default defaultExport;

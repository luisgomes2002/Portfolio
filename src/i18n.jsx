import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import ptTranslation from "./locales/pt.json";
import jpTranslation from "./locales/jp.json";

i18n.use(initReactI18next).init({
  lng: "pt",
  fallbackLng: "en",
  resources: {
    pt: {
      translation: ptTranslation,
    },
    en: {
      translation: enTranslation,
    },
    jp: {
      translation: jpTranslation,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

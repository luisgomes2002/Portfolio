import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { i18nJson } from "./components/Portfolio";

i18n.use(initReactI18next).init({
  lng: "pt",
  fallbackLng: "en",
  resources: {
    pt: {
      translation: i18nJson.pt,
    },
    en: {
      translation: i18nJson.en,
    },
    jp: {
      translation: i18nJson.jp,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

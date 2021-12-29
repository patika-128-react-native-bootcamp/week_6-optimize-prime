import i18next from "i18next"
import english from "./english.json"
import deutsch from "./deutsch.json"
import spanish from "./spanish.json"
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: english,
    de: deutsch,
    es: spanish,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
    .use(HttpBackend)       // грузим переводы по HTTP
    .use(LanguageDetector)  // определяем язык
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        supportedLngs: ["en", "pt", "es"],
        debug: false,

        backend: {
        // путь к файлам локализации
        loadPath: "/locales/{{lng}}/{{ns}}.json"
        },

        interpolation: {
        escapeValue: false
        },

        detection: {
        order: ["localStorage", "navigator", "htmlTag"],
        caches: ["localStorage"]
        }
    });

export default i18n;

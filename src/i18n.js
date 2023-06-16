import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const translationsEn = { 
  about: "About", 
  homepage: "Home", 
  bannerTitleLeft: "At home,", 
  bannerTitleRight: "anywhere and everywhere", 
  credits:"© 2023 Kasa. All rights reserved", 
  facilities:"Facilities" 
};
const translationsFr = { 
  about: "A propos",
  homepage: "Accueil", 
  bannerTitleLeft: "Chez vous,", 
  bannerTitleRight: "partout et ailleurs", 
  credits:"© 2023 Kasa. Tous droits réservés", 
  facilities:"Équipements" 
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    lng: "en",
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: { translation: translationsEn },
      fr: { translation: translationsFr }
      }
    }
  );

  const { t } = useTranslation(); 

export default i18n;
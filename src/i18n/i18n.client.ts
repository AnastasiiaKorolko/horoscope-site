// src/i18n/i18n.client.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/common.json';
import uk from './locales/uk/common.json';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: en,
      },
      uk: {
        common: uk,
      },
    },
    lng: 'en', // за замовчуванням
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React вже сам обробляє екранування
    },
  });

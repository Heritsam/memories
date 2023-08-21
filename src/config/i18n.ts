import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en.json';
import id from '../locales/id.json';

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    id: {
      translation: id,
    },
  },
  lng: localStorage.getItem('locale') || 'id',
});

export default i18next;
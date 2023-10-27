import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import id from './locales/id.json';
import ja from './locales/ja.json';
import zh from './locales/zh.json';

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    id: {
      translation: id,
    },
    ja: {
      translation: ja,
    },
    zh: {
      translation: zh,
    }
  },
  lng: localStorage.getItem('locale') || 'id',
});

export default i18next;
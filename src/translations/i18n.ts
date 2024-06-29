import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';

import common_en from './en/common.json';
import common_de from './de/common.json';
import common_fr from './fr/common.json';
import common_it from './it/common.json';
import common_pt_br from './pt_br/common.json';
import common_ru from './ru/common.json';

i18n.use(initReactI18next).init({
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  resources: {
    tr: {
      common: common_en,
    },
    de: {
      common: common_de,
    },
    fr: {
      common: common_fr,
    },
    it: {
      common: common_it,
    },
    pt_br: {
      common: common_pt_br,
    },
    ru: {
      common: common_ru,
    },
  },
});

export default i18n;

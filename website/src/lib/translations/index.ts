import i18n from 'sveltekit-i18n';
import type { Config } from 'sveltekit-i18n';
import { dev } from '$app/environment';
import lang from './lang.json';

export const defaultLocale = 'sv';

export const config: Config = {
  log: {
    level: dev ? 'warn' : 'error'
  },
  translations: {
    en: { lang },
    sv: { lang }
  },
  loaders: [
    {
      locale: 'en',
      key: 'home',
      routes: ['', '/'],
      loader: async () => (await import('./locales/en/home.json')).default
    },
    {
      locale: 'sv',
      key: 'home',
      routes: ['', '/'],
      loader: async () => (await import('./locales/sv/home.json')).default
    }
  ]
};

export const {
  t,
  loading,
  locales,
  locale,
  translations,
  loadTranslations,
  addTranslations,
  setLocale,
  setRoute
} = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));

import i18n from 'sveltekit-i18n';
import type { Config } from 'sveltekit-i18n';
import { dev } from '$app/environment';
import lang from './lang.json';

export const defaultLocale = 'sv';

export const config: config = {
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
      key: 'navbar',
      loader: async () => (await import('./locales/en/navbar.json')).default
    },
    {
      locale: 'sv',
      key: 'navbar',
      loader: async () => (await import('./locales/sv/navbar.json')).default
    },
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
    },
    {
      locale: 'en',
      key: 'about',
      routes: ['/om-ekolivs-2'],
      loader: async () => (await import('./locales/en/about.json')).default
    },
    {
      locale: 'sv',
      key: 'about',
      routes: ['/om-ekolivs-2'],
      loader: async () => (await import('./locales/sv/about.json')).default
    },
    {
      locale: 'en',
      key: 'contact',
      routes: ['/kontakt'],
      loader: async () => (await import('./locales/en/contact.json')).default
    },
    {
      locale: 'sv',
      key: 'contact',
      routes: ['/kontakt'],
      loader: async () => (await import('./locales/sv/contact.json')).default
    },
    {
      locale: 'en',
      key: 'member',
      routes: ['/bli-medlem'],
      loader: async () => (await import('./locales/en/member.json')).default
    },
    {
      locale: 'sv',
      key: 'member',
      routes: ['/bli-medlem'],
      loader: async () => (await import('./locales/sv/member.json')).default
    },
    {
      locale: 'en',
      key: 'engage',
      routes: ['/engagera-dig'],
      loader: async () => (await import('./locales/en/engage.json')).default
    },
    {
      locale: 'sv',
      key: 'engage',
      routes: ['/engagera-dig'],
      loader: async () => (await import('./locales/sv/engage.json')).default
    },
    {
      locale: 'en',
      key: 'bylaws',
      routes: ['/stadgar'],
      loader: async () => (await import('./locales/en/bylaws.json')).default
    },
    {
      locale: 'sv',
      key: 'bylaws',
      routes: ['/stadgar'],
      loader: async () => (await import('./locales/sv/bylaws.json')).default
    },
    {
      locale: 'en',
      key: 'products',
      routes: ['/vara-varor-2'],
      loader: async () => (await import('./locales/en/products.json')).default
    },
    {
      locale: 'sv',
      key: 'products',
      routes: ['/vara-varor-2'],
      loader: async () => (await import('./locales/sv/products.json')).default
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

loading.subscribe(async ($loading) => {
  if ($loading) {
    console.log('Loading translations...');

    await loading.toPromise();
    console.log('Updated translations');
  }
});

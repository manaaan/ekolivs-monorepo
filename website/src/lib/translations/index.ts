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
      key: 'navigation',
      loader: async () => (await import('./locales/en/navigation.json')).default
    },
    {
      locale: 'sv',
      key: 'navigation',
      loader: async () => (await import('./locales/sv/navigation.json')).default
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
    },
    {
      locale: 'en',
      key: 'confirm-member',
      routes: ['/registrerat'],
      loader: async () => (await import('./locales/en/confirm-member.json')).default
    },
    {
      locale: 'sv',
      key: 'confirm-member',
      routes: ['/registrerat'],
      loader: async () => (await import('./locales/sv/confirm-member.json')).default
    },
    {
      locale: 'en',
      key: 'footer',
      loader: async () => (await import('./locales/en/footer.json')).default
    },
    {
      locale: 'sv',
      key: 'footer',
      loader: async () => (await import('./locales/sv/footer.json')).default
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
    await loading.toPromise();
  }
});

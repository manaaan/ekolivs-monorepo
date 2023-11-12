import { addTranslations, setLocale, setRoute } from '$lib/translations';
import type { Load } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').LayoutLoad} */
export const load: Load = async ({ data }) => {
  // @ts-expect-error response defined in +layout.server.ts
  const { i18n, translations } = data;
  const { lang, route } = i18n;

  addTranslations(translations);

  await setRoute(route);
  await setLocale(lang);

  return i18n;
};

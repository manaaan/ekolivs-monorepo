<script>
  import { Gallery } from 'flowbite-svelte';
  import { t, locale } from '$lib/translations';

  const images = [
    {
      alt: $t('about.gallery.img-1'),
      src: '/hitta-hit-1.webp'
    },
    { src: '/engagera-dig-1.jpg', alt: $t('about.gallery.img-2') }
  ];
</script>

<svelte-head>
  <title>{$t('about.title')}</title>
  <meta
    name="description"
    content={$t('about.meta.description')}
  />
  <meta name="robots" content="index, follow" />
</svelte-head>

<h3 class="text-3xl font-extrabold my-3">{$t('about.section.general.header')}</h3>

<p>
  {$t('about.section.general.p-1')}
</p>
<br />
<p>
  {$t('about.section.general.p-2')}
</p>
<br />
<ul class="list-disc list-inside">
  <li>
    <b>{$t('about.section.general.groups.buying.name')}</b> - {$t('about.section.general.groups.buying.desc')}
  </li>
  <li><b>{$t('about.section.general.groups.economy.name')}</b> - {$t('about.section.general.groups.economy.desc')}</li>
  <li>
    <b>{$t('about.section.general.groups.pr.name')}</b> - {$t('about.section.general.groups.pr.desc')}
  </li>
  <li><b>{$t('about.section.general.groups.store.name')}</b> - {$t('about.section.general.groups.store.desc')}</li>
</ul>
<br />
<p>
  {$t('about.section.general.p-3')}
</p>

<h3 class="text-3xl font-extrabold my-3">{$t('about.section.join.header')}</h3>

<p>
  {$t('about.section.join.p-1.intro')} <a
    href={`/${$locale}/engagera-dig`}
    class="text-primary-500 hover:text-primary-300"
    >{$t('about.section.join.p-1.link')}</a
  >{$t('about.section.join.p-1.end')}
</p>

<Gallery items={images} class="gap-4 grid-cols-2 md:grid-cols-3 mt-4" />

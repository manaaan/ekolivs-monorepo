<script>
  import { Img } from 'flowbite-svelte';
  import { t } from '$lib/translations';
</script>

<svelte-head>
  <title>{$t('contact.title')}</title>
  <meta name="description" content={$t('contact.meta.description')} />
  <meta name="robots" content="index, follow" />
</svelte-head>

<h3 class="text-3xl font-extrabold my-3">{$t('contact.section.wayfinding.header')}</h3>

<div class="grid grid-cols-1 gap-8 py-8 px-6 md:grid-cols-2">
  <div>
    <p>
      {$t('contact.section.wayfinding.p-1')}
      <a
        target="_blank"
        href="https://www.malmobybike.se/"
        class="text-primary-500 hover:text-primary-300">{$t('contact.section.wayfinding.p-1-link')}</a
      >.
    </p>
    <br />
    <p>
      <a
        target="_blank"
        href="https://goo.gl/maps/8ejzpE1XwZ72"
        class="text-primary-500 hover:text-primary-300"
        >{$t('contact.section.wayfinding.google-maps')}</a
      >
    </p>
    <p>
      <a
        target="_blank"
        href="https://www.openstreetmap.org/node/2266100147"
        class="text-primary-500 hover:text-primary-300">{$t('contact.section.wayfinding.osm')}</a
      >
    </p>
    <br />
    <p>{$t('contact.section.wayfinding.p-2')}</p>
  </div>
  <Img src="/butik-vinter.jpg" alt={$t('contact.section.wayfinding.bild')} imgClass="my-4 w-full" />
</div>

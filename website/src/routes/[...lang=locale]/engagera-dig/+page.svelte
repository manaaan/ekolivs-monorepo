<script>
  import { Card, Img } from 'flowbite-svelte';
  import { t, locale } from '$lib/translations';
</script>

<svelte-head>
  <title>{$t('engage.title')}</title>
  <meta
    name="description"
    content={$t('engage.meta.description')}
  />
  <meta name="robots" content="index, follow" />
</svelte-head>

<h3 class="text-3xl font-extrabold my-3">
  {$t('engage.section.intro.header')}
</h3>

<p>
  {$t('engage.section.intro.p-1')}
</p>

<h3 class="text-3xl font-extrabold my-3">{$t('engage.section.membership.header')}</h3>

<Card color="primary" class="max-w-xl mx-auto">
  <b>{$t('engage.section.membership.all.header')}</b>
  <ul class="list-disc list-inside space-y-1">
    <li>{$t('engage.section.membership.all.benefit-1')}</li>
    <li>
      {$t('engage.section.membership.all.benefit-2')}
    </li>
  </ul>
</Card>

<div class="grid grid-cols-2 gap-8 py-8">
  <Card color="primary" class="max-w-xl ml-auto">
    <b>{$t('engage.section.membership.active.header')}</b>
    <ul class="list-disc list-inside space-y-1">
      <li>{$t('engage.section.membership.active.benefit-1')}</li>
      <li>
        {$t('engage.section.membership.active.benefit-2')}
      </li>
    </ul>
  </Card>
  <Card color="blue" class="max-w-xl">
    <b>{$t('engage.section.membership.passive.header')}</b>
    <ul class="list-disc list-inside space-y-1">
      <li>{$t('engage.section.membership.passive.benefit-1')}</li>
    </ul>
  </Card>
</div>

<h4 class="text-2xl font-extrabold my-2">{$t('engage.section.join.header')}</h4>

<p>
  {$t('engage.section.join.interested.intro')} <a href={`/${$locale}/bli-medlem`} class="text-primary-500 hover:text-primary-300">{$t('engage.section.join.interested.link')}</a> {$t('engage.section.join.interested.end')}
</p>

<p>
  {$t('engage.section.join.continue')}
</p>

<Img src="/engagera-dig-1.jpg" alt={$t('engage.img-1')} imgClass="my-4 mx-auto" />

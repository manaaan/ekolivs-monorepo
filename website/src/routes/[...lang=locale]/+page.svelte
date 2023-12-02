<script>
  import { List, Li } from 'flowbite-svelte';
  import { CheckOutline } from 'flowbite-svelte-icons';
  import { t } from '$lib/translations';
</script>

<svelte-head>
  <title>{$t('home.title')}</title>
  <meta name="description" content={$t('home.meta.description')} />
  <meta name="robots" content="index, follow" />
</svelte-head>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
  <div class="max-w-xl ml-auto">
    <h1 class="text-3xl font-extrabold mb-4">
      {$t('home.section.intro.header')}
    </h1>
    <p>
      {$t('home.section.intro.p-1')}
    </p>
  </div>
  <List tag="ul" class="max-w-xl ml-auto space-y-3" list="none">
    <Li icon class="gap-3">
      <CheckOutline class="w-3.5 h-3.5 text-green-500 dark:text-green-400" />
      {$t('home.section.principles.principle-1')}
    </Li>
    <Li icon class="gap-3">
      <CheckOutline class="w-3.5 h-3.5 text-green-500 dark:text-green-400" />
      {$t('home.section.principles.principle-2')}
    </Li>
    <Li icon class="gap-3">
      <CheckOutline class="w-3.5 h-3.5 text-green-500 dark:text-green-400" />
      {$t('home.section.principles.principle-3')}
    </Li>
  </List>
</div>

<script>
  import { List, Li } from 'flowbite-svelte';
  import { CheckOutline } from 'flowbite-svelte-icons';
  import { t } from '$lib/translations';
</script>

<style>
  .parallax {
    /* The image used */
    background-image: url("/shelf-veggies.jpg");

    min-height: 600px;
    height: 100%;

    z-index: 99;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>

<svelte-head>
  <title>{$t('home.title')}</title>
  <meta name="description" content={$t('home.meta.description')} />
  <meta name="robots" content="index, follow" />
</svelte-head>

<div>
  <img src="/logo_black.png" class="mx-auto mt-28 mb-8 h-16 sm:h-24 block dark:hidden" alt="Ekolivs logo" />
  <img src="/logo_white.png" class="mx-auto mt-28 mb-8 h-16 sm:h-24 hidden dark:block" alt="Ekolivs logo" />
</div>
<div class="parallax">
  <div class="h-20"/>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-white dark:bg-secondary-950 opacity-75">
    <div class="max-w-xl ml-auto">
      <h1 class="text-3xl font-extrabold mb-4">
        {$t('home.section.intro.header')}
      </h1>
      <p>
        {$t('home.section.intro.p-1')}
      </p>
    </div>
    <List tag="ul" class="max-w-xl mr-auto space-y-3" list="none">
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
  <div class="h-20"/>
</div>

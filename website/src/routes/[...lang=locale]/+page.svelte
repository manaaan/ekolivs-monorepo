<script>
  import { t } from '$lib/translations';
</script>

<svelte-head>
  <title>{$t('home.title')}</title>
  <meta name="description" content={$t('home.meta.description')} />
  <meta name="robots" content="index, follow" />
</svelte-head>

<p class="text-gray-800 dark:text-gray-200">{$t('home.text-1')}</p>

<script lang="ts">
  import { t } from '$lib/translations';
</script>

<svelte-head>
  <title>{$t('confirm-member.title')}</title>
  <meta name="description" content={$t('confirm-member.meta.description')} />
  <meta name="robots" content="noindex, follow" />
</svelte-head>

<h3 class="text-3xl font-extrabold my-3">
  {$t('confirm-member.section.header')}
</h3>
<p>
  {$t('confirm-member.section.p-1')}
</p>
<br />
<p>{$t('confirm-member.section.p-2')}</p>

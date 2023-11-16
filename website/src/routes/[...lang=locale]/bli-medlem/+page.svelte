<script lang="ts">
  import { Button, Input, Label, Radio } from 'flowbite-svelte';
  import {
    EnvelopeSolid,
    UserCircleSolid,
    PhoneSolid,
    InfoCircleOutline
  } from 'flowbite-svelte-icons';
  import { Textarea } from 'flowbite-svelte';
  import { t, locale } from '$lib/translations';
  let textareaprops = {
    id: 'notes',
    name: 'notes',
    label: $t('member.section.form.notes.label'),
    rows: 4,
    placeholder: $t('member.section.form.notes.placeholder')
  };
</script>

<svelte-head>
  <title>{$t('member.title')}</title>
  <meta name="description" content={$t('member.meta.description')} />
  <meta name="robots" content="noindex, follow" />
</svelte-head>

<p class="leading-tight">
  {$t('member.section.intro.p-1')}
</p>
<br />
<p>{$t('member.section.intro.p-2')}</p>
<br />
<p>
  <a href={`/${$locale}/engagera-dig`} class="text-primary-500 hover:text-primary-300">{$t('member.section.intro.membership')}</a>
</p>
<br />
<p>
  {$t('member.section.intro.interested')}
</p>
<br />
<form class="grid gap-4 mb-20">
  <div class="mb-2">
    <Label for="email" class="block mb-2">{$t('member.section.form.email.label')}</Label>
    <Input id="email" placeholder={$t('member.section.form.email.placeholder')} type="email" required>
      <EnvelopeSolid slot="left" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
    </Input>
  </div>
  <div class="mb-2">
    <Label for="name" class="block mb-2">{$t('member.section.form.name.label')}</Label>
    <Input id="name" placeholder={$t('member.section.form.name.placeholder')} required>
      <UserCircleSolid slot="left" class="w-4 h-4 text-gray-500 dark:text-gray-400" />
    </Input>
  </div>
  <div class="mb-2">
    <Label for="phone" class="block mb-2">{$t('member.section.form.phone.label')}</Label>
    <Input id="phone" placeholder={$t('member.section.form.phone.placeholder')} type="tel">
      <PhoneSolid slot="left" class="w-4 h-4 text-gray-500 dark:text-gray-400" />
    </Input>
  </div>

  <p class="leading-tight">
    <InfoCircleOutline class="float-left mr-2" />
    {$t('member.section.form.info-1')}
    <a href="/stadgar" class="text-primary-500 hover:text-primary-300">{$t('member.section.form.info-1-bylaws')}</a>.
  </p>

  <Label for="wantMembership">{$t('member.section.form.membership.label')}</Label>
  <div class="grid grid-cols-2 gap-6">
    <div class="rounded border border-gray-200 dark:border-gray-700">
      <Radio name="wantMembership" class="w-full p-4">{$t('member.section.form.membership.option-y')}</Radio>
    </div>
    <div class="rounded border border-gray-200 dark:border-gray-700">
      <Radio name="wantMembership" class="w-full p-4">{$t('member.section.form.membership.option-n')}</Radio>
    </div>
  </div>
  <p class="leading-tight">
    <InfoCircleOutline class="float-left mr-2" />
    {$t('member.section.form.info-2')}
  </p>

  <Label for="activeMember">{$t('member.section.form.active-member.label')}</Label>
  <div class="grid grid-cols-2 gap-6">
    <div class="rounded border border-gray-200 dark:border-gray-700">
      <Radio name="activeMember" class="w-full p-4">{$t('member.section.form.active-member.option-y')}</Radio>
    </div>
    <div class="rounded border border-gray-200 dark:border-gray-700">
      <Radio name="activeMember" class="w-full p-4">{$t('member.section.form.active-member.option-n')}</Radio>
    </div>
  </div>

  <Textarea {...textareaprops} />

  <Button type="submit">Skicka</Button>
</form>

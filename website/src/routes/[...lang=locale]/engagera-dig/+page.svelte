<script lang="ts">
  import { Alert, Card, Img } from 'flowbite-svelte';
  import { Button, Input, Label, Radio } from 'flowbite-svelte';
  import {
    EnvelopeSolid,
    UserCircleSolid,
    PhoneSolid,
    InfoCircleOutline,
    InfoCircleSolid
  } from 'flowbite-svelte-icons';
  import { Textarea } from 'flowbite-svelte';
  import { t, locale } from '$lib/translations';
  import { scrollIntoView } from '$lib/utils/scrolling';

  export let form;
  let textareaprops = {
    id: 'notes',
    name: 'notes',
    label: $t('engage.member.section.form.notes.label'),
    rows: 4,
    placeholder: $t('engage.member.section.form.notes.placeholder'),
    value: form?.notes ?? ''
  };
  let wantMembership = form?.wantMembership?.toString() ?? 'yes';
  let activeMember = form?.activeMember?.toString() ?? 'yes';
  let englishPreference = form?.englishPreference?.toString() ?? 'no';
  if (locale.get() == 'en') {
    englishPreference = form?.englishPreference?.toString() ?? 'yes';
  } else {
    englishPreference = form?.englishPreference?.toString() ?? 'no';
  }
  $: activeMember = wantMembership === 'no' ? 'no' : activeMember;
</script>

<svelte-head>
  <title>{$t('engage.title')}</title>
  <meta name="description" content={$t('engage.meta.description')} />
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
  {$t('engage.section.join.interested.intro')}
  <a
    href="#registration"
    on:click|preventDefault={scrollIntoView}
    class="text-primary-500 hover:text-primary-300">{$t('engage.section.join.interested.link')}</a
  >
  {$t('engage.section.join.interested.end')}
</p>

<p>
  {$t('engage.section.join.continue')}
</p>

<Img src="/engagera-dig-1.jpg" alt={$t('engage.img-1')} imgClass="my-4 mx-auto" />

<section id="registration">
  <h4 class="text-2xl font-extrabold my-2">{$t('engage.member.section.intro.header')}</h4>

  <p>{$t('engage.member.section.intro.p-2')}</p>
  <br />
  <p>
    {$t('engage.member.section.intro.interested')}
  </p>
  <br />
  {#if form?.error}
    <Alert color="red" border>
      <InfoCircleSolid slot="icon" class="w-4 h-4" />
      {form.error}
    </Alert>
  {/if}
  <br />
  <form class="grid gap-4 mb-20" method="post" action="#registration">
    <div class="mb-2">
      <Label for="email" class="block mb-2">{$t('engage.member.section.form.email.label')}</Label>
      <Input
        id="email"
        name="email"
        placeholder={$t('engage.member.section.form.email.placeholder')}
        type="email"
        value={form?.email ?? ''}
        required
      >
        <EnvelopeSolid slot="left" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
      </Input>
    </div>
    <div class="mb-2">
      <Label for="name" class="block mb-2">{$t('engage.member.section.form.name.label')}</Label>
      <Input
        id="name"
        name="name"
        placeholder={$t('engage.member.section.form.name.placeholder')}
        required
        value={form?.name ?? ''}
      >
        <UserCircleSolid slot="left" class="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </Input>
    </div>
    <div class="mb-2">
      <Label for="phone" class="block mb-2">{$t('engage.member.section.form.phone.label')}</Label>
      <Input
        id="phone"
        name="phone"
        placeholder={$t('engage.member.section.form.phone.placeholder')}
        type="tel"
        value={form?.phone ?? ''}
      >
        <PhoneSolid slot="left" class="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </Input>
    </div>

    <p class="leading-tight">
      <InfoCircleOutline class="float-left mr-2" />
      {$t('engage.member.section.form.info-1')}
      <a href="/stadgar" class="text-primary-500 hover:text-primary-300"
        >{$t('engage.member.section.form.info-1-bylaws')}</a
      >.
    </p>

    <Label for="wantMembership">{$t('engage.member.section.form.membership.label')}</Label>
    <div class="grid grid-cols-2 gap-6">
      <div class="rounded border border-gray-200 dark:border-gray-700">
        <Radio name="wantMembership" class="w-full p-4" value="yes" bind:group={wantMembership}
          >{$t('engage.member.section.form.membership.option-y')}</Radio
        >
      </div>
      <div class="rounded border border-gray-200 dark:border-gray-700">
        <Radio name="wantMembership" class="w-full p-4" value="no" bind:group={wantMembership}
          >{$t('engage.member.section.form.membership.option-n')}</Radio
        >
      </div>
    </div>

    {#if wantMembership === 'yes'}
      <p class="leading-tight">
        <InfoCircleOutline class="float-left mr-2" />
        {$t('engage.member.section.form.info-2')}
      </p>
      <Label for="activeMember">{$t('engage.member.section.form.active-member.label')}</Label>
      <div class="grid grid-cols-2 gap-6">
        <div class="rounded border border-gray-200 dark:border-gray-700">
          <Radio name="activeMember" class="w-full p-4" value="yes" bind:group={activeMember}
            >{$t('engage.member.section.form.active-member.option-y')}</Radio
          >
        </div>
        <div class="rounded border border-gray-200 dark:border-gray-700">
          <Radio name="activeMember" class="w-full p-4" value="no" bind:group={activeMember}
            >{$t('engage.member.section.form.active-member.option-n')}</Radio
          >
        </div>
      </div>
    {/if}

    <Label for="englishPreference"
      >{$t('engage.member.section.form.english-preference.label')}</Label
    >
    <div class="grid grid-cols-2 gap-6">
      <div class="rounded border border-gray-200 dark:border-gray-700">
        <Radio
          name="englishPreference"
          class="w-full p-4"
          value="yes"
          bind:group={englishPreference}
          >{$t('engage.member.section.form.english-preference.option-y')}</Radio
        >
      </div>
      <div class="rounded border border-gray-200 dark:border-gray-700">
        <Radio name="englishPreference" class="w-full p-4" value="no" bind:group={englishPreference}
          >{$t('engage.member.section.form.english-preference.option-n')}</Radio
        >
      </div>
    </div>

    <Textarea {...textareaprops} />

    <Button type="submit">{$t('engage.member.section.form.submit')}</Button>
  </form>
</section>

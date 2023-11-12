<script lang="ts">
  import { Button, Input, Label, Radio } from 'flowbite-svelte';
  import {
    EnvelopeSolid,
    UserCircleSolid,
    PhoneSolid,
    InfoCircleOutline
  } from 'flowbite-svelte-icons';
  import { Textarea } from 'flowbite-svelte';
  let textareaprops = {
    id: 'notes',
    name: 'notes',
    label: 'Övrig Info',
    rows: 4,
    placeholder: 'Om du har nåt till att skriva till oss...'
  };
</script>

<svelte-head>
  <title>Bli medlem - Ekolivs</title>
  <meta name="description" content="Bli medlem hos Ekolivs för att stöda vår förening." />
  <meta name="robots" content="noindex, follow" />
</svelte-head>

<p class="leading-tight">
  Ekolivs drivs helt med ideella krafter. Som aktiv medlem håller du butiken öppen och tillsammans
  sköter vi inköp, ekonomi, skyltning och PR. Vi vill gärna bli fler och vi behöver dig som vill ge
  av ditt engagemang, energi och kunskap för att göra det möjligt. Men, det är inget måste att
  engagera sig aktivt i att driva butiken, du kan även vara med som stödmedlem och stötta vår
  förening.
</p>
<br />
<p>När du blir medlem får du rösträtt i föreningen och rabatt i butiken.</p>
<br />
<p>
  <a href="/engagera-dig" class="text-primary-500 hover:text-primary-300">Mer info om medlemskap</a>
</p>
<br />
<p>
  Låter det intressant? Ange följande uppgifter nedan så kommer vi att kontakta dig för vidare
  information om medlemskap och/eller engagemang i Ekolivs.
</p>
<br />
<form class="grid gap-4 mb-20">
  <div class="mb-2">
    <Label for="email" class="block mb-2">E-post</Label>
    <Input id="email" placeholder="example@ekolivs.se" type="email" required>
      <EnvelopeSolid slot="left" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
    </Input>
  </div>
  <div class="mb-2">
    <Label for="name" class="block mb-2">Namn (för- och efternamn)</Label>
    <Input id="name" placeholder="Namn" required>
      <UserCircleSolid slot="left" class="w-4 h-4 text-gray-500 dark:text-gray-400" />
    </Input>
  </div>
  <div class="mb-2">
    <Label for="phone" class="block mb-2">Telefonnummer</Label>
    <Input id="phone" placeholder="012-345678" type="tel">
      <PhoneSolid slot="left" class="w-4 h-4 text-gray-500 dark:text-gray-400" />
    </Input>
  </div>

  <p class="leading-tight">
    <InfoCircleOutline class="float-left mr-2" />
    Ekolivs är ett kooperativ uppbyggt av medlemmar, därför vill vi gärna ha dig som medlem. Det kostar
    100kr/år i medlemsavgift och 200 kr i insats (insatsen har du möjlighet att få tillbaka om du går
    ur Ekolivs). Betalningsinformationen kommer på nästa sida. När du blir medlem ställer du dig bakom
    <a href="/stadgar" class="text-primary-500 hover:text-primary-300">stadgarna för föreningen</a>.
  </p>

  <Label for="wantMembership">Vill du bli medlem i Ekolivs?</Label>
  <div class="grid grid-cols-2 gap-6">
    <div class="rounded border border-gray-200 dark:border-gray-700">
      <Radio name="wantMembership" class="w-full p-4">Ja</Radio>
    </div>
    <div class="rounded border border-gray-200 dark:border-gray-700">
      <Radio name="wantMembership" class="w-full p-4">Nej</Radio>
    </div>
  </div>
  <p class="leading-tight">
    <InfoCircleOutline class="float-left mr-2" />
    Ekolivs drivs helt ideellt och bemannas av medlemmar. Varje pass i butiken är 2-3 timmar långt. Som
    aktiv medlem bemannar du butiken 2 pass/månad och engagerar dig i en arbetsgrupp. Då får du också
    engagemangsrabatten.
  </p>

  <Label for="activeMember">Vill du engagera dig aktivt och bemanna butiken?</Label>
  <div class="grid grid-cols-2 gap-6">
    <div class="rounded border border-gray-200 dark:border-gray-700">
      <Radio name="activeMember" class="w-full p-4">Ja, kontakta mig med mer information</Radio>
    </div>
    <div class="rounded border border-gray-200 dark:border-gray-700">
      <Radio name="activeMember" class="w-full p-4">Nej (stödmedlem)</Radio>
    </div>
  </div>

  <Textarea {...textareaprops} />

  <Button type="submit">Skicka</Button>
</form>

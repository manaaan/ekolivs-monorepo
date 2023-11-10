<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import FormField from '@smui/form-field';
  import Radio from '@smui/radio';
  import Button, { Label } from '@smui/button';

  let email: string = '';
  let name: string = '';
  let phone: string = '';
  let wantMembership = true;
  let activeMember = true;
  let notes = '';

  function printInput() {
    console.log(email);
  }
</script>

<svelte-head>
  <title>Bli medlem - Ekolivs</title>
  <meta name="description" content="Bli medlem hos Ekolivs för att stöda vår förening." />
  <meta name="robots" content="noindex, follow" />
</svelte-head>

<p>
  Ekolivs drivs helt med ideella krafter. Som aktiv medlem håller du butiken öppen och tillsammans
  sköter vi inköp, ekonomi, skyltning och PR. Vi vill gärna bli fler och vi behöver dig som vill ge
  av ditt engagemang, energi och kunskap för att göra det möjligt. Men, det är inget måste att
  engagera sig aktivt i att driva butiken, du kan även vara med som stödmedlem och stötta vår
  förening.
</p>

<p>När du blir medlem får du rösträtt i föreningen och rabatt i butiken.</p>

<p><a href="/engagera-dig">Mer info om medlemskap</a></p>

<p>
  Låter det intressant? Ange följande uppgifter nedan så kommer vi att kontakta dig för vidare
  information om medlemskap och/eller engagemang i Ekolivs.
</p>

<div>
  <Textfield type="email" label="E-post" bind:value={email} required />
</div>

<div>
  <Textfield label="Name (för- och efternamn)" bind:value={name} required />
</div>
<div>
  <Textfield label="Telefonnummer" bind:value={phone} />
</div>

<p>
  Ekolivs är ett kooperativ uppbyggt av medlemmar, därför vill vi gärna ha dig som medlem. Det
  kostar 100kr/år i medlemsavgift och 200 kr i insats (insatsen har du möjlighet att få tillbaka om
  du går ur Ekolivs). Betalningsinformationen kommer på nästa sida. När du blir medlem ställer du
  dig bakom <a href="/stadgar">stadgarna för föreningen</a>
</p>

<p>Vill du bli medlem i Ekolivs?</p>
{#each [true, false] as option}
  <FormField>
    <Radio bind:group={wantMembership} value={option} touch />
    <span slot="label">{option ? 'Ja' : 'Nej'}</span>
  </FormField>
{/each}

<p>
  Ekolivs drivs helt ideellt och bemannas av medlemmar. Varje pass i butiken är 2-3 timmar långt.
  Som aktiv medlem bemannar du butiken 2 pass/månad och engagerar dig i en arbetsgrupp. Då får du
  också engagemangsrabatten.
</p>

<p>Vill du engagera dig aktivt och bemanna butiken?</p>
{#each [true, false] as option}
  <FormField>
    <Radio bind:group={activeMember} value={option} touch />
    <span slot="label">{option ? 'Ja, kontakta mig med mer information' : 'Nej (stödmedlem)'}</span>
  </FormField>
{/each}

<div>
  <Textfield textarea bind:value={notes} label="Övrig Info">
    <HelperText slot="helper"
      >Om du har nåt till att skriva till oss, nämna det gärna här.</HelperText
    >
  </Textfield>
</div>

<Button on:click={printInput}>
  <Label>Skicka</Label>
</Button>

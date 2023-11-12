<script>
  import { Gallery } from 'flowbite-svelte';

  const images = [
    {
      alt: 'Bild av Ekolivs butiken på säljs event med många kunder framför butiken',
      src: 'hitta-hit-1.webp'
    },
    { src: 'engagera-dig-1.jpg', alt: 'Ekolivs medlemmar framför butiken' }
  ];
</script>

<svelte-head>
  <title>Om Ekolivs - Ekolivs</title>
  <meta
    name="description"
    content="Ekolivs är en liten, ideellt driven livsmedelsbutik i centrala Malmö, som funnits i sin nuvarande form sedan 2006. Vi är ett kooperativ och verksamheten drivs demokratiskt av föreningens medlemmar genom medlemsmöten och olika arbetsgrupper."
  />
  <meta name="robots" content="index, follow" />
</svelte-head>

<h3 class="text-3xl font-extrabold my-3">Ekologiskt och lokalt, tillsammans</h3>

<p>
  Ekolivs är en liten, ideellt driven livsmedelsbutik i centrala Malmö, som funnits i sin nuvarande
  form sedan 2006. Vi är ett kooperativ och verksamheten drivs demokratiskt av föreningens medlemmar
  genom medlemsmöten och olika arbetsgrupper. Vårt syfte är inte att generera vinst, utan istället
  att tillgodose medlemmarnas gemensamma intresse för ekologisk, schysst och närproducerad mat och
  andra dagligvaror samt att kunna erbjuda det till bra pris. Vi vill även lyfta fram lokala
  producenter och sprida information och kunskap i linje med en hållbar livsstil.
</p>
<br />
<p>
  Föreningen har två typer av medlemskap, aktiv medlem och stödmedlem, som är förenade med olika
  rabatter beroende på engagemangsnivå. Aktiva medlemmar sköter tillsammans den dagliga driften av
  Ekolivs, utöver att hålla butiken öppen sker det genom följande arbetsgrupper:
</p>
<br />
<ul class="list-disc list-inside">
  <li>
    <b>Inköpsgruppen</b> - Gör beställningar, har kontakt med befintliga leverantörer samt är första
    kontakt med potentiella leverantörer
  </li>
  <li><b>Ekonomigruppen</b> - Sköter bokföring, betalning av fakturor och kontanthantering</li>
  <li>
    <b>PR-gruppen</b> - Ansvarar för hemsidan, sociala medier och övring marknadsföring samt planerar
    event och samarbeten
  </li>
  <li><b>Butiksgruppen</b> - Inreder och håller butiken fin, ansvarar för rutiner för butiken</li>
</ul>
<br />
<p>
  Utöver dessa har vi en styrelse som bland annat ansvarar för övergripande uppgifter och planering
  inför medlemsmöten och årsmöten.
</p>

<h3 class="text-3xl font-extrabold my-3">Engagera dig i Ekolivs</h3>

<p>
  Är du nyfiken på att vara med och driva vår lilla ekobutik på hörnet? Kul! <a
    href="/engagera-dig"
    class="text-primary-500 hover:text-primary-300"
    >Läs mer här om vad det innebär att vara medlem</a
  >, eller kom förbi butiken och prata med någon av oss. Hoppas vi att vi hörs och ses snart 🙂
</p>

<Gallery items={images} class="gap-4 grid-cols-2 md:grid-cols-3 mt-4" />

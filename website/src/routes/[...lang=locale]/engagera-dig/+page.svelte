<script>
  import { Card, Img } from 'flowbite-svelte';
</script>

<svelte-head>
  <title>Engagera dig - Ekolivs</title>
  <meta
    name="description"
    content="Ekolivs drivs ideellt, engagera dig på Ekolivs för att stöda lokale producenter och ekologiska matodling. Medlemmar får rabatt på sina köp."
  />
  <meta name="robots" content="index, follow" />
</svelte-head>

<h3 class="text-3xl font-extrabold my-3">
  Vi driver en ekologisk butik tillsammans - vill du vara med?
</h3>

<p>
  Ekolivs drivs helt med ideella krafter. Som aktiv medlem håller en butiken öppen och tillsammans i
  olika arbetsgrupper sköter vi inköp, ekonomi, skyltning, PR och andra små butiks-sysslor. Vi vill
  gärna bli fler och vi behöver dig som vill ge av ditt engagemang, energi och kunskap för att göra
  det möjligt. Men, det är inget måste att engagera sig aktivt i att driva butiken, du kan även vara
  med endast som stödmedlem och stötta vår verksamhet genom att handla i butiken.
</p>

<h3 class="text-3xl font-extrabold my-3">Vad får jag som medlem?</h3>

<Card color="primary" class="max-w-xl mx-auto">
  <b>Alla medlemmar:</b>
  <ul class="list-disc list-inside space-y-1">
    <li>Inbjudan till alla medlemsmöten och bli en del av vår härliga gemenskap</li>
    <li>
      Rösträtt i kooperativet och vara med och påverka vilka varor vi ska ta in och hur kooperativet
      ska arbeta
    </li>
  </ul>
</Card>

<div class="grid grid-cols-2 gap-8 py-8">
  <Card color="primary" class="max-w-xl ml-auto">
    <b>Aktiva medlemmar (Volontärer):</b>
    <ul class="list-disc list-inside space-y-1">
      <li>15% rabatt på alla köp i butiken.</li>
      <li>
        Håller butiken öppen ca två pass i månaden och engagerar dig i en av våra arbetsgrupper
      </li>
    </ul>
  </Card>
  <Card color="blue" class="max-w-xl">
    <b>Stödmedlemmar:</b>
    <ul class="list-disc list-inside space-y-1">
      <li>5% rabatt på alla köp i butiken</li>
    </ul>
  </Card>
</div>

<h4 class="text-2xl font-extrabold my-2">Såhär enkelt blir du medlem</h4>

<p>
  Är du intresserad av att engagera dig i Ekolivs och hjälpa till att driva och utveckla butiken?
  Kul! <a href="/bli-medlem" class="text-primary-500 hover:text-primary-300">Fyll i formuläret</a> eller
  kom in och prata med oss i butiken.
</p>

<p>
  Vi kontaktar dig för och berättar lite mer om hur föreningen fungerar och du får möjlighet att
  ställa frågor, träffa andra medlemmar och prova att stå i butiken.
</p>

<Img src="/engagera-dig-1.jpg" alt="Ekolivs medlemmar framför butiken" imgClass="my-4 mx-auto" />

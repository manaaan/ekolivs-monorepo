<script lang="ts">
  import { t } from '$lib/translations';
</script>

<svelte-head>
  <title>{$t('products.title')}</title>
  <meta name="description" content={$t('products.meta.description')} />
  <meta name="robots" content="index, follow" />
</svelte-head>

<h3 class="text-3xl font-extrabold my-3">
  {$t('products.header')}
</h3>
<p>
  På Ronnebygatans Ekolivs säljer vi ekologiska produkter; obesprutade och utan kemiska tillsatser.
  Vi prioriterar även att ta in varor från småskaliga producenter i vår närhet. I så stor
  utsträckning som möjligt försöker vi främja rättvis handel och rättvisa arbetsvillkor.
</p>
<br />
<p>
  Nedan följer ett axplock av de varor vi säljer. Då utbudet och tillgången från våra leverantörer
  varierar är det bäst att besöka butiken för att se exakt vilka varor vi har för tillfället. Be oss
  gärna att beställa in varor som du inte hittar hos oss genom att maila till info@ekolivs.se eller
  besöka butiken.
</p>

<h4 class="text-2xl font-extrabold my-2">Frukt och grönt</h4>
<p>
  Våra färska grönsaker och frukter kommer oftast från Mossagården och Vegostan. Utbudet varierar
  efter säsong, men nästan alltid har vi diverse rotfrukter, bananer, äpplen och citrusfrukter.
  Leveransen till butiken kommer huvudsakligen på torsdagar.
</p>

<!-- <img /> -->

<p>
  Mjölksyrade grönsaker innehåller mycket vitaminer och mineraler. Dessutom bildas probiotika vid
  jäsningsprocessen som är bra för magen. Mjölksyrning av grönsaker är ett alternativ till
  konservering. I stället för kemiska tillsatser jäser grönsakerna naturligt i kombination med
  havssalt. Morötter och surkål blir krispiga och behåller sina näringsämnen och framförallt sin
  goda smak. Våra syrade produkter kommer från Tistelvind.
</p>

<h4 class="text-2xl font-extrabold my-2">Mejeriprodukter</h4>

<p>Vi säljer ekologiska ägg från Hyllehög gård i Höllviken.</p>

<h4 class="text-2xl font-extrabold my-2">Nötter och frön</h4>

<!-- <img /> -->

<p>Urvalet varierar, men du hittar ofta följande på Ekolivs:</p>

<ul class="list-disc list-inside">
  <li>Valnötter</li>
  <li>Linfrön</li>
  <li>Sesamfrön</li>
  <li>Hampafrön</li>
  <li>Rostade rapsfrön</li>
  <li>
    Mandel, mycket högt innehåll av B2 som deltar i förbränningen av kolhydrater. Brist kan leda
    till spruckna läppar, håravfall och ögoninflammation. Mandel innehåller även kalcium, kalium och
    järn
  </li>
  <li>Solroskärnor</li>
  <li>
    Pumpakärnor, innehåller bland annat alla de aminosyror och fettsyror som man behöver. Varför
    inte rosta dem med lite salt och chilipulver i 175 grader ca 20-30 minuter.
  </li>
</ul>

<h4 class="text-2xl font-extrabold my-2">Godis och snacks</h4>

<p>
  Utbudet av godis och snacks i butiken varierar, men oftast har vi flera sorters choklad, lakrits
  och någon form av chips.
</p>

<h4 class="text-2xl font-extrabold my-2">Drycker</h4>

<ul class="list-disc list-inside">
  <li>
    Kombucha<br />
    Kombucha är fermenterat te som får sin smak och sina hälsosamma egenskaper från en mikrobiell kultur
    som producerar organiska syror, B-vitaminer och enzymer.<br />
    Vi säljer lokalproducerad kombucha i flera smaksättningar från
    <a href="http://rootskombucha.se/sv/" target="_blank">Roots</a>
  </li>
  <li>Lättöl från Lundabryggeriet och Charlis.</li>
  <li>
    Lemonad och must från Kiviks musteri. Englamust finns både på flaska och bag-in-box från
    Bjärebygdens Musteri.
  </li>
  <li>Läsk och tonicwater från Søbogaard, läsk från Voelkel.</li>
  <li>Smoothie från Nature Fresch.</li>
  <li>Alkoholfri äppelglögg från Bjärebygdens Musteri.</li>
  <li>Havredryck från Oatly.</li>
  <li>Saft från Grangärde musteri.</li>
</ul>

<h4 class="text-2xl font-extrabold my-2">Kaffe och te</h4>

<p>
  Kaffe är en av de ekologiska varor som skiljer sig mest från sitt konventionella alternativ. Dels
  så besprutas kaffeodlingarna, men framför allt är det arbetsvillkoren som är omänskliga. Inte nog
  med att det händer att odlarna går med förlust på grund av att lokala uppköpare pressar priserna
  för att kunna sälja det vidare till kaffeproducenter. Dessutom förekommer tvångs- och barnarbete
  på de konventionella odlingarna enligt föreningen Swedwatch.
</p>

<!-- <img /> -->

<p>
  K’inal importerar kaffe från zapatistiska kooperativ i södra Mexiko. I nuläget från kooperativet
  Yachil, med ungefär 850 familjer som medlemmar. När du köper ett paket K’inalkaffe för 70 kronor
  får kooperativet 15 kronor (jfr konventionellt: 2 till 7 kronor), 18 kronor går till omkostnader
  (5 kronor är transport, 7 kronor rostning, 1 krona etiketter, 0,7 kronor rättvisemärkning och 4
  kronor moms) vilket gör att produktionskostnaden inklusive moms är 33 kronor. Vinsten är 12 kronor
  varav 5 kronor går till butiken. Man kan fråga sig hur ett paket konventionellt kaffe kan kosta 25
  kronor i butik. Svaret är att odlarna får betydligt mindre betalt och att butikerna ofta använder
  kaffe som en lockvara och därmed inte har någon vinstmarginal. Vi säljer K’inal bryggkaffe och
  hela bönor.
</p>

<p>Te i varierande urval</p>

<!-- <img /> -->

<h4 class="text-2xl font-extrabold my-2">Sylt och marmelad</h4>

<p>Från svenska Yallatrappan och danska Søbogaard, i varierande urval.</p>

<h4 class="text-2xl font-extrabold my-2">Delikatesser</h4>

<p>Oliver från Epikouros</p>
<p>Mango Chutney från Naturata</p>
<p>Pesto från la Bio Idea</p>
<p>Chokladkräm från Biona Organic</p>

<!-- <img /> -->

<h4 class="text-2xl font-extrabold my-2">Oljor och vinäger</h4>

<p>
  Rapsolja, neutral och smaksatt<br />från Gunnarshögs gård på Österlen, på flaska och bag-in-box
</p>

<!-- <img /> -->

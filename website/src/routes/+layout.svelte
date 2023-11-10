<script lang="ts">
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import Facebook from 'svelte-material-icons/Facebook.svelte';
  import Instagram from 'svelte-material-icons/Instagram.svelte';
</script>

<h1>Ekolivs</h1>

<nav>
  <a href="/">Home</a>
  <a href="/vara-varor-2">Våra Varor</a>
  <a href="/om-ekolivs-2">Om Ekolivs</a>
  <a href="/engagera-dig">Engagera dig</a>
  <a href="/kontakt">Hitta hit</a>
</nav>

<slot />

<footer>
  <LayoutGrid>
    <Cell spanDevices={{ desktop: 3, tablet: 6, phone: 12 }}>
      <p><a href="/vara-varor-2">Våra Varor</a></p>
      <p><a href="/om-ekolivs-2">Om Ekolivs</a></p>
      <p><a href="/stadgar">Våra stadgar</a></p>
      <p><a href="/engagera-dig">Engagera dig i Ekolivs</a></p>
      <p><a href="/bli-medlem">Bli medlem</a></p>
      <p><a href="/kontakt">Hitta hit</a></p>
    </Cell>
    <Cell spanDevices={{ desktop: 3, tablet: 6, phone: 12 }}>&nbsp;</Cell>
    <Cell spanDevices={{ desktop: 3, tablet: 6, phone: 12 }}>
      <h3>Öppettider</h3>
      <p>Tis. - Fre. | 15.00 - 18.00</p>
    </Cell>
    <Cell spanDevices={{ desktop: 3, tablet: 6, phone: 12 }}>
      <p>Ronnebygatan 1</p>
      <p>211 58 Malmö</p>
      <br />
      <p>info@ekolivs.se</p>
      <p>Tel: 0736-10 18 90</p>
      <a href="https://www.facebook.com/Ekolivs/" target="_blank"><Facebook size="50" /></a>
      <a href="https://www.instagram.com/ekolivs/" target="_blank"><Instagram size="50" /></a>
    </Cell>
  </LayoutGrid>
</footer>

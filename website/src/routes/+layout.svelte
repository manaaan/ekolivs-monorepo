<script lang="ts">
  import '../app.postcss';
  import { Footer, FooterLinkGroup, FooterLink, FooterIcon, FooterCopyright, Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import { FacebookSolid } from 'flowbite-svelte-icons';
</script>

<Navbar rounded color="form">
  <NavBrand href="/">
    <img src="logo_black.png" class="mr-3 h-6 sm:h-9" alt="Ekolivs logo" />
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <NavLi href="/">Hem</NavLi>
  	<NavLi href="/vara-varor-2">Våra Varor</NavLi>
    <NavLi href="/om-ekolivs-2">Om Ekolivs</NavLi>
    <NavLi href="/engagera-dig">Engagera dig</NavLi>
    <NavLi href="/kontakt">Hitta hit</NavLi>
  </NavUl>
</Navbar>

<slot />

<Footer footerType="sitemap">
  <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Ekolivs</h2>
      <FooterLinkGroup ulClass="text-gray-300">
        <FooterLink liClass="mb-4" href="/vara-varor-2">Våra Varor</FooterLink>
        <FooterLink liClass="mb-4" href="/om-ekolivs-2">Om Ekolivs</FooterLink>
        <FooterLink liClass="mb-4" href="/kontakt">Hitta hit</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Medlemskap</h2>
      <FooterLinkGroup ulClass="text-gray-300">
        <FooterLink liClass="mb-4" href="/stadgar">Våra stadgar</FooterLink>
        <FooterLink liClass="mb-4" href="/engagera-dig">Engagera dig i Ekolivs</FooterLink>
        <FooterLink liClass="mb-4" href="/bli-medlem">Bli medlem</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Öppettider</h2>
      <p>Tis. - Fre. | 15.00 - 18.00</p>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Kontakt</h2>
      <p>Ronnebygatan 1</p>
      <p>211 58 Malmö</p>
      <br>
      <p>info@ekolivs.se</p>
      <p>Tel: 0736-10 18 90</p>
    </div>
  </div>
  <div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
    <FooterCopyright spanClass="text-sm text-gray-300 sm:text-center" href="/" by="Ekolivs" />
    <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
      <FooterIcon href="https://www.facebook.com/Ekolivs/" target="_blank">
        <FacebookSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="https://www.instagram.com/ekolivs/" target="_blank">
        <!-- Instagram logo -->
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </FooterIcon>
    </div>
  </div>
</Footer>

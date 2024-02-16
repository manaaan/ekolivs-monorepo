<script lang="ts">
  import { goto } from '$app/navigation';
  import '../app.postcss';
  import {
    Button,
    Footer,
    FooterLinkGroup,
    FooterLink,
    FooterIcon,
    FooterCopyright,
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    DarkMode,
    Select,
    type SelectOptionType
  } from 'flowbite-svelte';
  import { FacebookSolid } from 'flowbite-svelte-icons';
  import { t, locale, locales } from '$lib/translations';
  import { page } from '$app/stores';

  const isHomePage = (currentRoute: string): boolean => {
    return currentRoute == "";
  };

  let langSelected = $locale;
  const langs: SelectOptionType<string>[] = [];
  for (const loc of $locales) {
    langs.push({
      value: loc,
      name: $t(`lang.${loc}`)
    });
  }
  $: ({ route } = $page.data);
</script>

<div class="relative">
  <Navbar color="form" class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b">
    {#if !isHomePage(route)}
      <NavBrand href="/" class="w-1/3">
        <!-- TODO: resolve hacky solution to js variables conditional render -->
        <img src="/logo_black.png" class="h-6 sm:h-9 block dark:hidden" alt="Ekolivs logo" />
        <img src="/logo_white.png" class="h-6 sm:h-9 hidden dark:block" alt="Ekolivs logo" />
      </NavBrand>
    {:else}
      <!-- empty block matching the logo to keep the rest of the nav bar in the same place -->
      <div class="h-6 sm:h-9 w-1/3 block" />
    {/if}
    <div class="xl:w-1/3 md:w-1/12">
      <DarkMode
        size="sm"
        btnClass="p-0 block mx-auto"
        ariaLabel={`Switch dark/light mode`}
        title={`Switch dark/light mode`}
      />
    </div>
    <div class="flex align-center md:hidden">
      <Button size="sm" class="ml-4" href={`/${langSelected}/engagera-dig`}>{$t('navigation.engage')}</Button>
      <NavHamburger />
    </div>
    <NavUl divClass="w-full xl:w-1/3 md:w-1/2 md:block" ulClass="flex flex-col p-2 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center">
      <NavLi href={`/${langSelected}`}>{$t('navigation.home')}</NavLi>
      <!-- <NavLi href={`/${langSelected}/vara-varor-2`}>{$t('navigation.products')}</NavLi> -->
      <NavLi href={`/${langSelected}/om-ekolivs-2`}>{$t('navigation.about')}</NavLi>
      <NavLi href={`/${langSelected}/kontakt`}>{$t('navigation.contact')}</NavLi>
      <Button size="sm" class="ml-4 hidden md:block" href={`/${langSelected}/engagera-dig`}>{$t('navigation.engage')}</Button>
    </NavUl>
  </Navbar>

  {#if isHomePage(route)}
    <div class="h-full mt-20 mb-auto font-normal text-secondary-800 dark:text-secondary-100">
      <slot />
    </div>
  {:else}
    <div class="px-8 pb-16 mt-28 mx-4 md:mx-16 mb-auto font-normal text-secondary-800 dark:text-secondary-100">
      <slot />
    </div>
  {/if}
</div>

<Footer
  footerType="sitemap"
  class="relative z-10 bg-primary-200 dark:bg-primary-700 text-secondary-900 dark:text-secondary-200 border-secondary-300 dark:border-secondary-700"
>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
    <div>
      <h2 class="mb-6 text-sm font-semibold text-secondary dark:text-secondary-100 uppercase">Ekolivs</h2>
      <FooterLinkGroup ulClass="text-secondary-900 dark:text-secondary-200">
        <!-- <FooterLink liClass="mb-4" href={`/${langSelected}/vara-varor-2`}
          >{$t('navigation.products')}</FooterLink
        > -->
        <FooterLink liClass="mb-4" href={`/${langSelected}/om-ekolivs-2`}
          >{$t('navigation.about')}</FooterLink
        >
        <FooterLink liClass="mb-4" href={`/${langSelected}/kontakt`}
          >{$t('navigation.contact')}</FooterLink
        >
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-secondary dark:text-secondary-100">
        {$t('footer.membership')}
      </h2>
      <FooterLinkGroup ulClass="text-secondary-900 dark:text-secondary-200">
        <FooterLink liClass="mb-4" href={`/${langSelected}/stadgar`}
          >{$t('navigation.bylaws')}</FooterLink
        >
        <FooterLink liClass="mb-4" href={`/${langSelected}/engagera-dig`}
          >{$t('navigation.engage')}</FooterLink
        >
        <FooterLink liClass="mb-4" href={`/${langSelected}/bli-medlem`}
          >{$t('navigation.member')}</FooterLink
        >
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-secondary dark:text-secondary-100">
        {$t('footer.openinghoursname')}
      </h2>
      <div>
        <p>{$t('footer.openinghours')}</p>
      </div>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-secondary dark:text-secondary-100">
        {$t('footer.contact')}
      </h2>
      <div>
        <p>Ronnebygatan 1</p>
        <p>211 58 Malmö</p>
        <br />
        <p>info@ekolivs.se</p>
      </div>
    </div>
  </div>
  <div
    class="py-6 px-4 bg-primary-200 dark:bg-primary-700 text-secondary-900 dark:text-white border-secondary-300 dark:border-secondary-700 md:flex md:items-center md:justify-between"
  >
    <FooterCopyright spanClass="text-sm sm:text-center" href="/" by="Ekolivs" />
    <Select
      class="w-auto max-w-200 mt-2"
      items={langs}
      bind:value={langSelected}
      on:change={({ target }) => {
        // @ts-expect-error value does exist on target
        goto(`/${target.value}${route}`);
      }}
      placeholder="Choose language"
    />
    <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
      <FooterIcon href="https://www.facebook.com/Ekolivs/" target="_blank">
        <FacebookSolid
          class="w-6 h-6 text-secondary-500 dark:text-secondary-300 hover:text-secondary-900 dark:hover:text-white"
        />
      </FooterIcon>
      <FooterIcon href="https://www.instagram.com/ekolivs/" target="_blank">
        <!-- Instagram logo -->
        <svg
          class="w-6 h-6 text-secondary-500 dark:text-secondary-300 hover:text-secondary-900 dark:hover:text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
          />
        </svg>
      </FooterIcon>
    </div>
  </div>
</Footer>

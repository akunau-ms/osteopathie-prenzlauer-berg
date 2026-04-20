<script>
  import { siteContent } from '$lib/data/content.js';
  import { page } from '$app/state';

  let { nav, praxis } = siteContent;

  let menuOpen = $state(false);
  let scrolled = $state(false);

  $effect(() => {
    const handler = () => { scrolled = window.scrollY > 20; };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  });

  function closeMenu() { menuOpen = false; }
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  class:bg-white={scrolled}
  class:shadow-md={scrolled}
  class:bg-transparent={!scrolled}
>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 lg:h-20">
      <!-- Logo -->
      <a href="/" onclick={closeMenu} class="flex flex-col leading-tight group">
        <span
          class="font-serif text-lg font-bold transition-colors duration-200"
          class:text-primary-800={scrolled}
          class:text-white={!scrolled}
        >
          {praxis.therapeut}
        </span>
        <span
          class="text-xs font-medium tracking-wider uppercase transition-colors duration-200"
          class:text-primary-500={scrolled}
          class:text-primary-200={!scrolled}
        >
          Osteopath · Berlin
        </span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex items-center gap-6" aria-label="Hauptnavigation">
        {#each nav as item}
          <a
            href={item.href}
            class="text-sm font-medium tracking-wide transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:bg-gold-500 after:transition-all after:duration-200"
            class:text-white={!scrolled}
            class:text-neutral-700={scrolled}
            class:hover:text-gold-500={scrolled}
            class:hover:text-gold-400={!scrolled}
            class:after:w-full={page.url.pathname === item.href}
            class:after:w-0={page.url.pathname !== item.href}
          >
            {item.label}
          </a>
        {/each}
        <a
          href="/kontakt"
          class="ml-2 px-4 py-2 rounded-full text-sm font-semibold bg-primary-700 text-white hover:bg-primary-600 transition-colors duration-200 shadow-sm"
        >
          Termin
        </a>
      </nav>

      <!-- Hamburger -->
      <button
        class="lg:hidden p-2 rounded-md transition-colors duration-200"
        class:text-white={!scrolled}
        class:text-primary-800={scrolled}
        onclick={() => menuOpen = !menuOpen}
        aria-label="Menü öffnen"
        aria-expanded={menuOpen}
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if menuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          {/if}
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if menuOpen}
    <div class="lg:hidden bg-white border-t border-neutral-100 shadow-lg">
      <nav class="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile Navigation">
        {#each nav as item}
          <a
            href={item.href}
            onclick={closeMenu}
            class="px-4 py-3 rounded-lg text-sm font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-800 transition-colors duration-150"
            class:bg-primary-50={page.url.pathname === item.href}
            class:text-primary-800={page.url.pathname === item.href}
          >
            {item.label}
          </a>
        {/each}
        <a
          href="/kontakt"
          onclick={closeMenu}
          class="mt-2 px-4 py-3 rounded-full text-sm font-semibold text-center bg-primary-700 text-white hover:bg-primary-600 transition-colors duration-150"
        >
          Termin vereinbaren
        </a>
      </nav>
    </div>
  {/if}
</header>

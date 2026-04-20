<script>
  import { siteContent } from '$lib/data/content.js';
  let { praxis, nav } = siteContent;
</script>

<footer class="bg-primary-900 text-primary-200">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Praxis -->
      <div>
        <h3 class="font-serif text-white text-lg font-bold mb-4">{praxis.name}</h3>
        <p class="text-sm leading-relaxed">
          {praxis.therapeut}<br />
          {praxis.berufsbezeichnung}<br /><br />
          {praxis.adresse}<br />
          {praxis.plz} {praxis.stadt}
        </p>
      </div>

      <!-- Kontakt -->
      <div>
        <h3 class="font-serif text-white text-lg font-bold mb-4">Kontakt</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="tel:{praxis.telefon.replace('/', '')}" class="hover:text-gold-400 transition-colors duration-150 flex items-center gap-2">
              <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              {praxis.telefon}
            </a>
          </li>
          <li>
            <a href="mailto:{praxis.email}" class="hover:text-gold-400 transition-colors duration-150 flex items-center gap-2 break-all">
              <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              {praxis.email}
            </a>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            {praxis.oeffnungszeiten}
          </li>
        </ul>
      </div>

      <!-- Navigation -->
      <div>
        <h3 class="font-serif text-white text-lg font-bold mb-4">Navigation</h3>
        <ul class="space-y-2 text-sm">
          {#each nav as item}
            <li>
              <a href={item.href} class="hover:text-gold-400 transition-colors duration-150">{item.label}</a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <div class="mt-10 pt-6 border-t border-primary-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-primary-400">
      <p>© {new Date().getFullYear()} {praxis.name} · {praxis.therapeut}</p>
      <div class="flex items-center gap-4">
        <p>Osteopathie in Berlin Prenzlauer Berg</p>
        <a href="/impressum" class="hover:text-primary-200 transition-colors duration-150">Impressum</a>
      </div>
    </div>
  </div>
</footer>

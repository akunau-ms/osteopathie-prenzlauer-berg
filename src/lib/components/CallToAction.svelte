<script>
  /** @type {{ heading?: string }} */
  let { heading = 'Termin vereinbaren' } = $props();
  import { siteContent } from '$lib/data/content.js';
  let { praxis } = siteContent;
</script>

<section class="bg-primary-800 text-white py-16 lg:py-20">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="font-serif text-3xl lg:text-4xl font-bold mb-4">{heading}</h2>
    <p class="text-primary-200 text-lg mb-8 leading-relaxed">
      Vereinbaren Sie noch heute Ihren Termin. Ich freue mich auf Sie.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a
        href="tel:{praxis.telefon.replace('/', '')}"
        class="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-neutral-900 font-semibold rounded-full text-lg transition-colors duration-200 shadow-lg"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
        {praxis.telefon}
      </a>
      <a
        href="mailto:{praxis.email}"
        class="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary-400 hover:border-white text-white hover:bg-primary-700 font-semibold rounded-full text-lg transition-all duration-200"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
        Per E-Mail
      </a>
    </div>
  </div>
</section>

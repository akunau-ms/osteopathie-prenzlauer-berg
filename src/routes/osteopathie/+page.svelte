<script>
  import { siteContent } from '$lib/data/content.js';
  import IndicationList from '$lib/components/IndicationList.svelte';
  import CallToAction from '$lib/components/CallToAction.svelte';
  import SEO from '$lib/components/SEO.svelte';

  let { osteopathie, praxis } = siteContent;

  const bereichIcons = {
    bone: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18"/>`,
    organ: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>`,
    brain: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>`
  };

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Osteopathie Berlin Prenzlauer Berg",
    "description": osteopathie.meta.description,
    "url": "https://osteopathie-prenzlauer-berg.de/osteopathie",
    "about": [
      { "@type": "MedicalTherapy", "name": "Parietale Osteopathie", "relevantSpecialty": "Osteopathy" },
      { "@type": "MedicalTherapy", "name": "Viscerale Osteopathie", "relevantSpecialty": "Osteopathy" },
      { "@type": "MedicalTherapy", "name": "Kraniosakrale Osteopathie", "relevantSpecialty": "Osteopathy" }
    ],
    "mentions": osteopathie.indikationen.map(name => ({
      "@type": "MedicalCondition", "name": name
    }))
  };
</script>

<SEO
  title={osteopathie.meta.title}
  description={osteopathie.meta.description}
  canonical="https://osteopathie-prenzlauer-berg.de/osteopathie"
  breadcrumbs={[{ name: 'Osteopathie', href: '/osteopathie' }]}
  extraJsonLd={pageJsonLd}
/>

<!-- Page Hero -->
<section class="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-primary-900 to-primary-700 text-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <nav class="text-sm text-primary-300 mb-4" aria-label="Breadcrumb">
      <a href="/" class="hover:text-white transition-colors">Startseite</a>
      <span class="mx-2">›</span>
      <span class="text-white">Osteopathie</span>
    </nav>
    <h1 class="font-serif text-4xl lg:text-5xl font-bold mb-4">{osteopathie.heading}</h1>
    <p class="text-primary-200 text-lg max-w-2xl leading-relaxed">{osteopathie.intro}</p>
  </div>
</section>

<!-- Prinzipien -->
<section class="py-16 lg:py-20 bg-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="font-serif text-2xl lg:text-3xl font-bold text-neutral-900 mb-8">Grundprinzipien</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each osteopathie.prinzipien as prinzip, i}
        <div class="border-l-4 border-primary-500 pl-5 py-2">
          <span class="text-primary-500 text-xs font-bold uppercase tracking-wider block mb-2">Prinzip {i + 1}</span>
          <p class="text-neutral-700 leading-relaxed">{prinzip}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Drei Bereiche -->
<section class="py-16 lg:py-20 bg-neutral-50">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="font-serif text-2xl lg:text-3xl font-bold text-neutral-900">Die drei Bereiche der Osteopathie</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each osteopathie.bereiche as bereich}
        <div class="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100">
          <div class="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-5">
            <svg class="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {@html bereichIcons[bereich.icon]}
            </svg>
          </div>
          <h3 class="font-serif text-xl font-bold text-neutral-900 mb-3">{bereich.title}</h3>
          <p class="text-neutral-600 text-sm leading-relaxed">{bereich.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Indikationen -->
<section class="py-16 lg:py-20 bg-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-10">
      <h2 class="font-serif text-2xl lg:text-3xl font-bold text-neutral-900 mb-2">Indikationen</h2>
      <p class="text-neutral-500">Typische Beschwerdebilder, bei denen Osteopathie helfen kann:</p>
    </div>
    <div class="bg-primary-50 rounded-2xl p-8">
      <IndicationList items={osteopathie.indikationen} columns={true} />
    </div>
  </div>
</section>

<CallToAction heading="Beschwerden? Ich helfe Ihnen." />

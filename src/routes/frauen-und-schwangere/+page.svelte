<script>
  import { base } from '$app/paths';
  import { siteContent } from '$lib/data/content.js';
  import IndicationList from '$lib/components/IndicationList.svelte';
  import CallToAction from '$lib/components/CallToAction.svelte';
  import SEO from '$lib/components/SEO.svelte';

  let { frauen } = siteContent;
  let { frauenheilkunde, schwangerschaft } = frauen;

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Osteopathie für Frauen & Schwangere Berlin",
    "description": frauen.meta.description,
    "url": "https://osteopathie-prenzlauer-berg.de/frauen-und-schwangere",
    "about": [
      { "@type": "MedicalTherapy", "name": "Osteopathie Frauenheilkunde", "relevantSpecialty": "Gynecology" },
      { "@type": "MedicalTherapy", "name": "Osteopathie in der Schwangerschaft", "relevantSpecialty": "Midwifery" }
    ],
    "audience": { "@type": "PeopleAudience", "audienceType": "Frauen und Schwangere" },
    "mentions": [...frauenheilkunde.symptome, ...schwangerschaft.symptome].map(name => ({
      "@type": "MedicalCondition", "name": name
    }))
  };
</script>

<SEO
  title={frauen.meta.title}
  description={frauen.meta.description}
  canonical="https://osteopathie-prenzlauer-berg.de/frauen-und-schwangere"
  breadcrumbs={[{ name: 'Frauen & Schwangere', href: '/frauen-und-schwangere' }]}
  extraJsonLd={pageJsonLd}
/>

<!-- Page Hero -->
<section class="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-primary-900 to-primary-700 text-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <nav class="text-sm text-primary-300 mb-4" aria-label="Breadcrumb">
      <a href="{base}/" class="hover:text-white transition-colors">Startseite</a>
      <span class="mx-2">›</span>
      <span class="text-white">Frauen & Schwangere</span>
    </nav>
    <h1 class="font-serif text-4xl lg:text-5xl font-bold mb-4">{frauen.heading}</h1>
    <p class="text-primary-200 text-lg max-w-2xl leading-relaxed">
      Osteopathische Begleitung für Frauen in allen Lebensphasen – von der Frauenheilkunde über die Schwangerschaft bis zur Nachgeburt.
    </p>
  </div>
</section>

<!-- Frauenheilkunde -->
<section class="py-16 lg:py-20 bg-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center gap-4 mb-8">
      <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      </div>
      <h2 class="font-serif text-2xl lg:text-3xl font-bold text-neutral-900">{frauenheilkunde.heading}</h2>
    </div>
    <p class="text-neutral-700 leading-relaxed mb-12 max-w-3xl">{frauenheilkunde.text}</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-neutral-50 rounded-2xl p-6">
        <h3 class="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
          <span class="w-2 h-6 bg-primary-500 rounded-full inline-block"></span>
          Typische Symptome
        </h3>
        <IndicationList items={frauenheilkunde.symptome} />
      </div>
      <div class="bg-primary-50 rounded-2xl p-6">
        <h3 class="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
          <span class="w-2 h-6 bg-gold-500 rounded-full inline-block"></span>
          Was Osteopathie bewirken kann
        </h3>
        <IndicationList items={frauenheilkunde.behandlung} />
      </div>
    </div>
  </div>
</section>

<!-- Divider -->
<div class="bg-gradient-to-r from-primary-100 to-primary-50 h-1"></div>

<!-- Schwangerschaft -->
<section class="py-16 lg:py-20 bg-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center gap-4 mb-8">
      <div class="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 0C8.686 4.5 6 7.186 6 10.5c0 3.314 2.686 6 6 6s6-2.686 6-6c0-3.314-2.686-6-6-6z"/>
        </svg>
      </div>
      <h2 class="font-serif text-2xl lg:text-3xl font-bold text-neutral-900">{schwangerschaft.heading}</h2>
    </div>
    <p class="text-neutral-700 leading-relaxed mb-12 max-w-3xl">{schwangerschaft.text}</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      <div class="bg-neutral-50 rounded-2xl p-6">
        <h3 class="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
          <span class="w-2 h-6 bg-primary-500 rounded-full inline-block"></span>
          Mögliche Beschwerden
        </h3>
        <IndicationList items={schwangerschaft.symptome} />
      </div>
      <div class="bg-primary-50 rounded-2xl p-6">
        <h3 class="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
          <span class="w-2 h-6 bg-gold-500 rounded-full inline-block"></span>
          Ziele der Behandlung
        </h3>
        <IndicationList items={schwangerschaft.ziele} />
      </div>
    </div>

    <!-- Nachgeburt -->
    <div class="bg-primary-800 text-white rounded-2xl p-8">
      <h3 class="font-serif text-xl font-bold mb-3">Osteopathie nach der Geburt</h3>
      <p class="text-primary-200 leading-relaxed">{schwangerschaft.nachgeburt}</p>
    </div>
  </div>
</section>

<CallToAction heading="Begleitung in der Schwangerschaft" />

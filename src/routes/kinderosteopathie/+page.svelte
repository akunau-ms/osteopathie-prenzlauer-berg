<script>
  import { base } from '$app/paths';
  import { siteContent } from '$lib/data/content.js';
  import IndicationList from '$lib/components/IndicationList.svelte';
  import CallToAction from '$lib/components/CallToAction.svelte';
  import SEO from '$lib/components/SEO.svelte';

  let { kinder } = siteContent;

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Kinderosteopathie Berlin Prenzlauer Berg",
    "description": kinder.meta.description,
    "url": "https://osteopathie-prenzlauer-berg.de/kinderosteopathie",
    "about": { "@type": "MedicalTherapy", "name": "Kinderosteopathie", "relevantSpecialty": "Pediatrics" },
    "audience": { "@type": "PeopleAudience", "audienceType": "Kinder und Säuglinge" },
    "mentions": kinder.indikationen.map(name => ({ "@type": "MedicalCondition", "name": name }))
  };
</script>

<SEO
  title={kinder.meta.title}
  description={kinder.meta.description}
  canonical="https://osteopathie-prenzlauer-berg.de/kinderosteopathie"
  breadcrumbs={[{ name: 'Kinderosteopathie', href: '/kinderosteopathie' }]}
  extraJsonLd={pageJsonLd}
/>

<!-- Page Hero -->
<section class="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-primary-900 to-primary-700 text-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <nav class="text-sm text-primary-300 mb-4" aria-label="Breadcrumb">
      <a href="{base}/" class="hover:text-white transition-colors">Startseite</a>
      <span class="mx-2">›</span>
      <span class="text-white">Kinderosteopathie</span>
    </nav>
    <h1 class="font-serif text-4xl lg:text-5xl font-bold mb-4">{kinder.heading}</h1>
    <p class="text-primary-200 text-lg max-w-2xl leading-relaxed">{kinder.intro}</p>
  </div>
</section>

<!-- Inhalt -->
<section class="py-16 lg:py-20 bg-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
      <div class="lg:col-span-3">
        <h2 class="font-serif text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">Behandlung & Diagnose</h2>
        <div class="prose prose-neutral max-w-none space-y-4 text-neutral-700 leading-relaxed">
          <p>{kinder.text}</p>
        </div>

        <!-- Highlight box -->
        <div class="mt-8 bg-primary-50 border-l-4 border-primary-500 rounded-r-xl p-6">
          <p class="text-primary-800 font-medium leading-relaxed">
            💡 Es ist sinnvoll, rechtzeitig mit einer Behandlung zu beginnen. Oft sind wenige Behandlungen ausreichend, um mögliche Einschränkungen zu beheben.
          </p>
        </div>
      </div>

      <!-- Sidebar info -->
      <div class="lg:col-span-2 bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
        <h3 class="font-serif text-lg font-bold text-neutral-900 mb-4">Die Behandlung</h3>
        <div class="space-y-3 text-sm text-neutral-700">
          {#each [
            { icon: '🤲', text: 'Sanfte manuelle Grifftechniken' },
            { icon: '🔍', text: 'Ausführliche Anamnese mit den Eltern' },
            { icon: '🧒', text: 'Kindsgerechte, schmerzfreie Untersuchung' },
            { icon: '✅', text: 'Oft wenige Behandlungen ausreichend' },
            { icon: '👶', text: 'Geeignet ab dem Neugeborenenalter' }
          ] as punkt}
            <div class="flex items-start gap-3">
              <span class="text-lg">{punkt.icon}</span>
              <span>{punkt.text}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Indikationen -->
<section class="py-16 lg:py-20 bg-neutral-50">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-10">
      <h2 class="font-serif text-2xl lg:text-3xl font-bold text-neutral-900 mb-2">Indikationen</h2>
      <p class="text-neutral-500">Beschwerdebilder, bei denen Kinderosteopathie helfen kann:</p>
    </div>
    <div class="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100">
      <IndicationList items={kinder.indikationen} columns={true} />
    </div>
  </div>
</section>

<CallToAction heading="Fragen zur Kinderosteopathie?" />

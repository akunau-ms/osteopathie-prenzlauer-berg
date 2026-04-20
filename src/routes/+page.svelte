<script>
  import { siteContent } from '$lib/data/content.js';
  import CallToAction from '$lib/components/CallToAction.svelte';
  import SEO from '$lib/components/SEO.svelte';

  let { home, praxis } = siteContent;

  const serviceIcons = {
    body: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>`,
    baby: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 0v2m0 2v8m-4-6H6a2 2 0 00-2 2v2a2 2 0 002 2h12a2 2 0 002-2v-2a2 2 0 00-2-2h-2m-4-2H8m4 0h4"/>`,
    heart: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>`
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was ist Osteopathie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Osteopathie ist ein ganzheitlicher manualtherapeutischer Behandlungsansatz, der den Menschen als Einheit aus Körper, Geist und Seele betrachtet. Sie wurde im 19. Jahrhundert von Andrew Taylor Still begründet und umfasst parietale, viscerale und kraniosakrale Techniken."
        }
      },
      {
        "@type": "Question",
        "name": "Bei welchen Beschwerden hilft Osteopathie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Osteopathie hilft bei Rückenschmerzen, Kopfschmerzen, muskulären Verspannungen, Bandscheibenproblemen, Gelenkschmerzen, Verdauungsbeschwerden, Kiefergelenksproblemen (CMD) sowie Beschwerden in Extremitäten."
        }
      },
      {
        "@type": "Question",
        "name": "Wie läuft eine osteopathische Behandlung ab?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eine Behandlung beginnt mit einer ausführlichen Anamnese, gefolgt von einer ganzheitlichen körperlichen Untersuchung. Der Osteopath behandelt mit sanften manuellen Griffen ohne Medikamente oder Geräte. Eine Sitzung dauert in der Regel 45–60 Minuten."
        }
      },
      {
        "@type": "Question",
        "name": "Übernehmen Krankenkassen die Kosten für Osteopathie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Viele gesetzliche Krankenkassen erstatten Osteopathie-Behandlungen anteilig als freiwillige Leistung. Die genauen Konditionen variieren je nach Kasse. Bitte erfragen Sie die Konditionen direkt bei Ihrer Krankenkasse."
        }
      },
      {
        "@type": "Question",
        "name": "Ist Osteopathie auch für Kinder geeignet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, Osteopathie ist bereits für Neugeborene geeignet. Kinderosteopathie hilft bei Geburtsfolgen, Schädelasymmetrien, KISS-Syndrom, Schreibabys, Schlafstörungen und motorischen Entwicklungsverzögerungen."
        }
      }
    ]
  };
</script>

<SEO
  title="Osteopath Berlin Prenzlauer Berg | {praxis.therapeut} – Osteopathie"
  description="Osteopathie-Praxis in Berlin Prenzlauer Berg. Marco Mathavan behandelt mit ganzheitlichem Ansatz: Osteopathie, Kinderosteopathie, Frauen & Schwangere. ☎ 0163/8715198"
  canonical="https://osteopathie-prenzlauer-berg.de/"
  extraJsonLd={faqSchema}
/>

<!-- Hero -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-900">
  <div class="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 opacity-95"></div>
  <!-- Decorative circles -->
  <div class="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary-700 opacity-20 blur-3xl"></div>
  <div class="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-gold-500 opacity-10 blur-3xl"></div>

  <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-24 pb-16">
    <span class="inline-block px-4 py-1.5 mb-6 bg-primary-700 bg-opacity-60 text-primary-200 text-sm font-medium rounded-full tracking-wider uppercase">
      Berlin · Prenzlauer Berg
    </span>
    <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 whitespace-pre-line">
      {home.hero.headline}
    </h1>
    <p class="text-lg sm:text-xl text-primary-200 max-w-2xl mx-auto mb-10 leading-relaxed">
      {home.hero.subline}
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href={home.hero.ctaHref}
        class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-neutral-900 font-semibold rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
      >
        {home.hero.cta}
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </a>
      <a
        href="/osteopathie"
        class="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-400 hover:border-white text-white hover:bg-primary-700 font-semibold rounded-full text-lg transition-all duration-200"
      >
        Mehr erfahren
      </a>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary-300">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>
  </div>
</section>

<!-- Intro / About -->
<section class="py-16 lg:py-24 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <span class="text-primary-600 text-sm font-semibold tracking-widest uppercase mb-3 block">Ihre Praxis</span>
        <h2 class="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">{home.intro.heading}</h2>
        <p class="text-neutral-600 text-lg leading-relaxed mb-6">{home.intro.text}</p>
        <p class="text-neutral-600 leading-relaxed">
          Ich behandle Sie in meiner Praxis in <strong>Berlin Prenzlauer Berg</strong> – zentral gelegen und gut mit öffentlichen Verkehrsmitteln erreichbar.
        </p>
        <div class="mt-8 flex items-center gap-4">
          <a href="/kontakt" class="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-600 transition-colors duration-150">
            Zur Praxis →
          </a>
        </div>
      </div>
      <div class="bg-primary-50 rounded-3xl p-8 lg:p-10">
        <div class="flex items-start gap-5 mb-6">
          <img
            src="/images/marco-mathavan.jpg"
            alt="Marco Mathavan – Osteopath Berlin Prenzlauer Berg"
            width="90"
            height="120"
            class="rounded-2xl object-cover shadow-md shrink-0"
          />
          <div class="pt-1">
            <p class="font-serif font-bold text-neutral-900 text-xl leading-tight">{praxis.therapeut}</p>
            <p class="text-primary-600 text-sm font-medium mt-1">{praxis.berufsbezeichnung}</p>
            <p class="text-neutral-500 text-xs mt-2 leading-relaxed">Ganzheitliche manualtherapeutische Behandlung in Berlin seit über 20 Jahren</p>
          </div>
        </div>
        <div class="space-y-3 text-sm text-neutral-600">
          <div class="flex items-center gap-3">
            <svg class="w-4 h-4 text-primary-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            {praxis.adresse}, {praxis.plz} Berlin
          </div>
          <div class="flex items-center gap-3">
            <svg class="w-4 h-4 text-primary-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <a href="tel:01638715198" class="hover:text-primary-700 transition-colors">{praxis.telefon}</a>
          </div>
          <div class="flex items-center gap-3">
            <svg class="w-4 h-4 text-primary-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            {praxis.oeffnungszeiten}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Leistungen Cards -->
<section class="py-16 lg:py-24 bg-neutral-50">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <span class="text-primary-600 text-sm font-semibold tracking-widest uppercase mb-3 block">Leistungen</span>
      <h2 class="font-serif text-3xl lg:text-4xl font-bold text-neutral-900">Mein Behandlungsangebot</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each home.leistungen as leistung}
        <a
          href={leistung.href}
          class="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md border border-neutral-100 hover:border-primary-200 transition-all duration-200 hover:-translate-y-1 flex flex-col"
        >
          <div class="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-6 group-hover:bg-primary-700 transition-colors duration-200">
            <svg class="w-6 h-6 text-primary-700 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {@html serviceIcons[leistung.icon]}
            </svg>
          </div>
          <h3 class="font-serif text-xl font-bold text-neutral-900 mb-3">{leistung.title}</h3>
          <p class="text-neutral-600 text-sm leading-relaxed flex-1">{leistung.description}</p>
          <span class="mt-6 text-primary-700 text-sm font-semibold group-hover:text-primary-600 transition-colors duration-150 flex items-center gap-1">
            Mehr erfahren
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </span>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Prinzipien / Philosophie -->
<section class="py-16 lg:py-20 bg-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <span class="text-primary-600 text-sm font-semibold tracking-widest uppercase mb-3 block">Philosophie</span>
    <h2 class="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">Grundprinzipien der Osteopathie</h2>
    <p class="text-neutral-500 mb-12">Nach Andrew Taylor Still, dem Begründer der Osteopathie</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each [
        { num: '01', text: 'Der Mensch ist eine Einheit aus Körper, Geist und Seele' },
        { num: '02', text: 'Der Körper besitzt selbstregulierende und selbstheilende Mechanismen' },
        { num: '03', text: 'Struktur und Funktion beeinflussen sich wechselseitig' }
      ] as prinzip}
        <div class="bg-primary-50 rounded-2xl p-6 text-left">
          <span class="font-serif text-5xl font-bold text-primary-200 block mb-4">{prinzip.num}</span>
          <p class="text-neutral-700 font-medium leading-relaxed">{prinzip.text}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<CallToAction />

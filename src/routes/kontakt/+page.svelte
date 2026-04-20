<script>
  import { siteContent } from '$lib/data/content.js';
  import SEO from '$lib/components/SEO.svelte';

  let { praxis, kontakt } = siteContent;

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kontakt – Osteopathie Prenzlauer Berg",
    "url": "https://osteopathie-prenzlauer-berg.de/kontakt",
    "mainEntity": {
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "name": praxis.name,
      "telephone": praxis.telefon,
      "email": praxis.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": praxis.adresse,
        "postalCode": praxis.plz,
        "addressLocality": praxis.stadt,
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": praxis.koordinaten.lat,
        "longitude": praxis.koordinaten.lng
      },
      "hasMap": `https://www.openstreetmap.org/?mlat=${praxis.koordinaten.lat}&mlon=${praxis.koordinaten.lng}#map=16/${praxis.koordinaten.lat}/${praxis.koordinaten.lng}`
    }
  };
</script>

<SEO
  title={kontakt.meta.title}
  description={kontakt.meta.description}
  canonical="https://osteopathie-prenzlauer-berg.de/kontakt"
  breadcrumbs={[{ name: 'Kontakt', href: '/kontakt' }]}
  extraJsonLd={pageJsonLd}
/>

<!-- Page Hero -->
<section class="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-primary-900 to-primary-700 text-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <nav class="text-sm text-primary-300 mb-4" aria-label="Breadcrumb">
      <a href="/" class="hover:text-white transition-colors">Startseite</a>
      <span class="mx-2">›</span>
      <span class="text-white">Kontakt</span>
    </nav>
    <h1 class="font-serif text-4xl lg:text-5xl font-bold mb-4">Kontakt & Anfahrt</h1>
    <p class="text-primary-200 text-lg leading-relaxed">Vereinbaren Sie Ihren Termin telefonisch oder per E-Mail. Ich freue mich auf Sie.</p>
  </div>
</section>

<!-- Kontakt Cards + Karte -->
<section class="py-16 lg:py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

      <!-- Kontaktdaten -->
      <div class="space-y-8">
        <!-- Praxis Info -->
        <div>
          <h2 class="font-serif text-2xl font-bold text-neutral-900 mb-6">Praxisdetails</h2>
          <div class="space-y-5">
            <!-- Adresse -->
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                <svg class="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-neutral-900 mb-1">Adresse</p>
                <address class="not-italic text-neutral-600 leading-relaxed">
                  {praxis.therapeut}<br />
                  {praxis.adresse}<br />
                  {praxis.plz} {praxis.stadt} ({praxis.stadtteil})
                </address>
              </div>
            </div>

            <!-- Telefon -->
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-neutral-900 mb-1">Telefon</p>
                <a href="tel:01638715198" class="text-primary-700 hover:text-primary-600 transition-colors text-lg font-medium">
                  {praxis.telefon}
                </a>
              </div>
            </div>

            <!-- E-Mail -->
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-neutral-900 mb-1">E-Mail</p>
                <a href="mailto:{praxis.email}" class="text-primary-700 hover:text-primary-600 transition-colors break-all">
                  {praxis.email}
                </a>
              </div>
            </div>

            <!-- Öffnungszeiten -->
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-neutral-900 mb-1">Öffnungszeiten</p>
                <p class="text-neutral-600">{praxis.oeffnungszeiten}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-primary-50 rounded-2xl p-6">
          <h3 class="font-serif text-lg font-bold text-neutral-900 mb-2">Termin vereinbaren</h3>
          <p class="text-neutral-600 text-sm mb-4">Rufen Sie mich einfach an. Ich berate Sie gerne und finde einen passenden Termin.</p>
          <a
            href="tel:01638715198"
            class="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 hover:bg-primary-600 text-white font-semibold rounded-full text-sm transition-colors duration-200"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Jetzt anrufen
          </a>
        </div>
      </div>

      <!-- Karte + Anfahrt -->
      <div>
        <h2 class="font-serif text-2xl font-bold text-neutral-900 mb-6">Anfahrt</h2>

        <!-- OpenStreetMap embed -->
        <div class="rounded-2xl overflow-hidden shadow-md border border-neutral-200 mb-6 h-72">
          <iframe
            title="Karte: Hagenauer Str. 14, Berlin Prenzlauer Berg"
            width="100%"
            height="100%"
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=13.4088%2C52.5367%2C13.4208%2C52.5427&layer=mapnik&marker=52.5397%2C13.4148"
            style="border: 0"
          ></iframe>
        </div>
        <a
          href="https://www.openstreetmap.org/?mlat=52.5397&mlon=13.4148#map=16/52.5397/13.4148"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-primary-600 hover:text-primary-700 transition-colors duration-150 inline-flex items-center gap-1 mb-8"
        >
          Größere Karte öffnen ↗
        </a>

        <!-- ÖPNV -->
        <div class="bg-neutral-50 rounded-2xl p-6">
          <h3 class="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
            <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
            </svg>
            Mit öffentlichen Verkehrsmitteln
          </h3>
          <div class="space-y-3 text-sm text-neutral-700">
            <div class="flex items-start gap-3">
              <span class="px-2 py-0.5 bg-primary-700 text-white text-xs font-bold rounded shrink-0 mt-0.5">Tram</span>
              <span>{praxis.anfahrt.strassenbahn}</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="px-2 py-0.5 bg-primary-800 text-white text-xs font-bold rounded shrink-0 mt-0.5">U2</span>
              <span>{praxis.anfahrt.ubahn}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

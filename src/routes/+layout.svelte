<script>
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { siteContent } from '$lib/data/content.js';
  import { base } from '$app/paths';

  let { children } = $props();
  let { praxis } = siteContent;

  // MedicalBusiness JSON-LD present on every page
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "name": praxis.name,
    "url": "https://osteopathie-prenzlauer-berg.de",
    "telephone": praxis.telefon,
    "email": praxis.email,
    "image": "https://osteopathie-prenzlauer-berg.de/images/marco-mathavan.jpg",
    "logo": "https://osteopathie-prenzlauer-berg.de/favicon.svg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": praxis.adresse,
      "postalCode": praxis.plz,
      "addressLocality": praxis.stadt,
      "addressRegion": "Berlin",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": praxis.koordinaten.lat,
      "longitude": praxis.koordinaten.lng
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "description": "Termine nach telefonischer Vereinbarung"
    },
    "medicalSpecialty": "Osteopathy",
    "founder": {
      "@type": "Person",
      "name": praxis.therapeut,
      "jobTitle": praxis.berufsbezeichnung,
      "image": "https://osteopathie-prenzlauer-berg.de/images/marco-mathavan.jpg",
      "worksFor": { "@type": "MedicalOrganization", "name": praxis.name }
    },
    "areaServed": [
      { "@type": "City", "name": "Berlin" },
      { "@type": "AdministrativeArea", "name": "Berlin Prenzlauer Berg" },
      { "@type": "AdministrativeArea", "name": "Berlin Mitte" },
      { "@type": "AdministrativeArea", "name": "Berlin Pankow" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Osteopathische Behandlungen",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "Osteopathie" } },
        { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "Kinderosteopathie" } },
        { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "Osteopathie für Frauen und Schwangere" } }
      ]
    }
  };
</script>

<svelte:head>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <meta name="robots" content="index, follow" />
  {@html `<script type="application/ld+json">${JSON.stringify(localBusinessSchema)}<\/script>`}
</svelte:head>

<Header />
<main>
  {@render children()}
</main>
<Footer />

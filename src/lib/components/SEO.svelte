<script>
  /**
   * @typedef {Object} SEOProps
   * @property {string} title
   * @property {string} description
   * @property {string} canonical
   * @property {string} [ogImage]
   * @property {import('../../lib/data/content.js').BreadcrumbItem[]} [breadcrumbs]
   * @property {any} [extraJsonLd]
   */

  /** @type {SEOProps} */
  let {
    title,
    description,
    canonical,
    ogImage = '/og-image.svg',
    breadcrumbs = [],
    extraJsonLd = null
  } = $props();

  const BASE_URL = 'https://osteopathie-prenzlauer-berg.de';
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;

  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": `${BASE_URL}/` },
      ...breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        "position": i + 2,
        "name": b.name,
        "item": `${BASE_URL}${b.href}`
      }))
    ]
  } : null;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="de_DE" />
  <meta property="og:site_name" content="Osteopathie Prenzlauer Berg" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={fullOgImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Osteopathie Prenzlauer Berg – Marco Mathavan" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={fullOgImage} />

  <!-- Geo / Local -->
  <meta name="geo.region" content="DE-BE" />
  <meta name="geo.placename" content="Berlin Prenzlauer Berg" />
  <meta name="geo.position" content="52.5397;13.4148" />
  <meta name="ICBM" content="52.5397, 13.4148" />

  <!-- Author -->
  <meta name="author" content="Marco Mathavan, Osteopath" />

  <!-- JSON-LD: Breadcrumb -->
  {#if breadcrumbSchema}
    {@html `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}<\/script>`}
  {/if}

  <!-- JSON-LD: Extra (page-specific) -->
  {#if extraJsonLd}
    {@html `<script type="application/ld+json">${JSON.stringify(extraJsonLd)}<\/script>`}
  {/if}
</svelte:head>

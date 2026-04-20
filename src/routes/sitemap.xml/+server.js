export const prerender = true;

import { siteContent } from '$lib/data/content.js';

const BASE_URL = 'https://osteopathie-prenzlauer-berg.de';

const pages = [
  { path: '/',                       priority: '1.0', changefreq: 'monthly' },
  { path: '/osteopathie',            priority: '0.9', changefreq: 'monthly' },
  { path: '/kinderosteopathie',      priority: '0.8', changefreq: 'monthly' },
  { path: '/frauen-und-schwangere',  priority: '0.8', changefreq: 'monthly' },
  { path: '/kontakt',                priority: '0.7', changefreq: 'yearly'  },
];

const today = new Date().toISOString().split('T')[0];

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${BASE_URL}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600'
    }
  });
}

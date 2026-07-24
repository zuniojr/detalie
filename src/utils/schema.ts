/**
 * Geradores de Schema JSON-LD para SEO.
 * Produzem dados estruturados para Google Search Console e rich snippets.
 */

import { COMPANY, CONTACT, ADDRESS, SOCIAL, SITE } from './constants';

/** Schema LocalBusiness / FurnitureStore */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    name: COMPANY.name,
    description: COMPANY.description,
    url: SITE.url,
    telephone: CONTACT.phone,
    priceRange: COMPANY.priceRange,
    image: `${SITE.url}${SITE.ogImage}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.zip,
      addressCountry: ADDRESS.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ADDRESS.coordinates.latitude,
      longitude: ADDRESS.coordinates.longitude,
    },
    sameAs: [SOCIAL.instagram, SOCIAL.facebook],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00',
      },
    ],
  };
}

/** Schema BreadcrumbList */
export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  };
}

/** Schema FAQPage */
export function getFAQSchema(
  questions: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}

/** Schema WebPage */
export function getWebPageSchema(page: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: `${SITE.url}${page.url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: COMPANY.name,
      url: SITE.url,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
      url: SITE.url,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}${SITE.ogImage}`,
      },
    },
  };
}

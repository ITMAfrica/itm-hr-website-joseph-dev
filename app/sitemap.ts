import type { MetadataRoute } from 'next';

// Configuration des pays et des langues supportées
const COUNTRIES = [
  'cd',
  'za',
  'ao',
  'bj',
  'cm',
  'cg',
  'gb',
  'ke',
  'ng',
  'rw',
  'tz',
  'tg',
  'ug',
  'zm',
  'bi',
  'ci',
  'sn',
  'de',
  'gn',
];

const LANGUAGES = ['en', 'fr'];

const BASE_URL = 'https://itmafrica.com';

// Configuration des pages avec leurs traductions par langue
const PAGES_CONFIG: Record<
  string,
  {
    en: string;
    fr: string;
    priority: number;
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  }
> = {
  home: {
    en: '',
    fr: '',
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  about: {
    en: 'about-us',
    fr: 'a-propos-de-nous',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  services: {
    en: 'services',
    fr: 'services',
    priority: 0.85,
    changeFrequency: 'monthly',
  },
  training: {
    en: 'training',
    fr: 'formations',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  news: {
    en: 'news',
    fr: 'actualites',
    priority: 0.7,
    changeFrequency: 'weekly',
  },
  contact: {
    en: 'contact-us',
    fr: 'contactez-nous',
    priority: 0.75,
    changeFrequency: 'monthly',
  },
};

// Priorités par pays (principale présence)
const COUNTRY_PRIORITY: Record<string, number> = {
  cd: 1.0, // Siège social
  za: 0.95, // Présence importante
  ng: 0.95, // Présence importante
  cm: 0.9,
  ao: 0.85,
  bj: 0.85,
  cg: 0.8,
  ke: 0.8,
  tz: 0.8,
  tg: 0.8,
  ug: 0.75,
  zm: 0.75,
  rw: 0.75,
  bi: 0.7,
  ci: 0.7,
  sn: 0.7,
  gb: 0.65,
  de: 0.6,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();
  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  // Page d'accueil principale
  entries.push({
    url: BASE_URL,
    lastModified: now,
    changeFrequency: 'daily',
    priority: 1,
  });

  // Pour chaque langue et pays
  LANGUAGES.forEach((lang) => {
    COUNTRIES.forEach((country) => {
      const countryBasePriority = COUNTRY_PRIORITY[country] || 0.7;

      // Page accueil du pays
      entries.push({
        url: `${BASE_URL}/${lang}/${country}`,
        lastModified: yesterday,
        changeFrequency: 'weekly',
        priority: countryBasePriority,
      });

      // Pages principales du pays
      Object.entries(PAGES_CONFIG).forEach(([pageKey, pageConfig]) => {
        // Ne pas ajouter la page home deux fois
        if (pageKey === 'home') return;

        const pagePath = lang === 'en' ? pageConfig.en : pageConfig.fr;
        if (pagePath) {
          entries.push({
            url: `${BASE_URL}/${lang}/${country}/${pagePath}`,
            lastModified: yesterday,
            changeFrequency: pageConfig.changeFrequency as
              | 'daily'
              | 'weekly'
              | 'monthly'
              | 'yearly',
            priority: countryBasePriority * pageConfig.priority,
          });
        }
      });
    });
  });

  return entries;
}

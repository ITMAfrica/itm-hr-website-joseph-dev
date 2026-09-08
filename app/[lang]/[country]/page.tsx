import AboutPage from '@/components/pages/about';
import ContactPage from '@/components/pages/contact';
import HomePage from '@/components/pages/home';
import NewsPage from '@/components/pages/news';
import ServicesPage from '@/components/pages/services';
import TrainingPage from '@/components/pages/training';
import { getDictionary } from '@/get-dictionary';
import { getCountryCode } from '@/helpers';
import { generateMetadata as generateMeta } from '@/lib/metadata';
import { notFound } from 'next/navigation';

// Map country codes to country names
const COUNTRY_CODES = [
  'cd',
  'tz',
  'tg',
  'ao',
  'bj',
  'bu',
  'cg',
  'cm',
  'de',
  'bi',
  'gb',
  'ke',
  'ng',
  'ug',
  'za',
  'zm',
  'rw',
  'ci',
  'sn',
  'gn',
];

const PAGE_PATHS: Record<string, string> = {
  'about-us': 'about-us',
  'a-propos-de-nous': 'a-propos-de-nous',
  services: 'services',
  training: 'training',
  formations: 'formations',
  news: 'news',
  actualites: 'actualites',
  'contact-us': 'contact-us',
  'contactez-nous': 'contactez-nous',
};

export async function generateMetadata({ params }: any) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const country = getCountryCode(resolvedParams.country);
  const dictionary = getDictionary(lang);
  const notFoundData: any = dictionary.globalContent.pages.notFound;

  let metaData: any;
  let pagePath = '';
  let isCountryPage = COUNTRY_CODES.includes(resolvedParams.country);

  if (isCountryPage) {
    const data: any = dictionary[country].pages;
    metaData = data.home.meta;
  } else {
    // It's a page route
    const data: any = dictionary[country].pages;
    pagePath = PAGE_PATHS[resolvedParams.country] || resolvedParams.country;

    switch (resolvedParams.country) {
      case 'about-us':
      case 'a-propos-de-nous':
        metaData = data.about.meta;
        break;
      case 'services':
        metaData = data.services.meta;
        break;
      case 'training':
      case 'formations':
        metaData = data.training.meta;
        break;
      case 'news':
      case 'actualites':
        metaData = data.news.meta;
        break;
      case 'contact-us':
      case 'contactez-nous':
        metaData = data.contact.meta;
        break;
      default:
        metaData = notFoundData.meta;
    }
  }

  return generateMeta({
    title: metaData?.title || 'ITM Africa',
    description:
      metaData?.description || 'ITM HR - Strategic HR Solutions in Africa',
    keywords: metaData?.keywords || [],
    locale: lang,
    country: isCountryPage ? resolvedParams.country : undefined,
    path: pagePath || undefined,
    images: ['/assets/logo/logo.png'],
    type: 'website',
  });
}

export default async function PageCountry({ params }: { params: any }) {
  const resolvedParams = await params;
  switch (resolvedParams.country) {
    case 'cd':
      return <HomePage params={resolvedParams} />;
    case 'tz':
      return <HomePage params={resolvedParams} />;
    case 'tg':
      return <HomePage params={resolvedParams} />;
    case 'ao':
      return <HomePage params={resolvedParams} />;
    case 'bj':
      return <HomePage params={resolvedParams} />;
    case 'bu':
      return <HomePage params={resolvedParams} />;
    case 'cg':
      return <HomePage params={resolvedParams} />;
    case 'cm':
      return <HomePage params={resolvedParams} />;
    case 'de':
      return <HomePage params={resolvedParams} />;
    case 'bi':
      return <HomePage params={resolvedParams} />;
    case 'gb':
      return <HomePage params={resolvedParams} />;
    case 'ke':
      return <HomePage params={resolvedParams} />;
    case 'ng':
      return <HomePage params={resolvedParams} />;
    case 'ug':
      return <HomePage params={resolvedParams} />;
    case 'za':
      return <HomePage params={resolvedParams} />;
    case 'zm':
      return <HomePage params={resolvedParams} />;
    case 'rw':
      return <HomePage params={resolvedParams} />;
    case 'ci':
      return <HomePage params={resolvedParams} />;
    case 'sn':
      return <HomePage params={resolvedParams} />;
    case 'gn':
      return <HomePage params={resolvedParams} />;
    case 'about-us':
      return <AboutPage params={resolvedParams} />;
    case 'a-propos-de-nous':
      return <AboutPage params={resolvedParams} />;
    case 'services':
      return <ServicesPage params={resolvedParams} />;
    case 'training':
      return <TrainingPage params={resolvedParams} />;
    case 'formations':
      return <TrainingPage params={resolvedParams} />;
    case 'news':
      return <NewsPage params={resolvedParams} />;
    case 'actualites':
      return <NewsPage params={resolvedParams} />;
    case 'contact-us':
      return <ContactPage params={resolvedParams} />;
    case 'contactez-nous':
      return <ContactPage params={resolvedParams} />;
    default:
      notFound();
  }
}

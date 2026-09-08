import AboutPage from '@/components/pages/about';
import ContactPage from '@/components/pages/contact';
import NewsPage from '@/components/pages/news';
import ServicesPage from '@/components/pages/services';
import TrainingPage from '@/components/pages/training';
import { getDictionary } from '@/get-dictionary';
import { getCountryCode } from '@/helpers';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: any) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const country = getCountryCode(resolvedParams.country);
  const dictionary = getDictionary(lang);
  const data: any = dictionary[country].pages;
  const notFound: any = dictionary.globalContent.pages.notFound;

  switch (resolvedParams.page) {
    case 'about-us':
      return data.about.meta;
    case 'a-propos-de-nous':
      return data.about.meta;
    case 'services':
      return data.services.meta;
    case 'training':
      return data.training.meta;
    case 'formations':
      return data.training.meta;
    case 'news':
      return data.news.meta;
    case 'actualites':
      return data.news.meta;
    case 'contact-us':
      return data.contact.meta;
    case 'contactez-nous':
      return data.contact.meta;
    default:
      return notFound.meta;
  }
}

export default async function PageCountry({ params }: { params: any }) {
  const resolvedParams = await params;
  switch (resolvedParams.country) {
    case 'cd':
      return getComponent({ params: resolvedParams });
    case 'tz':
      return getComponent({ params: resolvedParams });
    case 'tg':
      return getComponent({ params: resolvedParams });
    case 'ao':
      return getComponent({ params: resolvedParams });
    case 'bj':
      return getComponent({ params: resolvedParams });
    case 'bi':
      return getComponent({ params: resolvedParams });
    case 'cg':
      return getComponent({ params: resolvedParams });
    case 'cm':
      return getComponent({ params: resolvedParams });
    case 'de':
      return getComponent({ params: resolvedParams });
    case 'gb':
      return getComponent({ params: resolvedParams });
    case 'ke':
      return getComponent({ params: resolvedParams });
    case 'ng':
      return getComponent({ params: resolvedParams });
    case 'ug':
      return getComponent({ params: resolvedParams });
    case 'za':
      return getComponent({ params: resolvedParams });
    case 'zm':
      return getComponent({ params: resolvedParams });
    case 'rw':
      return getComponent({ params: resolvedParams });
    case 'ci':
      return getComponent({ params: resolvedParams });
    case 'sn':
      return getComponent({ params: resolvedParams });
    case 'gn':
      return getComponent({ params: resolvedParams });
    case 'about-us':
      return <AboutPage params={resolvedParams} />;
    case 'a-propos-de-nous':
      return <AboutPage params={resolvedParams} />;
  }
}
function getComponent({ params }: any) {
  switch (params.page) {
    case 'about-us':
      return <AboutPage params={params} />;
    case 'a-propos-de-nous':
      return <AboutPage params={params} />;
    case 'services':
      return <ServicesPage params={params} />;
    case 'training':
      return <TrainingPage params={params} />;
    case 'formations':
      return <TrainingPage params={params} />;
    case 'news':
      return <NewsPage params={params} />;
    case 'actualites':
      return <NewsPage params={params} />;
    case 'contact-us':
      return <ContactPage params={params} />;
    case 'contactez-nous':
      return <ContactPage params={params} />;
    default:
      notFound();
  }
}

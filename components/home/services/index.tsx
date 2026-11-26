import SectionTitle from '@/components/global/section_title';
import { getDictionary } from '@/get-dictionary';
import HomeServicesCarousel from './carousel';

export default function HomeServicesSection({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.home.services;

  return (
    <section className="bg-white lg:flex justify-end">
      <div className="md:flex justify-between lg:py-20 py-10 w-11/12 mx-auto lg:mx-0">
        <div className="md:w-3/12 w-11/12 lg:mx-auto lg:pr-4">
          <div className="lg:mb-20 mb-10">
            <SectionTitle text={data.title} />
            <h2 data-reveal className="text-blue_itm_good md:text-5xl text-3xl font-bold mt-4 mb-4">
              {data.subtitle}
            </h2>
            <p data-reveal className="sm:text-xl font-open text-lg text-black_itm">
              {data.paragraph}
            </p>
          </div>
        </div>
        <div data-reveal className="md:w-8/12">
          <HomeServicesCarousel params={params} />
        </div>
      </div>
    </section>
  );
}

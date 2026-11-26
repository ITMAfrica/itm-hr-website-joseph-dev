import { getDictionary } from '@/get-dictionary';
import TestimoniesCarousel from './carousel';

export default function HomeTestimonies({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.home.testimonies;
  return (
    <section className="overflow-x-hidden bg-white py-8 md:pb-14 md:pt-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
        <h2 data-reveal className="mx-auto max-w-3xl text-center text-4xl font-bold text-blue_itm_primary md:text-5xl">
          {data.title}
        </h2>
        <p data-reveal className="mx-auto mt-3 max-w-xl text-center text-sm text-gray_itm md:text-base">
          {data.subtitle}
        </p>
        <div data-reveal className="mx-auto mt-8 w-full max-w-6xl md:mt-12 md:w-11/12 lg:w-10/12">
          <TestimoniesCarousel />
        </div>
      </div>
    </section>
  );
}

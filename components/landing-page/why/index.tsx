'use client';

import SectionTitle from '@/components/global/section_title';
import { getDictionary } from '@/get-dictionary';
import CardLandingPage from './card';
import StaggeredFadeIn from '@/components/global/staggered_fade_in';

export default function WhyUsLandingPageSection({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.hr.why;

  return (
    <section className="bg-white py-4">
      <StaggeredFadeIn>
        <div className="flex items-center md:w-10/12 w-11/12 mx-auto py-16">
          <div className="w-full">
            <div data-reveal className="lg:flex justify-between gap-10 lg:mb-16 mb-10">
              <div className="shrink-0">
                <SectionTitle text="ITM HR" />
                <h1 className="text-blue_itm_good text-3xl md:text-4xl font-bold mb-4">
                  {data.subtitle}
                </h1>
              </div>
              <p className="lg:w-[55%] text-lg md:text-xl">{data.text}</p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.cards.map((item: any, index: number) => {
                return <CardLandingPage {...item} key={index} index={index} />;
              })}
            </div>
          </div>
        </div>
      </StaggeredFadeIn>
    </section>
  );
}

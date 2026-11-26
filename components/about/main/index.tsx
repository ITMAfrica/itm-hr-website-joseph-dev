'use client';
import CardFaq from '@/components/global/cards/faq';
import { getDictionary } from '@/get-dictionary';
import imageLeft from '@/public/assets/bg/bg.about.jpg';
import imageRight from '@/public/assets/bg/design_about.png';
import Image from 'next/image';
import { useState } from 'react';

export default function AboutPageHoldingSection({ params }: { params: any }) {
  const [faqs] = useState(Array.from({ length: 3 }));
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.about.about;
  return (
    <section
      className="about-page-bg-aside bg-white bg-left bg-no-repeat py-10 lg:py-20"
      id="holding"
    >
      <div className="w-11/12 lg:w-10/12 flex flex-wrap lg:flex-nowrap lg:flex-row flex-col-reverse h-full mx-auto md:pb-20">
        <div className="w-full lg:pb-0 lg:pt-0 pt-20 lg:w-6/12">
          <h1 data-reveal className="text-blue_itm_aqua_marine font-bold pb-4">
            ITM HOLDING
          </h1>
          <h2 data-reveal className="text-5xl font-bold text-blue_itm_primary pb-4">
            {data.title}
          </h2>
          <p data-reveal className="max-w-prose font-open text-xl text-black_itm">
            {data.description}
          </p>
          <div data-reveal className="w-full">
            {data.items.map(function (item: any, index: number) {
              return <CardFaq {...item} about key={index} />;
            })}
          </div>
        </div>
        <div className="w-full md:w-6/12 mx-auto lg:pb-0 pb-10 h-full flex items-center justify-center relative">
          <div data-reveal="fade" className="w-10/12 lg:w-[400px] h-[400px] sm:h-[500px] md:h-[400px] lg:h-[550px] shadow-2xl shadow-black/60 relative">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <Image
                src={imageLeft}
                fill
                alt="left"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="w-full h-full shadow-2xl shadow-black/60 absolute top-[20%] left-[20%]">
              <div className="w-full h-full  shadow-xl relative rounded-lg overflow-hidden">
                <Image
                  src={imageRight}
                  fill
                  alt="right"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
          <div className="w-2/12 lg:hidden block"></div>
        </div>
      </div>
    </section>
  );
}

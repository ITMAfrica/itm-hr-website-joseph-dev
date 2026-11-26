'use client';
import SectionTitle from '@/components/global/section_title';
import { getDictionary } from '@/get-dictionary';
import { useState } from 'react';
import Carousel from 'react-simply-carousel';
import CardTeam from '../cards/team';

export default function Teams({ toShow = 5, params, team }: any) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.global.team;
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="w-full py-20 bg-white" id="team">
      <div className="w-11/12 mx-auto">
        <div className="w-fit mx-auto">
          <SectionTitle text={data.title} />
        </div>
        <h1 data-reveal className="font-bold text-4xl text-center text-blue_itm_primary pb-5">
          {data.subtitle}
        </h1>
        <main data-reveal className="w-full flex justify-between relative">
          <Carousel
            activeSlideIndex={activeSlide}
            containerProps={{
              style: {
                flex: '1',
                alignItems: 'center',
                alignContent: 'center',
                padding: 20,
              },
            }}
            onRequestChange={setActiveSlide}
            easing="linear"
            responsiveProps={[
              { minWidth: 700, maxWidth: 1200, itemsToShow: 3 },
              { maxWidth: 450, itemsToShow: 1 },
            ]}
            itemsToShow={toShow}
            infinite={true}
            autoplay={true}
            autoplayDelay={2000}
            itemsToScroll={1}
            speed={1000}
          >
            {team.map((item: any, index: number) => (
              <CardTeam key={index} {...item} />
            ))}
          </Carousel>
          <div className="w-fit cursor-pointer h-5 z-10 absolute flex items-center m-auto left-0 right-0 -bottom-5">
            {team.map((item: any, index: number) =>
              index === activeSlide ? (
                <div
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className="mr-1 md:w-14 w-10 h-2 rounded-full bg-blue_itm_good"
                ></div>
              ) : (
                <div
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className="mr-1 w-2 h-2 rounded-full bg-blue_itm_good"
                ></div>
              )
            )}
          </div>
        </main>
      </div>
    </section>
  );
}

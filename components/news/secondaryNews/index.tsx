'use client';
import Image from 'next/image';
import Carousel from 'react-simply-carousel';
import bg from '@/public/assets/bg/bg.news.png';
import bgHover from '@/public/assets/bg/bg.hover.png';
import CardNews from '../card';
import { useRef, useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

export default function NewsPageSecondary({
  toShow = 1,
  data = Array.from({ length: 10 }),
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const refRight = useRef(null);
  return (
    <section className="w-full bg-white lg:py-20 py-10">
      <div className="w-11/12 lg:w-10/12 mx-auto h-full ">
        <main className="w-full mr-0">
          <header data-reveal className="h-fit w-full flex justify-between items-center  mb-5">
            <div className="w-fit items-center flex flex-wrap ">
              <h1 className="font-bold text-blue_itm_good w-full pb-3 text-3xl">
                Autres nouvelles
              </h1>
              <div className="w-9/12 border-blue_itm_good border-b-2"></div>
            </div>
            <div className="w-fit flex items-center cursor-pointer">
              <div
                onClick={function () {
                  if (activeSlide != data.length - 1)
                    setActiveSlide(activeSlide + 1);
                }}
                className={`h-10 w-10 ${
                  activeSlide == data.length - 1
                    ? 'bg-blue_itm_good/10'
                    : 'bg-blue_itm_good/50  hover:bg-blue_itm_good'
                } text-white flex items-center justify-center rounded-full`}
              >
                <MdOutlineKeyboardArrowLeft />
              </div>
              <div
                onClick={function () {
                  if (activeSlide != 0) {
                    setActiveSlide(activeSlide - 1);
                  }
                }}
                className={`ml-2 h-10 w-10 ${
                  activeSlide == 0
                    ? 'bg-blue_itm_good/10'
                    : 'bg-blue_itm_good/50  hover:bg-blue_itm_good'
                }  text-white flex items-center justify-center rounded-full`}
              >
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>
          </header>
          <Carousel
            infinite={true}
            containerProps={{
              style: {
                width: '100%',
                height: '100%',
                justifyContent: 'space-between',
                borderRadius: 20,
              },
            }}
            itemsToShow={toShow}
            onRequestChange={setActiveSlide}
            easing="linear"
            responsiveProps={[
              {
                itemsToShow: toShow,
                itemsToScroll: 1,
                minWidth: 768,
              },
            ]}
            preventScrollOnSwipe
            activeSlideIndex={activeSlide}
            speed={1000}
          >
            {data.map((item: any, index: number) => (
              <div className="w-[90vw]  h-[65vh] pt-5 relative">
                <div className="absolute z-20 top-0 left-0 right-0 bottom-0 ">
                  <Image src={bgHover} alt="" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="absolute rounded-sm overflow-hidden z-10 bg-green-500 top-3 left-3 text-base  px-4 py-2 text-white ">
                  review
                </div>
                <Image src={bg} alt="" fill style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </Carousel>
        </main>
        <aside data-reveal className="h-fit w-full pt-10">
          <div className="W-full flex flex-wrap justify-between">
            <CardNews index={0} />
            <CardNews index={1} />
            <CardNews index={2} />
            <CardNews index={3} />
            <CardNews index={4} />
            <CardNews index={5} />
          </div>
        </aside>
      </div>
    </section>
  );
}

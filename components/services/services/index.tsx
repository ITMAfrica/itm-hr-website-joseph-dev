'use client';
import { entitiesInfos, servicesHome } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import Carousel from 'react-simply-carousel';
import CardServices from './card';
import { GoMail } from 'react-icons/go';
import { IoCallOutline } from 'react-icons/io5';
import { getCountryCode } from '@/helpers';
import { getDictionary } from '@/get-dictionary';

export default function ServicesPageServices({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.services.services;
  const country: string = params.country;
  const code: string = getCountryCode(country);
  const [toShow] = useState(4);
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <section data-reveal="fade" className="w-full md:min-h-[80vh] flex items-center relative">
      <div className="w-11/12 lg:w-10/12 shadow-2xl shadow-black rounded-2xl my-14 overflow-hidden mx-auto relative top-0 min-h-[80vh] lg:min-h-[77vh] left-0 right-0 bottom-0">
        <Image
          alt=""
          src={servicesHome[lang][activeSlide]?.image}
          fill
          sizes="(min-width: 1024px) 85vw, 92vw"
          style={{ objectFit: 'cover' }}
          className="hidden sm:block blur-0 lg:blur-sm"
        />
        {/* For mobile */}
        <Image
          alt=""
          src={servicesHome[lang][activeSlide]?.icon}
          fill
          sizes="(min-width: 1024px) 85vw, 92vw"
          style={{ objectFit: 'cover' }}
          className="inline sm:hidden lg:blur-sm"
        />
        <div className="absolute top-0 left-0 right-0 flex   bottom-0 bg-gradient-to-r from-transparent to-black/70">
          <article className="w-full lg:w-2/5 h-full flex items-center justify-center text-white">
            <div className="w-10/12 h-10/12 lg:w-8/12 h-8/12">
              <h1 className="font-bold md:text-4xl text-4xl">
                {servicesHome[lang][activeSlide]?.name}
              </h1>
              <p className="pt-3 lg:text-sm text-xs font-open">
                {servicesHome[lang][activeSlide]?.description}
              </p>
              <div className="w-full pt-5 flex lg:text-sm text-xs">
                <Link
                  href={`tel: ${entitiesInfos[code].phone}`}
                  className="flex justify-center w-20 z-50 py-2 px-4 rounded-full bg-white text-black mr-2 hover:text-blue_itm_aqua_marine hover:scale-110 duration-150"
                >
                  <span className="flex items-center mr-1">
                    <IoCallOutline />
                  </span>
                  {data.phone}
                </Link>
                <Link
                  href={`mailto:${entitiesInfos[code].email}`}
                  className="flex justify-center w-20 z-50 py-2 px-4 rounded-full bg-white text-black hover:text-blue_itm_aqua_marine hover:scale-110 duration-150"
                >
                  <span className="flex items-center mr-1">
                    <GoMail />
                  </span>
                  {data.mail}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="w-full absolute z-10 top-0 left-0 right-0 bottom-0 lg:flex items-center justify-center">
        <article className="w-full lg:w-2/5 h-full flex items-center justify-center text-white"></article>
        <div className="relative lg:w-3/5 w-full lg:flex hidden h-fit flex-row">
          <Carousel
            infinite={true}
            itemsToShow={toShow}
            onRequestChange={setActiveSlide}
            autoplayDirection="forward"
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
            {servicesHome[lang].map(function (item: any, index: number) {
              return (
                <CardServices
                  {...item}
                  index={index}
                  activeSlide={activeSlide}
                  setActiveSlide={setActiveSlide}
                  left={index % 2 == 0}
                  key={index}
                />
              );
            })}
          </Carousel>
          <div className="w-full absolute z-20 bottom-0 left-0 h-fit pb-5 flex items-center justify-start translate-y-full">
            <div
              onClick={() => {
                if (activeSlide != 0) {
                  setActiveSlide(activeSlide - 1);
                } else {
                  setActiveSlide(servicesHome[lang].length - 1);
                }
              }}
              className="cursor-pointer p-3 bg-white mr-4 rounded-full hover:text-blue_itm_aqua_marine hover:scale-125"
            >
              <MdOutlineKeyboardArrowLeft />
            </div>
            <div
              onClick={() => {
                if (activeSlide != servicesHome[lang].length - 1) {
                  setActiveSlide(activeSlide + 1);
                } else {
                  setActiveSlide(0);
                }
              }}
              className="cursor-pointer p-3 hover:scale-125 bg-white hover:text-blue_itm_aqua_marine text-black rounded-full"
            >
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>
        </div>
        <div className="w-full lg:absolute lg:z-20 bottom-0 left-0 h-fit p-5 flex lg:hidden items-center justify-center -translate-y-full">
          <div
            onClick={() => {
              if (activeSlide != 0) {
                setActiveSlide(activeSlide - 1);
              } else {
                setActiveSlide(servicesHome[lang].length - 1);
              }
            }}
            className="cursor-pointer p-3 bg-white mr-4 rounded-full hover:text-blue_itm_aqua_marine hover:scale-125"
          >
            <MdOutlineKeyboardArrowLeft />
          </div>
          <div
            onClick={() => {
              if (activeSlide != servicesHome[lang].length - 1) {
                setActiveSlide(activeSlide + 1);
              } else {
                setActiveSlide(0);
              }
            }}
            className="cursor-pointer p-3 hover:scale-125 bg-white hover:text-blue_itm_aqua_marine text-black rounded-full"
          >
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
}

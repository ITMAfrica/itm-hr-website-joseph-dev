/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Image from 'next/image';
import { getDictionary } from '@/get-dictionary';
import { dictionary, propsPage } from '@/types';
import logo from '@/public/logos/logo_rdc.webp';
import NavLinkCard from '@/components/global/cards/navLink';
import CardLang from '@/components/global/cards/lang';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineMenu, MdOutlineMenuOpen } from 'react-icons/md';
import { CODE, getCookie, setCookie } from '@/helpers';
import { COUNTRY_SITE_CODES } from '@/lib/country-site-codes';
import CardLogo from '@/components/global/cards/logo';
import CardCountry from '../cards/country';
import { usePathname } from 'next/navigation';

type linkHeader = {
  href: string;
  name: string;
  current: string;
  external: boolean;
  arrow: boolean;
  submenus?: any;
};

export default function HomeHeader({ params }: propsPage) {
  const lang: string = params.lang;
  const dictionary: dictionary = getDictionary(lang);
  const [CURRENT_CODE, SET_CURRENT_CODE] = useState(CODE);
  const data: any = dictionary?.global?.header[CURRENT_CODE]
    ? dictionary?.global?.header[CURRENT_CODE]
    : dictionary?.global?.header[CODE];
  const pathname = usePathname();
  const root = pathname.split('/')[2];

  const [openNavigation, setOpenNavigation] = useState(false);
  const [scrollToBottom, setScrollToBottom] = useState(0);
  const closingMenuRef = useRef(false);

  const closeMenu = () => {
    closingMenuRef.current = true;
    setOpenNavigation(false);
    window.setTimeout(() => {
      closingMenuRef.current = false;
    }, 400);
  };
  const closeNavigation = (
    e: React.MouseEvent | React.PointerEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();
    closeMenu();
  };
  function getHref() {
    if (CURRENT_CODE && CURRENT_CODE != CODE) {
      return `/${params.lang}/${CURRENT_CODE}`;
    } else {
      return `/${params.lang}`;
    }
  }
  useEffect(
    function () {
      const seg = pathname.split('/').filter(Boolean)[1]?.toLowerCase();
      if (seg && COUNTRY_SITE_CODES.has(seg)) {
        setCookie('country', seg);
      }
      SET_CURRENT_CODE(getCookie('country', document?.cookie) || CODE);
    },
    [lang, pathname]
  );

  //Header animations
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollToBottom(scrollPosition);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky z-50 top-0 w-full h-fit ${
        scrollToBottom >= 5 ? 'py-1' : 'md:py-4 py-3'
      }  flex justify-center bg-white shadow-headerShadow transition-all duration-500 ease-linear`}
    >
      <div className="md:w-[85%] w-11/12 h-fit flex items-center justify-between ">
        <div className="w-fit flex items-center">
          <div className="flex items-center">
            {root != undefined ? (
              <div
                onClick={() => {
                  if (closingMenuRef.current) return;
                  setOpenNavigation(true);
                }}
                className="w-fit lg:hidden mr-1 text-2xl p-1 cursor-pointer rounded-md hover:bg-blue_itm_primary/10"
              >
                <MdOutlineMenu />
              </div>
            ) : (
              ''
            )}
            <CardLogo />
          </div>
        </div>
        {root != undefined ? (
          <nav className="w-fit lg:flex hidden items-center justify-evenly">
            <NavLinkCard {...data.group} key={10} />
            {data?.links.map((item: linkHeader, index: number) => (
              <NavLinkCard {...item} key={index} />
            ))}
          </nav>
        ) : (
          ''
        )}
        <div className="w-fit flex items-center">
          <CardLang links={data?.links} langs={data?.langs} />
          {root != undefined ? (
            <>
              <span
                className="mx-2 h-4 w-px shrink-0 bg-gray_itm/35"
                aria-hidden
              />
              <CardCountry />
            </>
          ) : null}
        </div>
      </div>
      {openNavigation ? (
        <div className="lg:hidden z-[60] bg-black/80 fixed inset-0 flex">
          <div className="w-[280px] max-w-[80%] p-5 h-full bg-white rounded-e-xl flex flex-col justify-between">
            <div className="w-full">
              <div className="w-full flex items-center justify-between pr-4 mb-3">
                <div
                  onPointerDown={closeNavigation}
                  onClick={closeNavigation}
                  className="w-fit lg:hidden mr-1 shrink-0 text-2xl p-1 cursor-pointer rounded-md hover:bg-blue_itm_primary/10"
                >
                  <MdOutlineMenuOpen />
                </div>
                <Link
                  onClick={closeMenu}
                  href={getHref()}
                  className="block w-fit h-fit md:pr-5 mr-1"
                >
                  <Image
                    src={logo.src}
                    className="md:h-8 h-4 w-fit"
                    height={50}
                    width={194}
                    alt="ITM Africa"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </Link>
              </div>
              <nav className="w-full bg-white flex flex-col items-start">
                <NavLinkCard
                  {...data.group}
                  closeModal={closeMenu}
                  full
                  key={10}
                />
                {data?.links.map((item: linkHeader, index: number) => (
                  <NavLinkCard
                    {...item}
                    closeModal={closeMenu}
                    full
                    key={index}
                  />
                ))}
              </nav>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

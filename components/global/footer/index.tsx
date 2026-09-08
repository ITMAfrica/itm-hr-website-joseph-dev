'use client';

import { getDictionary } from '@/get-dictionary';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logos/HR.webp';
import { CODE, getCookie, getCountryCode, setCookie, KAZIPRO_HREF, TALENTPRO_HREF } from '@/helpers';
import { useEffect, useState } from 'react';
import NavLinkFooter from './navLink';
import newsLetterSchema from './newsLetterSchema';
import { usePathname } from 'next/navigation';

import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { entitiesInfos } from '@/lib/data';
import { COUNTRY_SITE_CODES } from '@/lib/country-site-codes';
import { IoHomeOutline } from 'react-icons/io5';

type linkHeader = {
  href: string;
  name: string;
  current: string;
  external: boolean;
};

export default function Footer({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const content = dictionary.global.footer;
  const pathname = usePathname();
  const root = usePathname().split('/')[2];
  const [CURRENT_CODE, SET_CURRENT_CODE] = useState(CODE);
  const data: any = dictionary?.global?.header[CURRENT_CODE]
    ? dictionary?.global?.header[CURRENT_CODE]
    : dictionary?.global?.header[CODE];
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

  const code = getCountryCode(CURRENT_CODE);
  const socials_network_infos = (
    entitiesInfos[code] || entitiesInfos[CODE]
  ).social_medias;

  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<any>({
    resolver: yupResolver(newsLetterSchema),
  });

  const setError: any = (errors: any, name: string) => {
    return { error: errors[name], errorMessage: errors[name]?.message[lang] };
  };
  return (
    <footer className="bg-black_footer text-white">
      <div className="flex md:flex-nowrap flex-wrap md:w-10/12 w-11/12 mx-auto md:py-20 py-10 border-b border-b-black">
        <section className="md:w-2/5 w-full mb-6 md:mb-0">
          <div>
            <Link href={`/${lang}`} className="block w-fit h-fit md:pr-5 mr-1">
              <Image
                src={logo.src}
                className="md:h-8 h-4 w-fit"
                height={100}
                width={100}
                alt="ITM Africa logo"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </Link>
          </div>
          <p className="py-4 md:w-10/12 font-open">{content.text}</p>
          <nav className="flex">
            <input
              className="py-3 px-4 text-black rounded w-full mr-6"
              type="text"
              placeholder={content.placeholder}
            />
            <button className="py-2 px-4 border rounded hover:bg-blue_itm_aqua_marine hover:text-white hover:border-blue_itm_aqua_marine">
              {content.sendBtn}
            </button>
          </nav>
        </section>
        <section className="sm:flex justify-around md:ml-10 md:w-3/5 w-full">
          {root != undefined ? (
            <div>
              <h4 className="text-2xl font-bold mb-4">
                {content.linksTitle.internal}
              </h4>
              <ul className="mb-2">
                {data?.links.map((item: linkHeader, index: number) => (
                  <NavLinkFooter {...item} key={index} />
                ))}
              </ul>
              <h4 className="flex items-center text-lg">
                <span className="mr-2">
                  <IoHomeOutline />
                </span>
                <Link href={`/${lang}`}>Group</Link>
              </h4>
            </div>
          ) : (
            ''
          )}
          <div className="mt-8 sm:mt-0">
            <h4 className="text-2xl font-bold mb-4">
              {content.linksTitle.software}
            </h4>
            <ul className="mb-2">
              <li className="mb-3">
                <Link
                  href={TALENTPRO_HREF}
                  target="_blank"
                  className="hover:text-blue_itm_primary"
                >
                  Talent pro
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href={KAZIPRO_HREF}
                  target="_blank"
                  className="hover:text-blue_itm_primary"
                >
                  Kazi pro
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-8 sm:mt-0">
            <h4 className="text-2xl font-bold mb-4">
              {content.linksTitle.followUs}
            </h4>
            <ul className="flex mb-2">
              <li className="mr-2">
                <Link
                  href={socials_network_infos.facebook}
                  target="_blank"
                  className="block w-fit rounded-lg border border-white/30 p-2 mr-2 hover:bg-primary hover:text-white transition duration-500"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  href={socials_network_infos.twitter}
                  target="_blank"
                  className="block w-fit rounded-lg border border-white/30 p-2 mr-2 hover:bg-primary hover:text-white transition duration-500"
                >
                  <FaXTwitter />
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  href={socials_network_infos.linkedin}
                  target="_blank"
                  className="block w-fit rounded-lg border border-white/30 p-2 mr-2 hover:bg-primary hover:text-white transition duration-500"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  href={socials_network_infos.instagram}
                  target="_blank"
                  className="block w-fit rounded-lg border border-white/30 p-2 mr-2 hover:bg-primary hover:text-white transition duration-500"
                >
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <section className="md:flex justify-between items-center md:w-10/12 w-11/12 mx-auto py-4 border-t border-white">
        <div className="w-fit font-semibold font-open">
          {`© ${new Date().getFullYear()} ITM Africa. All rights reserved.`}
        </div>
      </section>
    </footer>
  );
}

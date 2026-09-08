/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import en from '@/public/icons/lang/en.png';
import fr from '@/public/icons/lang/fr.png';
import { GoTriangleDown } from 'react-icons/go';
import Link from 'next/link';
import { CODE, getCookie, TALENTPRO_HREF } from '@/helpers';

export default function CardLang({ langs }: { links: any[]; langs: any[] }) {
  const [show, setShow] = useState(false);
  const params: any = useParams();
  const lang: string = params?.lang;
  const [flag]: any = useState({ fr, en });
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [href, setHref] = useState(`/${lang}`);
  const [CURRENT_CODE, SET_CURRENT_CODE] = useState(CODE);

  useEffect(
    function () {
      SET_CURRENT_CODE(getCookie('country', document?.cookie) || CODE);
    },
    [params.lang, params.country]
  );

  function getHref(lang: string = 'fr') {
    const href: string = pathname;
    const current = href.split('/')[3];
    const current_entity = href.split('/')[2];
    if (href == TALENTPRO_HREF) {
      return href;
    } else if (current != undefined) {
      return `/${lang}/${
        params.country ? params.country : CURRENT_CODE
      }/${current}`;
    } else if (current_entity) {
      return `/${lang}/${current_entity}`;
    } else {
      return `/${lang}`;
    }
  }

  function toggleModal() {
    setShow(!show);
  }

  useEffect(
    function () {
      document.body.addEventListener('click', function () {
        if (show) {
          setShow(false);
        }
      });
    },
    [show]
  );

  return (
    <>
      <div className="flex relative justify-center items-center">
        <div
          onClick={toggleModal}
          className="flex justify-center items-center cursor-pointer hover:bg-gray_itm_bg/40 hover:p-1 hover:px-2 rounded-full"
        >
          <Image
            src={flag[lang]}
            height={16}
            width={20}
            className="h-4 w-5 shrink-0 object-cover block mr-1 rounded-sm hover:cursor-pointer"
            alt="drapeau"
          />
          <span className="text-sm align-middle mr-1 font-normal uppercase cursor-pointer">
            {lang}
          </span>
          <GoTriangleDown className="cursor-pointer" />
        </div>
        {show && (
          <div className="w-[150px] top-[110%] absolute rounded-lg bg-white -left-[50%] p-2 shadow-xl shadow-black/20">
            {langs.map(function (item: any) {
              return (
                <Link
                  key={item.key}
                  href={getHref(item.key)}
                  className={`w-full p-2 ${
                    item.key == lang && 'bg-gray_itm_bg/40'
                  } hover:bg-gray_itm_bg/40 mb-1 p-2 rounded-full justify-center items-center flex
                  `}
                >
                  <Image
                    src={flag[item.key]}
                    height={16}
                    width={20}
                    className="h-4 w-5 shrink-0 object-cover block mr-1 rounded-sm"
                    alt="drapeau"
                  />
                  {item.tag}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

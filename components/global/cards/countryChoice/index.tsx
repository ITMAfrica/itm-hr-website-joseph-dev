'use client';
import { useParams } from 'next/navigation';
import bg from '@/public/assets/bg/bg.country.png';
import Image from 'next/image';
import Link from 'next/link';
import { CODE, getCookie, setCookie } from '@/helpers';
import { useEffect, useState } from 'react';

export default function CardCountryChoice(props: any) {
  const params: any = useParams();
  const lang: string = params.lang;
  const [CURRENT_CODE, SET_CURRENT_CODE] = useState('');
  useEffect(() => {
    SET_CURRENT_CODE(getCookie('country', document?.cookie) || CODE);
  }, []);
  return (
    <Link
      href={props.href}
      onClick={function (e: any) {
        setCookie('country', props.code);
        props.closeModal();
        return e;
      }}
      title={props[lang]}
      className="w-full text-black group block h-[100px] relative overflow-hidden rounded-2xl shadow-2xl"
    >
      <div className="absolute inset-0 z-10 flex items-center justify-between gap-3 p-4">
        <h3
          className={`group-hover:font-bold lg:text-sm text-xs min-w-0 flex-1 group-hover:text-blue_itm_aqua_marine ${
            props.code == CURRENT_CODE
              ? 'text-blue_itm_aqua_marine font-bold'
              : 'font-medium '
          }`}
        >
          {props[lang]}
        </h3>
        <div className="relative w-[65px] h-[45px] shrink-0 rounded-lg overflow-hidden">
          <Image
            src={props.flag}
            alt={`Flag ${props[lang]}`}
            fill
            sizes="65px"
          />
        </div>
      </div>
      <Image src={bg} alt="Bg" fill sizes="(max-width: 768px) 50vw, 25vw" />
    </Link>
  );
}

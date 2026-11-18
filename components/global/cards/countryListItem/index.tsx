'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CODE, getCookie, setCookie } from '@/helpers';
import { useEffect, useState } from 'react';

export default function CardCountryListItem(props: any) {
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
      onMouseEnter={() => props.onHover?.(props.code)}
      onMouseLeave={() => props.onHover?.(null)}
      onFocus={() => props.onHover?.(props.code)}
      onBlur={() => props.onHover?.(null)}
      className="group flex items-center gap-3 rounded-full py-1 pr-3 transition-colors"
    >
      <span
        className={`relative block w-[30px] h-[30px] shrink-0 rounded-full overflow-hidden ring-1 ring-black/10 transition-transform group-hover:scale-110 ${props.highlighted ? 'scale-110' : ''}`}
      >
        <Image
          src={props.flag}
          alt={`Flag ${props[lang]}`}
          fill
          sizes="30px"
          className="object-cover"
        />
      </span>
      <span
        className={`min-w-0 flex-1 truncate text-base ${props.highlighted ? 'text-blue_itm_aqua_marine font-bold' : ''} group-hover:text-blue_itm_aqua_marine ${
          props.code == CURRENT_CODE
            ? 'text-blue_itm_aqua_marine font-bold'
            : 'text-[#353535] font-medium'
        }`}
      >
        {props[lang]}
      </span>
    </Link>
  );
}

'use client';
import { CODE, getCookie, setCookie, TALENTPRO_HREF } from '@/helpers';
import { COUNTRY_SITE_CODES } from '@/lib/country-site-codes';
import { link } from '@/types';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function NavLinkFooter({
  href,
  name,
  full = false,
  external,
  closeModal = () => {},
}: link) {
  const params = useParams();
  const pathname = usePathname();
  const [CURRENT_CODE, SET_CURRENT_CODE] = useState(CODE);

  useEffect(
    function () {
      const seg = pathname.split('/').filter(Boolean)[1]?.toLowerCase();
      if (seg && COUNTRY_SITE_CODES.has(seg)) {
        setCookie('country', seg);
      }
      SET_CURRENT_CODE(getCookie('country', document?.cookie) || CODE);
    },
    [pathname, params.lang]
  );

  function getCountryFromRoute() {
    const seg = pathname.split('/').filter(Boolean)[1]?.toLowerCase();
    if (seg && COUNTRY_SITE_CODES.has(seg)) return seg;
    if (typeof params.country === 'string') return params.country;
    return CURRENT_CODE;
  }

  function getHref() {
    const current = href.split('/')[2];
    if (href == TALENTPRO_HREF || href.startsWith('http')) {
      return href;
    } else if (href == '/en' || href == '/fr') {
      return href;
    } else if (typeof current === 'undefined') {
      return href;
    }
    return `/${params.lang}/${getCountryFromRoute()}/${current}`;
  }
  if (full)
    return (
      <Link
        href={href}
        onClick={closeModal}
        className="block mb-2 hover:text-blue_itm_good"
      >
        {name}
      </Link>
    );
  return external ? (
    <Link
      href={href}
      target="_blank"
      className={`${
        pathname == href ? 'text-blue_itm_good' : ''
      } block mb-3 md:mb-0 py-2 transition-all duration-1000 hover:font-bold hover:text-blue_itm_good text-white text-left lg:text-center capitalize`}
    >
      <span className="flex items-center">
        {name}
        <span className="ml-1 text-xs">
          <FaExternalLinkAlt />
        </span>
      </span>
    </Link>
  ) : (
    <Link
      href={getHref()}
      className={`${
        pathname == getHref() ? 'text-blue_itm_good' : ''
      } block mb-3 md:mb-0 py-2 transition-all duration-1000 hover:font-bold hover:text-blue_itm_good  text-white text-left lg:text-center capitalize`}
    >
      <span className="flex items-center">{name}</span>
    </Link>
  );
}

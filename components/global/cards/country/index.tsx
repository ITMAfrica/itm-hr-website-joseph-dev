/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { GoTriangleDown } from 'react-icons/go';
import { CODE, getCookie, setCookie } from '@/helpers';
import { entities } from '@/lib/data';
import { COUNTRY_SITE_CODES } from '@/lib/country-site-codes';
import ModalCountryChoice from '@/components/global/modal/countryChoice';

export default function CardCountry({ header = false }: { header?: boolean }) {
  const paramsHooks = useParams();
  const pathname = usePathname();
  const [CURRENT_CODE, SET_CURRENT_CODE] = useState('');
  const [CURRENT_IMAGE, SET_CURRENT_IMAGE] = useState(null);
  const [modal, setModal] = useState(0);

  function openModal() {
    setModal(modal + 1);
  }

  useEffect(() => {
    const seg = pathname.split('/').filter(Boolean)[1]?.toLowerCase();
    if (seg && COUNTRY_SITE_CODES.has(seg)) {
      setCookie('country', seg);
    }
    SET_CURRENT_CODE(getCookie('country', document?.cookie) || CODE);
  }, [paramsHooks, pathname]);

  useEffect(
    function () {
      const find: any = entities.find(function (item: any) {
        return item.code == CURRENT_CODE;
      });
      if (find) SET_CURRENT_IMAGE(find.flag);
    },
    [CURRENT_CODE]
  );

  useEffect(
    function () {
      setModal(0);
    },
    [pathname]
  );

  if (CURRENT_IMAGE)
    return (
      <>
        <div
          onClick={openModal}
          className={`flex justify-center items-center cursor-pointer ${
            header ? '' : 'hover:bg-gray_itm_bg/40 hover:p-1 hover:px-2'
          } rounded-full`}
        >
          {CURRENT_IMAGE && (
            <Image
              src={CURRENT_IMAGE}
              height={16}
              width={20}
              className="h-4 w-5 shrink-0 object-cover block mr-1 rounded-sm"
              alt="drapeau"
            />
          )}
          <span className="text-sm align-middle mr-1 font-normal uppercase">
            {CURRENT_CODE}
          </span>
          <GoTriangleDown />
        </div>
        <ModalCountryChoice init={modal} />
      </>
    );
  return <div className="w-fit"></div>;
}

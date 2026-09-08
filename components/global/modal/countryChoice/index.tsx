'use client';
import {
  CODE,
  COUNTRY_API_URL,
  entities_to_display,
  getCookie,
  setCookie,
} from '@/helpers';
import { entities } from '@/lib/data';
import { useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import CardCountryChoice from '@/components/global/cards/countryChoice';
import { useParams, usePathname } from 'next/navigation';
import { getDictionary } from '@/get-dictionary';

export default function ModalCountryChoice({ init = false }: any) {
  const params: any = useParams();
  const lang: string = params.lang;
  const pathname = usePathname();
  const [modal, setModal] = useState(init);
  const [currentLocation, setCurrentLocation] = useState('cd');
  const dictionary = getDictionary(lang);
  const data: any = dictionary.global.modal[CODE];

  function closeModal() {
    setModal(false);
  }
  function openModal() {
    setModal(true);
  }

  useEffect(
    function () {
      const cookie: string = getCookie('country', document.cookie);
      if (!cookie) {
        openModal();
      } else {
        closeModal();
      }
    },
    [pathname]
  );

  useEffect(
    function () {
      if (init) {
        openModal();
      }

      fetch(COUNTRY_API_URL, { method: 'GET' })
        .then(function (res) {
          return res.json();
        })
        .then(function ({ country }) {
          setCurrentLocation(country);
        })
        .catch(function (err) {
          console.error('Error fetching user location:', err);
        });
    },
    [init]
  );

  if (modal)
    return (
      <section
        id="countries"
        className="w-full z-50 fixed bg-black/30 backdrop-blur-sm flex items-center flex-wrap justify-center top-0 left-0 right-0 bottom-0"
      >
        <div className="w-11/12 lg:w-7/12">
          <div className="rounded-xl h-fit filter-none mb-3 w-full flex justify-end">
            <div
              onClick={closeModal}
              className="w-10 flex  cursor-pointer scale-125 text-white justify-center items-center h-10 rounded-full"
            >
              <MdOutlineCancel size={24} />
            </div>
          </div>
          <div className="bg-white rounded-xl text-black w-full overflow-hidden filter-none">
            <div className="max-h-[70vh] overflow-y-auto p-2 py-5 scrollbar">
              <h1 className="font-medium text-xl text-center w-full pb-10">
                {data?.title}
              </h1>
              <div className="w-full h-full grid grid-cols-2 gap-4 pb-5 px-3">
                {
                  //Display all contries without Rwanda when your location is cd
                  entities_to_display(currentLocation, entities)
                    .sort(function (a: any, b: any) {
                      const first: string = a[lang];
                      const last: string = b[lang];
                      return first?.localeCompare(last, undefined, {
                        sensitivity: 'base',
                      });
                    })
                    .map(function (item: any, index: number) {
                      return (
                        <CardCountryChoice
                          {...item}
                          closeModal={closeModal}
                          key={index}
                        />
                      );
                    })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  return null;
}

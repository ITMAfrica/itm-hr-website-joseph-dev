'use client';

import CardCountryListItem from '@/components/global/cards/countryListItem';
import SectionTitle from '@/components/global/section_title';
import { getDictionary } from '@/get-dictionary';
import { COUNTRY_API_URL, entities_to_display, setCookie } from '@/helpers';
import { entities } from '@/lib/data';
import { useParams, useRouter } from 'next/navigation';
import WorldMap from './worldMap';
import CountryPanel from './countryPanel';
import { useState, useEffect } from 'react';
import FadeIn from '@/components/global/fade_in';
import { motion } from 'framer-motion';

const REGIONS: {
  key: string;
  label: Record<string, string>;
  codes: string[];
}[] = [
  { key: 'hq', label: { fr: 'Siège', en: 'Headquarters' }, codes: ['cd'] },
  {
    key: 'central',
    label: { fr: 'Afrique centrale', en: 'Central Africa' },
    codes: ['cg', 'gb', 'cm', 'ao'],
  },
  {
    key: 'north',
    label: { fr: 'Afrique du Nord', en: 'North Africa' },
    codes: ['dz'],
  },
  {
    key: 'west',
    label: { fr: "Afrique de l'Ouest", en: 'West Africa' },
    codes: ['ng', 'bj', 'tg', 'sn', 'ci', 'gn'],
  },
  {
    key: 'east',
    label: { fr: "Afrique de l'Est & australe", en: 'East & Southern Africa' },
    codes: ['rw', 'tz', 'ke', 'ug', 'bi', 'zm', 'za'],
  },
  {
    key: 'europe',
    label: { fr: 'Europe', en: 'Europe' },
    codes: ['de'],
  },
];

// Desktop only: fade the map out on every edge so it blends into the page.
// On mobile the map sits in its own block above the list, at full opacity.
// Class names are written in full so Tailwind can detect them.
const MAP_WRAPPER_CLASS = [
  'relative w-full h-[320px] mt-2',
  'md:absolute md:inset-y-0 md:right-0 md:mt-0 md:h-auto md:w-[75%]',
  'md:[mask-image:linear-gradient(to_right,transparent,black_25%,black_92%,transparent),linear-gradient(to_bottom,transparent,black_10%,black_85%,transparent)]',
  'md:[-webkit-mask-image:linear-gradient(to_right,transparent,black_25%,black_92%,transparent),linear-gradient(to_bottom,transparent,black_10%,black_85%,transparent)]',
  'md:[mask-composite:intersect]',
  'md:[-webkit-mask-composite:source-in]',
].join(' ');

export default function CountriesLandingPage() {
  const params: any = useParams();
  const lang: string = params.lang;
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  // Last country hovered: keeps the panel filled when the pointer moves to it
  const [focused, setFocused] = useState<string | null>(null);
  const hover = (code: string | null) => {
    setHovered(code);
    if (code) setFocused(code);
  };
  const [currentLocation, setCurrentLocation] = useState('cd');
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.hr.country;

  const closeModal = () => {
    setModal(false);
  };

  useEffect(function () {
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
  }, []);

  const visible = entities_to_display(currentLocation, entities).sort(function (
    a: any,
    b: any,
  ) {
    return a[lang]?.localeCompare(b[lang], undefined, {
      sensitivity: 'base',
    });
  });

  const labels: Record<string, string> = {};
  visible.forEach((item: any) => (labels[item.code] = item[lang]));

  const selectCountry = (code: string) => {
    const item = visible.find((i: any) => i.code === code);
    if (!item) return;
    setCookie('country', code);
    router.push(item.href);
  };

  const regionCount = REGIONS.filter((region) =>
    visible.some((item: any) => region.codes.includes(item.code)),
  ).length;
  const focusedItem =
    visible.find((item: any) => item.code === focused) ?? null;

  return (
    <section>
      <FadeIn>
        <div
          id="countries"
          // White 1px skirt hides the sub-pixel seam with the next section
          className="relative overflow-hidden bg-white shadow-[0_1px_0_0_#fff]"
        >
          <div className={MAP_WRAPPER_CLASS}>
            <WorldMap
              activeCodes={visible.map((item: any) => item.code)}
              hovered={hovered}
              labels={labels}
              onHover={hover}
              onSelect={selectCountry}
            />
          </div>
          <div className="hidden lg:block absolute right-[3%] xl:right-[5%] bottom-20 z-10">
            <CountryPanel
              item={focusedItem}
              lang={lang}
              countryCount={visible.length}
              regionCount={regionCount}
            />
          </div>
          <div className="relative pointer-events-none flex items-center h-full w-11/12 xl:w-10/12 mx-auto py-10">
            <div className="pointer-events-auto md:w-[45%] xl:w-[40%]">
              <SectionTitle text="ITM HR" />
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-blue_itm_good text-4xl font-bold mb-4"
              >
                {data.subtitle}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className=""
              >
                <div className="w-full flex flex-col gap-5 pb-2 px-3">
                  {REGIONS.map(function (region) {
                    const items = visible.filter(function (item: any) {
                      return region.codes.includes(item.code);
                    });
                    if (items.length === 0) return null;
                    return (
                      <div key={region.key}>
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#353535] mb-2">
                          {region.label[lang] ?? region.label.en}
                        </h3>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                          {items.map(function (item: any) {
                            return (
                              <li key={item.code}>
                                <CardCountryListItem
                                  {...item}
                                  closeModal={closeModal}
                                  highlighted={hovered === item.code}
                                  onHover={hover}
                                />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

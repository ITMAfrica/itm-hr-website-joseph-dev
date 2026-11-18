'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { setCookie } from '@/helpers';
import { entitiesInfos } from '@/lib/data';

const TEXT: Record<string, Record<string, string>> = {
  fr: {
    countries: 'pays',
    regions: 'régions',
    offices: 'filiales ITM HR',
    hint: 'Survolez la carte ou la liste pour découvrir nos filiales.',
    visit: 'Visiter',
  },
  en: {
    countries: 'countries',
    regions: 'regions',
    offices: 'ITM HR subsidiaries',
    hint: 'Hover the map or the list to discover our subsidiaries.',
    visit: 'Visit',
  },
};

type Props = {
  item: any | null;
  lang: string;
  countryCount: number;
  regionCount: number;
};

export default function CountryPanel({
  item,
  lang,
  countryCount,
  regionCount,
}: Props) {
  const t = TEXT[lang] ?? TEXT.en;
  const infos = item ? entitiesInfos[item.code] : null;

  return (
    <div className="w-[340px] rounded-3xl bg-white/90 backdrop-blur-md shadow-[0_12px_40px_-12px_rgba(18,56,185,0.35)] ring-1 ring-black/5 p-6 overflow-hidden">
      <AnimatePresence mode="wait">
        {item ? (
          <motion.div
            key={item.code}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="relative block w-11 h-11 shrink-0 rounded-full overflow-hidden ring-1 ring-black/10">
                <Image
                  src={item.flag}
                  alt={`Flag ${item[lang]}`}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              <div className="min-w-0">
                <p className="text-blue_itm_good text-xl font-bold leading-tight truncate">
                  {item[lang]}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue_itm_aqua_marine truncate">
                  {item.name}
                </p>
              </div>
            </div>
            {infos && (
              <ul className="space-y-1.5 text-sm text-[#353535] mb-5">
                {infos.address && (
                  <li className="line-clamp-2">{infos.address}</li>
                )}
                {infos.phone && <li>{infos.phone}</li>}
                {infos.email && <li className="truncate">{infos.email}</li>}
              </ul>
            )}
            <Link
              href={item.href}
              onClick={() => setCookie('country', item.code)}
              className="inline-flex items-center gap-2 rounded-full bg-blue_itm_good px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue_itm_aqua_marine"
            >
              {t.visit} {item[lang]}
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        ) : (
          <motion.div
            key="summary"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-end gap-6 mb-3">
              <div>
                <p className="text-5xl font-bold text-blue_itm_good leading-none">
                  {countryCount}
                </p>
                <p className="text-sm text-[#353535] mt-1">{t.countries}</p>
              </div>
              <div className="h-12 w-px bg-black/10" />
              <div>
                <p className="text-5xl font-bold text-blue_itm_aqua_marine leading-none">
                  {regionCount}
                </p>
                <p className="text-sm text-[#353535] mt-1">{t.regions}</p>
              </div>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#353535] mb-2">
              {t.offices}
            </p>
            <p className="text-sm text-[#6b6b6b]">{t.hint}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

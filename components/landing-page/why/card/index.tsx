'use client';

import bg from '@/public/pages/main/bg1.png';
import bg2 from '@/public/pages/main/bg2.png';
import bg3 from '@/public/pages/main/bg3.png';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const IMAGES = [bg, bg2, bg3];
const STRIPS = 6;

export default function CardLandingPage({
  text,
  title,
  index,
}: {
  text: String;
  title: String;
  index: number;
}) {
  const isBlue = index % 2 == 0;
  const reduceMotion = useReducedMotion();

  const shadow = isBlue
    ? 'shadow-[0_20px_40px_-20px_rgba(18,56,185,0.55)] group-hover:shadow-[0_30px_60px_-20px_rgba(18,56,185,0.7)]'
    : 'shadow-[0_20px_40px_-20px_rgba(41,189,188,0.6)] group-hover:shadow-[0_30px_60px_-20px_rgba(41,189,188,0.75)]';

  return (
    <motion.div
      initial="closed"
      whileInView="open"
      viewport={{ once: true, margin: '-60px' }}
      className="group relative md:last:col-span-2 lg:last:col-span-1"
    >
      {/* Shadow fades in as the blinds open, so no empty box shows before */}
      <motion.div
        aria-hidden
        className={`absolute inset-0 rounded-3xl transition-shadow duration-500 ${shadow}`}
        variants={{
          closed: { opacity: 0 },
          open: {
            opacity: 1,
            transition: { duration: 0.8, delay: index * 0.2 + 0.5 },
          },
        }}
      />
      <article
        className={`z-20 relative h-full min-h-[260px] md:min-h-[300px] overflow-hidden rounded-3xl flex items-center px-6 py-8 lg:px-8 xl:px-10 transition-transform duration-500 group-hover:-translate-y-2 ${
          isBlue ? 'bg-blue_itm_title_blue' : 'bg-blue_itm_aqua_marine'
        }`}
      >
        <Image
          src={IMAGES[index % IMAGES.length]}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="absolute inset-0 z-0 object-cover opacity-15 transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        <div className="relative z-10">
          <h2 className="text-2xl xl:text-3xl font-bold leading-tight text-white mb-3 break-words">
            {title}
          </h2>
          <span
            aria-hidden
            className={`mb-4 block h-[3px] w-10 rounded-full transition-all duration-500 group-hover:w-24 ${
              isBlue ? 'bg-blue_itm_aqua_marine' : 'bg-white'
            }`}
          />
          <p className="text-base xl:text-lg leading-relaxed text-white/95">
            {text}
          </p>
        </div>
        {/* Venetian blinds: strips open from their centre, one after another
            (same motion as the ITM EMS home banner) */}
        {!reduceMotion && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20 flex"
          >
            {Array.from({ length: STRIPS }, (_, i) => (
              <motion.div
                key={i}
                className="-mr-px h-full flex-1 bg-white will-change-transform"
                style={{ transformOrigin: 'center' }}
                variants={{
                  closed: { scaleX: 1 },
                  open: {
                    scaleX: 0,
                    transition: {
                      duration: 1.4,
                      delay: index * 0.2 + i * 0.12,
                      ease: [0.45, 0.05, 0.25, 1],
                    },
                  },
                }}
              />
            ))}
          </div>
        )}
      </article>
    </motion.div>
  );
}

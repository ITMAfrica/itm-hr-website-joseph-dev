'use client';

import SectionTitle from '@/components/global/section_title';
import { getDictionary } from '@/get-dictionary';
import team from '@/public/pages/main/steps/team.jpg';
import meeting from '@/public/pages/main/steps/meeting.jpg';
import handshake from '@/public/pages/main/steps/handshake.jpg';
import Image from 'next/image';
import TextReveal from '@/components/global/text_reveal';
import { motion } from 'framer-motion';

const RINGS = [170, 225, 280];

// Positions taken from the original 791x672 composition
const PHOTOS = [
  {
    src: team,
    alt: 'ITM HR team at work',
    style: { left: '0%', top: '29.5%', width: '51.4%', height: '48.5%' },
  },
  {
    src: meeting,
    alt: 'Interview meeting',
    style: { left: '53.7%', top: '13.5%', width: '45.3%', height: '43.3%' },
  },
  {
    src: handshake,
    alt: 'Contract handover',
    style: { left: '53.7%', top: '59.7%', width: '46%', height: '36.2%' },
  },
];

export default function StepsLandingPage({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.hr.steps;
  return (
    <section className="w-full mx-auto py-16 md:py-20 bg-white">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row md:flex-nowrap items-center justify-center lg:justify-between gap-6 md:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md mx-auto md:max-w-none md:w-3/5 lg:w-1/2"
        >
          <div className="relative w-full aspect-[791/672]">
            {/* Evenly spaced concentric rings behind the photos */}
            <svg
              viewBox="0 0 791 672"
              className="absolute inset-0 w-full h-full"
              aria-hidden
            >
              {RINGS.map((r, i) => (
                <motion.circle
                  key={r}
                  cx={416}
                  cy={340}
                  r={r}
                  fill="none"
                  stroke="#00AEEF"
                  strokeOpacity={0.45}
                  strokeWidth={1.5}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.4,
                    delay: 0.15 * i,
                    ease: 'easeOut',
                  }}
                  style={{ rotate: -90, transformOrigin: '416px 340px' }}
                />
              ))}
            </svg>
            {PHOTOS.map((photo) => (
              <div
                key={photo.alt}
                className="absolute overflow-hidden rounded-lg shadow-sm"
                style={photo.style}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 xl:pr-10"
        >
          <SectionTitle text="ITM HR" />
          <TextReveal
            as="h1"
            className="text-blue_itm_good text-3xl md:text-4xl font-bold leading-tight mb-8"
            text={data.subtitle}
          />
          <ul className="space-y-7">
            {[data.vision, data.mission, data.values].map((block, i) => (
              <motion.li
                key={block.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className="group border-l-[3px] border-blue_itm_aqua_marine/30 pl-5 transition-colors duration-300 hover:border-blue_itm_aqua_marine"
              >
                <TextReveal
                  as="h3"
                  className="text-lg font-bold text-blue_itm_aqua_marine mb-1"
                  text={block.title}
                  delay={0.4 + i * 0.25}
                />
                {i < 2 ? (
                  <TextReveal
                    className="text-lg leading-relaxed text-black_itm"
                    text={block.text}
                    delay={0.55 + i * 0.25}
                    stagger={0.03}
                  />
                ) : (
                  <TextReveal
                    className="text-xl font-bold text-blue_itm_good"
                    text={block.text.split(/\s[–-]\s/).join('  ·  ')}
                    delay={0.55 + i * 0.25}
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import SectionTitle from '@/components/global/section_title';
import { getDictionary } from '@/get-dictionary';
import img from '@/public/pages/main/main.png';
import Image from 'next/image';
import TextReveal from '@/components/global/text_reveal';
import { motion, MotionConfig } from 'framer-motion';

// Same easing as the ITM EMS hero load-in
const EASE = [0.22, 1, 0.36, 1] as const;

export default function AboutLandingPage({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.hr.about;
  return (
    <MotionConfig reducedMotion="user">
      <section className="w-full mx-auto py-10 bg-[url('../public/pages/print.png')] bg-right bg-no-repeat">
        <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col md:flex-row md:flex-nowrap items-center justify-center lg:justify-between gap-6 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease: EASE }}
            className="w-full max-w-md mx-auto md:max-w-none md:w-3/5 lg:w-1/2"
          >
            <Image
              src={img}
              alt="About image"
              width={500}
              height={500}
              className="w-full h-auto mx-auto"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.18, delayChildren: 0.15 }}
            className="w-full md:w-1/2"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 36 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1, ease: EASE }}
            >
              <SectionTitle text={data.title} />
            </motion.div>
            {/* Title line is clipped from the top, like the EMS hero heading */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 18, clipPath: 'inset(0 0 100% 0)' },
                visible: { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' },
              }}
              transition={{ duration: 0.95, ease: EASE }}
              className="text-blue_itm_good text-5xl font-bold mb-2"
            >
              {data.subtitle}
            </motion.h1>
            <TextReveal
              as="p"
              text={data.text}
              delay={0.55}
              stagger={0.018}
              duration={0.7}
              className="mb-5 font-open font-lg sm:text-xl text-black_itm"
            />
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}

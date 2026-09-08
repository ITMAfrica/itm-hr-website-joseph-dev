'use client';

import SectionTitle from '@/components/global/section_title';
import { getDictionary } from '@/get-dictionary';
import img from '@/public/pages/main/main.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutLandingPage({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.hr.about;
  return (
    <section className="w-full mx-auto py-10 bg-[url('../public/pages/print.png')] bg-right bg-no-repeat">
      <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col md:flex-row md:flex-nowrap items-center justify-center lg:justify-between gap-6 md:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <SectionTitle text={data.title} />
          <h1 className="text-blue_itm_good text-5xl font-bold mb-2">
            {data.subtitle}
          </h1>
          <p className="mb-5 font-open font-lg sm:text-xl text-black_itm">
            {data.text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

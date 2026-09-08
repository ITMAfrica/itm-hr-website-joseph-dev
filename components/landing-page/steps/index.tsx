'use client';

import SectionTitle from '@/components/global/section_title';
import { getDictionary } from '@/get-dictionary';
import img from '@/public/pages/main/main3.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function StepsLandingPage({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.hr.steps;
  return (
    <section className="w-full mx-auto py-10 bg-white">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row md:flex-nowrap items-center justify-center lg:justify-between gap-6 md:gap-10">
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
          className="w-full md:w-1/2 md:pt-0 md:mr-14"
        >
          <SectionTitle text="ITM HR" />
          <h1 className="text-blue_itm_good text-4xl font-bold mb-4">
            {data.subtitle}
          </h1>
          <div className="mb-5 lg:w-11/12 font-open font-lg text-black_itm">
            <h3 className="text-lg font-semibold text-blue_itm_aqua_marine">
              {data.vision.title}
            </h3>
            <p className="text-lg mb-4">{data.vision.text}</p>
            <h3 className="text-lg font-semibold text-blue_itm_aqua_marine">
              {data.mission.title}
            </h3>
            <p className="text-lg mb-4">{data.mission.text}</p>
            <h3 className="text-lg font-semibold text-blue_itm_aqua_marine">
              {data.values.title}
            </h3>
            <p className="text-lg">{data.values.text}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

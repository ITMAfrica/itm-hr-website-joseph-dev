'use client';

import bg from '@/public/pages/main/bg1.png';
import bg2 from '@/public/pages/main/bg2.png';
import bg3 from '@/public/pages/main/bg3.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CardLandingPage({
  text,
  title,
  index,
}: {
  text: String;
  title: String;
  index: number;
}) {
  const images = [bg, bg2, bg3];
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`z-20 md:w-[31%] mb-6 md:mb-0 h-[320px] rounded-lg flex items-center justify-center px-5 lg:px-10 relative ${
        index % 2 == 0 ? 'bg-blue_itm_title_blue' : 'bg-blue_itm_aqua_marine'
      }`}
    >
      <Image
        src={images[index]}
        alt="bg"
        className="h-full w-full absolute z-0 opacity-10"
      />
      <div className="w-fit h-fit z-10">
        <h2 className={`text-3xl mb-3 font-sans ${index % 2 == 0 ? 'text-blue_itm_aqua_marine' : 'text-white'}`}>
          {title}
        </h2>
        <p className="text-lg text-white">{text}</p>
      </div>
    </motion.article>
  );
}

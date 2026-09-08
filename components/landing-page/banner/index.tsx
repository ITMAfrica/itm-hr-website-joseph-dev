'use client';

import Link from 'next/link';
import Image from 'next/image';
import banner from '@/public/pages/main/bannerMain.png';
import banner2 from '@/public/pages/main/banner2.png';
import { getDictionary } from '@/get-dictionary';
import { motion } from 'framer-motion';

export default function BannerLandingPage({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.hr.banner;
  return (
    <div className="md:p-5">
      <section className="h-[75vh] mx-auto relative">
        <div className="w-10/12 mx-auto relative h-full">
          <div className="h-full">
            <article className="flex items-center sm:w-1/2 w-full absolute z-10 top-0 right-0 left-0 bottom-0">
              <div className="sm:ml-14 ml-4 h-fit">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-white md:text-5xl text-4xl font-bold mb-20"
                >
                  {data.text}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Link
                    href="#countries"
                    className="block w-fit p-3 text-lg font-semibold text-center text-blue_itm_good bg-white hover:bg-blue_itm_aqua_marine hover:text-white border rounded-full border-white hover:border-blue_itm_aqua_marine"
                  >
                    {data.btn}
                  </Link>
                </motion.div>
              </div>
            </article>
          </div>
          <Image
            src={banner}
            className="hidden sm:inline w-full bg-center rounded-xl"
            fill
            priority
            sizes="(min-width: 768px) 83vw, 100vw"
            alt="Bg"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <Image
            src={banner2}
            className="inline sm:hidden w-full bg-center rounded-xl"
            fill
            priority
            sizes="83vw"
            alt="Bg"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
      </section>
    </div>
  );
}

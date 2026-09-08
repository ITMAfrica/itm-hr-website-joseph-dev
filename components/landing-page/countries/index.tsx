'use client';

import CardCountryChoice from '@/components/global/cards/countryChoice';
import SectionTitle from '@/components/global/section_title';
import { getDictionary } from '@/get-dictionary';
import { COUNTRY_API_URL, entities_to_display } from '@/helpers';
import { entities } from '@/lib/data';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import FadeIn from '@/components/global/fade_in';
import { motion } from 'framer-motion';

export default function CountriesLandingPage() {
  const params: any = useParams();
  const lang: string = params.lang;
  const [modal, setModal] = useState(false);
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

  return (
    <section>
      <FadeIn>
        <div
          id="countries"
          className="bg-white xl:bg-[url('../public/pages/main/countries.png')] bg-[url('../public/pages/main/countriesRes.png')] bg-contain bg-left bg-no-repeat"
        >
          <div className="flex items-center h-full w-11/12 xl:w-10/12 mx-auto py-10">
            <div className="hidden md:block md:w-[40%] xl:w-[50%]"></div>
            <div className="md:w-[60%] xl:w-[50%]">
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
                className="h-[450px] overflow-y-scroll scrollbar-default"
              >
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
              </motion.div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

import SectionTitle from '@/components/global/section_title';
import { getDictionary } from '@/get-dictionary';
import { getCountryCode } from '@/helpers';
import Link from 'next/link';

export default function AboutPageAbout({ params }: any) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const country: string = params.country;
  const code: string = getCountryCode(country);
  const data = dictionary[code].pages.about.aboutEntity;
  return (
    <section className="w-full bg-white lg:py-20 py-10" id="entity">
      <div className="w-11/12 lg:w-10/12 mx-auto flex lg:flex-nowrap items-start flex-wrap">
        <article className="md:w-1/2 w-full lg:pr-20 pr-0">
          <SectionTitle text={data.title} />
          <h1 data-reveal className="font-bold md:text-4xl text-2xl pt-3 lg:pb-0 pb-3 text-blue_itm_primary">
            {data.description}
          </h1>
        </article>
        <article data-reveal className="md:w-1/2 w-full">
          <p className="font-open sm:text-lg">{data.paragraph1}</p>
          <p className="pt-3 font-open sm:text-lg">{data.paragraph2}</p>
          <Link
            href={data.btnContact.link}
            className="font-bold mt-5 px-5 py-3 bg-blue_itm_primary text-white block w-fit rounded-full hover:bg-blue_itm_aqua_marine"
          >
            {data.btnContact.text}
          </Link>
        </article>
      </div>
    </section>
  );
}

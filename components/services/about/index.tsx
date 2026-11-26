import SectionTitle from '@/components/global/section_title';
import Link from 'next/link';
import { getDictionary } from '@/get-dictionary';

export default function ServicesPageAbout({ params }: any) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.services.about;
  return (
    <section className="w-full bg-white lg:py-20 py-10">
      <div className="w-11/12 lg:w-10/12 mx-auto flex lg:flex-nowrap items-start flex-wrap">
        <article className="lg:w-1/2 w-full lg:pr-20 pr-0">
          <SectionTitle text={data.title} />
          <h1 data-reveal className="font-bold text-4xl lg:text-5xl pt-3 text-blue_itm_primary">
            {data.subtitle}
          </h1>
        </article>
        <article data-reveal className="lg:w-1/2 w-full lg:pt-0 pt-3">
          <p className="font-open text-lg">{data.paragraph}</p>
          <p className="pt-3 font-open text-lg">{data.paragraph2}</p>
          <Link
            href={data.btnContact.link}
            className="font-bold mt-5 px-5 py-3 bg-blue_itm_primary text-white block w-fit rounded-full hover:bg-blue_itm_aqua_marine"
          >
            {data.btnContact.title}
          </Link>
        </article>
      </div>
    </section>
  );
}

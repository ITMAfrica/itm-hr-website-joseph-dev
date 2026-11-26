import SectionTitle from '@/components/global/section_title';
import CardFaq from '@/components/global/cards/faq';
import { getDictionary } from '@/get-dictionary';

export default function Faqs({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.global.faq;
  return (
    <section className="w-full py-20 bg-[url('../public/pages/print.png')] bg-left bg-no-repeat">
      <div className="w-11/12 lg:w-10/12 mx-auto lg-fit lg:h-[500px] lg:flex">
        <div className="w-full lg:w-1/3">
          <SectionTitle text={data.left.title} />
          <h1 data-reveal className="font-bold  text-4xl  text-blue_itm_primary">
            {data.left.subtitle}
          </h1>
          <p data-reveal className="pt-5 font-open md:text-lg">
            <span>{data.left.text}</span>
            <br />
            <span>{data.left.text2}</span>
          </p>
        </div>
        <div data-reveal className="w-full lg:w-2/3 h-fit lg:h-full overflow-y-scroll lg:pt-0 pt-5 scrollbar-thin lg:ml-4">
          {data.right.map(function (item: any, index: number) {
            return <CardFaq {...item} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

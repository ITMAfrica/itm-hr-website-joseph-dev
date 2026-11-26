import { getDictionary } from '@/get-dictionary';
import HomeMetricsCard from './card';

export default function HomeMetrics({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.home.metrics;
  return (
    <section className="bg-no-repeat bg-[url('../public/pages/home/bg_metrics.jpg')] bg-cover bg-black/70 w-full">
      <div className="flex items-center md:w-10/12 w-11/12 mx-auto py-16">
        <div className="m-auto">
          <div className="md:flex justify-between md:mb-16 mb-10 text-white">
            <h3 data-reveal className="text-4xl font-bold md:w-1/4 w-full mx-auto md:mx-0 ">
              {data.title}
            </h3>
            <p data-reveal className="md:w-2/5 w-full font-open text-lg">
              {data.paragraph}
            </p>
          </div>
          <div data-reveal className="w-full flex justify-between flex-wrap">
            {data.metricsItems.map((item: any, index: number) => (
              <HomeMetricsCard {...item} id={`counter-${index}`} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

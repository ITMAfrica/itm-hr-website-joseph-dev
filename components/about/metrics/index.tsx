import { getDictionary } from '@/get-dictionary';
import { getCountryCode } from '@/helpers';

export default function AboutPageMetrics({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const code = params.country ? getCountryCode(params.country) : null;
  const data =
    code && dictionary[code]?.pages?.about?.metrics
      ? dictionary[code].pages.about.metrics
      : dictionary.globalContent.pages.about.metrics;

  const circles = [
    {
      key: 'mission',
      title: data.mission.title,
      text: data.mission.text,
      className:
        'left-[2%] top-0 z-[1] h-[56%] w-[56%] bg-blue_itm_primary',
    },
    {
      key: 'values',
      title: data.values.title,
      text: data.values.text,
      className:
        'right-0 top-[28%] z-[3] h-[44%] w-[44%] bg-blue_itm_aqua_marine',
    },
    {
      key: 'vision',
      title: data.vision.title,
      text: data.vision.text,
      className:
        'bottom-0 left-[16%] z-[2] h-[46%] w-[46%] bg-blue_itm_secondary',
    },
  ];

  return (
    <section className="h-fit overflow-x-hidden bg-[url('../public/pages/print.png')] bg-right bg-no-repeat">
      <main className="mx-auto flex w-11/12 flex-col items-center gap-10 py-10 lg:w-10/12 lg:flex-row lg:items-center lg:gap-10 lg:py-20 xl:gap-14">
        <div className="relative mx-auto aspect-square w-full max-w-[400px] shrink-0 lg:mx-0 lg:w-[40%] lg:max-w-[460px]">
          {circles.map((circle) => (
            <div
              key={circle.key}
              className={`absolute flex items-center justify-center overflow-hidden rounded-full p-[9%] text-white shadow-2xl ${circle.className}`}
            >
              <div className="w-full text-center">
                <h3 className="text-[0.7rem] font-bold uppercase leading-tight sm:text-sm md:text-base lg:text-lg">
                  {circle.title}
                </h3>
                <p className="pt-2 font-open text-[0.65rem] leading-snug sm:text-xs lg:text-sm">
                  {circle.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full min-w-0 lg:w-[60%]">
          <p className="font-open text-base text-black_itm/70 lg:text-lg">
            {data.right.text}
          </p>
          <div className="flex w-full flex-wrap items-start justify-between pt-5">
            <div className="w-1/2 pt-5 pr-5">
              <h4 className="text-4xl font-extrabold text-blue_itm_aqua_marine lg:text-6xl">
                {data.right.number.agents.number}
              </h4>
              <h3 className="pt-1 text-sm font-bold lg:text-lg">
                {data.right.number.agents.title}
              </h3>
              <p className="pt-1 font-open text-xs font-normal lg:text-base">
                {data.right.number.agents.description}
              </p>
            </div>
            <div className="w-1/2 pt-5 pr-5">
              <h4 className="text-4xl font-extrabold text-blue_itm_aqua_marine lg:text-6xl">
                {data.right.number.recruiting.number}
              </h4>
              <h3 className="pt-1 text-sm font-bold lg:text-lg">
                {data.right.number.recruiting.title}
              </h3>
              <p className="pt-1 font-open text-xs font-normal lg:text-base">
                {data.right.number.recruiting.description}
              </p>
            </div>
            <div className="w-1/2 pt-5 pr-5">
              <h4 className="text-4xl font-extrabold text-blue_itm_aqua_marine lg:text-6xl">
                {data.right.number.country.number}
              </h4>
              <h3 className="pt-1 text-sm font-bold lg:text-lg">
                {data.right.number.country.title}
              </h3>
              <p className="pt-1 font-open text-xs font-normal lg:text-base">
                {data.right.number.country.description}
              </p>
            </div>
            <div className="w-1/2 pt-5 pr-5">
              <h4 className="text-4xl font-extrabold text-blue_itm_aqua_marine lg:text-6xl">
                {data.right.number.company.number}
              </h4>
              <h3 className="pt-1 text-sm font-bold lg:text-lg">
                {data.right.number.company.title}
              </h3>
              <p className="pt-1 font-open text-xs font-normal lg:text-base">
                {data.right.number.company.description}
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

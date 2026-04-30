import Image from 'next/image';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';

export default function TestimonyItem({
  item,
  index,
  activeSlide,
  setActiveSlide,
}: any) {
  const isActive = activeSlide === index;

  return (
    <article
      onClick={() => setActiveSlide(index)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setActiveSlide(index);
        }
      }}
      role="button"
      tabIndex={0}
      aria-current={isActive ? 'true' : undefined}
      className={`cursor-pointer rounded-2xl outline-none transition-all duration-500 ease-out focus-visible:ring-2 focus-visible:ring-blue_itm_secondary focus-visible:ring-offset-2 ${
        isActive
          ? 'scale-105 md:scale-110 opacity-100'
          : 'scale-95 opacity-75'
      }`}
    >
      <div
        className={`flex w-full flex-col rounded-2xl border border-gray-100 bg-white p-4 pt-0 transition-shadow duration-500 ease-out md:p-5 md:pt-0 ${
          isActive ? 'shadow-xl' : 'shadow-lg'
        }`}
      >
        <div className="-mt-12 flex justify-center md:-mt-14">
          <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-lg md:h-24 md:w-24">
            <Image
              src={item?.image}
              fill
              alt={item?.name ? `Photo of ${item.name}` : 'Testimonial author'}
              className="object-cover"
              sizes="(max-width: 768px) 80px, 96px"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-start text-blue_itm_secondary/35">
          <BiSolidQuoteAltLeft className="text-2xl md:text-3xl" aria-hidden />
        </div>
        <p className="min-h-[4.5rem] px-1 text-center font-open text-sm leading-relaxed text-black_itm md:min-h-[5.5rem] md:text-base">
          {item?.description}
        </p>
        <div className="flex justify-end text-blue_itm_secondary/35">
          <BiSolidQuoteAltRight className="text-2xl md:text-3xl" aria-hidden />
        </div>
        <h3 className="mt-1 text-center font-semibold text-blue_itm_aqua_marine md:text-lg">
          {item?.name}
        </h3>
        <p className="text-center text-xs text-gray_itm md:text-sm">
          {item?.poste}
        </p>
      </div>
    </article>
  );
}

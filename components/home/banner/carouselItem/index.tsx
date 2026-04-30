import Image from 'next/image';
import image1 from '@/public/pages/home/banner/banner1.webp';
import image3 from '@/public/pages/home/banner/banner3.webp';
import image4 from '@/public/pages/home/banner/banner4.webp';
import ButtonBg from '@/components/global/buttons/btn_bg';
import { CODE, getCookie } from '@/helpers';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CarouselItem({
  title,
  paragraph,
  btnMore,
  indexImage,
  bgWhite,
  index,
}: {
  title: string;
  paragraph: string;
  btnMore: any;
  indexImage: number;
  bgWhite: boolean;
  index: number;
}) {
  const desktopImages = [image1, image3];
  const params = useParams();
  const href = usePathname();
  const [CURRENT_CODE, SET_CURRENT_CODE] = useState(CODE);

  function getHref() {
    const current = btnMore.key;
    if (CURRENT_CODE && CURRENT_CODE != CODE) {
      return `/${params.lang}/${
        params.country ? params.country : CURRENT_CODE
      }/${current}`;
    } else {
      return href;
    }
  }

  useEffect(
    function () {
      SET_CURRENT_CODE(getCookie('country', document?.cookie) || CODE);
    },
    [params.lang, params.country]
  );

  const desktopSrc = desktopImages[indexImage % desktopImages.length];

  return (
    <section className="relative mx-auto h-full min-h-[min(85vh,720px)] w-full overflow-hidden rounded-xl md:min-h-0">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={desktopSrc}
          className="hidden object-cover object-center sm:block"
          fill
          alt=""
          priority={index === 0}
          sizes="(max-width: 768px) 100vw, 85vw"
          aria-hidden
        />
        <Image
          src={image4}
          className="object-cover object-center sm:hidden"
          fill
          alt=""
          priority={index === 0}
          sizes="(max-width: 768px) 100vw, 85vw"
          aria-hidden
        />
        {bgWhite && (
          <div className="absolute inset-0 bg-white/85" aria-hidden />
        )}
      </div>

      <div className="relative z-10 flex min-h-[min(85vh,720px)] h-full flex-col justify-center md:min-h-0 md:flex-row md:items-center">
        <div
          className={`flex w-full flex-col justify-center px-6 py-10 sm:px-12 md:w-1/2 md:max-w-2xl md:py-14 lg:pl-16 ${
            bgWhite ? 'text-black_itm' : 'text-white'
          }`}
        >
          <h1
            className={`mb-4 font-bold uppercase tracking-tight md:text-5xl md:leading-tight ${
              bgWhite
                ? 'text-blue_itm_good text-3xl'
                : 'text-3xl text-white drop-shadow-sm md:text-[2.75rem]'
            }`}
          >
            {title}
          </h1>
          <p
            className={`mb-8 max-w-xl font-open text-base leading-relaxed md:text-lg ${
              bgWhite ? 'text-black_itm' : 'text-white/95'
            }`}
          >
            {paragraph}
          </p>
          <div className="w-fit">
            <ButtonBg {...btnMore} link={getHref()} key={index} />
          </div>
        </div>
        <div
          className="hidden min-h-[12rem] flex-1 md:block"
          aria-hidden
        />
      </div>
    </section>
  );
}

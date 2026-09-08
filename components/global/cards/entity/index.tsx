import bgHr from '@/public/assets/logo/hr.png';
import Image from 'next/image';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

export default function CardEntity({
  name,
  image,
  logo,
  slogant,
  description,
  total,
  index,
  activeSlide,
  setActiveSlide,
}: any) {
  if (index == activeSlide) {
    return (
      <article className="w-[100vw] h-fit lg:h-[70vh] md:flex">
        <div className="md:w-1/2 h-full relative flex justify-center lg:justify-end">
          <div className="w-full h-[50vh] lg:h-full bg-white relative ">
            <div className="w-full h-full relative overflow-hidden">
              <Image
                src={image}
                fill
                alt=""
                style={{ objectFit: 'cover' }}
                className="fromToImage"
              />
            </div>
            <div className="absolute z-20 h-[90px] left-0 flex items-center justify-between px-5 right-0 bottom-0 bg-entityBar/30">
              <div className="w-fit flex items-center text-blue_itm_aqua_marine text-2xl lg:hidden">
                <div
                  onClick={function () {
                    if (activeSlide != 0) {
                      setActiveSlide(activeSlide - 1);
                    }
                  }}
                  className="w-fit cursor-pointer bg-white p-2 rounded-full"
                >
                  <MdOutlineKeyboardArrowLeft />
                </div>
                <div className="W-fit pr-2"></div>
                <div
                  onClick={function () {
                    if (activeSlide != total - 1) {
                      setActiveSlide(activeSlide + 1);
                    }
                  }}
                  className="w-fit cursor-pointer p-2 rounded-full bg-white"
                >
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>
              <h2 className="font-bold lg:px-0 px-3 lg:text-left text-center lg:text-lg text-white">
                {slogant}{' '}
              </h2>
              <div className="w-fit font-bold text-xl text-blue_itm_aqua_marine">
                <span className="pr-2">{index + 1}</span>/
                <span className="pl-2">{total}</span>
              </div>
            </div>
          </div>
          <div className="absolute z-10 top-0 flex lg:justify-end justify-center left-0 right-0 bottom-0 bg-entityHover/30 pl-10"></div>
          <div className="w-11/12 lg:w-10/12 h-fit z-20 lg:-right-[4px] top-0 absolute flex justify-end py-10 lg:py-20">
            <div className="w-[120px] h-[90px] relative bg-white rounded-l-lg border-x-4 border-l-white border-r-blue_itm_primary">
              <Image
                src={logo}
                fill
                alt=""
                sizes="120px"
                className="entityLogoAnimation object-contain object-center p-2"
                style={{ objectFit: 'contain', objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 h-full lg:py-10 pb-10 flex lg:justify-start justify-center relative ">
          <div className="w-11/12 h-full lg:py-0 py-10  flex items-center lg:justify-start justify-center bg-white relative">
            <div className="absolute lg:flex hidden z-20 text-blue_itm_aqua_marine text-2xl justify-center h-[90px] items-center w-2/12 left-0 right-0 bottom-full lg:bottom-0 bg-entityBar/30 rounded-tr-md rounded-br-md">
              <div
                onClick={function () {
                  if (activeSlide != 0) setActiveSlide(activeSlide - 1);
                }}
                className="w-fit cursor-pointer bg-white p-2 rounded-full"
              >
                <MdOutlineKeyboardArrowLeft />
              </div>
              <div className="w-fit pr-2"></div>
              <div
                onClick={function () {
                  if (activeSlide != total - 1) setActiveSlide(activeSlide + 1);
                }}
                className="w-fit cursor-pointer bg-white p-2 rounded-full"
              >
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>
            <div className="w-10/12 lg:w-9/12 mx-auto md:mr-10">
              <h2 className="text-4xl titleAnimation w-full mx-auto font-bold text-blue_itm_primary pb-3">
                {name}
              </h2>
              <p className="w-full hideDescription mx-auto font-open sm:text-medium">
                {description}
              </p>
            </div>
          </div>
        </div>
      </article>
    );
  }
  return <div className="w-full"></div>;
}

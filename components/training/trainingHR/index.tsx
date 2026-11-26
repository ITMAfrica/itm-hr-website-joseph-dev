import imageLeft from '@/public/assets/bg/bg.about.itm.left.png';
import imageRight from '@/public/assets/bg/trainingBg.png';
import Image from 'next/image';

export default function TrainingPageTrainingHR({ params }: { params: any }) {
  return (
    <section className="bg-white pt-16 pb-32">
      <div className="flex w-10/12 mx-auto">
        <div className="w-full lg:w-1/2 lg:pb-0 pb-10 h-full flex items-center justify-center relative">
          <div data-reveal="fade" className="w-10/12 lg:w-[300px] h-[100px] md:h-[300px] lg:h-[300px] shadow-xl shadow-black/60 relative">
            <Image
              src={imageRight}
              fill
              alt=""
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
            <div className="w-full h-full shadow-2xl shadow-black/60 absolute top-[20%] left-[-60%]">
              <div className="w-full h-full  shadow-xl relative">
                <Image
                  src={imageLeft}
                  fill
                  alt=""
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </div>
          </div>
          <div className="w-2/12 lg:hidden block"></div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center">
          <div data-reveal>
            <h3 className="text-3xl font-bold text-blue_itm_primary mb-4">
              Formation qualifiante <br />
              Chargé de gestion RH
            </h3>
            <p className="">
              We equip employees with skills and instill in them a phylosophy
              and culture of excellence to enhance their performance and
              contribute to a sustainable financial & operational growth of your
              business. We offer a combination of professional trainings and a
              mix of HR solutions tailored to the specific needs of companies
              various sectors. business. We offer combination of professional
              trainings and a mix of HR solutions tailored to the specific needs
              of companies in various sectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

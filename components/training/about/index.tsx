import Image from 'next/image';
import image1 from '@/public/pages/training/training1.png';
import image3 from '@/public/pages/training/training3.png';

export default function TrainingPageAbout({ params }: { params: any }) {
  return (
    <section className="about-page-bg-aside bg-white bg-left bg-no-repeat py-10 lg:py-20">
      <div className="w-10/12 mx-auto">
        <div data-reveal className="w-3/5 mx-auto text-center mb-16">
          <h2 className="font-bold text-xs text-blue_itm_aqua_marine">
            LOREM IPSUME
          </h2>
          <h1 className="text-blue_itm_primary font-bold text-4xl mb-3">
            Découvrez nos formations
          </h1>
          <p className="text-lg">
            Lorem Ipsum is simply dummy text of thLorem Ipsum is simply dummy
            text of the printing and typesetting industry
          </p>
        </div>
        <div className="w-10/12 mx-auto">
          <article data-reveal className="flex justify-between mb-10">
            <div className="w-[68%] py-10 px-8 flex shadow-lg rounded-lg">
              <div>
                <h5 className="w-3/4 font-bold text-blue_itm_primary text-3xl mb-4">
                  Lorem Ipsum is simply dummy
                </h5>
                <p className="w-3/4">
                  Chaque séance est conçue pour améliorer des compétences
                  spécifiques telles que la communication, la résolution de
                  problèmes et la gestion du temps
                </p>
              </div>
              <div className="w-[400px] h-[220px] ">
                <div>
                  <Image
                    src={image1}
                    alt=""
                    className=""
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
            <div className="p-4 bg-blue_itm_aqua_marine/10 rounded-lg border w-[30%] bg-[url('../public/pages/training/training2.png')] bg-bottom bg-no-repeat">
              <h5 className="font-bold text-blue_itm_primary text-2xl mb-2">
                Lorem Ipsum is simply dummy
              </h5>
              <p>
                Nos activités sont conçues pour créer des liens durables entre
                les membres de votre équipe.
              </p>
            </div>
          </article>

          <article data-reveal className="flex justify-between">
            <div className="w-[68%] py-10 px-8 flex shadow-lg bg-blue_itm_aqua_marine/10 rounded-lg">
              <div>
                <h5 className="w-3/4 font-bold text-blue_itm_primary text-3xl mb-4">
                  Lorem Ipsum is simply dummy
                </h5>
                <p className="w-3/4">
                  Chaque séance est conçue pour améliorer des compétences
                  spécifiques telles que la communication, la résolution de
                  problèmes et la gestion du temps
                </p>
              </div>
              <div className="w-[400px] h-[220px] ">
                <div>
                  <Image
                    src={image3}
                    alt=""
                    className=""
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
            <div className="p-4 rounded-lg border w-[30%] bg-[url('../public/pages/training/training4.png')] bg-bottom bg-no-repeat">
              <h5 className="font-bold text-blue_itm_primary text-2xl mb-2">
                Lorem Ipsum is simply dummy
              </h5>
              <p>
                Nos activités sont conçues pour créer des liens durables entre
                les membres de votre équipe.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

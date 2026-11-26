import Image from 'next/image';
import Image1 from '@/public/assets/images/event1.png';
import Image2 from '@/public/assets/images/event2.png';

export default function TrainingPageEvents({ params }: { params: any }) {
  return (
    <section className="bg-white py-16">
      <div className="w-10/12 mx-auto">
        <div data-reveal className="w-2/5 mx-auto text-center mb-16">
          <h2 className="font-bold text-xs text-blue_itm_aqua_marine">
            LOREM IPSUME
          </h2>
          <h1 className="text-blue_itm_primary font-bold text-4xl mb-10">
            Découvrez nos derniers événements
          </h1>
        </div>
        <div className="w-9/12 mx-auto flex">
          <div className="w-1/2">
            <article data-reveal className="w-[400px] h-fit mx-auto">
              <div className="w-full">
                <Image src={Image1} alt="Event" className="h-[450px]" />
              </div>
              <h4 className="text-2xl text-blue_itm_primary font-bold mt-3">
                Big News
              </h4>
              <p className="text-sm">
                We are excited to announce that ITM Holding has partnered with
                Centum Investment Company Plc. to expand into Kenya’s booming
                hashtag This game-changing collaboration brings ITM’s HR
                expertise across 18 African countries to
              </p>
            </article>
          </div>

          <div className="w-1/2">
            <article data-reveal className="w-[400px] h-fit mx-auto">
              <h4 className="text-2xl text-blue_itm_primary font-bold mb-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h4>
              <p className="text-sm mb-2">
                We are excited to announce that ITM Holding has partnered with
                Centum Investment Company Plc. to expand into Kenya’s booming
                hashtag This game-changing collaboration brings ITM’s HR
                expertise across 18 African countries to
              </p>
              <div className="w-full">
                <Image src={Image2} alt="Event" className="h-[450px]" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

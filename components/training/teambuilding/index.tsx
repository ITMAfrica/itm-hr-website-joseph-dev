import Image from 'next/image';
import Image1 from '@/public/pages/training/teambuilding1.png';
import Image2 from '@/public/pages/training/teambuilding2.png';

export default function TrainingPageTeamBuildingSection({
  params,
}: {
  params: any;
}) {
  return (
    <section className="bg-white py-16">
      <div className="w-10/12 mx-auto">
        <div data-reveal className="w-2/5 mx-auto text-center mb-16">
          <h2 className="font-bold text-xs text-blue_itm_aqua_marine">
            LOREM IPSUME
          </h2>
          <h1 className="text-blue_itm_primary font-bold text-4xl mb-10">
            Découvrez nos séances de team building
          </h1>
        </div>
        <section className="w-10/12 mx-auto">
          <div data-reveal className="flex justify-between mb-10">
            <div className="w-1/2 mr-5">
              <h3 className="text-3xl font-bold text-blue_itm_primary">
                Lorem ipsume
              </h3>
              <h6 className="py-2 text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                tenetur quam praesentium cumque fuga
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium ratione illum officiis asperiores, veniam quis nulla
                reiciendis rem esse, similique voluptate dolor quam voluptates,
                pariatur beatae quos maiores quae voluptatum.
              </p>
            </div>
            <div className="w-1/2">
              <div className="">
                <Image
                  src={Image1}
                  alt="Image team building"
                  className="h-[350px]"
                />
              </div>
            </div>
          </div>

          <div data-reveal className="flex justify-between">
            <div className="w-1/2">
              <div className="w-[500px]">
                <Image
                  src={Image2}
                  alt="Image team building"
                  className="h-[400px]"
                />
              </div>
            </div>
            <div className="w-1/2">
              <h3 className="text-3xl font-bold text-blue_itm_primary">
                Lorem ipsume
              </h3>
              <h6 className="py-2 text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                tenetur quam praesentium cumque fuga
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium ratione illum officiis asperiores, veniam quis nulla
                reiciendis rem esse, similique voluptate dolor quam voluptates,
                pariatur beatae quos maiores quae voluptatum.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

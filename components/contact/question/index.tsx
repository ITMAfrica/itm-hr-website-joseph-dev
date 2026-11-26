import Image from 'next/image';
import image1 from '@/public/pages/contact/contact2.webp';
import image2 from '@/public/pages/contact/contact1.webp';
import image3 from '@/public/pages/contact/contact3.webp';
import image4 from '@/public/pages/contact/contact4.webp';
import ContactPageForm from '../form';
import { getDictionary } from '@/get-dictionary';

export default function ContactPageQuestionsSection({
  params,
}: {
  params: any;
}) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.contact.formSection.infos;
  return (
    <section className="bg-white pb-10">
      <div className="w-full h-[350px] bg-no-repeat bg-cover bg-[url('../public/pages/contact/image_bg.webp')]"></div>
      <section className="md:flex justify-around lg:w-10/12 w-11/12 mx-auto -translate-y-72 text-white md:h-[400px] h-[650px]">
        <div className="md:w-1/2">
          <h2 data-reveal className="sm:text-5xl text-3xl font-bold">{data.title}</h2>
          <h4 data-reveal className="sm:text-5xl text-3xl font-bold">{data.subtitle}</h4>
          <p data-reveal className="w-9/12 pt-5 pb-10 text-lg">{data.paragraph}</p>
          <div data-reveal className="w-fit hidden md:flex justify-start">
            <div>
              <div className="flex justify-end items-end">
                <div className="relative md:w-[170px] w-[75px] h-fit shadow-xl rounded-md mr-3">
                  <Image
                    src={image1}
                    alt="Design"
                    width={10000}
                    height={10000}
                    style={{ objectFit: 'cover' }}
                    className="md:w-[170px] w-[120px] h-[75px] md:h-[170px] rounded-lg"
                  />
                  <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-blue_itm_primary/20 rounded-lg duration-700"></div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="relative md:w-[120px] w-[80px] md:h-[120px] h-[80px] shadow-md rounded-lg mt-3 mr-3">
                  <Image
                    src={image3}
                    alt="Design"
                    width={10000}
                    height={10000}
                    style={{ objectFit: 'cover' }}
                    className="md:w-[120px] w-[80px] md:h-[120px] h-[80px] rounded-lg"
                  />
                  <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-blue_itm_primary/20 rounded-lg duration-700"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-1/2 md:w-1/2">
                <div className="relative md:w-[250px] w-[225px] md:h-[250px] h-[225px] rounded-lg">
                  <Image
                    src={image2}
                    alt="Design"
                    width={10000}
                    height={10000}
                    style={{ objectFit: 'cover' }}
                    className="md:w-[250px] w-[225px] md:h-[250px] h-[225px] rounded-lg"
                  />
                  <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-blue_itm_primary/20 rounded-lg duration-700"></div>
                </div>
              </div>

              <div className="w-1/2 md:w-1/2">
                <div className="md:w-[205px] relative w-[200px] md:h-[150px] h-[150px] rounded-lg mt-3">
                  <Image
                    src={image4}
                    alt="Design"
                    width={10000}
                    height={10000}
                    style={{ objectFit: 'cover' }}
                    className="w-[205px] md:h-[150px] h-[150px] rounded-lg"
                  />
                  <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-blue_itm_primary/20 rounded-lg duration-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-reveal className="md:w-1/2 bg-white rounded-xl">
          <ContactPageForm params={params} />
        </div>
      </section>
    </section>
  );
}

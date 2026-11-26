import { PiChatsLight } from 'react-icons/pi';
import { IoCallOutline } from 'react-icons/io5';
import { BsGeoAlt } from 'react-icons/bs';
import Link from 'next/link';
import { entitiesInfos } from '@/lib/data';
import { getCountryCode } from '@/helpers';
import { getDictionary } from '@/get-dictionary';
import { ToastContainer } from 'react-toastify';

export default function ContactPageContactSection({ params }: { params: any }) {
  const lang: string = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.contact.infos;
  const country: string = params.country;
  const code: string = getCountryCode(country);
  return (
    <section className="h-fit bg-white pt-5 md:pb-16 pb-8">
      <div className="flex flex-wrap justify-between lg:w-10/12 w-11/12 mx-auto">
        <ContactCard>
          <span className="flex justify-center">
            <IoCallOutline className="w-20 h-20 text-blue_itm_aqua_marine text-center" />
          </span>
          <h5 className="text-2xl font-bold text-center">{data.call}</h5>
          <p className="text-xl text-center mt-4">
            <Link
              href={`tel:${entitiesInfos[code].phone}`}
              className="text-lg text-center mt-4 py-2 px-3 rounded font-open"
            >
              {entitiesInfos[code].phone}
            </Link>
          </p>
        </ContactCard>
        <ContactCard>
          <span className="flex justify-center">
            <PiChatsLight className="w-20 h-20 text-blue_itm_aqua_marine text-center" />
          </span>
          <h5 className="text-2xl font-bold text-center">{data.email}</h5>
          <div className="flex justify-center">
            <Link
              href={`mailto:${entitiesInfos[code].email}`}
              className="text-lg text-center mt-4 bg-blue_itm_primary text-white py-2 px-3 rounded font-open"
            >
              {entitiesInfos[code].email}
            </Link>
          </div>
        </ContactCard>
        <ContactCard>
          <span className="flex justify-center">
            <BsGeoAlt className="w-20 h-20 text-blue_itm_aqua_marine text-center" />
          </span>
          <h5 className="text-2xl font-bold text-center">{data.address}</h5>
          <p className=" text-center mt-4 font-open">
            {entitiesInfos[code].address}
          </p>
        </ContactCard>
        <ToastContainer containerId={'Contact'} />
      </div>
    </section>
  );
}

export function ContactCard({ children }: { children: React.ReactNode }) {
  return (
    <div data-reveal className="flex items-center justify-center lg:w-[31%] md:w-[48%] w-full mb-6 lg:mb-0 rounded-lg border bg-blue_itm_primary/5 h-[300px]">
      <div className="w-full h-fit p-8">{children}</div>
    </div>
  );
}

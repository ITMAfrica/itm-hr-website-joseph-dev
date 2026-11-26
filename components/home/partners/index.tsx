import { getDictionary } from '@/get-dictionary';
import { getCountryCode } from '@/helpers';
import { getPartnerLogosForCountry } from '@/lib/partners-logos';
import PartnerLogosGrid from './PartnerLogosGrid';

export default function HomePartners({ params }: { params: any }) {
  const lang = params.lang;
  const countryCode = getCountryCode(params?.country);
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.home.partners;
  const logos = getPartnerLogosForCountry(countryCode);

  return (
    <section className="flex items-center py-20">
      <div className="w-full">
        <div className="md:w-9/12 w-11/12 mx-auto md:pb-12 pb-6">
          <h1 data-reveal className="md:text-5xl text-3xl font-bold text-blue_itm_primary text-center mb-4">
            {data.title}
          </h1>
          <h3 data-reveal className="text-xl text-center md:w-3/5 w-full mx-auto font-open text-black_itm">
            {data.subtitle}
          </h3>
        </div>
        <div className="md:w-9/12 w-11/12 mx-auto md:mt-10 mt-4">
          <PartnerLogosGrid logos={logos} />
        </div>
      </div>
    </section>
  );
}

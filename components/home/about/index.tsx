"use client";
import { getDictionary } from "@/get-dictionary";
import ButtonOulined from "@/components/global/buttons/btn_outlined";
import SectionTitle from "@/components/global/section_title";
import AboutImagesDesign from "./aboutImagesDesign";
import CompanyProfilePreviewModal from "@/components/global/modal/companyProfilePreview";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { CODE, getCompanyProfilePdfPath, getCountryCode } from "@/helpers";
import { COUNTRY_SITE_CODES } from "@/lib/country-site-codes";

export default function HomeAbout({ params }: { params: any }) {
  const lang: string = params.lang;
  const pathname = usePathname();
  const dictionary: any = getDictionary(lang);
  const country: string = params.country;
  const code = getCountryCode(country);
  const data = dictionary?.[code]?.pages.home.about;
  const companyProfile = dictionary?.global?.companyProfile;
  const pathCountry = useMemo(() => {
    const seg = pathname.split("/").filter(Boolean)[1]?.toLowerCase();
    return seg && COUNTRY_SITE_CODES.has(seg) ? seg : undefined;
  }, [pathname]);
  const companyProfileHref = getCompanyProfilePdfPath(
    pathCountry ?? country,
    lang,
  );
  const companyProfilePreviewUrl = `${companyProfileHref}${companyProfileHref.includes("?") ? "&" : "?"}preview=true`;
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [CURRENT_COUNTRY, SET_CURRENT_COUNTRY] = useState({
    code: CODE,
    fr: "Congo Kinshasa",
    en: "Congo Kinshasa",
  });
  return (
    <section className="md:flex justify-center w-full mx-auto lg:py-20 py-10 bg-[url('../public/pages/print.png')] bg-right bg-no-repeat">
      <div className="w-11/12 mx-auto flex md:flex-nowrap flex-wrap items-center  justify-center lg:justify-between">
        <AboutImagesDesign />
        <div className="w-fit h-full md:px-5 px-3"></div>
        <div className="w-full semi-lg:w-2/5 lg:w-1/2">
          <div className="pt-10 md:pt-0 md:mr-14">
            <SectionTitle text={data.title} />
            <h1 className="text-blue_itm_good text-5xl font-bold mb-2">
              {data.subtitle}
            </h1>
            <p className="mb-5 font-open text-lg text-black_itm">
              {data.paragraph}
            </p>
            <div className="mx-auto w-fit lg:w-full flex flex-wrap gap-3 justify-center lg:justify-start items-center">
              <ButtonOulined {...data.btnMore} key={1} />
              {companyProfile?.text && companyProfile?.title ? (
                <button
                  onClick={() => setIsPreviewOpen(true)}
                  title={companyProfile.title}
                  className="block w-44 py-4 text-lg font-semibold text-center text-blue_itm_good hover:bg-blue_itm_aqua_marine hover:text-white border rounded-full border-blue_itm_good hover:border-blue_itm_aqua_marine transition duration-800 cursor-pointer"
                >
                  {companyProfile.text}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Company Profile Preview Modal */}
      <CompanyProfilePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        previewUrl={companyProfilePreviewUrl}
        downloadUrl={companyProfileHref}
        previewTitle={
          companyProfile?.previewTitle || companyProfile?.title || ""
        }
        downloadTitle={companyProfile?.title || ""}
        downloadBtnText={companyProfile?.downloadBtn || "Download"}
        closeBtnText={companyProfile?.closeBtn || "Close"}
      />
    </section>
  );
}

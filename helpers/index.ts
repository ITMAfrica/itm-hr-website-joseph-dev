import moment from "moment";
import { Expertise } from "@/types";
import image1 from "@/public/milestone.png";
import { toast } from "react-toastify";

interface ExperienceData {
  expertise: Expertise[];
  startTime: Date;
  endTime: Date;
}

export function setCookie(cname: string, cvalue: any, exdays: number = 30) {
  if (typeof window !== "undefined") {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
}

export function getMonthDifference(date1: Date, date2: Date) {
  const moment1 = moment(date1);
  const moment2 = moment(date2);

  const diffDuration = moment.duration(moment2.diff(moment1));
  const diff = diffDuration.as("months");
  return Number(diff.toFixed(0));
}

export function formatMonthYear(date: Date) {
  const momentDate = moment(date);
  return momentDate.format("MMM YYYY");
}

// format date (...) for <time datetime={...}>Certain time</time>
export function formatDateTimeAttribute(date: Date) {
  const momentDate = moment(date);
  return momentDate.format("YYYY-MM-DD hh:mm:ss");
}

const expertise: Expertise[] = [
  {
    logo: "/assets/logo_rdc.png",
    showcaseImage: image1,
    title: "Kadea Academy",
    subTitle: "Full stack web and mobile developer",
    details:
      "Developed skills in programming using, JavaScript, GitHub, industry-standard git-flow, and daily standups. Mastered algorithms, data structures, and full-stack development.",
    timeRange: [new Date(2020, 4), new Date(2023, 1)],
    certificate:
      "https://drive.google.com/file/d/19LZZbAm49bWgB1QCTKgTlnkZU9Q5gjJC/view?usp=sharing",
  },
  {
    logo: "/assets/logo_rdc.png",
    showcaseImage: image1,
    title: "IBM coursera training",
    subTitle: "Online training",
    details:
      "Developed skills in programming methodologies, Software development life cycle, GitHub, industry-standard git-flow, and daily standups. Mastered algorithms.",
    timeRange: [new Date(2024, 6), new Date(2024, 8)],
    certificate:
      "https://drive.google.com/file/d/1mvLTsZSM36k8We-IPjDebHCCLzQcrA9i/view?usp=sharing",
  },
  {
    logo: "/assets/logo_rdc.png",
    showcaseImage: image1,
    title: "Open Classroom",
    subTitle: "Online training",
    details:
      "Developed skills in programming using, JavaScript, GitHub, industry-standard git-flow, and daily standups. Mastered algorithms, data structures, and full-stack development.",
    timeRange: [new Date(2023, 1), new Date(2023, 8)],
    certificate:
      "https://drive.google.com/file/d/1nL8HLgSaQHLmCAhCwe-xenQOBqklNxCw/view?usp=sharing",
  },
  {
    logo: "/assets/logo_rdc.png",
    showcaseImage: image1,
    title: "Open Classroom",
    subTitle: "Débutez avec React",
    details:
      "Open Classroom's online course on the basics of ReactJS, the popular JavaScript framework",
    timeRange: [new Date(2022, 8), new Date(2023, 1)],
    certificate:
      "https://drive.google.com/file/d/1k1J5jkZzaHGvR5O-rEgeMP25bbUb71e5/view?usp=sharing",
  },
];

const experienceData: ExperienceData = {
  expertise,
  startTime: new Date(2021, 0),
  endTime: new Date(2025, 0),
};

export function experienceTimelineCalculator(expertise: Expertise) {
  const MONTH_HEIGHT = 32;
  const YEAR_HEIGHT = MONTH_HEIGHT * 12;
  const MONTH_DIFFERENCE = getMonthDifference(
    experienceData.startTime,
    experienceData.endTime,
  );
  const YEAR_DIFFERENCE = Math.ceil(MONTH_DIFFERENCE / 12);

  const ACTIVE_EXPERTISE_MONTH_DIFFERENCE = getMonthDifference(
    expertise.timeRange[0],
    expertise.timeRange[1],
  );
  const MONTH_TIMELINE_HEIGHT =
    MONTH_HEIGHT * ACTIVE_EXPERTISE_MONTH_DIFFERENCE;
  const MONTH_TIMELINE_POS =
    getMonthDifference(experienceData.startTime, expertise.timeRange[0]) *
    MONTH_HEIGHT;

  const YEAR_TIMELINE_HEIGHT = MONTH_HEIGHT * MONTH_DIFFERENCE;
  const YEAR_TIMELINE_POS = MONTH_TIMELINE_POS + MONTH_TIMELINE_HEIGHT / 2;

  const FIRST_YEAR = experienceData.startTime.getFullYear();

  return {
    YEAR_TIMELINE_POS,
    MONTH_TIMELINE_HEIGHT,
    YEAR_TIMELINE_HEIGHT,
    MONTH_DIFFERENCE,
    MONTH_HEIGHT,
    YEAR_HEIGHT,
    YEAR_DIFFERENCE,
    FIRST_YEAR,
  };
}

export default experienceData;

export function getCookie(cname: string, doc: any): string {
  if (typeof doc !== "undefined") {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(doc);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
  }
  return "";
}

export const notifySuccess = (response: string, containerId: string) =>
  toast.success(response, {
    containerId,
    position: "bottom-right",
    theme: "colored",
  });

export const notifyError = (response: string, containerId: string) =>
  toast.error(response, {
    containerId,
    position: "bottom-right",
    theme: "colored",
  });

export const getCountryCode = (country: string | undefined) => {
  switch (country) {
    case "cd":
      return "cd";
    case "za":
      return "za";
    case "de":
      return "de";
    case "cd":
      return "cd";
    case "ao":
      return "ao";
    case "bj":
      return "bj";
    case "cm":
      return "cm";
    case "cg":
      return "cg";
    case "gb":
      return "gb";
    case "ke":
      return "ke";
    case "ng":
      return "ng";
    case "rw":
      return "rw";
    case "tz":
      return "tz";
    case "tg":
      return "tg";
    case "ug":
      return "ug";
    case "zm":
      return "zm";
    case "bi":
      return "bi";
    case "ci":
      return "ci";
    case "sn":
      return "sn";
    case "dz":
      return "dz";
    case "ga":
      return "ga";
    case "gn":
      return "cd";

    default:
      return "cd";
  }
};

export const entities_to_display = (locationCode: string, entities: any) => {
  if (locationCode.toLowerCase() === "cd") {
    return entities.filter((item: any) => item.code !== "rw");
  } else {
    return entities;
  }
};

export const mail_api_url = "https://email.itmafrica.com/api";
export const CODE: string = "cd";
export const TALENTPRO_HREF: string = "https://talentpro.itmafrica.com";
export const KAZIPRO_HREF: string = "https://www.kazipro.app/fr";
export const COUNTRY_API_URL: string = "https://api.country.is";

/**
 * Company profile download URL. Served by `app/api/company-profile/[code]/route.ts`
 * so the response is always `application/pdf` (avoids HTML 404/SPA being saved as .pdf).
 */
export function getCompanyProfilePdfPath(
  urlCountry: string | undefined,
  lang?: string,
): string {
  const code = (urlCountry || "cd").toLowerCase();
  const langParam = lang ? `?lang=${lang}` : "";
  return `/api/company-profile/${code}${langParam}`;
}

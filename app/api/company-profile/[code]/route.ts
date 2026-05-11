import { readFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { COUNTRY_SITE_CODES } from "@/lib/country-site-codes";
import { geolocateIp, logDownload } from "@/lib/download-logger";

export const runtime = "nodejs";

/** Mapping of country codes to their specific company profile PDF filenames. */
const COUNTRY_PROFILE_MAP: Record<string, string> = {
  cd: "ITM RDC.pdf",
  bi: "ITM BURUNDI.pdf",
  cm: "ITM CAMEROUN.pdf",
  ci: "ITM COTE D'IVOIRE.pdf",
  ke: "ITM KENYA.pdf",
  ng: "ITM NIGERIA.pdf",
  rw: "ITM RWANDA.pdf",
  sn: "ITM SENEGAL.pdf",
  za: "ITM SOUTH AFRICA.pdf",
  tz: "ITM TANZANIA.pdf",
  tg: "ITM TOGO.pdf",
  ug: "ITM UGANDA.pdf",
  zm: "ITM ZAMBIA.pdf",
  dz: "ITM ALGERIE.pdf",
  ga: "ITM GABON.pdf",
  gn: "ITM GUINEE.pdf",
};

const COMPANY_PROFILE_DIR = path.join(process.cwd(), "companyprofile");

const HR_PROFILE_FR = path.join(COMPANY_PROFILE_DIR, "ITM HR FR.pdf");
const HR_PROFILE_EN = path.join(COMPANY_PROFILE_DIR, "ITM HR ENG.pdf");

/** Countries where English is an official language (used as fallback when no lang param). */
const EN_SPEAKING = new Set(["ng", "ke", "za", "tz", "ug", "zm", "gb", "ao"]);

/**
 * Resolves the PDF path for a given country code and optional language.
 *
 * Priority order:
 * 1. Language-specific country PDF: `ITM RDC FR.pdf` or `ITM RDC EN.pdf`
 * 2. Generic country PDF: `ITM RDC.pdf`
 * 3. Generic HR profile in the requested language: `ITM HR FR.pdf` / `ITM HR ENG.pdf`
 * 4. Fallback: use EN_SPEAKING heuristic to pick FR or EN generic profile
 */
function pdfPathForCode(code: string, lang?: string): string {
  const specific = COUNTRY_PROFILE_MAP[code];

  if (specific) {
    // If a language is explicitly requested, try a language-specific variant first
    if (lang === "fr" || lang === "en") {
      const baseName = specific.replace(/\.pdf$/i, "");
      const langSpecific = `${baseName} ${lang.toUpperCase()}.pdf`;
      return path.join(COMPANY_PROFILE_DIR, langSpecific);
    }
    // No lang specified → serve the generic country PDF
    return path.join(COMPANY_PROFILE_DIR, specific);
  }

  // No country-specific PDF: use language parameter first, then EN_SPEAKING heuristic
  if (lang === "fr") return HR_PROFILE_FR;
  if (lang === "en") return HR_PROFILE_EN;
  return EN_SPEAKING.has(code) ? HR_PROFILE_EN : HR_PROFILE_FR;
}

function downloadFilenameForCode(code: string, lang?: string): string {
  const specific = COUNTRY_PROFILE_MAP[code];
  if (specific) {
    const langSuffix = lang ? `-${lang}` : "";
    return `itm-company-profile-${code}${langSuffix}.pdf`;
  }
  return "itm-company-profile.pdf";
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ code: string }> },
) {
  const { code: raw } = await context.params;
  const code = (raw ?? "").toLowerCase().replace(/\.pdf$/i, "");

  if (!/^[a-z]{2}$/.test(code) || !COUNTRY_SITE_CODES.has(code)) {
    return new NextResponse("Not found", { status: 404 });
  }

  // Read optional language query parameter
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang")?.toLowerCase();
  const validLang = lang === "fr" || lang === "en" ? lang : undefined;
  const isPreview = searchParams.get("preview") === "true";

  let filePath = pdfPathForCode(code, validLang);

  // If a language-specific variant was requested but doesn't exist on disk,
  // fall back to the generic country PDF, then to the HR profile
  try {
    await readFile(filePath);
  } catch {
    // Language-specific variant not found → try generic country PDF
    const specific = COUNTRY_PROFILE_MAP[code];
    if (specific && validLang) {
      const genericPath = path.join(COMPANY_PROFILE_DIR, specific);
      try {
        await readFile(genericPath);
        filePath = genericPath;
      } catch {
        // Generic country PDF also not found → fall back to HR FR/EN
        filePath = validLang === "fr" ? HR_PROFILE_FR : HR_PROFILE_EN;
      }
    } else {
      // Last resort fallback
      filePath = validLang === "fr" ? HR_PROFILE_FR : HR_PROFILE_EN;
    }
  }

  try {
    const buffer = await readFile(filePath);

    // Extract visitor IP
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    // Fire-and-forget: geolocate + log (never blocks the response)
    geolocateIp(ip).then((geo) => {
      logDownload({
        timestamp: new Date().toISOString(),
        countryCode: code,
        country: geo.country,
        city: geo.city,
        ip,
        userAgent: request.headers.get("user-agent") ?? "unknown",
        referrer: request.headers.get("referer") ?? "none",
        pdfFile: path.basename(filePath),
      });
    });

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `${isPreview ? "inline" : "attachment"}; filename="${downloadFilenameForCode(code, validLang)}"`,
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return new NextResponse("PDF not found", { status: 404 });
  }
}

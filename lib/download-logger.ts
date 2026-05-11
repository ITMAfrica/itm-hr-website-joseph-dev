import { appendFile, mkdir, readFile } from "fs/promises";
import path from "path";

export interface DownloadEvent {
  timestamp: string;
  countryCode: string;
  country: string;
  city: string;
  ip: string;
  userAgent: string;
  referrer: string;
  pdfFile: string;
}

const LOGS_DIR = path.join(process.cwd(), "logs");
const LOG_FILE = path.join(LOGS_DIR, "downloads.jsonl");

interface GeoData {
  country: string;
  city: string;
}

/**
 * Resolve country + city from an IP address using the free ip-api.com service.
 * Returns empty strings for localhost / private IPs or on failure.
 */
export async function geolocateIp(ip: string): Promise<GeoData> {
  // Skip localhost and private IPs
  if (
    !ip ||
    ip === "::1" ||
    ip === "127.0.0.1" ||
    ip.startsWith("192.168.") ||
    ip.startsWith("10.") ||
    ip.startsWith("172.")
  ) {
    return { country: "Localhost", city: "Localhost" };
  }

  try {
    const res = await fetch(
      `http://ip-api.com/json/${ip}?fields=country,city,status`,
      { signal: AbortSignal.timeout(3000) },
    );
    const data = await res.json();
    if (data.status === "success") {
      return {
        country: data.country ?? "Unknown",
        city: data.city ?? "Unknown",
      };
    }
    return { country: "Unknown", city: "Unknown" };
  } catch {
    return { country: "Unknown", city: "Unknown" };
  }
}

/**
 * Append a download event to the JSONL log file.
 * Failures are caught silently so they never break the download response.
 */
export async function logDownload(event: DownloadEvent): Promise<void> {
  try {
    await mkdir(LOGS_DIR, { recursive: true });
    const line = JSON.stringify(event) + "\n";
    await appendFile(LOG_FILE, line, "utf-8");
  } catch {
    // Silently swallow logging failures – they must never block downloads.
  }
}

/**
 * Read and return all logged download events.
 * Returns an empty array if the log file doesn't exist yet.
 */
export async function getDownloadLogs(): Promise<DownloadEvent[]> {
  try {
    const raw = await readFile(LOG_FILE, "utf-8");
    const lines = raw.trim().split("\n").filter(Boolean);
    return lines.map((line) => JSON.parse(line) as DownloadEvent);
  } catch {
    return [];
  }
}

import { NextRequest, NextResponse } from "next/server";
import { getDownloadLogs } from "@/lib/download-logger";

export const runtime = "nodejs";

/** Simple API key for protecting the downloads endpoint. */
const DOWNLOADS_API_KEY = process.env.DOWNLOADS_API_KEY ?? "itm-downloads-secret";

export async function GET(request: NextRequest) {
  const key =
    request.nextUrl.searchParams.get("key") ??
    request.headers.get("x-api-key") ??
    "";

  if (key !== DOWNLOADS_API_KEY) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const logs = await getDownloadLogs();

  return NextResponse.json(logs, {
    status: 200,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

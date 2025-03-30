import { checkWebsiteStatus } from "@/lib/ping";


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return Response.json({ error: "URL is required" }, { status: 400 });
  }

  const result = await checkWebsiteStatus(url);
  return Response.json(result);
}

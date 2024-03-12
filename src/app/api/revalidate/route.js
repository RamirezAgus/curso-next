import {revalidateTag} from "next/cache";

export async function GET() {
  const tag = request.nextUrl.searchParams.get("tag") || "restaurants";

  revalidateTag(tag);

  return Response.json({success: true});
}
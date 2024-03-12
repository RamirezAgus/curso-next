import { revalidatePath } from "next/cache";

export async function POST() {
    revalidate('/');

    return Response.json({ success: true })
}
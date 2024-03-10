export const runtime = 'edge';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const hasUrl = searchParams.has("url");
    const url = hasUrl
        ? searchParams.get("url")!!
        : "https://ch-random.net/post/461/featured.png";

    if (url.startsWith("https://ch-random.net")) {
        const imageRes = await fetch(url);
        const blob = await imageRes.blob();
        const arrayBuffer = await blob.arrayBuffer();
        const contentType = imageRes.headers.get('Content-Type');

        // https://stackoverflow.com/questions/63066985/send-file-as-response-using-nextjs-api

        return new Response(Buffer.from(arrayBuffer), { headers: { 'content-type': contentType ?? 'image/png' } });
    } else {
        return new Response(null, { status: 403 });
    }
}
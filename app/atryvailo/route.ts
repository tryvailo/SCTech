const SOURCE_ORIGIN = "https://atryvailo.vercel.app"
const SOURCE_PATH = "/automation"
const TARGET_PATH = "/atryvailo"

function absoluteAssetUrls(html: string) {
  return html
    .replaceAll('href="/', `href="${SOURCE_ORIGIN}/`)
    .replaceAll('src="/', `src="${SOURCE_ORIGIN}/`)
    .replaceAll('srcSet="/', `srcSet="${SOURCE_ORIGIN}/`)
    .replaceAll('imageSrcSet="/', `imageSrcSet="${SOURCE_ORIGIN}/`)
    .replaceAll('\\"href\\":\\"/', `\\"href\\":\\"${SOURCE_ORIGIN}/`)
    .replaceAll('\\"src\\":\\"/', `\\"src\\":\\"${SOURCE_ORIGIN}/`)
    .replaceAll('\\"srcSet\\":\\"/', `\\"srcSet\\":\\"${SOURCE_ORIGIN}/`)
    .replaceAll('\\"imageSrcSet\\":\\"/', `\\"imageSrcSet\\":\\"${SOURCE_ORIGIN}/`)
    .replaceAll(`${SOURCE_ORIGIN}${SOURCE_PATH}`, TARGET_PATH)
}

export async function GET() {
  const response = await fetch(`${SOURCE_ORIGIN}${SOURCE_PATH}`, {
    next: { revalidate: 300 },
  })

  if (!response.ok) {
    return new Response("Unable to load profile page.", { status: 502 })
  }

  const html = absoluteAssetUrls(await response.text())

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=300, stale-while-revalidate=3600",
    },
  })
}

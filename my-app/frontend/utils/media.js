export function getStrapiMedia(url, width) {
  if (url == null) {
    return null
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith("http") || url.startsWith("//")) {
    if (width){
      return `${url}?w=${width}`
    }
    return `${url}?w=unoptimized`
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://flexi-pedikura.herokuapp.com"
  }${url}`
}

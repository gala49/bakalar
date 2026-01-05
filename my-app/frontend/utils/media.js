/**
 * Get media URL - returns URL as-is since images are now in /public
 * @param {string} url The media URL
 * @param {number} width Optional width parameter (ignored for static files)
 * @returns {string|null} The media URL or null
 */
export function getStrapiMedia(url, width) {
  if (url == null) {
    return null
  }

  // Return the URL as-is (already points to /public or external URL)
  // URLs starting with / are local, URLs starting with http are external
  return url
}
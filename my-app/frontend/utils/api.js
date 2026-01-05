import globalData from "../data/global.json"
import pageData from "../data/page.json"

/**
 * Get page data from static JSON file
 * @param {Object} options
 * @param {string} options.slug The page's slug (ignored for one-page)
 * @param {string} options.locale The current locale (ignored, only Czech)
 * @param {boolean} options.preview Preview mode (ignored)
 */
export async function getPageData({ slug, locale, preview }) {
  // For one-page site, always return the same page data
  return pageData
}

/**
 * Get site data from static JSON file (metadata, navbar, footer...)
 * @param {string} locale The locale (ignored, only Czech)
 */
export async function getGlobalData(locale) {
  // For one-page site, always return the same global data
  return globalData
}

// Legacy function for backward compatibility (no longer used)
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  console.warn("fetchAPI is deprecated and no longer used. Using static data instead.")
  return {}
}
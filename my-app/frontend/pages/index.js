import ErrorPage from "next/error"
import { getPageData, getGlobalData } from "utils/api"
import Sections from "@/components/sections"
import Seo from "@/components/elements/seo"
import Layout from "@/components/layout"

const HomePage = ({ sections, global }) => {
  const metadata = global.attributes.metadata

  // Check if the required data was provided
  if (!sections?.length) {
    return <ErrorPage statusCode={404} />
  }

  // Merge default site SEO settings with page specific SEO settings
  if (metadata.shareImage?.data == null) {
    delete metadata.shareImage
  }
  const metadataWithDefaults = {
    ...global.attributes.metadata,
  }

  return (
    <Layout global={global} sections={sections}>
      {/* Add meta tags for SEO*/}
      <Seo metadata={metadataWithDefaults} />
      {/* Display content sections */}
      <Sections sections={sections} />
    </Layout>
  )
}

export async function getStaticProps() {
  const globalData = await getGlobalData("cs")
  const pageData = await getPageData({
    slug: "",
    locale: "cs",
    preview: false,
  })

  if (pageData == null) {
    return { notFound: true }
  }

  // Extract content sections from page data
  const { contentSections } = pageData.attributes

  return {
    props: {
      sections: contentSections,
      global: globalData.data,
    },
  }
}

export default HomePage
import Head from "next/head"
import Script from "next/script"
import { DefaultSeo } from "next-seo"
import { getStrapiMedia } from "utils/media"
import "@/styles/index.css"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/components.scss"

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps

  return (
    <>
      {/* Global site metadata - loaded from pageProps */}
      {global?.attributes?.metadata && (
        <DefaultSeo
          title={global.attributes.metadata.metaTitle}
          description={global.attributes.metadata.metaDescription}
          openGraph={
            global.attributes.metadata.shareImage?.data
              ? {
                  images: Object.values(
                    global.attributes.metadata.shareImage.data.attributes
                      .formats || {}
                  ).map((image) => {
                    return {
                      url: getStrapiMedia(image.url),
                      width: image.width,
                      height: image.height,
                    }
                  }),
                }
              : undefined
          }
          twitter={{
            cardType: global.attributes.metadata.twitterCardType,
            handle: global.attributes.metadata.twitterUsername,
          }}
        />
      )}
      {/* Favicon */}
      {global?.attributes?.favicon?.data && (
        <Head>
          <link
            rel="shortcut icon"
            href={getStrapiMedia(
              global.attributes.favicon.data.attributes.url
            )}
          />
        </Head>
      )}
      {/* ManyChat Scripts */}
      {/* <Script
        src="//widget.manychat.com/107878101891685.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://mccdn.me/assets/js/widget.js"
        strategy="afterInteractive"
      /> */}
      {/* Display the content */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
import { getStrapiMedia } from "utils/media"
import Image from "next/image"
import PropTypes from "prop-types"
import { mediaPropTypes } from "utils/types"

const NextImage = ({ media, ...props }) => {
  const { url, alternativeText, width, height } = media.data.attributes

  const loader = ({ src, width }) => {
    return getStrapiMedia(src)
  }

  // The image has a fixed width and height from props
  if (props.width && props.height) {
    return (
      <Image loader={loader} src={url} alt={alternativeText || ""} {...props} />
    )
  }

  // The image is responsive - use width/height if available, otherwise use fill
  if (width && height) {
    return (
      <div className="next-image-responsive-wrapper">
        <Image
          loader={loader}
          src={url}
          alt={alternativeText || ""}
          width={width}
          height={height}
          sizes="100vw"
        />
      </div>
    )
  }

  // Fallback: use fill prop if width/height not available
  return (
    <div className="next-image-responsive-wrapper" style={{ minHeight: "200px" }}>
      <Image
        loader={loader}
        src={url}
        alt={alternativeText || ""}
        fill
        style={{ objectFit: "contain" }}
        sizes="100vw"
      />
    </div>
  )
}

Image.propTypes = {
  media: mediaPropTypes,
  className: PropTypes.string,
}

export default NextImage

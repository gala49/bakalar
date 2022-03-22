import classNames from "classnames"
import NextImage from "../elements/image"
import Video from "../elements/video"
import CustomLink from "../elements/custom-link"

const FeatureRowsGroup = ({ data }) => {
  return (
    <div className="container gap-12 py-12">
      <h2>{data.feature}</h2>
      {data.features.map((feature, index) => (
        <div
          className={classNames(
            // Common classes
            "flex flex-col justify-start row py-12",
            {
              "lg:flex-row": index % 2 === 0,
              "lg:flex-row-reverse": index % 2 === 1,
            }
          )}
          key={feature.id}
        >
          {/* Text section */}
          <div className="col-12 col-lg-6 text-lg">
            <h3 className="title">{feature.title}</h3>
            <p className="my-6">{feature.description}</p>
            <CustomLink link={feature.link}>
              <div className="text-blue-600 with-arrow hover:underline">
                {feature.link.text}
              </div>
            </CustomLink>
          </div>
          {/* Media section */}
          <div className="col-12 col-lg-6 max-h-full">
            {/* Images */}
            {feature.media.data.attributes.mime.startsWith("image") && (
              <div className="w-full h-auto">
                <NextImage media={feature.media} />
              </div>
            )}
            {/* Videos */}
            {feature.media.data.attributes.mime.startsWith("video") && (
              <Video
                media={feature.media}
                className="w-full h-auto"
                autoPlay
                controls={false}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeatureRowsGroup

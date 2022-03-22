import classNames from "classnames"
import NextImage from "../elements/image"
import Video from "../elements/video"
import CustomLink from "../elements/custom-link"

const TextAObrazek = ({ data }) => {
  return (
    // <div className="container gap-12 py-12">
    //   <h2>{data.feature}</h2>
    //   {data.features.map((feature, index) => (
    //     <div
    //       className={classNames(
    //         // Common classes
    //         "flex flex-col justify-start row py-12",
    //         {
    //           "lg:flex-row": index % 2 === 0,
    //           "lg:flex-row-reverse": index % 2 === 1,
    //         }
    //       )}
    //       key={feature.id}
    //     >
    //       {/* Text section */}
    //       <div className="col-12 col-lg-6 text-lg">
    //         <h3 className="title">{feature.title}</h3>
    //         <p className="my-6">{feature.description}</p>
    //         <CustomLink link={feature.link}>
    //           <div className="text-blue-600 with-arrow hover:underline">
    //             {feature.link.text}
    //           </div>
    //         </CustomLink>
    //       </div>
    //       {/* Media section */}
    //       <div className="col-12 col-lg-6 max-h-full">
    //         {/* Images */}
    //         {feature.media.data.attributes.mime.startsWith("image") && (
    //           <div className="w-full h-auto">
    //             <NextImage media={feature.media} />
    //           </div>
    //         )}
    //         {/* Videos */}
    //         {feature.media.data.attributes.mime.startsWith("video") && (
    //           <Video
    //             media={feature.media}
    //             className="w-full h-auto"
    //             autoPlay
    //             controls={false}
    //           />
    //         )}
    //       </div>
    //     </div>
    //   ))}
    // </div>
    // <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
    <div className="container section-padding text-image-section">
        <h2 className="text-center mb-5">{data.title}</h2>
        {data.boxes.map((box, index) => (
            <div
                className={classNames(
                    // Common classes
                    "d-flex flex-col justify-start row p-5 pb-0 boxes-row",
                    {
                    "lg:flex-row": index % 2 === 0,
                    "lg:flex-row-reverse": index % 2 === 1,
                    }
                )}
                key={box.id}
            >
                {/* Text section */}
                <div className="col-12 col-lg-6 box-color p-5">
                    <div dangerouslySetInnerHTML={{ __html: box.content }}></div>
                </div>
                {/* Media section */}
                <div className="col-12 col-lg-6 max-h-full px-0">
                    <div className="w-full h-auto">
                        <NextImage media={box.image} />
                    </div>
                </div>
            </div>
        ))}
        
    </div>
  )
}

export default TextAObrazek

import classNames from "classnames"
import NextImage from "../elements/image"
import Video from "../elements/video"
import CustomLink from "../elements/custom-link"

const DarkovyPoukaz = ({ data }) => {
  return (
    <div className="container section-padding text-image-section px-5">
        <h2 className="text-center mb-5">{data.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.text }}></div> 
    </div>
  )
}

export default DarkovyPoukaz

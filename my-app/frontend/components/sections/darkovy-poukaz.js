import classNames from "classnames"
import NextImage from "../elements/image"
import Video from "../elements/video"
import CustomLink from "../elements/custom-link"

const DarkovyPoukaz = ({ data }) => {
  return (
    <section id={data.viditelnostVMenu.idSekce}>
      <div className="container section-padding px-5">
        <h2 className="text-center mb-5">{data.nadpis}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.text }}></div>
      </div>
    </section>
  )
}

export default DarkovyPoukaz

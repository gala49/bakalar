import classNames from "classnames"
import NextImage from "../elements/image"

const TextAObrazek = ({ data }) => {
  return (
    <section id={data.viditelnostVMenu.idSekce}>
      <div className="container section-padding text-image-section">
        <h2 className="text-center mb-5">{data.nadpis}</h2>
        {data.boxes.map((box, index) => (
          <div
            className={classNames(
              // Common classes
              "d-flex flex-col justify-start row px-3 px-md-5 pb-0 boxes-row",
              {
                "lg:flex-row": index % 2 === 0,
                "lg:flex-row-reverse": index % 2 === 1,
              }
            )}
            key={box.id}
          >
            {/* Text section */}
            <div className="col-12 col-xl-6 box-color p-5">
              <div dangerouslySetInnerHTML={{ __html: box.textovyObsah }}></div>
            </div>
            {/* Image section */}
            <div className="col-12 col-xl-6 max-h-full px-0">
              <div className="w-full h-full">
                <NextImage media={box.obrazek} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TextAObrazek

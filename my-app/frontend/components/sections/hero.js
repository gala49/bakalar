import Markdown from "react-markdown"
import { getButtonAppearance } from "utils/button"
import ButtonLink from "../elements/button-link"
import NextImage from "../elements/image"

const Hero = ({ data }) => {
  return (
    <main
      className="heroSection main-section-padding"
      id={data.viditelnostVMenu.idSekce}
    >
      <div className="container text-center text-white d-flex justify-content-center flex-column align-items-center">
        <h1>{data.nadpis}</h1>
        <div className="d-flex flex-row flex-wrap gap-4 justify-content-center mt-3">
          {data.buttons.map((button) => (
            <ButtonLink
              button={button}
              appearance={getButtonAppearance(button.type, "light")}
              key={button.id}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Hero

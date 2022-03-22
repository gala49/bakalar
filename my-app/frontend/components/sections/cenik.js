import classNames from "classnames"
import SloupecTabulky from "../elements/tabulka"

const Cenik = ({ data }) => {
  return (
    <div className="container section-padding text-image-section px-5 section-cenik">
        <h3 className="text-center mb-5">{data.title}</h3>
        {data.sloupec.map((dataSloupec) => (
            <SloupecTabulky
                sloupec={dataSloupec}
                key={dataSloupec.id}
            />
        ))}
    </div>
  )
}

export default Cenik

import classNames from "classnames"
import SloupecTabulky from "../elements/tabulka"

const Cenik = ({ data }) => {
  return (
    <section id={data.viditelnostVMenu.idSekce}>
      <div className="container section-padding text-image-section px-5 section-cenik">
        <h2 className="text-center mb-5">{data.nadpis}</h2>
        <div className="row">
          {data.sloupec.map((dataSloupec) => (
            <SloupecTabulky sloupec={dataSloupec} key={dataSloupec.id} />
          ))}
        </div>
        <div className="text-center mt-5">{data.platnostOd}</div>
      </div>
    </section>
  )
}

export default Cenik

import classNames from "classnames"
import Tabulka from "../elements/tabulka"

const Cenik = ({ data }) => {
  return (
    <section id={data.viditelnostVMenu.idSekce}>
      <div className="container section-padding px-5 section-cenik">
        <h2 className="text-center mb-5">{data.nadpis}</h2>
        <div className="row">
          {data.tabulka.map((dataSloupec) => (
            <Tabulka sloupec={dataSloupec} key={dataSloupec.id} />
          ))}
        </div>
        <div className="text-center mt-5">{data.platnostOd}</div>
      </div>
    </section>
  )
}

export default Cenik

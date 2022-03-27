import RadekTabulky from "./radek-tabulky.js"

const SloupecTabulky = ({sloupec}) => {
    return (
      <div className="col-12 col-lg-6 px-3">
        <table>
            <thead>
                <tr colSpan="2" key={sloupec.id}><th colSpan="2">{sloupec.sloupecNadpis}</th></tr>
            </thead>
            <tbody>
                {sloupec.radekTabulky.map((radek, index)=>(
                    <RadekTabulky
                        index={index}
                        sluzba={radek}
                        key={radek.id}
                    />
                ))}
            </tbody>
        </table>
      </div>
    )
  }
  
  export default SloupecTabulky
  
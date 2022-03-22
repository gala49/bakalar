import RadekTabulky from "./radek-tabulky.js"

const SloupecTabulky = ({sloupec}) => {
    return (
        <table>
            <thead>
                <th key={sloupec.id}>{sloupec.sloupecNadpis}</th>
            </thead>
            <tbody>
                {sloupec.radekTabulky.map((radek)=>(
                    <RadekTabulky
                        sluzba={radek.sluzba}
                        cena={radek.cena}
                        key={radek.id}
                    />
                ))}
            </tbody>
        </table>
    )
  }
  
  export default SloupecTabulky
  
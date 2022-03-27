import classNames from "classnames"

const LargeVideo = ({ data }) => {
  return (
    <section className="container section-padding section-doba" id={data.viditelnostVMenu.idSekce}>
        <h2 className="text-center mb-5">{data.nadpis}</h2>
        <table className="mx-auto">
            <tbody>            
                {data.oteviraciDobaTabulka.map((radek)=>(
                    <tr>
                        <td className="den">{radek.sluzba}</td>
                        <td className="hodina">{radek.cena}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="text-center mt-5">{data.upozorneni}</div>
        <div className={classNames(
            "mt-4 text-center",
            {
                "d-none": data.zobrazitDovolenou === false,
            }
        )}>
            <hr className="mx-auto hr-text" data-content="Aktuální informace"/>
            <h3>{data.dovolenaText}</h3>
        </div>
    </section>
  )
}

export default LargeVideo

import classNames from "classnames"

const LargeVideo = ({ data }) => {
  return (
    <section
      className="section-doba d-flex flex-col justify-center container my-5"
      id={data.viditelnostVMenu.idSekce}
    >
      <div className="mx-md-4 section-padding">
        <h2 className="text-center mb-5">{data.nadpis}</h2>
        <table className="mx-auto">
          <tbody>
            {data.oteviraciDobaTabulka.map((radek) => (
              <tr key={radek.id}>
                <td className="den">{radek.sluzba}</td>
                <td className="hodina">{radek.cena}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-5">{data.upozorneni}</div>
        <div
          className={classNames("mt-4 text-center", {
            "d-none": data.zobrazitDovolenou === false,
          })}
        >
          <hr className="mx-auto hr-text" data-content="Aktuální informace" />
          <h3>{data.dovolenaText}</h3>
        </div>
      </div>
    </section>
  )
}

export default LargeVideo

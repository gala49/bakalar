import classNames from "classnames"

const RadekTabulky = ({ sluzba, index }) => {
  return (
    <tr
      className={classNames({
        "background-almond": index % 2 === 1,
      })}
      key={sluzba.id}
    >
      <td>{sluzba.sluzba}</td>
      <td>{sluzba.cena}</td>
    </tr>
  )
}

export default RadekTabulky

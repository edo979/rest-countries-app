import { useOutletContext } from 'react-router-dom'

function CountryBorders({ borders }) {
  const { countries } = useOutletContext()
  console.log(countries.length)

  return (
    <section className="details_borders">
      <h3>Border Countries:</h3>
      <ul className="inline-list">
        {borders.map((border) => (
          <li key={border} className="label | shadow-light">
            {countries.find((country) => country.cca3 === border)?.name.common}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CountryBorders

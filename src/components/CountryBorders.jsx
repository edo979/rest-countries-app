import { useOutletContext, useNavigate } from 'react-router-dom'

function CountryBorders({ borders }) {
  const { countries } = useOutletContext(),
    navigate = useNavigate()

  function getCountry(border) {
    return countries.find((country) => country.cca3 === border)
  }

  return (
    <section className="details_borders">
      <h3>Border Countries:</h3>
      <ul className="inline-list">
        {borders.map((border) => (
          <li
            key={border}
            className="label | shadow-light"
            onClick={() =>
              navigate('/' + getCountry(border)?.name.common.toLowerCase())
            }
          >
            {getCountry(border)?.name.common}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CountryBorders

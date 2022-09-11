import { useNavigate } from 'react-router-dom'

function CountriesItem({ country }) {
  const navigate = useNavigate()

  return (
    <li
      className="card"
      onClick={() =>
        navigate(`/${country.name.common.toLowerCase()}`, {
          state: { ...country },
        })
      }
    >
      <div className="card_img">
        <img src={country.flags.png} alt="" />
      </div>
      <div className="card_body">
        <h2>{country.name.common}</h2>
        <p>
          Population: <span>{country.population.toLocaleString()}</span>
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Capital: <span>{country.capital?.join(', ') || country.capital}</span>
        </p>
      </div>
    </li>
  )
}

export default CountriesItem

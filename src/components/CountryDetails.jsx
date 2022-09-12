import { useLocation, useNavigate } from 'react-router-dom'
import CountryBorders from './CountryBorders'

function CountryDetails() {
  const navigate = useNavigate(),
    location = useLocation(),
    country = location.state

  return (
    <main className="country | container">
      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z" />
        </svg>
        Back
      </button>

      <article className="country-details">
        <header>
          <aside className="country_img">
            <img src={country.flags.png} alt="" />
          </aside>

          <h2>{country.name.common}</h2>
        </header>

        <main className="details">
          <ul className="details_list">
            <li className="details_item">
              <span>Nativ Name: </span>
              <span>{country.altSpellings.find((s) => s.length > 3)}</span>
            </li>
            <li className="details_item">
              <span>Population: </span>
              <span>{country.population.toLocaleString()}</span>
            </li>
            <li className="details_item">
              <span>Region: </span>
              <span>{country.region}</span>
            </li>
            <li className="details_item">
              <span>Sub Region: </span>
              <span>{country.subregion}</span>
            </li>
            <li className="details_item">
              <span>
                {Array.isArray(country.capital)
                  ? country.capital.length > 1
                    ? 'Capitals: '
                    : 'Capital: '
                  : 'Capital: '}
              </span>
              <span>
                {Array.isArray(country.capital)
                  ? country.capital.join(', ')
                  : country.capital}
              </span>
            </li>
          </ul>

          <ul className="details_list">
            <li className="details_item">
              <span>Top Level Domain: </span>
              <span>{country.tld}</span>
            </li>
            <li className="details_item">
              <span>Currencies: </span>
              <span>
                {Object.entries(country.currencies)
                  .map(([k, v]) => v.name)
                  .join(', ')}
              </span>
            </li>
            <li className="details_item">
              <span>Languages: </span>
              <span>
                {Object.entries(country.languages)
                  .map(([k, v]) => v)
                  .join(', ')}
              </span>
            </li>
          </ul>

          <CountryBorders />
        </main>
      </article>
    </main>
  )
}

export default CountryDetails

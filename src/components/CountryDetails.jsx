import { useLocation, useNavigate } from 'react-router-dom'

function CountryDetails() {
  const navigate = useNavigate(),
    location = useLocation(),
    country = location.state

  return (
    <div>
      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z" />
        </svg>
        Back
      </button>
      <p>{country.name.common}</p>
      <p>{country.population.toLocaleString()}</p>
    </div>
  )
}

export default CountryDetails

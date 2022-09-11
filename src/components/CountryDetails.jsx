import { useLocation, useNavigate } from 'react-router-dom'

function CountryDetails() {
  const navigate = useNavigate(),
    location = useLocation(),
    country = location.state

  return (
    <div>
      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        BACK
      </button>
      <p>{country.name.common}</p>
      <p>{country.population.toLocaleString()}</p>
    </div>
  )
}

export default CountryDetails

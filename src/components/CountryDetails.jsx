import { useLocation } from 'react-router-dom'

function CountryDetails() {
  const location = useLocation()
  const country = location.state

  return (
    <div>
      <p>{country.name.common}</p>
      <p>{country.population.toLocaleString()}</p>
    </div>
  )
}

export default CountryDetails

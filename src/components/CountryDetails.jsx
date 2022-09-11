import { useParams, useOutletContext } from 'react-router-dom'
import { useState, useEffect } from 'react'

function CountryDetails() {
  const { countryName } = useParams()
  const countries = useOutletContext()
  const [country, setCountry] = useState(undefined)

  useEffect(() => {
    const country = countries.find(
      (country) => country.name.common.toLowerCase() === countryName
    )

    setCountry(country)
  }, [])

  return (
    <div>
      {country && (
        <>
          <p>{country.name.common}</p>
          <p>{country.population.toLocaleString()}</p>
        </>
      )}
    </div>
  )
}

export default CountryDetails

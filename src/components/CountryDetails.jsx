import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function CountryDetails() {
  const location = useLocation()
  const [state, setState] = useState(undefined)

  useEffect(() => {
    setState(location.state)
  }, [])

  return (
    <div>
      {state && (
        <>
          <p>{state.name.common}</p>
          <p>{state.population.toLocaleString()}</p>
        </>
      )}
    </div>
  )
}

export default CountryDetails

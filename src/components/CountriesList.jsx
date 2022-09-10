import CountriesItem from './CountriesItem'

function CountriesList({ countries }) {
  return (
    <ul className="countries-list | grid-container">
      {countries.map((country) => (
        <CountriesItem
          key={country.name.common}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flags={country.flags}
        />
      ))}
    </ul>
  )
}

export default CountriesList

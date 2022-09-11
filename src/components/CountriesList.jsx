import { useState, useEffect } from 'react'

import CountriesItem from './CountriesItem'
import RegionSelect from './RegionSelect'

function CountriesList() {
  const [state, setState] = useState({
    countries: [],
    selectedRegion: undefined,
    inputValue: undefined,
  })

  useEffect(() => {
    fetchData()

    async function fetchData() {
      try {
        const response = await fetch('./data.json')

        if (!response.ok) {
          throw new Error('Network response was not OK')
        }

        const data = await response.json()

        setState((prev) => ({
          ...prev,
          countries: data,
        }))
      } catch (error) {
        console.error(
          'There has been a problem with your fetch operation:',
          error
        )
      }
    }
  }, [])

  const onInputChange = (e) => {
    const inputValue = e.target.value

    if (inputValue === '') {
      // Reset select by region filter
      setState((prev) => ({
        ...prev,
        selectedRegion: undefined,
        inputValue: undefined,
      }))

      return
    }

    setState((prev) => ({
      ...prev,
      inputValue,
    }))
  }

  const onSelectChange = (selected) => {
    const selectedRegion = selected.value

    setState((prev) => ({
      ...prev,
      selectedRegion,
    }))
  }

  const getCountries = () => {
    // Filter functions
    const filterByName = (country) =>
      country.name.common.toLowerCase().startsWith(state.inputValue)

    const filterByRegion = (country) =>
      country.region.toLowerCase() === state.selectedRegion

    let filteredCountries = []

    if (state.inputValue && state.selectedRegion) {
      filteredCountries = state.countries.filter(
        (country) => filterByName(country) && filterByRegion(country)
      )
    } else if (state.inputValue) {
      filteredCountries = state.countries.filter((country) =>
        filterByName(country)
      )
    } else if (state.selectedRegion) {
      filteredCountries = state.countries.filter((country) =>
        filterByRegion(country)
      )
    } else {
      return state.countries
    }

    return filteredCountries
  }

  return (
    <main className="container">
      <form className="form | flex m-top">
        <div className="input-group">
          <label htmlFor="search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
            </svg>
          </label>

          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for a country..."
            onChange={onInputChange}
          />
        </div>

        <RegionSelect
          onChange={onSelectChange}
          selected={state.selectedRegion}
        />
      </form>

      <section className="countries | m-top">
        <ul className="countries-list | grid-container">
          {getCountries().map((country) => (
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
      </section>
    </main>
  )
}

export default CountriesList

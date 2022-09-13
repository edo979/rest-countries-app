import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import ThemeButton from './components/ThemeButton'

function Layout() {
  const [state, setState] = useState({
    countries: [],
    selectedRegion: undefined,
    inputValue: '',
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

        setState((prev) => ({ ...prev, countries: data }))
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
      // Reset filters
      setState((prev) => ({
        ...prev,
        selectedRegion: undefined,
        inputValue: '',
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
    <>
      <header className="header | container flex">
        <h1>Where in the world?</h1>
        <ThemeButton />
      </header>

      <Outlet
        context={{
          onInputChange,
          onSelectChange,
          getCountries,
          selectedRegion: state.selectedRegion,
          inputValue: state.inputValue,
          countries: state.countries,
        }}
      />
    </>
  )
}

export default Layout

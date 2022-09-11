import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

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
        <button className="btn btn-theme">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
          </svg>
          <span>Dark Mode</span>
        </button>
      </header>

      <Outlet
        context={{
          onInputChange,
          onSelectChange,
          getCountries,
          selectedRegion: state.selectedRegion,
          inputValue: state.inputValue,
        }}
      />
    </>
  )
}

export default Layout

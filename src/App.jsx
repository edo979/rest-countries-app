import { Routes, Route } from 'react-router-dom'

import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import Layout from './Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CountriesList />} />
        <Route path="/:countryName" element={<CountryDetails />} />
      </Route>
    </Routes>
  )
}

export default App

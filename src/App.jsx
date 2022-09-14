import { Routes, Route, BrowserRouter } from 'react-router-dom'

import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import Layout from './Layout'

function App() {
  return (
    <BrowserRouter basename="/rest-countries-app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CountriesList />} />
          <Route path="/:countryName" element={<CountryDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

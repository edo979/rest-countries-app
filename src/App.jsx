import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import CountriesList from './components/CountriesList'

import Layout from './Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CountriesList />} />
      </Route>
    </Routes>
  )
}

export default App

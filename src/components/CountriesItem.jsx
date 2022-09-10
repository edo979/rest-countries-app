import React from 'react'

function CountriesItem() {
  return (
    <li className="card">
      <div className="card_img"></div>
      <div className="card_body">
        <h2>Germany</h2>
        <p>
          Population: <span>81,770.900</span>
        </p>
        <p>
          Region: <span>Europe</span>
        </p>
        <p>
          Capital: <span>Berlin</span>
        </p>
      </div>
    </li>
  )
}

export default CountriesItem

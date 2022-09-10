import React from 'react'

function CountriesItem({ name, population, region, capital }) {
  return (
    <li className="card">
      <div className="card_img"></div>
      <div className="card_body">
        <h2>{name}</h2>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </li>
  )
}

export default CountriesItem

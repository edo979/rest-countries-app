import React from 'react'

function CountriesItem({ name, population, region, capital, flags }) {
  return (
    <li className="card">
      <div className="card_img">
        <img src={flags.png} alt="" />
      </div>
      <div className="card_body">
        <h2>{name}</h2>
        <p>
          Population: <span>{population.toLocaleString()}</span>
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

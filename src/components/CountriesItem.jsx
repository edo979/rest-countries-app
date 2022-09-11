import { useNavigate } from 'react-router-dom'

function CountriesItem({ name, population, region, capital, flags }) {
  const navigate = useNavigate()

  return (
    <li className="card" onClick={() => navigate(`/${name.toLowerCase()}`)}>
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

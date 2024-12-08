import React, { useContext } from 'react'
import { CountryName } from '../../App'

function OneCountry() {
  const [country, setCountry] = useState([])
  const {name} = useContext(CountryName)
  
  console.log(name)

  return (
    <section className="one-country">
      <div className="country-container">
        {country.map((item) => (
          <div className="card" key={item.name.common}>
            <div className="card-img">
              <img src={item.flags.png} alt="country-flag" />
            </div>
            <div className="card-body">
              <h2>{item.name.common}</h2>
              <ul>
                <li>
                  <strong>Population:</strong> {item.population}
                </li>
                <li>
                  <strong>Region:</strong> {item.region}
                </li>
                <li>
                  <strong>Capital:</strong> {item.capital}
                </li>
              </ul>
            </div>
            <div className="card-footer">
              <button>More Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OneCountry

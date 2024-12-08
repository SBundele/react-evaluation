import React, { useContext, useEffect, useState } from 'react'
import { CountryName } from '../../App'

function OneCountry() {
  const [country, setCountry] = useState([])
  const {name} = useContext(CountryName)

  const fetchCountry = async () => {
    let response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    let res = await response.json()
    console.log(res)
    setCountry(res)
  }
  
  useEffect(() => {
    fetchCountry()
  }, [name])

  return (
    <section className="one-country">
      <div className="country-container one-country-container">
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
                <li>
                  <strong>Native Name:</strong> {item.subregion}
                </li>
                <li>
                  <strong>Currency Name:</strong>{" "}
                  {JSON.stringify(item.currencies)}
                </li>
                <li>
                  <strong>Language Name:</strong>{" "}
                  {JSON.stringify(item.languages)}
                </li>
                <li>
                  <strong>Language Name:</strong>{" "}
                  {JSON.stringify(item.languages)}
                </li>
                <li>
                  <strong>Border Name:</strong> {JSON.stringify(item.borders)}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OneCountry

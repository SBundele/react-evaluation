import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { CountryName } from "../../App";
import { useNavigate } from "react-router-dom";

function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setName } = useContext(CountryName);
  const navigate = useNavigate()

  const handleClick = (country_name) => {
    setName(country_name);
    console.log("clicked");
    navigate("/name");
  };

  const fetchCountries = async () => {
    setLoading(true);
    try {
      let response = await fetch("https://restcountries.com/v3.1/all");

      let res = await response.json();
      console.log(res);
      setCountries(res);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setCountries(["Some Error Occurred"]);
    }
  };


  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <section className="country-section">
      <div className="country-container">
        {loading && <h1>Loading...</h1>}
        {countries.map((country) => {
          return (
            <div className="card" key={country.name.common}>
              <div className="card-img">
                <img src={country.flags.png} alt="country-flag" />
              </div>
              <div className="card-body">
                <h2>{country.name.common}</h2>
                <ul>
                  <li>
                    <strong>Population:</strong> {country.population}
                  </li>
                  <li>
                    <strong>Region:</strong> {country.region}
                  </li>
                  <li>
                    <strong>Capital:</strong> {country.capital}
                  </li>
                </ul>
              </div>
              <div className="card-footer">
                <button onClick={() => handleClick(country.name.common)}>More Details</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Home;

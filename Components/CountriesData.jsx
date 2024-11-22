import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import ShimmerEffect from "./ShimmerEffect";
import './CountryDetail.css'

export default function CountriesData(props) {
  const [countriesData, setcountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((dataTransfer) => {
        setcountriesData(dataTransfer);
      });
  }, []); 

  if (countriesData.length === 0) {
    return  <ShimmerEffect />
  }
  return (
    <> 
        <div className="countries-container">
          {countriesData
            .filter((country) =>
              country.name.common.toLowerCase().includes(props.query)  ||  country.region.toLowerCase().includes(props.query)
             )
            .map((country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  name={country.name.common}
                  flag={country.flags.svg}
                  population={country.population.toLocaleString("en-IN")}
                  region={country.region}
                  capital={country.capital}
                  data={country}
                />
              );
            })}
        </div>
     
    </>
  );
}

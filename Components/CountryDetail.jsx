import './CountryDetail.css'
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import CountryShimmerEffect from "./CountryShimmerEffect";

export default function CountryDetail() {
  const params = useParams();
  const location = useLocation();
  const locationName = location.state;
  const countryName = params.country;

  const [countryData, setCountryData] = useState([])
  const [errorFound, setErrorFound] = useState(false)

  function updateCountryData(data){
    setCountryData({
      flag: data.flags.svg,
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population,
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital.join(', '),
      domain: data.tld.join(', '),
      currencies: Object.values(data.currencies).map((currency) => currency.name).join(', '),
      languages: Object.values(data.languages).join(', '),
      borders: []
    })

    if (!(data.borders)) {
      data.borders = []
    }

   Promise.all(data.borders.map((border) => {
    return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
    .then((res) => res.json())
    .then(([borderCountry]) =>
      borderCountry.name.common)
   })).then((borders) =>{
     setTimeout(() => {
      setCountryData((prevState) => ({...prevState, borders}))
     }, );
    })
    
  }
  
  useEffect(() =>{

   if (locationName) {
    updateCountryData(locationName)
    return
   }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.json())
     .then(([data])=>{
    updateCountryData(data);
      
     })
    .catch(error => {  
     setErrorFound(true)
      })
   }, [countryName])
  
   if(errorFound){
    return <h1>Country Not Found</h1>
   }
  return (
    <>
    
   {
    countryData.length === 0 ? <CountryShimmerEffect /> : <main>
        <div className="country-details-container">
          <span className="back-button" onClick={() => history.back()}> 
            <i className="fa-solid fa-arrow-left-long"></i> &nbsp;Back
          </span>
          <div className="country-details">
            <img src={countryData.flag} />
            <div className="details-text-container">
              <h1>{countryData.name}</h1>
              <div className="details-text">
                <p>
                  <b> Native Name: </b>&nbsp;
                  <span className="native-name"> {countryData.nativeName} </span>
                </p>
                <p>
                  <b> Population: </b> <span className="population">{countryData.population.toLocaleString('en-IN')}</span>
                </p>
                <p>
                  <b> Region:</b> <span className="region">{ countryData.region}</span>
                </p>
                <p>
                  <b> Sub Region:</b> <span className="sub-region">{countryData.subRegion}</span>
                </p>
                <p>
                  <b> Capital:</b> <span className="capital">{countryData.capital}</span>
                </p>
                <p>
                  <b> Top Level Domain:</b> <span className="domian">{countryData.domain}</span>
                </p>
                <p>
                  <b> Currencies:</b> <span className="currencies">{countryData.currencies}</span>
                </p>
                <p>
                  <b> Languages:</b>
                  <span className="languages"> {countryData.languages}</span>
                </p>
              </div>
              {countryData.borders.length !==0 && <div className="border-countries">
                <b> Border Countries :</b> &nbsp;
                {countryData.borders.map((border) => <Link key={border} to={`/${border}`}>{border}</Link>)}
              </div>}
            </div>
          </div>
        </div>
      </main>
}
    </>
  );
}

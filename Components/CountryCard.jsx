import React from 'react';
import { Link } from 'react-router-dom';


export default function CountryCard(props) {
  return (
    <>
    <Link className="countries-card" to={`/${props.name}`} state={props.data}>
                  <img src={props.flag}/>
                   <div className="card-text" >
                    <h3 className="card-title">{props.name}</h3>
                    <p><b>Population:</b> {props.population}</p>
                    <p><b>Region:</b> {props.region}</p>
                    <p><b>Capital:</b> {props.capital}</p>
                  </div>
        </Link>
    </>
    );
}

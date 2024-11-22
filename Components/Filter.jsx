import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Filter(props) {
  // const params = useParams();
  // const regionName = params.region

  // fetch(`https://restcountries.com/v3.1/region/${regionName}`)
  // .then((res) => res.json())
  // .then((data) => {
  //   props.setFilter(data)
  // })
  return (
    <>
       <select className="filter-by-region" onChange={(e) => {
         props.setQuery(e.target.value.toLowerCase())
       }}>
          <option value="region" hidden>Filter by region</option>
          <option value="africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
    </>
  );
}

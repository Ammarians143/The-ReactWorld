import React, { useEffect, useState } from 'react';
import Search from './Search';
import Filter from './Filter';
import CountriesData from './CountriesData';
import '../style.css';

export default function Home() {
    const [query , setQuery] = useState('');
  
  return (
    <>
     <div className="search-filter-container">
    <Search setQuery={setQuery} />
    <Filter  setQuery={setQuery}/> 
    </div>
    <main>
    <CountriesData  query={query} />
    </main>
    </>
  );
}

import React from "react";

export default function Search(props) {
  return (
    <>
      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search for a country...."
          onChange={(e) => props.setQuery(e.target.value.toLowerCase())}
        />
      </div>
    </>
  );
}
